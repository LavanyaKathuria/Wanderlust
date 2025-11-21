const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: {
    url:String,
    filename:String,
  },
  price: {
    type: Number,
    min: 0
  },
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review" 
    }
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  geometry:{
    type:{
      type:String,
      enum:['Point'],
      required:true
    },
    coordinates:{
      type:[Number],
      required:true
    }
  },
});

// FIXED: Import Review model inside the middleware to avoid circular dependency
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    const Review = require("./review"); // Import here
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;