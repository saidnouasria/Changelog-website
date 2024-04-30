import {Router} from "express"
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router() ; 

/** Product routers */
router.get("/product", () => {});
router.get("/product/:id", () => {});
router.put("/product/:id", body("name").optional().isString() , handleInputErrors,()=>{});
router.delete("/product/:id", () => {});
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  () => {}
);



/** Update routers */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional().isString(),
  body("description").optional().isString(),
  body("status")
    .optional()
    .isIn(["IN_PROGRESS ", "SHIPPED", "DEPRECATED", "ARCHIVED"]),
  body("version").optional().isString(),
  handleInputErrors,
  () => {}
);
router.delete("/update/:id", () => {});
router.post(
  "/update",
  body("title").exists().isString(),
  body("description").exists().isString(),
  handleInputErrors,
  () => {}
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