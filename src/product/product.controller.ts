import { Controller, Get, Param, Res } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Res() res): Promise<Product[]> {
    console.log('in getProducts')
    return this.productService.getProducts(res);
  }
  @Get(':id')
  getProductById(@Param() params): string {
    console.log(params.id);
    return this.productService.getProductById(params.id);
  }
}
