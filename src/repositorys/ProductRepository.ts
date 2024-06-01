import {
  CreateProductsDto,
  UpdateProductDto,
} from "../interfaces/products/products.interface";
import { IProductRepository } from "../repositorys/IProductRepository";
import product from "../models/product";

const ProductRepository: IProductRepository = {
  async findAll(): Promise<product[]> {
    const products = await product.find();

    return products;
  },

  async findById(id: string): Promise<product | null> {
    const foundProduct = await product.findById(id);

    return foundProduct;
  },

  async create(data: CreateProductsDto): Promise<product> {
    const newProduct = new product(data);
    await newProduct.save();

    return newProduct;
  },

  async update(id: string, data: UpdateProductDto): Promise<product | null> {
    const updatedProduct = await product.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct;
  },

  async delete(id: string): Promise<product | null> {
    const deletedProduct = await product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    return deletedProduct;
  },
};

export default ProductRepository;
