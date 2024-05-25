import { Router } from "express";
// import {
//   getProducts,
//   getProductById,
//   createProduct,
//   deleteProduct,
//   updateProduct,
// } from "../controllers/productController";

import ProductController from "../controllers/productControllerClass";
import ProductRepository from "../repositorys/ProductRepositoryClass";

import { handleAsyncMethod } from "../middlewares/handleAsyncMethod";

const productController = new ProductController(new ProductRepository());

const router: Router = Router();

router.get("/", handleAsyncMethod(productController.getProducts));
router.get("/getById/:id", handleAsyncMethod(productController.getProductById));
router.post("/", handleAsyncMethod(productController.createProduct));
router.put("/:id", handleAsyncMethod(productController.updateProduct));
router.delete("/:id", handleAsyncMethod(productController.deleteProduct));

// router.get("/", handleAsyncMethod(getProducts));
// router.get("/getById/:id", handleAsyncMethod(getProductById));
// router.post("/", handleAsyncMethod(createProduct));
// router.put("/:id", handleAsyncMethod(updateProduct));
// router.delete("/:id", handleAsyncMethod(deleteProduct));

export default router;
