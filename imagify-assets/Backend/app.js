import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import userRouter from './routes/userRoutes.js';


import connectDB from './config/mongodb.js';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(cors());
dotenv.config();

await connectDB();

app.use('/api/users', userRouter);
app.get('/', (req, res) => res.send('Imagify Backend is running'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});