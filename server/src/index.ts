import express, { Request, Response } from 'express';

const app = express();
const port = 5001;

app.use(express.json());

app.get('/api/items', (req: Request, res: Response) => {
  const search = req.query.search as string;
  // Implement search logic here
  res.json({ results: [] });
});

app.get('/api/items/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  // Implement logic to get item details by id
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
