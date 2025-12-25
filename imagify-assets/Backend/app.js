import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 8000;
const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Imagify Backend is running'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});