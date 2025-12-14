export default function Footer() {
  const usefulLinks = ["Blog", "Privacy", "Terms", "FAQs", "Security", "Contact"];
  const partnerLinks = ["Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources"];
  const recipeLinks = ["Recipes", "Bistro", "District"];

  const categories = [
    "Vegetables & Fruits", "Cold Drinks & Juices", "Bakery & Biscuits",
    "Dry Fruits, Masala & Oil", "Paan Corner", "Pharma & Wellness",
    "Personal Care", "Beauty & Cosmetics", "Electronics & Electricals",
    "Toys & Games", "Rakhi Gifts", "Dairy & Breakfast",
    "Instant & Frozen Food", "Sweet Tooth", "Sauces & Spreads",
    "Organic & Premium", "Cleaning Essentials", "Ice Creams & Frozen Desserts",
    "Fashion & Accessories", "Stationery Needs", "Print Store",
    "Munchies", "Tea, Coffee & Health Drinks", "Atta, Rice & Dal",
    "Chicken, Meat & Fish", "Baby Care", "Home & Office",
    "Pet Care", "Kitchen & Dining", "Books", "E-Gift Cards"
  ];

  return (
    <footer className="w-full mt-20 pt-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <div className="space-y-2 text-gray-700">
              {usefulLinks.map((item, index) => (
                <p key={index} className="hover:text-black cursor-pointer">{item}</p>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4 invisible md:visible"></h3>
            <div className="space-y-2 text-gray-700">
              {partnerLinks.map((item, index) => (
                <p key={index} className="hover:text-black cursor-pointer">{item}</p>
              ))}

              <br />

              {recipeLinks.map((item, index) => (
                <p key={index} className="hover:text-black cursor-pointer">{item}</p>
              ))}
            </div>
          </div>

         
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">Categories</h3>
              <span className="text-green-600 cursor-pointer hover:underline">see all</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-gray-700">
              {categories.map((cat, index) => (
                <p key={index} className="hover:text-black cursor-pointer">{cat}</p>
              ))}
            </div>
          </div>
        </div>

        
        <div className="w-full bg-[#f9f9f9] py-6 mt-2 flex flex-col md:flex-row 
                        items-center justify-between px-6 rounded-lg">
          <p className="text-gray-600 text-sm">
            © Blink Commerce Private Limited, 2016-2025
          </p>

          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <img src="/images/176.png" className="w-32 cursor-pointer" />
            <img src="/images/177.png" className="w-32 cursor-pointer" />
          </div>

          <div className="flex items-center gap-4 text-2xl mt-3 md:mt-0">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">f</div>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">X</div>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">IG</div>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">in</div>
          </div>
        </div>

        
        <p className="text-gray-600 text-center text-sm mt-6 leading-relaxed px-4">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, 
          to “GROFGR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </footer>
  );
}
