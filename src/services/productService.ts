import ProductRepository from "../repositorys/ProductRepository";
import { CreateProductsDto } from "../dtos/CreateProductsDto";
import IProductRepository from "../repositorys/IProductRepository";

class ProductService {
  private productRepository: IProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  public async findAllProducts() {
    return this.productRepository.findAll();
  }

  public async findProductById(id: string) {
    return this.productRepository.findById(id);
  }

  public async createProduct(data: CreateProductsDto) {
    return this.productRepository.create(data);
  }

  public async updateProduct(id: string, data: CreateProductsDto) {
    return this.productRepository.update(id, data);
  }

  public async deleteProduct(id: string) {
    return this.productRepository.delete(id);
  }
}

export default new ProductService();
