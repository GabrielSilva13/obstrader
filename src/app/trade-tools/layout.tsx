'use client'

import { ADComponent } from '@/components/ADComponent'
import { MainTradeForm } from '@/components/MainTradeTools/MainTradeForm'
import { TradeTools } from '@/components/MainTradeTools/TradeTools'
import { TrendIndicator } from '@/components/MainTradeTools/TrendIndicator'
import useMobileMediaQuery from '@/utils/useMobileMediaQuery'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const TradeToolsLayout = ({ children }: { children: ReactNode }) => {
  const isMobile = useMobileMediaQuery()
  return (
    <div className="container px-4 mt-52 flex flex-col gap-8">
      <ADComponent />
      <QueryClientProvider client={queryClient}>
        <main className="flex items-start gap-8">
          <TradeTools />
          <MainTradeForm />

          <TrendIndicator />
        </main>
      </QueryClientProvider>

      <ADComponent
        maxWidth={423}
        isOnTheRight={!isMobile}
        isOnTheCenter={isMobile}
      />
      <ADComponent
        maxWidth={423}
        isOnTheRight={!isMobile}
        isOnTheCenter={isMobile}
      />
    </div>
  )
}

export default TradeToolsLayout
