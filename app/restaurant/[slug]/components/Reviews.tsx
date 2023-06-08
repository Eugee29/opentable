export default function Reviews() {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-4 text-2xl font-bold">
        What 100 people are saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        <div className="mb-7 border-b pb-7">
          <div className="flex">
            <div className="flex w-1/6 flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
                <h2 className="text-sm font-medium text-white">MJ</h2>
              </div>
              <p className="text-center text-sm font-medium">Micheal Jordan</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="mr-5 flex">*****</div>
              </div>
              <div className="mt-5">
                <p>
                  Very cozy atmosphere, pleasant waiters and delicious food. Sea
                  bass was perfect, wine list is pretty good with a great choice
                  of local wines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
