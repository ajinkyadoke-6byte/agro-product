import reviewModel from "../models/reviewModel.js";
import productModel from "../models/productModel.js";

// Add a review — works for both logged-in users and anonymous visitors
const addReview = async (req, res) => {
  try {
    const { productId, name, rating, comment, userId } = req.body;

    if (!productId || !rating || !comment) {
      return res.json({ success: false, message: "Rating and comment are required" });
    }

    const review = new reviewModel({
      productId,
      userId: userId || null,
      name: name && name.trim() ? name.trim() : "Anonymous",
      rating: Number(rating),
      comment,
    });

    await review.save();

    // Recalculate the product's average rating + review count
    const allReviews = await reviewModel.find({ productId });
    const reviewCount = allReviews.length;
    const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount;

    await productModel.findByIdAndUpdate(productId, {
      rating: Math.round(avgRating * 10) / 10, // round to 1 decimal
      reviews: reviewCount,
    });

    res.json({ success: true, message: "Review added", review });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get all reviews for a product
const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await reviewModel.find({ productId }).sort({ createdAt: -1 });
    res.json({ success: true, reviews });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addReview, getReviews };