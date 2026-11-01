import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-blue-900 text-white uppercase rounded-full px-12 py-3 hover:bg-blue-800 transition-colors duration-200">
          смотреть всю коллекцию
        </button>
      </div>
    </main>
  );
}