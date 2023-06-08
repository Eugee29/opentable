export default function ReservationCard() {
  return (
    <section className="sticky top-0 w-80 rounded bg-white p-3 shadow">
      <h4 className="border-b pb-3 text-center text-lg font-bold">
        Make a reservation
      </h4>
      <div className="my-3 flex flex-col">
        <label className="text-sm font-medium" htmlFor="">
          Party Size
        </label>
        <select className="border-b py-3 font-light" name="" id="">
          <option value="">1 person</option>
          <option value="">2 person</option>
        </select>
      </div>
      <div className="flex justify-between py-3 text-sm font-medium">
        <div className="flex w-[48%] flex-col border-b">
          <label htmlFor="">Date</label>
          <input type="date" className="w-28 font-light" />
        </div>
        <div className="flex w-[48%] flex-col border-b">
          <label htmlFor="">Time</label>
          <select className="w-28 font-light">
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="h-11 w-full rounded bg-[#da3743] px-4 font-bold text-white transition-colors duration-300 hover:bg-[#b8222d]">
          Find a time
        </button>
      </div>
    </section>
  )
}
