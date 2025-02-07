import express from 'express'

import { getNotes, createNote } from '../controllers/noteController'

const router = express.Router()

router.route('/').get(getNotes).post(createNote)

export default router
