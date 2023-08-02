import { X } from 'phosphor-react'

type MultiSelectChipProps = {
  value: string
  handleRemoveItemFromMultiSelect: (item: string) => void
}

export const MultiSelectChip = ({
  value,
  handleRemoveItemFromMultiSelect,
}: MultiSelectChipProps) => {
  return (
    <div
      className="border border-gray-200 w-full max-w-[130px] px-2 py-1 
      tracking-wider flex items-center gap-3 text-sm
    "
    >
      {value}
      <X
        role="button"
        className="cursor-pointer"
        onClick={() => handleRemoveItemFromMultiSelect(value)}
        size={14}
      />
    </div>
  )
}
