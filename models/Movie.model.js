const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [String],
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const MovieModel = model("Movie", MovieSchema);
module.exports = MovieModel;
