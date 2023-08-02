import { TrendIndicatorTab } from './TrendIndicatorTab'

export const TrendIndicator = () => {
  return (
    <div className="w-full hidden xl:block max-w-[423px] bg-white h-fit text-center sticky top-40 border border-border-color p-8 rounded">
      <strong className="text-primary text-base font-semibold tracking-wide">
        Indicador de Tendência
      </strong>

      <TrendIndicatorTab />

      <span className="text-primary text-xs block text-right mt-4 tracking-wide">
        Última atualização: <time>21:50:03</time>
      </span>
    </div>
  )
}
