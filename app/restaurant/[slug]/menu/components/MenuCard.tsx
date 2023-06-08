import { Item } from '@prisma/client'

interface Props {
  item: Item
}

export default function MenuCard({ item }: Props) {
  return (
    <div className="flex h-[9.625rem] flex-col rounded border p-3">
      <h3 className="mb-2 truncate text-lg font-bold" title={item.name}>
        {item.name}
      </h3>
      <p className="mb-2 line-clamp-3 flex-grow overflow-hidden text-sm font-light">
        {item.description}
      </p>
      <span>{item.price}</span>
    </div>
  )
}
