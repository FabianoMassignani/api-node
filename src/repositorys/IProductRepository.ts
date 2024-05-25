import product from "../models/product";

export interface CreateProductsDto {
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
}

export interface UpdateProductDto {
  nome?: string;
  descricao?: string;
  preco?: number;
  quantidade?: number;
}

export interface IProductRepository {
  create(data: CreateProductsDto): Promise<product>;
  findAll(): Promise<product[]>;
  findById(id: string): Promise<product | null>;
  update(id: string, data: UpdateProductDto): Promise<product | null>;
  delete(id: string): Promise<product | null>;
}
