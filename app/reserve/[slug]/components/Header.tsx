export default function Header() {
  return (
    <header className="mb-10">
      <h3 className="mb-4 text-lg font-bold">You're almost done!</h3>
      <div className="flex">
        <img
          className="mr-4 h-16 w-16 rounded"
          src="https://resizer.otstatic.com/v2/photos/legacy/2/26773516.png"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="mb-1 flex-1 text-2xl font-bold">
            Chloelys at The Hilton Tel-Aviv
          </h1>
          <ul className="flex gap-4">
            <li className="font-medium">Tues, 22, 2023</li>
            <li className="font-medium">7:30 PM</li>
            <li className="font-medium">3 people</li>
          </ul>
        </div>
      </div>
    </header>
  )
}
