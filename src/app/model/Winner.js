const mongoose = require("mongoose");

const winnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Completa el campo"],
      enum: ["Francisco Perez", "Gonzalo Posse"],
    },
    score: {
      type: Number,
      required: [true, "Completa el campo"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports =
  mongoose?.models?.Winner || mongoose.model("Winner", winnerSchema);
