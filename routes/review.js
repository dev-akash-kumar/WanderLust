const express = require("express");
const router = express({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
// const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");

// Review's Post Route👇
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Review's Delete/Destroy Route👇
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
