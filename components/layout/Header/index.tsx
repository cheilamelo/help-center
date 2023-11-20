"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Section } from '@/components/elements/Section'

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
        className={`fixed w-full h-[96px] lg:h-[88px] flex items-center z-50 transition-all ${
            (scrollTopDistance > 150 || isOpenMobileMenu) &&
            'bg-grayscale-700 backdrop-blur-lg bg-opacity-60'
        }`}
        >
            <div className="md:pt-4 lg:pt-0 flex items-center lg:items-center justify-between">
                <Link href="/" className="relative w-36 h-12">
                <Image
                    fill
                    alt="Routeasy"
                    src="/images/logos/routeasy.svg"
                    style={{ objectFit: 'contain' }}
                />
                </Link>
                <div>
                    <Link 
                        href="https://routeasy.zendesk.com//login" 
                        className="ml-10 text-primary-100 hover:text-primary-200 border-[1px] rounded border-primary-100 hover:border-primary-200 transition-all h-12 w-36 flex items-center justify-center"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </Section>
    )
}