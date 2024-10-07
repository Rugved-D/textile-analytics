import mongoose from "mongoose";

const { Schema } = mongoose;

const tradeSchema = new Schema({
  L3: {
    type: String,
    required: true,
  },
  Reporter: {
    type: String,
    required: true,
  },
  Partner: {
    type: String,
    required: true,
  },
  Reporter_Total_Imports: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Partner_Total_Imports: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Reporter_Total_Exports: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Partner_Total_Exports: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Ind1: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Ind2: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Ind3: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  Ind4: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
});

// Create the model
const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;
