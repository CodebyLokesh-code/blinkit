import ProductCard from "./ProductCard";

export default function Section({ title, products }) {
  return (
    <div className="my-8 px-4">
      
      {/* Section Heading */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            name={item.name}
            qty={item.qty}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
