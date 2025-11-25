import express from "express";
import { upload } from "../config/multer.js";
import db from "../config/db.js";
import { containerClient } from "../config/azureBlob.js";

const router = express.Router();

router.post("/user", upload.single("photo"), async (req, res) => {
  try {
    const { user_name } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Photo is required" });
    }

    // Create unique file name inside Azure
    const blobName = `ProfilePhoto/${Date.now()}_${req.file.originalname}`;

    // Create blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Upload file buffer
    await blockBlobClient.upload(req.file.buffer, req.file.buffer.length, {
      blobHTTPHeaders: { blobContentType: req.file.mimetype }
    });

    // Public file URL
    const fileUrl = blockBlobClient.url;

    // Database insert
    const sql = `INSERT INTO tbl_user (user_name, profile_photo) VALUES (?, ?)`;

    db.query(sql, [user_name, fileUrl], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database error" });
      }

      res.json({
        message: "User created successfully",
        user_id: data.insertId,
        photo_url: fileUrl
      });
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error uploading file to Azure" });
  }
});

export default router;
