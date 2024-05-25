import { CreateProductsDto, UpdateProductDto } from "../dtos/CreateProductsDto";
import product from "../models/product";
import IProductRepository from "./IProductRepository";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";

class ProductRepository implements IProductRepository {
  constructor() {}

  findAll(): Promise<product[]> {
    const products = product.find();

    return products;
  }

  findById(id: string): Promise<product | null> {
    const foundProduct = product.findById(id);

    if (!foundProduct) {
      throw new NotFoundException(
        "Produto não encontrado",
        ErrorCode.NOT_FOUND
      );
    }
    return foundProduct;
  }

  create(data: CreateProductsDto): Promise<product> {
    const newProduct = product.create(data);

    return newProduct;
  }

  update(id: string, data: UpdateProductDto): Promise<product | null> {
    const updatedProduct = product.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct;
  }

  delete(id: string): Promise<product | null> {
    const deletedProduct = product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    return deletedProduct;
  }
}

export default ProductRepository;
