import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Product } from './interface/product.interface';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  // private readonly products: Product[] = [];
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  // getProducts(@Res() res): Product[] {
  //   // return this.products;
  //   return res.status(HttpStatus.OK).json([]);
  // }
  // getProductById(id: any): string {
  //   throw new Error('Method not implemented.');
  // }

  findAll(): Promise<Product[]> {
    console.log('in productservice findall', this.productsRepository)
    return this.productsRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productsRepository.findOneBy({ id: Number(id) });
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
