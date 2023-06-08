interface Props {
  name: string
}

export default function Title({ name }: Props) {
  return <h1 className="border-b py-8 text-5xl font-bold">{name}</h1>
}
