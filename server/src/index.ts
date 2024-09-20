import express, { Request, Response } from 'express';

import { GetItemsResponseType } from './items/use-cases/get-items.use-case'
import { GetItemResponseType } from './items/use-cases/get-item.use-case'
import { itemController } from './items/item.controller'

import cors from 'cors'

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors())

app.get('/api/items', async (req: Request<{}, {}, {}, { q: string }>, res: Response<GetItemsResponseType>) => {
  const query = req.query.q

  if (!query) {
    //return res.status(400).json({ error: 'Query parameter is required' });
    new Error('Query parameter bad')
  }

  const items = await itemController.getAll({ query })

  res.json(items)
});

app.get('/api/items/:id', async (req: Request<{ id: string }>, res: Response<GetItemResponseType>) => { // add type to request params
  const id = req.params.id;

  if (!id) {
    //return res.status(400).json({ error: 'Params is required' });
    new Error('Params bad')
  }

  const item = await itemController.get({ id })

  res.json(item);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
