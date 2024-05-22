import { Request, Response, NextFunction } from "express";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import productService from "../services/productService";

class ProductController {
  public getproducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const products = await productService.findAllProducts();

    res.status(200).json({ data: products });
  };

  public getproductById = async (
    req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const { id } = req.params;

    if (!id) {
      throw new BadRequestException(
        "Id não informado",
        ErrorCode.INVALID_PARAMS
      );
    }

    const product = await productService.findProductById(id);

    res.status(200).json({ data: product });
  };

  public createproduct = async (
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

  public updateproduct = async (
    req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const { id } = req.params;

    if (!id) {
      throw new BadRequestException(
        "Id não informado",
        ErrorCode.INVALID_PARAMS
      );
    }
    const product = await productService.updateProduct(id, req.body);

    res.status(200).json({ data: product, message: "Atualizado com sucesso" });
  };

  public deleteproduct = async (
    req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const { id } = req.params;

    if (!id) {
      throw new BadRequestException(
        "Id não informado",
        ErrorCode.INVALID_PARAMS
      );
    }

    const product = await productService.deleteProduct(id);

    res.status(200).json({ data: product, message: "Deletado com sucesso" });
  };
}

export default ProductController;
