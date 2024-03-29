// server.js

import express from "express";
import cors from "cors";
import courseAPI from "./models/course.js";
import("./db/conn.js");

const app = express();
const port = 3000;

// Middleware
app.use(
    cors(
         {
      origin: ["https://course-ap.vercel.app/"],
      methods: ["POST", "GET"],
       credentials: true,    
         }
    )
);


// {
//         origin: [],
//         methods: ["POST", "GET"],
//         credentials: true,
//     }
app.use(express.json());

app.post("/courses", async (req, res) => {
    try {
        const data = await courseAPI.create(req.body);
        console.log(data);
        res.status(201).json(data);
        // res.status(201).json(added);
    } catch (e) {
        console.log(e);
    }
});
app.get("/courses/:data", async (req, res) => {
    try {
        const courseID = req.params.data;
        console.log(courseID);
        const response = await courseAPI.findOne({ courseId: courseID });
        console.log(response);
        if (!response) {
            return res.status(400).send("Task By courseId Not Found");
        }
        res.status(201).send(response);
    } catch (e) {
        console.log(e);
        res.status(404).json({ error: e.message });
    }
});
// MongoDB Connection URL
// mongodb+srv://second-vercel:s6FtQfDNZvcJYqb5@cluster2.dj2va59.mongodb.net/
// Connect to MongoDB
// s6FtQfDNZvcJYqb5;
// 14.97.224.30
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
