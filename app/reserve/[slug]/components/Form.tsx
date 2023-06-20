export default function Form() {
  return (
    <form className="flex w-[660px] flex-wrap justify-between">
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text"
        placeholder="First name"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text"
        placeholder="Last name"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text"
        placeholder="Phone number"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="email"
        placeholder="Email"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text"
        placeholder="Select an occasion (optional)"
      />
      <textarea
        className="mb-4 w-80 rounded border p-3"
        placeholder="Add a special request (optional)"
        rows={1}
      />
      <button className="h-[50px] w-full rounded bg-opentable-red-100 font-bold text-white transition-colors duration-300 hover:bg-[#b8222d]">
        Complete reservation
      </button>
    </form>
  );
}
