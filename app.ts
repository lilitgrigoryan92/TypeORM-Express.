import express from "express";
import { Request, Response } from "express";
import { UsersEntity } from "./users.entity";
import { getUser, createUser } from "./users.service";

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(express.json());

app.get('/getUser', async (req: Request, res: Response) => {
  try {
    const data = await getUser('Betty');
    res.send(data);
  } catch (error) {
    res.status(500).send('Error');
  }
});

app.post('/createUser', async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const user = await createUser(body.name, body.age);
    res.send(`${user.name} created`);
  } catch (error) {
    res.status(500).send('Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


  
