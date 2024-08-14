import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { user_name, password } = await request.json()

  const res = await fetch('http://localhost:4000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_name: user_name,
      password: password
    })
  })

  if (res.status !== 200) {
    return NextResponse.error()
  }

  const data: Users = await res.json()
  const cookieStore = cookies()

  cookieStore.set('authToken', data.token)

  return NextResponse.json(data, { status: 200 })
}

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')

  if (!token) {
    console.log('No token found')

    return NextResponse.json({}, { status: 401 })
  }

  return NextResponse.json({ token: token.value }, { status: 200 })
}
