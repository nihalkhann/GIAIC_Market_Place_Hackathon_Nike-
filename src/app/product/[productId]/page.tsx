// // app/product/[productId]/page.tsx
// "use client";

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   category: string;
//   description: string;
//   inventory: number;
//   colors: string[];
//   status: string;
//   image: any;
// }

// export default function ProductPage() {
//   const params = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string>('');
//   const [selectedColor, setSelectedColor] = useState<string>('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState(1);

//   // const sizes = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const query = `*[_type == "product" && _id == $productId][0]{
//           _id,
//           productName,
//           price,
//           category,
//           description,
//           inventory,
//           colors,
//           status,
//           "image": image.asset->
//         }`;
        
//         const data = await client.fetch(query, { productId: params.productId });
//         if (!data) {
//           setError("Product not found");
//           return;
//         }
//         setProduct(data);
//       } catch (err) {
//         setError("Failed to load product");
//         console.error("Error fetching product:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.productId) {
//       fetchProduct();
//     }
//   }, [params.productId]);

//   const handleQuantityChange = (increment: boolean) => {
//     setQuantity(prev => {
//       const newQuantity = increment ? prev + 1 : prev - 1;
//       return Math.min(Math.max(1, newQuantity), product?.inventory || 1);
//     });
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize || !selectedColor) {
//       alert("Please select both size and color");
//       return;
//     }
//     // Add your cart logic here
//     console.log("Adding to cart:", {
//       product,
//       quantity,
//       selectedSize,
//       selectedColor
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">Error</h2>
//           <p className="mt-2 text-gray-600">{error || "Product not found"}</p>
//         </div>
//       </div>
//     );
//   }

//   return (

    
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div className="space-y-4">
//           <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
//             <Image
//               src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
//               alt={product.productName}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold">{product.productName}</h1>
//             <p className="text-gray-600 mt-1">{product.category}</p>
//           </div>

//           <div>
//             <p className="text-2xl font-bold">€ {product.price.toFixed(2)}</p>
//             {product.status && (
//               <span className="inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full text-red-600 bg-gray-100">
//                 {product.status}
//               </span>
//             )}
//           </div>

//           <div className="prose max-w-none">
//             <p className="text-gray-600">{product.description}</p>
//           </div>

//           <div className='border-t-2 '>
//             <p className='font-normal text-md text-gray-600 mt-2 '> Avalaible Stock <strong className='text-gray-800 '>{product.inventory}</strong></p>
//             </div>


//           {/* Color Selection */}
// {product.colors && product.colors.length > 0 && (
//   <div className="space-y-4">
//     <h3 className="font-medium">Select Color</h3>
//     <div className="flex gap-2">
//       {product.colors.map((color) => (
//         <button
//           key={color}
//           onClick={() => setSelectedColor(color)}
//           className={`w-10 h-10 rounded-full border-2 transition-all
//             ${selectedColor === color
//               ? 'border-black ring-2 ring-black ring-offset-2'
//               : 'border-gray-300 hover:border-gray-400'
//           }`}
//           style={{ backgroundColor: color }} // Use color directly as the background
//           aria-label={color}
//         />
//       ))}
//     </div>
//   </div>
// )}



//           {/* Quantity Selector */}
//           <div className="flex items-center space-x-4">
//             <h3 className="font-medium">Quantity:</h3>
//             <button
//               onClick={() => handleQuantityChange(false)}
//               className="w-8 h-8  rounded-full border border-gray-300 flex items-center justify-center"
//               disabled={quantity <= 1}
//             >
//               -
//             </button>
//             <span className="text-xl font-medium">{quantity}</span>
//             <button
//               onClick={() => handleQuantityChange(true)}
//               className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
//               disabled={quantity >= (product.inventory || 1)}
//             >
//               +
//             </button>
//           </div>

//           {/* Add to Cart Button */}
//                   <button
//             onClick={handleAddToCart}
//             className="w-full bg-gray-800 text-white py-6 rounded-full"
//             disabled={!selectedSize || !selectedColor || product.inventory === 0}
//           >
//             {product.inventory > 0 ? 'Add to Cart' : 'Out of Stock'}
//           </button>

//           {/* Inventory Status */}
//           {product.inventory <= 5 && product.inventory > 0 && (
//             <p className="text-red-600 text-sm">
//               Only {product.inventory} left in stock!
//             </p>
//                       )}
//         </div>
//       </div>
//       </div>
    
//   );
// }



// // app/product/[productId]/page.tsx
// "use client";

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import { addtoCart } from '@/app/CartFunction/function';
// import { toast} from 'sonner';

// interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   category: string;
//   description: string;
//   inventory: number;
//   colors: string[];
//   status: string;
//   image: any;
// }

// export default function ProductPage() {
//   const params = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedColor, setSelectedColor] = useState<string>('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState(1);
  

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const query = `*[_type == "product" && _id == $productId][0]{
//           _id,
//           productName,
//           price,
//           category,
//           description,
//           inventory,
//           colors,
//           status,
//           "image": image.asset->
//         }`;

//         const data = await client.fetch(query, { productId: params.productId });
//         if (!data) {
//           setError("Product not found");
//           return;
//         }
//         setProduct(data);
//       } catch (err) {
//         setError("Failed to load product");
//         console.error("Error fetching product:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.productId) {
//       fetchProduct();
//     }
//   }, [params.productId]);

//   const handleQuantityChange = (increment: boolean) => {
//     setQuantity(prev => {
//       const newQuantity = increment ? prev + 1 : prev - 1;
//       return Math.min(Math.max(1, newQuantity), product?.inventory || 1);
//     });
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     addtoCart(product);
    
          

//    }
    


//     if (loading) {
//       return (
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//         </div>
//       );
//     }

//     if (error || !product) {
//       return (
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-900">Error</h2>
//             <p className="mt-2 text-gray-600">{error || "Product not found"}</p>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Product Images */}
//           <div className="space-y-4">
//             <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
//               <Image
//                 src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
//                 alt={product.productName}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold">{product.productName}</h1>
//               <p className="text-gray-600 mt-1">{product.category}</p>
//             </div>

//             <div>
//               <p className="text-2xl font-bold">€ {product.price.toFixed(2)}</p>
//               {product.status && (
//                 <span className="inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full text-red-600 bg-gray-100">
//                   {product.status}
//                 </span>
//               )}
//             </div>

//             <div className="prose max-w-none">
//               <p className="text-gray-600">{product.description}</p>
//             </div>

//             <div className='border-t-2 '>
//               <p className='font-normal text-md text-gray-600 mt-2 '> Available Stock <strong className='text-gray-800 '>{product.inventory}</strong></p>
//             </div>

//             {/* Color Selection */}
//             {product.colors && product.colors.length > 0 && (
//               <div className="space-y-4">
//                 <h3 className="font-medium">Select Color</h3>
//                 <div className="flex gap-2">
//                   {product.colors.map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => setSelectedColor(color)}
//                       className={`w-10 h-10 rounded-full border-2 transition-all
//                       ${selectedColor === color
//                           ? 'border-black ring-2 ring-black ring-offset-2'
//                           : 'border-gray-300 hover:border-gray-400'
//                         }`}
//                       style={{ backgroundColor: color }} // Use color directly as the background
//                       aria-label={color}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             {/* <div className="flex items-center space-x-4">
//               <h3 className="font-medium">Quantity:</h3>
//               <button
//                 onClick={() => handleQuantityChange(false)}
//                 className="w-8 h-8  rounded-full border border-gray-300 flex items-center justify-center"
//                 disabled={quantity <= 1}
//               >
//                 -
//               </button>
//               <span className="text-xl font-medium">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(true)}
//                 className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
//                 disabled={quantity >= (product.inventory || 1)}
//               >
//                 +
//               </button>
//             </div> */}

//             {/* Add to Cart Button */}
//             <button
//               onClick={(e) => [handleAddToCart(e, product),toast.success(`${product.productName} added in Bag`)]}
//               className="w-full bg-gray-800 text-white py-6 rounded-full"
//               // disabled={!selectedColor || product.inventory === 0}
              
          
      


//             >
//               {product.inventory > 0 ? 'Add to Cart' : 'Out of Stock'}
//             </button>
//             <button>
//               add to wishlist
//             </button>

//             {/* Inventory Status */}
//             {product.inventory <= 5 && product.inventory > 0 && (
//               <p className="text-red-600 text-sm">
//                 Only {product.inventory} left in stock!
//               </p>

//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }










// app/product/[productId]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { addtoCart } from '@/app/CartFunction/function';
import { addToWishlist, isInWishlist } from '@/app/CartFunction/wishlist';
import { toast } from 'sonner';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import JordanSlider from '@/components/JordanSlider';


interface Product {
  _id: string;
  productName: string;
  price: number;
  category: string;
  description: string;
  inventory: number;
  colors: string[];
  status: string;
  image: any;
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $productId][0]{
          _id,
          productName,
          price,
          category,
          description,
          inventory,
          colors, 
          status,
          "image": image.asset->
        }`;

        const data = await client.fetch(query, { productId: params.productId });
        if (!data) {
          setError("Product not found");
          return;
        }
        setProduct(data);
        setIsWishlisted(isInWishlist(data._id));
      } catch (err) {
        setError("Failed to load product");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.productId) {
      fetchProduct();
    }
  }, [params.productId]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addtoCart(product);
    toast.success(`${product.productName} Added in Bag`);
  }

  const handleWishlistToggle = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToWishlist(product);
    setIsWishlisted(!isWishlisted);
    toast.success(
      `${product.productName} ${isWishlisted ? "Removed from" : "Added to"} Favorites`,
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error</h2>
          <p className="mt-2 text-gray-600">{error || "Product not found"}</p>
        </div>
      </div>
    );
  }

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={
                product.image ? urlFor(product.image).url() : "/placeholder.png"
              }
              alt={product.productName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{product.productName}</h1>
              <p className="text-gray-600 mt-1">{product.category}</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold">€ {product.price.toFixed(2)}</p>
            {product.status && (
              <span className="inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full text-red-600 bg-gray-100">
                {product.status}
              </span>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t-2 ">
            <p className="font-normal text-md text-gray-600 mt-2 ">
              {" "}
              Available Stock{" "}
              <strong className="text-gray-800 ">{product.inventory}</strong>
            </p>
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-medium">Select Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all 
                    ${
                      selectedColor === color
                        ? "border-black ring-2 ring-black ring-offset-2"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="w-full bg-gray-800 text-white py-6 rounded-full"
            disabled={product.inventory === 0}
          >
            {product.inventory > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
          <button
            onClick={(e) => handleWishlistToggle(e, product)}
            className={`
        flex items-center justify-center px-2 py-6 w-full border rounded-full transition-colors
        ${
          isWishlisted
            ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            : "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
        }
      `}
            aria-label={
              isWishlisted ? "Remove from favorites" : "Add to favorites"
            }
          >
            <span className="mr-2">Favourite</span>
            {isWishlisted ? (
              <FaHeart className="w-4 h-4" />
            ) : (
              <FaRegHeart className="w-4 h-4" />
            )}
          </button>

          {/* Inventory Status */}
          {product.inventory <= 5 && product.inventory > 0 && (
            <p className="text-red-600 text-sm">
              Only {product.inventory} left in stock!
            </p>
          )}
        </div>
      </div>
      <JordanSlider/>
    </div>
  );
}