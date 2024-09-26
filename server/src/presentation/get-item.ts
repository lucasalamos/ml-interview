import { Request, Response } from 'express';

import { GetItemResponseType } from '../domain/use-cases/get-item.use-case';
import { itemController } from '../domain/item.controller';

export const getItem = async (req: Request<{ id: string }>, res: Response<GetItemResponseType | {error: string}>) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).json( {error: 'Params is required'} );
  }

  try {
    const item = await itemController.get({ id })

    res.json(item);
  } catch (error) {
    res.status(500).json( {error: 'Internal Server Error'} );
  }
};


