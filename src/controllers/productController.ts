import { Request, Response, NextFunction } from "express";
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

  const product = await productService.findProductById(id);

  res.status(200).json({ data: product });
};

export const createProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const data = req.body;

  const productCreate = await productService.createProduct(data);

  res.status(201).json({ data: productCreate, message: "Criado com sucesso" });
};

export const updateProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const data = req.body;

  const productUpdate = await productService.updateProduct(id, data);

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

  const product = await productService.deleteProduct(id);

  res.status(200).json({ data: product, message: "Deletado com sucesso" });
};
