import axios from 'axios';
import { ProductDocument } from '../models/Product';

const getProducts = () => {
  return axios.get<ProductDocument[]>(
    `${process.env.REACT_APP_BASE_API}/product`
  );
};

const productService = {
  getProducts,
};

export default productService;
