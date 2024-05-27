import ProductRepository from "../repositorys/ProductRepository";
import {
  CreateProductsDto,
  UpdateProductDto,
} from "../interfaces/products.interface";
import { IProductRepository } from "../repositorys/IProductRepository";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { BadRequestException } from "../exceptions/bad-request";

const productRepository: IProductRepository = ProductRepository;

export const findAllProducts = async () => {
  return await productRepository.findAll();
};

export const findProductById = async (id: string) => {
  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const product = await productRepository.findById(id);

  if (!product) {
    throw new NotFoundException("Produto não encontrado", ErrorCode.NOT_FOUND);
  }

  return product;
};

export const createProduct = async (data: CreateProductsDto) => {
  const { nome, descricao, preco, quantidade } = data;

  if (!nome) {
    throw new BadRequestException(
      "Nome não informado",
      ErrorCode.INVALID_PARAMS
    );
  }

  if (!descricao) {
    throw new BadRequestException(
      "Descrição não informada",
      ErrorCode.INVALID_PARAMS
    );
  }

  if (!preco) {
    throw new BadRequestException(
      "Preço não informado",
      ErrorCode.INVALID_PARAMS
    );
  }

  if (!quantidade) {
    throw new BadRequestException(
      "Quantidade não informada",
      ErrorCode.INVALID_PARAMS
    );
  }

  let product = {
    nome: nome,
    descricao: descricao,
    preco: preco,
    quantidade: quantidade,
  };

  return await productRepository.create(product);
};

export const updateProduct = async (id: string, data: UpdateProductDto) => {
  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const { nome, descricao, preco, quantidade } = data;

  if (!nome) {
    throw new BadRequestException(
      "Nome não informado",
      ErrorCode.INVALID_PARAMS
    );
  }

  if (!descricao) {
    throw new BadRequestException(
      "Descrição não informada",
      ErrorCode.INVALID_PARAMS
    );
  }

  if (!preco) {
    throw new BadRequestException(
      "Preço não informado",
      ErrorCode.INVALID_PARAMS
    );
  }

  if (!quantidade) {
    throw new BadRequestException(
      "Quantidade não informada",
      ErrorCode.INVALID_PARAMS
    );
  }

  let product = {
    nome: nome,
    descricao: descricao,
    preco: preco,
    quantidade: quantidade,
  };

  return await productRepository.update(id, data);
};

export const deleteProduct = async (id: string) => {
  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  return await productRepository.delete(id);
};
