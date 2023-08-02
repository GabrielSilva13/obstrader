'use client'

import {
  MainTradeSelect,
  MainTradeTextInput,
} from '@/components/MainTradeTools/MainTradeInput'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { MultiSelectChip } from '@/components/MainTradeTools/MultiSelectChip'
import {
  CurrencyPairs,
  Directions,
  MartingaleValues,
  SignalsFor,
  TimeframeValues,
  UTCValues,
} from '@/const'

import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/services/api'

interface MainTradeInputProps {
  UTCValue: string
  signalsFor: string
  currencyPairs: string
  direction: string
  timeframe: string
  assertively: string
  catalogationDays: string
  martingale: string
}

const schema = z.object({
  UTCValue: z.string().min(1, { message: 'Escolha uma timezone' }),
  signalsFor: z.string().min(1, { message: 'Escolha para quando é o sinal' }),
  currencyPairs: z.any(),
  direction: z.string().min(1, { message: 'Escolha a direção' }),
  timeframe: z.string().min(1, { message: 'Escolha o período' }),
  assertively: z
    .string()
    .min(1, { message: 'Escolha a porcentagem de assertividade' }),
  catalogationDays: z
    .string()
    .min(1, { message: 'Escolha a quantidade de dias' })
    .max(60, { message: 'Máximo de 60 dias' }),
  martingale: z.string().min(1, { message: 'Escolha o martingale' }),
})

type SignalCatalogerProps = z.infer<typeof schema>

const SignalCatalogerPage = () => {
  const [values, setValues] = useState<MainTradeInputProps>({
    UTCValue: '',
    signalsFor: '',
    currencyPairs: '',
    direction: '',
    timeframe: '',
    assertively: '',
    catalogationDays: '',
    martingale: '',
  })
  const [showMultiSelectedValue, setShowMultiSelectedValue] = useState<
    string[]
  >([])
  const [showSingleSelectedValue, setShowSingleSelectedValue] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignalCatalogerProps>({
    resolver: zodResolver(schema),
  })

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const removeItemFromMultiSelect = (selectItem: string) => {
    setShowMultiSelectedValue(
      showMultiSelectedValue.filter((item) => item !== selectItem),
    )
    console.log(selectItem)
  }

  const isCryptocurrency = (value: string) => {
    return value.includes('/USD')
  }

  console.log(values.timeframe)

  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: SignalCatalogerProps) => {
      const {
        UTCValue,
        signalsFor,
        currencyPairs,
        direction,
        timeframe,
        assertively,
        catalogationDays,
        martingale,
      } = data

      const formattedTimeFrame = timeframe.match(/\d+/)[0]!

      const response = await api.post('/catalog', {
        timezone: UTCValue,
        pairs: currencyPairs,
      })
    },
    retry: false,
  })

  const handleFetchData: SubmitHandler<SignalCatalogerProps> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    setShowMultiSelectedValue((prevState) => {
      if (
        showSingleSelectedValue === 'Todos os ativos' ||
        showSingleSelectedValue === 'Todos os ativos OTC'
      ) {
        // If selecting 'Todos os ativos' or 'Todos os ativos OTC', clear the array and set the selected option
        return [showSingleSelectedValue]
      } else if (isCryptocurrency(showSingleSelectedValue)) {
        // If selecting any cryptocurrency like "BTC/USD", "ETH/USD", "LTC/USD", add it to the array along with "All Assets" or "All OTC Assets"
        return [
          ...prevState.filter((item) => !isCryptocurrency(item)),
          showSingleSelectedValue,
        ]
      } else {
        // For other options, keep the selected values in the array, and remove 'All Assets' and 'All OTC Assets'
        const updatedArray = prevState.filter(
          (item) =>
            !isCryptocurrency(item) &&
            item !== 'Todos os ativos' &&
            item !== 'Todos os ativos OTC',
        )
        return updatedArray.includes(showSingleSelectedValue)
          ? updatedArray.filter((item) => item !== showSingleSelectedValue)
          : [...updatedArray, showSingleSelectedValue]
      }
    })
  }, [showSingleSelectedValue])

  return (
    <form
      className="flex flex-col gap-4 mt-"
      onSubmit={handleSubmit(handleFetchData)}
    >
      <MainTradeSelect
        className={errors.UTCValue ? 'ring ring-red-400 rounded' : ''}
        labelText="Timezone"
        isSelect
        selectValues={UTCValues}
        value={values.UTCValue}
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        required
        {...register('UTCValue')}
      />

      <MainTradeSelect
        className={errors.signalsFor ? 'ring ring-red-400 rounded' : ''}
        labelText="Sinais para:"
        isSelect
        selectValues={SignalsFor}
        value={values.signalsFor}
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        {...register('signalsFor')}
        required
      />

      <MainTradeSelect
        className={errors.signalsFor ? 'ring ring-red-400 rounded' : ''}
        labelText="Ativos"
        isSelect
        hasSubGroups
        selectValues={CurrencyPairs}
        value={showSingleSelectedValue}
        handleChange={(e) => setShowSingleSelectedValue(e.target.value)}
        {...register('currencyPairs')}
        required
      />
      <div className="flex flex-wrap gap-2 flex-row mt-2">
        {showMultiSelectedValue
          .filter((value) => value !== '')
          .map((value, index) => (
            <div key={index + 1}>
              <MultiSelectChip
                value={value}
                handleRemoveItemFromMultiSelect={() =>
                  removeItemFromMultiSelect(value)
                }
              />
            </div>
          ))}
      </div>

      <MainTradeSelect
        className={errors.direction ? 'ring ring-red-400 rounded' : ''}
        labelText="Direção"
        isSelect
        selectValues={Directions}
        value={values.direction}
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        {...register('direction')}
        required
      />

      <MainTradeSelect
        className={errors.timeframe ? 'ring ring-red-400 rounded' : ''}
        labelText="Timeframe"
        isSelect
        selectValues={TimeframeValues}
        value={values.timeframe}
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        {...register('timeframe')}
        required
      />

      <MainTradeTextInput
        className={errors.assertively ? 'ring ring-red-400 rounded' : ''}
        labelText="Assertividade"
        isSelect={false}
        placeholderText="%"
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        {...register('assertively')}
        required
      />
      {errors.assertively && (
        <p className="text-xs italic text-red-400 my-3">{`${errors.assertively.message}`}</p>
      )}

      <MainTradeTextInput
        className={errors.assertively ? 'ring ring-red-400 rounded' : ''}
        labelText="Dias de catalogação"
        isSelect={false}
        placeholderText="Quantidade de dias"
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        {...register('catalogationDays')}
        required
      />
      {errors.catalogationDays && (
        <p className="text-xs italic text-red-400 my-3">{`${errors.catalogationDays.message}`}</p>
      )}

      <MainTradeSelect
        className={errors.martingale ? 'ring ring-red-400 rounded' : ''}
        labelText="Martingale"
        isSelect
        selectValues={MartingaleValues}
        value={values.martingale}
        handleChange={({ target }) =>
          handleChange({ value: target.value, name: target.name })
        }
        {...register('martingale')}
        required
      />

      <button
        className="mt-16 border border-border-color rounded-lg max-w-[168px] 
        w-full mx-auto h-12 font-medium text-sm text-primary"
      >
        Catalogar
      </button>
    </form>
  )
}

export default SignalCatalogerPage
