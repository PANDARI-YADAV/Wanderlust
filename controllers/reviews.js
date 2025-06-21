const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async(req,res)=>{
  let listing= await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author=req.user._id;
  listing.reviews.push(newReview);
  await newReview.save() ;
  await listing.save();
  req.flash("success","New Review Created")
  res.redirect(`/listings/${listing._id}`);
};


module.exports.destroyReview = async(req,res)=>{
  const {id,reviewId} = req.params;

  await Listing.findByIdAndUpdate(id, { $pull : { reviews : reviewId}});
  await Review.findById(reviewId);
  req.flash("success","Review Deleted")
  res.redirect(`/listings/${id}`);
};

module.exports.ReviewDeleteUrl = async (req, res) => {
  const { id, reviewId } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  const review = await Review.findById(reviewId);
  if (!listing || !review) {
    throw new ExpressError(404, "Listing or review not found");
  }
  res.render("listings/show.ejs", { listing, review });
};