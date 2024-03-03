import {Router} from "express"

const router = Router() ; 


/** Product routers */
router.get("/product", (req,res) => {res.json({"thing" :"hi"})});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});
router.post("/product", () => {});


/** Update routers */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});
router.post("/update", () => {});


/** UpdatePoint routers */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});



export default router 