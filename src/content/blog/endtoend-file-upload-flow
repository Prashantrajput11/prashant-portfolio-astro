---
title: "High level overview of How to upload file using expo image picker, multer and cloudinary"
description: "Lorem ipsum dolor sit amet"
pubDate: "Aug 31 2025"
# heroImage: "../../assets/blog-placeholder-2.jpg"
slug: /blog/3-years-in-it/
---

The Goal
The goal is to allow a user to upload a file (like an image) from the mobile app, store it securely and efficiently, and link it to their user account in the database.

We can break the system down into four main stages: Client-Side Preparation, the Backend API Handler, Cloud Storage, and the Database Record.

The End-to-End Flow
[User's Phone]  -->  [Your API Server]  -->  [Cloud Storage]  -->  [Your Database]

1. The Frontend: Preparing the File
Before the upload even starts, a robust application should perform several key steps on the client side.

File Selection: The user selects an image using a library like expo-image-picker.

Client-Side Validation: The app should immediately check the file's size and type. If a user selects a 50MB video when you only allow 5MB images, you should tell them immediately, before they waste time and data trying to upload it.

Image Resizing (Crucial Optimization): For images, you should almost always resize them on the device before uploading. Using a library like expo-image-manipulator to scale a 4000px photo down to 800px drastically reduces the file size. This leads to faster uploads, less data usage for the user, and less processing load on your server.

Packaging the Data: The app packages the resized image file and any other form data (like title, caption) into a multipart/form-data payload using the FormData API.

2. The Backend: Receiving and Processing the File
The frontend sends the FormData to your API server.

Receiving the Upload: Your Express server uses a middleware library, multer, to handle the incoming multipart/form-data stream. This is multer's only job.

Storage Strategy: You configure multer to use memoryStorage. This is a key decision. Instead of saving the file to your server's disk (which is slow and inefficient), memoryStorage holds the entire file in RAM as a buffer. This is perfect for when you plan to immediately send the file somewhere else.

Authentication & Authorization: Your protect middleware runs first to ensure the user is logged in and has permission to upload files.

3. The Cloud: Permanent, Scalable Storage
This is a critical architectural decision. You should almost never store user-uploaded files directly on your API server's hard drive. This doesn't scale, and the files can be lost when you redeploy your server.

The Solution: Your backend server takes the file buffer from multer and immediately uploads it to a dedicated cloud object storage service.

Examples: AWS S3, Google Cloud Storage, or a media-focused service like Cloudinary.

The Process: Using the cloud provider's SDK (e.g., the Cloudinary Node.js library), your server streams the file buffer to the cloud. The cloud service is optimized for storing and serving large files globally.

4. The Database: Storing the Reference
Once the file is successfully uploaded to the cloud service, that service gives you back a permanent, public URL for the file (e.g., a res.cloudinary.com/... link).

The Final Step: Your server now takes this URL string and saves it in your main database (MongoDB) as part of the new "Book" document, along with the title, caption, and the userId from your protect middleware.

You store the URL in your database, not the file itself. This keeps your database small and fast, while the heavy lifting of file storage and delivery is handled by the specialized cloud service. The server then sends a success response back to the client with the data for the new book, including the new image URL.
