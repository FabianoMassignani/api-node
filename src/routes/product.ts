import { Router } from "express";
import UserController from "../controllers/productController";
import { errorHandler } from "../middlewares/errorHandler";

const router: Router = Router();
const productController = new UserController();

router.get("/", errorHandler(productController.getproducts));
router.get("/getById/:id", errorHandler(productController.getproductById));
router.post("/", errorHandler(productController.createproduct));
router.put("/:id", errorHandler(productController.updateproduct));
router.delete("/:id", errorHandler(productController.deleteproduct));

export default router;
