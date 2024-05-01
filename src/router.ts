import {Router} from "express"
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getupdates, updateUpdate } from "./handlers/update";

const router = Router() ; 

/** Product routers */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put("/product/:id", body("name").optional().isString() , handleInputErrors,updateProduct);
router.delete("/product/:id", deleteProduct);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);



/** Update routers */
router.get("/update", getupdates);
router.get("/update/:id", getOneUpdate);
router.put(
  "/update/:id",
  body("title").optional().isString(),
  body("description").optional().isString(),
  body("status")
    .optional()
    .isIn(["IN_PROGRESS ", "SHIPPED", "DEPRECATED", "ARCHIVED"]).optional(),
  body("version").optional().isString(),
  handleInputErrors,
  updateUpdate
);
router.delete("/update/:id", deleteUpdate);
router.post(
  "/update",
  body("title").exists().isString(),
  body("description").exists().isString(),
  body("productId").exists().isString(),
  handleInputErrors,
  createUpdate
);


/** UpdatePoint routers */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("title").optional().isString(),
  body("description").optional().isString(),
  handleInputErrors,
  () => {}
);
router.delete("/updatepoint/:id", () => {});
router.post(
  "/updatepoint",
  body("title").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  handleInputErrors,
  () => {}
);



export default router 