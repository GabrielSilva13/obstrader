'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDown, List } from 'phosphor-react'

import { DesktopHeaderTradeTools } from './DesktopHeaderTradeTools'
import useMobileMediaQuery from '@/utils/useMobileMediaQuery'
import { MainTradeToolsMobileNav } from './MainTradeToolsMobileNav'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [isToolOpen, setIsToolOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobileMediaQuery()

  return (
    <header className="bg-black w-full h-24 fixed top-0 left-0 right-0 z-10">
      <div className="py-7 flex items-center gap-7 px-4 container">
        {isMobile && (
          <>
            <List
              role="button"
              size={33}
              color="#FAA61A"
              onClick={() => setIsOpen(!isOpen)}
            />
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
        <Image
          src="/logo.svg"
          alt="logo"
          width={isMobile ? 200 : 312}
          height={100}
          priority
        />
      </div>

      <nav
        className={`relative shadow-lg bg-white w-full h-12 ${
          isMobile ? 'pb-12 pt-10' : 'py-2'
        } -mt-3`}
      >
        <div className="container px-4 flex items-center gap-20">
          {isMobile ? (
            <MainTradeToolsMobileNav />
          ) : (
            <div className="mt-2 flex items-center gap-7">
              <Link className="text-secondary font-medium text-base" href="/">
                Home
              </Link>

              <span
                className="flex items-center gap-1 text-primary text-base
            relative after:absolute after:h-[6px] after:w-full after:max-w-[148px] 
            after:bg-orange-250 after:pointer-events-none after:-bottom-2 after:left-0
          "
                onMouseEnter={() => setIsToolOpen(true)}
                onMouseLeave={() => setIsToolOpen(false)}
              >
                Ferramentas <CaretDown size={20} weight="bold" />
                {isToolOpen && (
                  <DesktopHeaderTradeTools setIsToolOpen={setIsToolOpen} />
                )}
              </span>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
