import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const users = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json(users);
};