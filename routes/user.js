import express from 'express'
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.get("/user/:id", UserController.getUser);
router.put("/user/:id", UserController.updateOrders);
router.put("/user/:uid/order/:oid", UserController.deleteOrder)




router.post("/email", UserController.getEmail);

router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);




export default router;