import express from 'express'

import noteRoute from './noteRoute'

const router = express.Router()

router.use('/notes', noteRoute)

export default router
