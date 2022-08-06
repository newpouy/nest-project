import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];
  getProducts(@Res() res): Product[] {
    // return this.products;
    return res.status(HttpStatus.OK).json([]);
  }
  getProductById(id: any): string {
    throw new Error('Method not implemented.');
  }
}
