import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const apiKey = "f786c764d047470991d8fe16e88eb25f";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/matches",
      { headers: { "X-Auth-Token": apiKey } }
    );
    // const result = response.data;
    res.render("index.ejs", { games: response });
    //
  } catch (error) {
    console.log("aa ", error);
    res.status(500).send("Failed to fetch match data.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
