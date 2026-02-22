import { NextRequest, NextResponse } from 'next/server'

import sharp from 'sharp'

export async function POST(request: NextRequest) {
  try {
    const { url } = (await request.json()) as { url: string[] }

    if (!url) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const response = await Promise.all(
      url.map(async imgUrl => {
        const res = await fetch(imgUrl)

        return res
      })
    )

    const buffer = response.map(async res => {
      const buffer = await res.arrayBuffer()

      return buffer
    })

    // Convert TIFF to WebP
    const imgBase64 = buffer.map(async buf => {
      const outputBuffer = await sharp(await buf)
        .webp({ quality: 30 })
        .toBuffer()

      const imgBase64 = `data:image/webp;base64,${outputBuffer.toString('base64')}`

      return imgBase64
    })

    const img = await Promise.all(imgBase64)

    return NextResponse.json(img, { status: 200 })
  } catch (error) {
    console.error('Error converting file:', error)

    return NextResponse.json({ error: 'Error converting file' }, { status: 500 })
  }
}
