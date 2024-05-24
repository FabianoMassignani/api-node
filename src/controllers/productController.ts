import { Request, Response, NextFunction } from "express";
import { BadRequestException } from "../exceptions/bad-request";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import * as productService from "../services/productService";

export const getProducts = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const products = await productService.findAllProducts();

  res.status(200).json({ data: products });
};

export const getProductById = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const product = await productService.findProductById(id);

  res.status(200).json({ data: product });
};

export const createProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { nome, descricao, preco, quantidade } = req.body;

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

  const productCreate = await productService.createProduct(product);

  res.status(201).json({ data: productCreate, message: "Criado com sucesso" });
};

export const updateProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const { nome, descricao, preco, quantidade } = req.body;

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

  const productUpdate = await productService.updateProduct(id, product);

  res
    .status(200)
    .json({ data: productUpdate, message: "Atualizado com sucesso" });
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const product = await productService.deleteProduct(id);

  res.status(200).json({ data: product, message: "Deletado com sucesso" });
};
