const { Schema, model } = require("mongoose");

const CelebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const CelebrityModel = model("Celebrity", CelebritySchema);
module.exports = CelebrityModel;
