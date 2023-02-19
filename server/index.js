import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";
import env from "dotenv";

const app = express();

//MidleWare
env.config();
app.use(cors());
app.use(bodyParser.json());

//Configure Open api
const configuration = new Configuration({
  organization: "org-umeGq29kSQiRoPY4xd5hiRPG",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//Generate Test
app.post("/", async (req, res) => {
  try {
    const { topic, questionCount, difficulty } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create  ${questionCount} ${topic} multiple-choice questions with 4 choices ,${difficulty} difficulty level , and provide the answer at the end of each question split each choices with 'enter' keyword .   
      `,
      max_tokens: 4000,
      temperature: 0.5,
    });

    const message = response.data.choices[0].text.split("\n");
    console.log(message)
    const questions = [];
    for (let i = 1; i <= questionCount; i++) {
      const questionIndex = i * 7 - 6;

      const question = message[questionIndex];
      const options = [
        message[questionIndex + 1],
        message[questionIndex + 2],
        message[questionIndex + 3],
        message[questionIndex + 4],
      ];
      const answer = message[questionIndex + 5];

      const questionObj = {
        id: i,
        question,
        options,
        answer,
      };

      questions.push(questionObj);
    }

    res.json(questions);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.listen(3080, () => {
  console.log(`KALKTIM ISTE DOSTUM YUZUN GULSUN`);
});