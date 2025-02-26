import express, {Request, Response} from 'express';

const router = express.Router();

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {
  res.send({ message: 'Orders delete route' });
});

export { router as deleteOrderRouter };