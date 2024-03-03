// Assuming you've adjusted your project structure to handle API routes under /src/app/api

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DOMAIN_ENDPOINT = process.env.DOMAIN_ENDPOINT;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Encode credentials
    const credentials = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');
    try {
      const { data } = await axios.post(`${DOMAIN_ENDPOINT}/restaurants/_doc`, req.body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        },
      });
      console.log(req.body)
      res.status(201).json(data);
    } catch (error) {
      console.error('Error posting to OpenSearch:', error);
      res.status(500).json({ error: 'Error posting to OpenSearch' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
