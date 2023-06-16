import bcrypt from 'bcryptjs';
import UserModel from "../models/UserModel.js";

class UserController {
    constructor() {

    }

    //get email

    static getEmail = async (req, res) => {

        try {

            const inputEmail = req.body.email;

            let user = await UserModel.findOne({ inputEmail })

            if (user) {
                res.json(user)
            } else {
                res.json({ "email": "not exist" })
            }
        } catch (error) {
            res.json({ "email": "null" })
            console.log(error);

        }
    }



    // signUp

    static signUp = async (req, res) => {
        try {
            const { name, email, password, mobileNo } = req.body;

            const hashPassword = bcrypt.hashSync(password, 8);

            await UserModel.create({ name, email, password: hashPassword, mobileNo })

            res.sendStatus(200)
        } catch (error) {
            res.sendStatus(400)
            console.log(error);
        }
    }




    // login

    static login = async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ email });

            if (!user) {
                return res.json({ "email": "The Email Address is Incorrect" })
            }


            let pMatch = bcrypt.compareSync(password, user.password);


            if (!pMatch) {
                return res.json({ "password": "The Password is Incorrect" })

            }

            res.json(user);
        } catch (error) {
            res.sendStatus(400)
            console.log(error);
        }
    }


    // get user


    static getUser = async (req, res) => {

        try {

            let userId = req.params.id;

            let user = await UserModel.findOne({ _id: userId })

            res.json(user)


        } catch (error) {
            console.log(error);
        }

    }






    // update orders

    static updateOrders = async (req, res) => {
        try {

            const userId = req.params.id;

            const newOrder = req.body.newOrder

            const user = await UserModel.findById(userId);

            const updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, { orders: [...newOrder, ...user.orders] })


            res.json(updatedUser.orders)

        } catch (error) {
            res.sendStatus(400)
            console.log(error);
        }
    }


    static deleteOrder = async (req, res) => {

        try {
            const userId = req.params.uid;
            const orderId = req.params.oid;


            let user = await UserModel.findOne({ _id: userId });


            const updateOrders = user.orders.filter((order) => {
                return order._id !== orderId;
            })



            let updatedUser = await UserModel.findByIdAndUpdate({ _id: userId }, { orders: updateOrders }, { returnDocument: "after" })

            res.json(updatedUser);

        } catch (error) {
            console.log(error);
        }


    }



}


export default UserController;



