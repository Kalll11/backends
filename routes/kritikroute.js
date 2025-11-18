const express = require("express");
const router = express.Router();
const KritikSaran = require("../models/kritiksaran");

// POST — Menyimpan kritik
router.post("/", async (req, res) => {
  try {
    const { nama, pesan } = req.body;
    const data = new KritikSaran({ nama, pesan });
    await data.save();
    res.json({ success: true, message: "Berhasil mengirim kritik!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET — Menampilkan seluruh kritik
router.get("/", async (req, res) => {
  try {
    const data = await KritikSaran.find().sort({ tanggal: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
