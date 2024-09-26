import { Request, Response } from 'express';

import { GetItemsResponseType } from '../domain/use-cases/get-items.use-case';
import { itemController } from '../domain/item.controller';

export const getItems = async (req: Request<{}, {}, {}, { q: string }>, res: Response<GetItemsResponseType | {error: string}>) => {
  const query = req.query.q

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const items = await itemController.getAll({ query })

    res.json(items);
  } catch (error) {
    res.status(500).json( {error: 'Internal Server Error'} );
  }
};

