import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController";

import { handleAsyncMethod } from "../middlewares/handleAsyncMethod";

const router: Router = Router();

router.get("/", handleAsyncMethod(getProducts));
router.get("/getById/:id", handleAsyncMethod(getProductById));
router.post("/", handleAsyncMethod(createProduct));
router.put("/:id", handleAsyncMethod(updateProduct));
router.delete("/:id", handleAsyncMethod(deleteProduct));

export default router;
