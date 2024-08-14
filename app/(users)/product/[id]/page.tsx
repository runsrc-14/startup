import { Suspense } from 'react'

import { notFound } from 'next/navigation'

import { Metadata } from 'next'

import { Gallery } from '../../../components/product/gallery'

import { ProductDescription } from '../../../components/product/product-description'

// import addBlurredDataUrls from '../../../utils/getLocalBase64'

type Props = { params: { id: string } }

const getProductDetails = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {})

  return response.json()
}

const generateBlurDataURL = async ({ url }: { url: string }) => {
  const response = await fetch(`${process.env.BASE_URL}/api/shop/blur`, {
    method: 'POST',
    body: JSON.stringify({ imageUrl: url })
  })

  const res = await response.json()

  return res.blurDataURL
}

const convertImgToWebp = async ({ url }: { url: string[] }) => {
  const response = await fetch('https://1461-83-118-76-194.ngrok-free.app/api/shop/webp', {
    method: 'POST',
    body: JSON.stringify({ url: url })
  })

  const res = await response.json()

  return res
}

const ImageShow = async ({ product }: { product: Product }) => {
  const imgBlur: string = await generateBlurDataURL({ url: product.thumbnail })

  return (
    <Gallery
      images={product.images.map((image: string) => ({
        src: image,
        altText: ''
      }))}
      blurDataURL={imgBlur}
    />
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductDetails(params.id)

  if (!product.id) return notFound()

  const url = product.images[0]

  return {
    title: product.title,
    description: product.description || product.description,
    openGraph: url
      ? {
          images: [
            {
              url,
              width: 100,
              height: 100,
              alt: product.description
            }
          ]
        }
      : null
  }
}

export default async function PageProduct({ params }: Props) {
  const product: Product = await getProductDetails(params.id)

  if (!product.id) return notFound()

  return (
    <div className='mx-auto max-w-screen-2xl px-4'>
      <div className='flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black'>
        <div className='h-full w-full basis-full lg:basis-4/6'>
          <Suspense fallback={<div className='animate-pulse h-[550px] bg-neutral-900 rounded-lg' />}>
            <ImageShow product={product} />
          </Suspense>
        </div>

        <div className='basis-full lg:basis-2/6'>{<ProductDescription product={product} />}</div>
      </div>
      {/* <RelatedProducts id={product.id} /> */}
    </div>
  )
}
