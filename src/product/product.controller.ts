import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Res() res): Promise<Product[]> {
    const products = await this.productService.findAll();
    return res.status(HttpStatus.OK).json(products);
  }
  @Get(':id')
  getProductById(@Param() params): Promise<Product> {
    console.log(params.id);
    return this.productService.findOne(params.id);
  }
}
