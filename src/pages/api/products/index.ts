import { prisma } from '@/utils/db/db';
import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const method = req.method;
    if (method === "GET") {
        const res_products = await prisma.product.findMany();
        return res.status(200).send(res_products);
    }
  res.status(405).send("Invalid request.")
}