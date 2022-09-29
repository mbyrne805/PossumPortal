import mongoose from 'mongoose';

export const TrashResult = mongoose.model("TrashResult", {
  polygon: [{
    longitude: Number,
    latitude: Number
  }],
  grade: String
});