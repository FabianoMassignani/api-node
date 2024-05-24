import ProductRepository from "../repositorys/ProductRepository";
import { CreateProductsDto, UpdateProductDto } from "../dtos/CreateProductsDto";
import IProductRepository from "../repositorys/IProductRepository";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";

const productRepository: IProductRepository = ProductRepository;

export const findAllProducts = async () => {
  return await productRepository.findAll();
};

export const findProductById = async (id: string) => {
  const product = await productRepository.findById(id);

  if (!product) {
    throw new NotFoundException("Produto não encontrado", ErrorCode.NOT_FOUND);
  }

  return product;
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
