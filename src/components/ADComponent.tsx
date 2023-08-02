type ADComponentProps = {
  maxWidth?: number
  isOnTheRight?: boolean
  isOnTheCenter?: boolean
}

export const ADComponent = ({
  maxWidth,
  isOnTheRight,
  isOnTheCenter,
}: ADComponentProps) => {
  return (
    <div
      style={{
        maxWidth,
        marginLeft: isOnTheRight ? 'auto' : 0,
        margin: isOnTheCenter ? '0 auto' : '',
      }}
      className="flex flex-col w-full gap-2"
    >
      <div className="flex items-center gap-3">
        <div className="w-full h-[1px] bg-primary" />
        <strong className="uppercase text-secondary tracking-wide text-sm font-normal">
          anúncio
        </strong>
        <div className="w-full h-[1px] bg-primary" />
      </div>

      <div className="w-full h-[392px] border border-gray-425" />
    </div>
  )
}
