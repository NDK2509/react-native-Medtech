import Log from '../utils/Log';
import axiosClient from './axiosClient';

export interface ProductType {
  id: string,
  img: string;
  name: string;
  price: number;
  rating?: number;
  isSale?: boolean;
  saleText?: string;
  onPress?: () => void;
}

const getAllProducts = async (
  handler: (productsList: Array<ProductType>) => void,
) => {
    const result = await axiosClient.get<Array<ProductType>>('products');
    if (result.length !== 0) {
      handler(result);
    }
};

const getProductById = async (
  id: string,
  handler: (product: ProductType) => void,
) => {
  const result = await axiosClient.get<ProductType>(`products/${id}`);
  if (result ) {
    handler(result);
  }
};

export { getAllProducts, getProductById };
