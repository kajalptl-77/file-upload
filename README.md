User API – Node.js + Express + Azure Blob Storage
This project provides a backend API built with Node.js, Express, Multer, and Azure Blob Storage.
It allows users to upload a profile photo, which is stored in Azure Blob Storage.
Live URL:
https://file-upload-seven-phi.vercel.app/
Features:
- Upload profile photos
- Store images in Azure Blob Storage
- Uses Multer memory storage
- Simple API endpoint: POST /api/user
Installation:
1. git clone
2. npm install
3. Create .env file with environment variables
4. npm start
Environment Variables (.env):
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=
AZURE_CONNECTION_STRING=
USER_PHOTO_CONTAINER=user-photo
API:
POST /api/user
Fields:
- user_name (text)
- photo (file)
Example Response:
{
"status": true,
"message": "User created successfully!",
"data": {
"user_name": "John",
"photo_url": ""
}
}