import { BlobServiceClient } from "@azure/storage-blob";
import dotenv from "dotenv";

dotenv.config();

export const blobService = BlobServiceClient.fromConnectionString(
  process.env.AZURE_CONNECTION_STRING
);

export const containerClient = blobService.getContainerClient(
  process.env.USER_PHOTO_CONTAINER.trim()
);
