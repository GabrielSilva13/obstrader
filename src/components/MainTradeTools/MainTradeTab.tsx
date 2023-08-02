'use client'

import { CopySimple, Trash } from 'phosphor-react'
import { useState } from 'react'

export const MainTradeTab = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <div className="relative xl:absolute xl:-bottom-[720px] max-w-[644px] mx-auto w-full overflow-x-auto overflow-y-auto h-[700px] shadow-md sm:rounded-lg">
        <div className="flex h-5 items-center gap-3 ml-[43px]">
          {isSelected && (
            <>
              <Trash className="cursor-pointer" size={20} />

              <CopySimple className="cursor-pointer" size={20} />
            </>
          )}
        </div>

        <table className="w-full text-sm text-left text-secondary ">
          <thead className="text-xs bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="relative flex items-center gap-3">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 absolute -top-10 cursor-pointer h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium text-primary"
              >
                Data
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-sm text-primary"
              >
                Hora
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-sm text-primary"
              >
                Ativo
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-sm text-primary"
              >
                Direção
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-sm text-primary"
              >
                Tempo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-sm font-normal whitespace-nowrap"
              >
                13/07
              </th>
              <td className="px-6 py-4 text-sm">14:40</td>
              <td className="px-6 py-4 text-sm">EUR/USD</td>
              <td className="px-6 py-4 text-sm">CALL</td>
              <td className="px-6 py-4 text-sm">M5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <span className="text-primary max-w-[644px] xl:absolute xl:-bottom-[760px] w-full mx-auto text-sm -mt-6 text-right">
        Total de Sinais: 105
      </span>
    </>
  )
}
