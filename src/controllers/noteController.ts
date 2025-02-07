import { Request, Response } from 'express'

export const getNotes = (req: Request, res: Response) => {
  res.send('Get all notes')
}

export const createNote = (req: Request, res: Response) => {
  res.send('Create a note')
}
