import mongoose from "mongoose";

async function connectDb(DATABASE_URL) {

    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Successfully Connected To Database");
    } catch (error) {
        console.log(error, "Not Able To Connect Database");
    }

}


export default connectDb;