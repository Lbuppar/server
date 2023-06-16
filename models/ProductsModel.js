import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        productType: { type: String },
        image: { type: String },
        name: { type: String },
        price: { type: String },
        description: { type: String },
        dimension: { type: String },
        color: { type: String },
    }
)


const ProductsModel = mongoose.model("product", productsSchema);


export default ProductsModel;