import Link from 'next/link'

export default function RestaurantCard() {
  return (
    <div className="flex border-b pb-5">
      <img
        className="w-[12.8125rem] rounded"
        src="https://resizer.otstatic.com/v2/photos/legacy/2/26773516.png"
        alt=""
      />
      <div className="pl-5">
        <h2 className="mb-1 text-lg font-bold text-[#247f9e]">
          Chloelys at The Hilton Tel-Aviv
        </h2>
        <div className="flex items-start">
          <div className="flex">*****</div>
          <p className="ml-2 text-sm font-medium">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-sm">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/super-restaurant">View more information</Link>
        </div>
      </div>
    </div>
  )
}
