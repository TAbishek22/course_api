import mongoose from "mongoose";

mongoose
    .connect("mongodb+srv://second-vercel:s6FtQfDNZvcJYqb5@cluster2.dj2va59.mongodb.net/")
    .then(() => console.log("Database is connected"))
    .catch(() => console.log("database is not connected"));
