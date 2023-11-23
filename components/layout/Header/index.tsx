'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/elements/Section'
import { Text } from '@/components/elements/Texts'

export const Header = () => {
  const [scrollTopDistance, setScrollTopDistance] = useState(0)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const distance = window.pageYOffset
      setScrollTopDistance(distance)
    }
    window.addEventListener('scroll', handleScroll)

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpenMobileMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Section
      asTag="header"
      className={`fixed w-full h-[80px] lg:h-[88px] flex items-center z-50 transition-all ${
        (scrollTopDistance > 150 || isOpenMobileMenu) &&
        'bg-grayscale-700 backdrop-blur-lg bg-opacity-60'
      }`}
    >
      <div className="hidden md:block">
        <div className="pt-4 md:pt-0 flex items-center lg:items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="relative w-[107px] h-[27px] lg:w-36 lg:h-12"
            >
              <Image
                fill
                alt="Routeasy"
                src="/images/logos/routeasy.svg"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/">
              <Text className="text-base lg:text-[18px]/[24px] flex items-center ml-4 lg:ml-8 border-l-[1px] border-purplescale-300 pl-4 h-12">
                Central de ajuda
              </Text>
            </Link>
          </div>

          <div>
            <Link
              href="https://routeasy.zendesk.com//login"
              className="ml-10 text-greenscale-100 hover:text-white border-[1px] rounded border-greenscale-100 hover:border-none hover:bg-greenscale-100 transition-all h-12 lg:h-10 w-[85px] flex items-center justify-center"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="md:pt-4 lg:pt-0 flex items-center lg:items-center justify-between">
          <Link
            href="/"
            className="relative w-[107px] h-[27px] lg:w-36 lg:h-12"
          >
            <Image
              fill
              alt="Routeasy"
              src="/images/logos/routeasy.svg"
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <Link href="/">
            <Text className="text-sm lg:text-[18px]/[24px] flex items-center ml-4 lg:ml-8 border-l-[1px] border-purplescale-300 pl-4 h-12">
              Central de ajuda
            </Text>
          </Link>

          <Link
            href="https://routeasy.zendesk.com//login"
            className="ml-10 text-greenscale-100 hover:text-white border-[1px] rounded border-greenscale-100 hover:border-none hover:bg-greenscale-100 transition-all h-12 lg:h-10 w-[85px] flex items-center justify-center"
          >
            Login
          </Link>
        </div>
      </div>
    </Section>
  )
}
