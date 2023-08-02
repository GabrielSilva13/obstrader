'use client'

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
    className={`text-secondary w-fit text-base relative tracking-wide ${
      pathName === linkPathName
        ? 'font-semibold after:absolute after:-left-8 after:-top-[14px] after:h-[52px] after:w-[6px] after:bg-orange-250'
        : 'font-normal'
    }`}
    href={linkPathName}
  >
    {linkText}
  </Link>
)

export const TradeTools = () => {
  const pathName = usePathname()

  return (
    <div className="w-full xl:block hidden max-w-md h-fit sticky top-40 border bg-white border-border-color p-8 rounded">
      <strong className="text-primary text-base font-semibold tracking-wide">
        Ir para
      </strong>

      <div className="w-full max-w-[343px] h-[1px] bg-gray-900 mt-8 mb-11" />
      <nav>
        <ul className="flex flex-col gap-8">
          <TradeToolsLink
            linkPathName={`${baseLink}/catalogador-de-sinais`}
            linkText="Catalogador De Sinais"
            pathName={pathName}
          />

          <TradeToolsLink
            linkPathName="/test"
            linkText="Catalogador De Confluência"
            pathName={pathName}
          />

          <TradeToolsLink
            linkPathName="/2"
            linkText="Checklist"
            pathName={pathName}
          />

          <TradeToolsLink
            linkPathName="/3"
            linkText="Backtest"
            pathName={pathName}
          />

          <TradeToolsLink
            linkPathName="/3"
            linkText="Calendário Econômico"
            pathName={pathName}
          />

          <TradeToolsLink
            linkPathName="/3"
            linkText="Trader Time Zone"
            pathName={pathName}
          />
        </ul>
      </nav>
    </div>
  )
}
