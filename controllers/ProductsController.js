
import ProductsModel from "../models/ProductsModel.js";

class ProductsController {
    constructor() {

    }

    static getProducts = async (req, res) => {
        try {

            const products = await ProductsModel.find();
            res.json(products)

        } catch (error) {
            console.log(error);
        }
    }

}

export default ProductsController;

