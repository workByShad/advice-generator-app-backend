const mongoose = require("mongoose");

const adviceSchema = mongoose.Schema({
  advice_text: {
    type: String,
    required: true,
  },
});

const Advice = mongoose.model("Advice", adviceSchema);

module.exports = Advice;

/*
advice format:
{
  advice: {
    advice_id: "2",
    advice_text:
      "Smile and the world smiles with you. Frown and you're on your own.",
  },
};
*/
