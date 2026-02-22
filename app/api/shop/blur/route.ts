import { NextRequest, NextResponse } from 'next/server'

import sharp from 'sharp'

const generateBlurDataURL = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl)

    const buffer = await (response as Response & { buffer: () => Promise<Buffer> }).arrayBuffer()

    const blurredImage = await sharp(buffer)
      .resize(100, 100) // Adjust dimensions as needed
      .blur(1) // Adjust blur radius as needed
      .toFormat('webp') // Or other desired format
      .toBuffer()

    return `data:image/webp;base64,${blurredImage.toString('base64')}`
  } catch (error) {
    console.error('Error generating blurDataURL:', error)

    return null
  }
}

export async function POST(request: NextRequest) {
  const { imageUrl } = await request.json()

  if (!imageUrl) {
    return NextResponse.json({ error: 'Invalid image URL' }, { status: 400 })
  }

  const blurDataURL = await generateBlurDataURL(imageUrl)

  // console.log('call blur')

  if (!blurDataURL) {
    return NextResponse.json({ error: 'Error generating blur data URL' }, { status: 500 })
  }

  return NextResponse.json({ blurDataURL })
}
