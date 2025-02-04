export interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: {
    asset: string;
    url: string;
  };
  description: string;
}

export interface Order {
  _id: string;
  firstName: string;
  lastName: string;
  total: number;
  status: string;
  orderDate: string;
}

export interface Video{
  _id: string;
  title: string;
  videoFile: {
    asset: {
      url: string;
    };
  };
  isLooping: boolean;
}