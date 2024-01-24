import { IProduct } from './catalog/product.module';

export const getImageUrl = (product: IProduct) => {
  return 'assets/images/robot-parts/' + product?.imageName;
};
