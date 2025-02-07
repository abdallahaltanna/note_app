import { NextFunction, Request, Response } from 'express'
import INote from '../interfaces/noteInterface'
import { noteSchema } from '../validation/noteValidation'
import { validator } from '../validation/validator'
import GenericError from '../errors/genericError'

const notes: INote[] = []

export const getNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      status: 'success',
      notes
    })
  } catch (error: unknown) {
    const exception = error as Error

    if (exception.name !== 'GenericError') return next(exception)
    res.status(400).json({ status: 'error', message: exception.message })
  }
}

export const createNote = async (
  req: Request<{}, {}, INote>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body

    const validate = await validator({
      schema: noteSchema,
      data: { title, content }
    })

    if (!validate.isValid) {
      throw new GenericError(validate.error)
    }

    notes.push({ title, content })
    res.status(201).json({ status: 'success', message: 'Note added' })
  } catch (error) {
    const exception = error as Error

    if (exception.name !== 'GenericError') return next(exception)
    res.status(400).json({ status: 'error', message: exception.message })
  }
}
