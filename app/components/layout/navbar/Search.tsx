'use client'
import { useEffect, useState } from 'react'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'

import { createUrl } from '../../../lib/utils'

type Props = {}

const searchProduct = async (query: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)

  const res = await response.json()

  return res
}

export default function Search({}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [isShowSearch, setShowSearch] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const val = e.target as HTMLFormElement

    const search = val.search as HTMLInputElement
    const newParams = new URLSearchParams(searchParams.toString())

    if (search.value) {
      newParams.set('q', search.value)
    } else {
      newParams.delete('q')
    }

    router.push(createUrl('/search', newParams))
  }

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target as HTMLInputElement
    const newParams = new URLSearchParams(searchParams.toString())

    searchProduct(val.value)

    // if (pathname.startsWith("/product")) {
    //   setShowSearch(true);

    //   return;
    // } else {
    //   if (val.value) {
    //     newParams.set("q", val.value);
    //   } else {
    //     newParams.delete("q");
    //     router.push(createUrl("/search", newParams));
    //   }
    // }
  }

  useEffect(() => {
    // close search show when click outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element

      if (!target.closest('.search-input')) {
        setShowSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative'>
      <form onSubmit={onSubmit} className='search-input w-max-[550px] relative w-full lg:w-80 xl:w-full'>
        <input
          key={searchParams?.get('q')}
          defaultValue={searchParams?.get('q') || ''}
          onChange={e => {
            onSearchChange(e)
          }}
          placeholder='Search for products...'
          autoComplete='off'
          autoFocus
          className='w-full rounded-lg border px-4 py-2 text-sm border-neutral-800 bg-transparent text-white placeholder:text-neutral-400 focus:outline-neutral-700 focus:outline-none'
          type='text'
          name='search'
        />
        <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            aria-hidden='true'
            data-slot='icon'
            className='h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            ></path>
          </svg>
        </div>
      </form>
      {pathname.startsWith('/product') && isShowSearch && (
        <ul className='search-bar border  text-gray-100 border-neutral-800 bg-neutral-900 absolute top-full z-20 mt-2 overflow-auto overscroll-contain rounded-xl py-2.5 shadow-xl max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)] md:max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)] inset-x-0 ltr:md:left-auto rtl:md:right-auto contrast-more:border  contrast-more:border-gray-50 w-full min-h-[100px]'>
          <li className='mx-2.5 break-words rounded-md contrast-more:border text-gray-800 contrast-more:border-transparent dark:text-gray-300'>
            <Link
              className='block scroll-m-12 px-2.5 py-2 rounded-md hover:bg-blue-600 hover:bg-opacity-10 hover:text-blue-500'
              href='/product/acme-dog-sweater'
            >
              <div className='text-base font-semibold leading-5'>Product Name</div>
              <div className='excerpt mt-1 line-clamp-2 text-sm leading-[1.35rem] text-gray-600 dark:text-gray-400 contrast-more:dark:text-gray-50'>
                Description
              </div>
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export function SearchSkeleton() {
  return (
    <form className='w-max-[550px] relative w-full lg:w-80 xl:w-full'>
      <input
        placeholder='Search for products...'
        className='w-full rounded-lg border bg-white px-4 py-2 text-sm border-neutral-800 bg-transparent text-white placeholder:text-neutral-400'
      />
      <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          aria-hidden='true'
          data-slot='icon'
          className='h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          ></path>
        </svg>
      </div>
    </form>
  )
}
