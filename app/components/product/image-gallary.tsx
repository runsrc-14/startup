import React from 'react'

type Props = {}

export default function ImageGallery({ ...props }) {
  return (
    <div className='absolute bottom-[15%] flex w-full justify-center'>
      <div className='mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80'>
        <div
          aria-label='Previous product image'
          onClick={() => props.setIdxImage(props.previousImageIndex)}
          className={props.buttonClassName}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18' />
          </svg>
        </div>
        <div className='mx-1 h-6 w-px bg-neutral-500'></div>
        <div
          aria-label='Next product image'
          onClick={() => props.setIdxImage(props.nextImageIndex)}
          className={props.buttonClassName}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
          </svg>
        </div>
      </div>
    </div>
  )
}
