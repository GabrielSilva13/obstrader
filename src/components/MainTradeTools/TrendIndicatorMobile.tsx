'use client'

import useMobileMediaQuery from '@/utils/useMobileMediaQuery'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'phosphor-react'
import { Fragment, useState } from 'react'
import { TrendIndicatorTab } from './TrendIndicatorTab'

export const TrendIndicatorMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMobileMediaQuery()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  if (!isMobile) return <></>

  return (
    <>
      <div className="fixed right-3 top-2/4 translate-x-2/4 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#f4f4f4] -rotate-90 px-4 py-2 text-sm shadow-lg font-medium text-blue-850 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Indicador de Tendência
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <X
                    role="button"
                    className="absolute top-3 right-3 cursor-pointer"
                    size={32}
                    onClick={closeModal}
                  />

                  <div className="w-full bg-white h-fit text-center  p-8">
                    <strong className="text-primary text-base font-semibold tracking-wide">
                      Indicador de Tendência
                    </strong>

                    <TrendIndicatorTab />

                    <span className="text-primary text-xs block text-right mt-2">
                      Última atualização: <time>21:50:03</time>
                    </span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
