'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { X } from 'phosphor-react'
import Image from 'next/image'

type MobileMenuProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]" />
          </Transition.Child>

          <div className="fixed left-0 top-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="absolute right-3 top-8"
                    type="button"
                    onClick={closeModal}
                  >
                    <X size={26} color="#333" />
                  </button>

                  <nav className="mt-4">
                    <Image
                      src="/footer-logo.svg"
                      alt=""
                      width={200}
                      height={200}
                    />
                    <ul className="mt-10 flex flex-col items-start gap-8 text-base font-normal tracking-[0.2px]">
                      <li>
                        <Link
                          className="text-secondary font-medium tracking-wide text-base"
                          href="/"
                          onClick={closeModal}
                        >
                          Home
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
