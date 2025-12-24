export default function DropStay() {
  return (
    <div id="stay"
      className="absolute left-30 top-full w-60 bg-black border-y border-emerald-700/50 text-white shadow-lg py-2 z-50  flex flex-col space-y-3 "
    >
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">Rooms & Suites</a>
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">Rooms Details- Top Image</a>
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">Rooms Details- Top Gallery</a>
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">Rooms Details- Left Booking Form</a>
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">Cart</a>
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">Checkout</a>
      <a className="text-sm cursor-pointer hover:text-[#b99d75] transition-colors text-left ml-3">My Account</a>
    </div>
  );
}
