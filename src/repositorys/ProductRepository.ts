import { CreateProductsDto } from "../dtos/CreateProductsDto";
import product from "../models/product";
import IProductRepository from "./IProductRepository";

class ProductRepository implements IProductRepository {
  public async findAll(): Promise<product[]> {
    const products = await product.find();

    return products;
  }

  public async findById(id: string): Promise<product | null> {
    const foundProduct = await product.findById(id);

    return foundProduct;
  }

  public async create(data: CreateProductsDto): Promise<product> {
    const newProduct = new product(data);
    
    await newProduct.save();

    return newProduct;
  }

  public async update(id: string, data: CreateProductsDto): Promise<product> {
    const updatedProduct = await product.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct;
  }

  public async delete(id: string): Promise<product> {
    const deletedProduct = await product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    return deletedProduct;
  }
}

export default ProductRepository;
