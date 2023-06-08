export default function RestaurantCard() {
  return (
    <div className="h-72 w-full cursor-pointer overflow-hidden rounded border">
      <img
        className="min-h-[132px] w-full"
        src="https://resizer.otstatic.com/v2/photos/wide-huge/2/28112008.jpg"
        alt=""
      />
      <div className="flex flex-col p-2">
        <h3 className="mb-1 text-lg font-bold">Super Restaurant</h3>
        <div className="mb-1 flex items-start text-sm">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2">77 reviews</p>
        </div>
        <div className="mb-2 flex text-sm font-light capitalize">
          <p className="mr-3">Mexican</p>
          <p className="mr-3">$$$$</p>
          <p>Toronto</p>
        </div>
        <p className="mt-1 text-sm font-medium">Booked 3 times today</p>
      </div>
    </div>
  )
}
