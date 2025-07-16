// File: controllers/cartController.js
import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// ✅ Add Item to Cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId });

    // ✅ Check and delete empty cart
    if (cart && cart.items.length === 0) {
      await Cart.findByIdAndDelete(cart._id);
      cart = null; // Reset for new cart creation
    }

    if (cart) {
      // ✅ Debug: Log restaurant IDs
      console.log("🛒 Cart.restaurantId:", cart.restaurantId.toString());
      console.log("🍔 Product.restaurantId:", product.restaurantId.toString());

      // ✅ Check if same restaurant
      if (cart.restaurantId.toString() !== product.restaurantId.toString()) {
        console.log("Mismatch in restaurantId:", cart.restaurantId, product.restaurantId);
        return res.status(400).json({ message: "Cart contains items from another restaurant. Clear cart first." });
      }

      // ✅ Check if product exists
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

    } else {
      // ✅ Create new cart
      cart = new Cart({
        userId,
        restaurantId: product.restaurantId,
        items: [{ productId, quantity }]
      });
    }

    // ✅ Recalculate totalPrice
    let total = 0;
    for (const item of cart.items) {
      const p = await Product.findById(item.productId);
      total += p.price * item.quantity;
    }
    cart.totalPrice = total;

    await cart.save();
    return res.status(200).json({ message: "Added to cart", cart });

  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// ✅ Get Cart Items
const getCartItems = async (req, res) => {
  try {
    const { userId } = req.query;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart is empty" });
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete Product from Cart
const deleteFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex === -1) return res.status(404).json({ message: "Product not in cart" });

    cart.items.splice(itemIndex, 1);

    // ✅ Recalculate total
    let total = 0;
    for (const item of cart.items) {
      const p = await Product.findById(item.productId);
      total += p.price * item.quantity;
    }
    cart.totalPrice = total;

    if (cart.items.length === 0) {
      await Cart.findByIdAndDelete(cart._id);
      return res.status(200).json({ message: "Cart is now empty" });
    }

    await cart.save();
    return res.status(200).json({ message: "Item removed", cart });

  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export { addToCart, getCartItems, deleteFromCart };