import http from './http';

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
  const result = await http('products', 'GET');
  if (result.data.length !== 0) {
    handler(result.data as Array<ProductType>);
  }
};

const getProductById = async (
  id: string,
  handler: (product: ProductType) => void,
) => {
  const result = await http(`products/${id}`, 'GET');
  if (result.data !== null) {
    handler(result.data as ProductType);
  }
};

export { getAllProducts, getProductById };
