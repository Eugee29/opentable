interface Props {
  images: string[];
}

export default function Images({ images }: Props) {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-5 text-2xl font-bold">
        {images.length} Photo{images.length > 1 ? "s" : ""}
      </h1>
      <ul className="flex flex-wrap">
        {images.map((image, index) => (
          <li key={index}>
            <img className="mb-1 mr-1 aspect-[3/2] w-44" src={image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
