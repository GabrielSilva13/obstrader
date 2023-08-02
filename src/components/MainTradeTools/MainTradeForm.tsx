import SignalCatalogerPage from '@/app/trade-tools/catalogador-de-sinais/page'

import { MainTradeTab } from './MainTradeTab'

export const MainTradeForm = () => {
  return (
    <div className="relative flex flex-col gap-10 w-full">
      <div className="flex w-full mx-auto max-w-[664px] h-fit flex-col border border-border-color rounded p-12">
        <strong className="text-primary text-base font-semibold tracking-wide">
          Catalogador De Sinais
        </strong>
        <span className="text-secondary text-sm font-medium my-4 tracking-wide">
          Preencha os campos abaixo
        </span>
        <SignalCatalogerPage />
      </div>
      <MainTradeTab />
    </div>
  )
}
