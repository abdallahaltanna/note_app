import express, { Request, Response } from 'express'

import noteRoute from './noteRoute'

const router = express.Router()

router.use('/notes', noteRoute)

router.use((req: Request, res: Response) => {
  res.status(404).send({ status: 'error', message: 'There is no such route' })
})

export default router
