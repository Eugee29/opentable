interface Props {
  description: string
}

export default function Description({ description }: Props) {
  return (
    <div className="mt-8">
      <p>{description}</p>
    </div>
  )
}
