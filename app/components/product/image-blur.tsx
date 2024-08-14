import React from 'react'

type Props = {
  className?: string
  fill?: boolean
  sizes?: string
  alt?: string
  src: string
  priority?: boolean
}

export default async function ImageBlur({ ...props }: Props) {
  return <div>image-blur</div>
}
