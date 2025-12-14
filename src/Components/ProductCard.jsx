export default function ProductCard({ img, name, qty, price }) {
  return (
    <div className="
      w-full bg-white rounded-2xl border border-gray-200 
      p-4 shadow-sm hover:shadow-md 
      transition-all duration-200
    ">

      {/* Product Image */}
      <div className="w-full flex justify-center">
        <img 
          src={img} 
          alt={name}
          className="h-28 object-contain"
        />
      </div>

      {/* ETA Tag */}
      <div className="flex items-center gap-1 mt-3">
        <span className="text-green-600 text-lg">⏱</span>
        <p className="text-xs font-semibold text-gray-600">19 MINS</p>
      </div>

      {/* Product Name */}
      <p className="text-[15px] font-semibold mt-1 leading-tight">
        {name}
      </p>

      {/* Quantity */}
      <p className="text-sm text-gray-500 mt-1">
        {qty}
      </p>

      {/* Bottom Row: Price + Add Button */}
      <div className="flex items-center justify-between mt-4">

        {/* Price */}
        <p className="text-[17px] font-semibold text-gray-800">
          ₹{price}
        </p>

        {/* ADD Button */}
        <button 
          className="
            border border-green-600 text-green-600 font-semibold 
            px-5 py-1 rounded-xl text-sm
            hover:bg-green-600 hover:text-white 
            transition-all duration-200
          "
        >
          ADD
        </button>
      </div>
    </div>
  );
}
