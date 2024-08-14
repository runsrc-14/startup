'use client'
type Props = {}

export default function page({}: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user_name = e.currentTarget.user_name.value
    const password = e.currentTarget.password.value

    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: user_name,
        password: password
      })
    })

    const data: Users = await res.json()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='user_name'>User Name:</label>
        <input type='text' id='user_name' name='user_name' className='text-black' />
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' className='text-black' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
