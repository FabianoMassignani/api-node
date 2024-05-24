import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController";
import { errorHandler } from "../middlewares/errorHandler";

const router: Router = Router();

router.get("/", errorHandler(getProducts));
router.get("/getById/:id", errorHandler(getProductById));
router.post("/", errorHandler(createProduct));
router.put("/:id", errorHandler(updateProduct));
router.delete("/:id", errorHandler(deleteProduct));

export default router;
