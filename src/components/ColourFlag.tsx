export function ColourFlag({ className = '' }: { className?: string }) {
  return (
    <div className={`flex h-1 rounded-full overflow-hidden ${className}`}>
      <div className="flex-1 bg-dark-grey" />
      <div className="flex-[3] bg-blue" />
      <div className="flex-1 bg-turquoise" />
      <div className="flex-1 bg-yellow" />
      <div className="flex-[2] bg-orange" />
    </div>
  )
}
