import React from 'react'

export default function loading() {
  return (
    <div className='mx-auto max-w-screen-2xl px-4 border border-neutral-800 bg-black'>
      <div className='flex flex-col rounded-lg p-8 md:p-12 lg:flex-row lg:gap-8'>
        <div className='w-full basis-full lg:basis-4/6 flex flex-col items-center justify-center'>
          <div className='h-[34.375rem] w-full animate-pulse bg-neutral-900'></div>
          <div className='my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0'>
            {Array(3)
              .fill(0)
              .map((_, index) => {
                return <div key={index} className='h-20 w-20 animate-pulse bg-neutral-900 rounded-lg' />
              })}
          </div>
        </div>
        <div className='h-[28vh] basis-full lg:basis-2/6 animate-pulse bg-neutral-900'></div>
      </div>
    </div>
  )
}
