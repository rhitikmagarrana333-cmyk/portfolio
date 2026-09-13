import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDb from "./src/db/db.js";


    await connectDb();

    app.listen(3000, () => {
        console.log("server is start port no 3000");
    });

