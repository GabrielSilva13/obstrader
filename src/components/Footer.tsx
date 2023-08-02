'use client'

import { BrokersLinks, InfoLinks, ToolLinks } from '@/const'
import useMobileMediaQuery from '@/utils/useMobileMediaQuery'
import Image from 'next/image'
import Link from 'next/link'

interface Links {
  href: string
  title: string
}

type FooterLinksProps = {
  listTitle: string
  links: Links[]
}

const FooterLinks = ({ links, listTitle }: FooterLinksProps) => (
  <div className="flex flex-col gap-4">
    <strong className="text-primary text-base font-semibold tracking-wide">
      {listTitle}
    </strong>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.title} className="text-secondary text-sm tracking-wide">
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = () => {
  const isMobile = useMobileMediaQuery()
  function getCurrentYear(): number {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return currentYear
  }
  return (
    <footer className="bg-[#FAFAFA] w-full py-32 mt-20">
      <div className="container px-4">
        <div className="flex xl:flex-row flex-col-reverse gap-44">
          <div>
            <Image
              src="/footer-logo.svg"
              alt=""
              width={isMobile ? 200 : 312}
              height={100}
            />
            <p className="text-dark-bluish-gray mt-7 text-base tracking-wide">
              Ferramentas para o mercado de opções binárias.
            </p>
          </div>

          <div className="grid grid-cols-2 mx-auto xl:grid-cols-3 xl:gap-28 gap-14">
            <FooterLinks links={ToolLinks} listTitle="Ferramentas" />
            <FooterLinks links={BrokersLinks} listTitle="Corretoras" />
            <FooterLinks links={InfoLinks} listTitle="Informação" />
          </div>
        </div>

        <div className="flex xl:flex-row flex-col items-center gap-24 mt-20 mb-7">
          <div className="w-full bg-gray-200 h-[1px]" />
          <Image
            role="button"
            src="/telegram-logo.svg"
            alt=""
            width={128}
            height={28}
            onClick={() => window.open('https://t.me/obtraders', '_blank')}
          />
        </div>

        <span className="text-gray-900 block text-base xl:text-left text-center">
          © {getCurrentYear()} Obtraders. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
