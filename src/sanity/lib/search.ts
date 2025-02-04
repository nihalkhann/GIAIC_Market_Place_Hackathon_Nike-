// // lib/search.ts
// import { Product } from "@/types/types";
// import { client } from "./client";

// export const searchProducts = async (query: string) => {
//   const products = await client.fetch(
//     `*[_type == "product" && (
//       productName match $query ||
//       category match $query ||
//       description match $query ||
//       colors[] match $query
//     )]{
//       _id,
//       productName,
//       category,
//       price,
//       inventory,
//       colors,
//       status,
//       image {
//         asset -> {
//           _id,
//           url
//         }
//       },
//       description
//     }`,
//     { query: `*${query}*` }, // The query parameter is passed in an object
//   );

//   return products;
// };

// export async function getTopProducts(): Promise<Product[]> {
//   return client.fetch(
//     `*[_type == "product"] | order(_createdAt desc) [0..5] {
//       _id,
//       productName,
//       category,
//       price,
//       image
//     }`
//   );
// }









// lib/search.ts
import { Product } from "@/types/types";
import { client } from "./client";

export const searchProducts = async (query: string) => {
  const products = await client.fetch(
    `*[_type == "product" && (
      productName match $query || 
      category match $query || 
      description match $query || 
      colors[] match $query
    )]{
      _id,
      productName,
      category,
      price,
      inventory,
      colors,
      status,
      image {
        asset -> {
          _id,
          url
        }
      },
      description
    }`,
    { query: query } as Record<string, string> // Explicitly cast to the correct parameter type
  );

  return products;
};

export async function getTopProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt desc) [0..5] {
      _id,
      productName,
      category,
      price,
      image
    }`
  );
}
