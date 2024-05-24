import ProductRepository from "../repositorys/ProductRepository";
import { CreateProductsDto, UpdateProductDto } from "../dtos/CreateProductsDto";
import IProductRepository from "../repositorys/IProductRepository";

const productRepository: IProductRepository = ProductRepository;

export const findAllProducts = async () => {
  return await productRepository.findAll();
};

export const findProductById = async (id: string) => {
  return await productRepository.findById(id);
};

export const createProduct = async (data: CreateProductsDto) => {
  return await productRepository.create(data);
};

export const updateProduct = async (id: string, data: UpdateProductDto) => {
  return await productRepository.update(id, data);
};

export const deleteProduct = async (id: string) => {
  return await productRepository.delete(id);
};
