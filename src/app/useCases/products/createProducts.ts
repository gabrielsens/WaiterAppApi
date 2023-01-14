
import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {
  try {
    console.error(req.body);
    // const { icon, name } = req.body;

    // const products = await Product.create({ icon, name });

    //res.status(201).json(products);
  } catch {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}
