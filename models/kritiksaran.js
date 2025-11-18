const mongoose = require("mongoose");

const KritikSaranSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  pesan: { type: String, required: true },
  tanggal: { type: Date, default: Date.now }
});

module.exports = mongoose.model("KritikSaran", KritikSaranSchema);
