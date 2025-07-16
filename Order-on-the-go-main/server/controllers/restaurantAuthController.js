import Restaurant from '../models/Restaurant.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const registerRestaurant = async (req,res)=>{
    try{
        const {userName,password,email,restaurantName,address,imageUrl} = req.body;
        const existingRestaurant = await User.findOne({email,userType:'restaurant'});

        if(existingRestaurant){
            return res.status(400).json({message:"Email already in use"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({
            userName,
            password:hashedPassword,
            email,
            userType:"restaurant"
        })

        await user.save();

        const restaurantUser = await User.findOne({email,userType:"restaurant"});

        const restaurant = new Restaurant({
            restaurantName,
            ownerId: restaurantUser._id,
            address,
            imageUrl,
            rating:0,
            totalRatings:0
        })

        await restaurant.save();

        return res.status(201).json({message:"Restarant Sucessfully registered"})
    } catch(error){
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

const loginRestaurant = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email,userType:"restaurant"});
        if(!user){
            return res.status(404).json({message:"Restaurant User not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"});
        }

        return res.status(200).json({message:"Restaurant login sucessful"});

    } catch(error){
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export {registerRestaurant,loginRestaurant};