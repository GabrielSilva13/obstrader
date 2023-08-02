'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TradeToolsLinkProps = {
  linkPathName: string
  linkText: string
  pathName: string
}

const baseLink = '/trade-tools'

const TradeToolsLink = ({
  linkText,
  linkPathName,
  pathName,
}: TradeToolsLinkProps) => (
  <Link
    className={`text-secondary w-fit text-base relative ${
      pathName === linkPathName
        ? 'font-semibold text-primary after:absolute after:left-0 after:-bottom-[30px] after:h-[6px] after:w-[110%] after:bg-orange-250'
        : 'font-normal'
    }`}
    href={linkPathName}
  >
    {linkText}
  </Link>
)

export const MainTradeToolsMobileNav = () => {
  const pathName = usePathname()

  const [sliderRef] = useKeenSlider({
    mode: 'free',
    slides: {
      perView: 1.7,
      number: 6,
      spacing: 50,
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide h-14">
        <TradeToolsLink
          linkPathName={`${baseLink}/catalogador-de-sinais`}
          linkText="Catalogador"
          pathName={pathName}
        />
      </div>
      <div className="keen-slider__slide">
        <TradeToolsLink
          linkPathName="1"
          linkText="Catalogador / Confluência"
          pathName={pathName}
        />
      </div>
      <div className="keen-slider__slide">
        <TradeToolsLink
          linkPathName="1"
          linkText="Checklist"
          pathName={pathName}
        />
      </div>

      <div className="keen-slider__slide">
        <TradeToolsLink
          linkPathName="1"
          linkText="Backtest"
          pathName={pathName}
        />
      </div>

      <div className="keen-slider__slide">
        <TradeToolsLink
          linkPathName="1"
          linkText="Calendário Econômico"
          pathName={pathName}
        />
      </div>

      <div className="keen-slider__slide">
        <TradeToolsLink
          linkPathName="catalogador-de-sinais"
          linkText="Trader Time Zone"
          pathName={pathName}
        />
      </div>
    </div>
  )
}
