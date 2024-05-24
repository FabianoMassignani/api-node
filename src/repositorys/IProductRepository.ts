import { CreateProductsDto, UpdateProductDto } from "../dtos/CreateProductsDto";
import product from "../models/product";

export default interface IProductRepository {
  create(data: CreateProductsDto): Promise<product>;
  findAll(): Promise<product[]>;
  findById(id: string): Promise<product | null>;
  update(id: string, data: UpdateProductDto): Promise<product | null>;
  delete(id: string): Promise<product | null>;
}
