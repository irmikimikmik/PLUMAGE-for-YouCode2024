import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

const usersFilePath = path.join(process.cwd(), 'public/mocks/userProfiles.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Attempt to read the existing users file or default to an empty array if it's not possible
      let users;
      try {
        const fileData = fs.readFileSync(usersFilePath, 'utf8');
        users = JSON.parse(fileData || '[]');
      } catch {
        users = []; // Default to an empty array if there's an error
      }

      // Add the new user
      const { username, email, password } = req.body;
      const newUser = {
        id: crypto.randomBytes(16).toString('hex'),
        username,
        email,
        password, // Remember to hash passwords in a real application
      };
      users.push(newUser);

      // Save the updated users back to the file
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');

      // Return a success response
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Failed to register user:', error);
      res.status(500).json({ message: 'Error reading or parsing the JSON file!' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
