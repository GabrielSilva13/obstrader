import Link from 'next/link'
import { usePathname } from 'next/navigation'

type DesktopTradeToolsLinkProps = {
  linkPathName: string
  linkText: string
  pathName: string
}

type DesktopTradeToolsProps = {
  setIsToolOpen: (value: boolean) => void
}

const baseLink = '/trade-tools'

const DesktopTradeToolsLink = ({
  linkText,
  linkPathName,
  pathName,
}: DesktopTradeToolsLinkProps) => (
  <Link
    className={`text-secondary w-fit text-base tracking-wide relative ${
      pathName === linkPathName
        ? 'font-semibold text-primary after:absolute after:-left-8 after:-top-[14px] after:h-[52px] after:w-[6px] after:bg-orange-250'
        : 'font-normal'
    }`}
    href={linkPathName}
  >
    {linkText}
  </Link>
)

export const DesktopHeaderTradeTools = ({
  setIsToolOpen,
}: DesktopTradeToolsProps) => {
  const pathName = usePathname()
  return (
    <div
      className="absolute w-full bg-white shadow-lg p-8 min-w-[390px] top-5 z-20 rounded"
      onMouseLeave={() => setIsToolOpen(false)}
    >
      <strong className="text-primary text-base font-semibold tracking-wide">
        Ir para
      </strong>

      <div className="w-full max-w-[343px] h-[1px] bg-gray-900 mt-8 mb-11" />
      <nav>
        <ul className="flex flex-col gap-8">
          <DesktopTradeToolsLink
            linkPathName={`${baseLink}/catalogador-de-sinais`}
            linkText="Catalogador De Sinais"
            pathName={pathName}
          />

          <DesktopTradeToolsLink
            linkPathName="/1"
            linkText="Catalogador De Confluência"
            pathName={pathName}
          />

          <DesktopTradeToolsLink
            linkPathName="/2"
            linkText="Checklist"
            pathName={pathName}
          />

          <DesktopTradeToolsLink
            linkPathName="/3"
            linkText="Backtest"
            pathName={pathName}
          />

          <DesktopTradeToolsLink
            linkPathName="/3"
            linkText="Calendário Econômico"
            pathName={pathName}
          />

          <DesktopTradeToolsLink
            linkPathName="/3"
            linkText="Trader Time Zone"
            pathName={pathName}
          />
        </ul>
      </nav>
    </div>
  )
}
