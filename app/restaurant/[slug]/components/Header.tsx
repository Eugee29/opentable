interface Props {
  name: string
}

export default function Header({ name }: Props) {
  const renderTitle = () => {
    const nameArray = name.split('-')
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`
    return nameArray.join(' ')
  }

  return (
    <header className="h-96 overflow-hidden">
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#122048] to-[#646C87]">
        <h1 className="text-shadow text-center text-7xl capitalize text-white">
          {renderTitle()}
        </h1>
      </div>
    </header>
  )
}
