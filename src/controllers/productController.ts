import { Request, Response, NextFunction } from "express";
import { BadRequestException } from "../exceptions/bad-request";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import * as productService from "../services/productService";

export const getProducts = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const products = await productService.findAllProducts();

  res.status(200).json({ data: products });
};

export const getProductById = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const product = await productService.findProductById(id);

  if (!product) {
    throw new NotFoundException("Produto não encontrado", ErrorCode.NOT_FOUND);
  }

  res.status(200).json({ data: product });
};

export const createProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { nome, descricao, preco, quantidade } = req.body;

  if (!nome || !descricao || !preco || !quantidade) {
    throw new BadRequestException(
      "Campos obrigatórios não informados",
      ErrorCode.INVALID_PARAMS
    );
  }

  const product = await productService.createProduct(req.body);

  res.status(201).json({ data: product, message: "Criado com sucesso" });
};

export const updateProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const product = await productService.updateProduct(id, req.body);

  res.status(200).json({ data: product, message: "Atualizado com sucesso" });
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestException("Id não informado", ErrorCode.INVALID_PARAMS);
  }

  const product = await productService.deleteProduct(id);

  res.status(200).json({ data: product, message: "Deletado com sucesso" });
};
