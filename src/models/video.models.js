import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSChema = new Schema(
   {
      videoFile: {
         type: String, //cloudinary url
         required: true,
      },
      thumnail: {
         type: String,
         required: true,
      },
      owner: {
         type: Schema.Types.ObjectId,
         ref: "User",
      },
      title: {
         type: String, //cloudinary url
         required: true,
      },
      description: {
         type: String, //cloudinary url
         required: true,
      },

      duration: {
         type: Number,
         required: true,
      },
      views: {
         type: Number,
         default: 0
      },
      isPublished: {
         type: Boolean,
         default: true,
      },
   },
   {
      timestamps: true,
   }
);


videoSchema.plugin(mongooseAggregatePaginate)



export const Video = mongoose.model("Video", videoSchema);
