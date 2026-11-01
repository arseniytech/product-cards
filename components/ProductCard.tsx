import Image from 'next/image';
import type { Product } from '@/data/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col">
      <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-contain p-2"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{product.description}</p>
      <p className="text-sm mt-2">{product.price} ₽</p>
      <button className="bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs mt-4 self-start hover:bg-blue-800 transition-colors duration-200">
        в корзину
      </button>
    </div>
  );
}