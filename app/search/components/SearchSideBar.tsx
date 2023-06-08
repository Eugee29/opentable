export default function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <p className="font-light">Toronto</p>
        <p className="font-light">Ottawa</p>
        <p className="font-light">Montreal</p>
        <p className="font-light">Hamilton</p>
        <p className="font-light">Kingston</p>
        <p className="font-light">Niagara</p>
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        <p className="font-light">Mexican</p>
        <p className="font-light">Italian</p>
        <p className="font-light">Chinese</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="w-full rounded-l border p-2 font-light">$</button>
          <button className="w-full border border-l-0 p-2 font-light">
            $$
          </button>
          <button className="w-full rounded-r border border-l-0 p-2 font-light">
            $$$
          </button>
        </div>
      </div>
    </div>
  )
}
