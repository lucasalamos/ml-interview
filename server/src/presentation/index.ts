import express from 'express';
import cors from 'cors'

import { getItems } from './get-items';
import { getItem } from './get-item';

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors())

app.get('/api/items', getItems);
app.get('/api/items/:id', getItem);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
