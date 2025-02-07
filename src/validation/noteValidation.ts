import * as yup from 'yup'

export const noteSchema = yup.object().shape({
  title: yup.string().min(3).max(50).required(),
  content: yup.string().min(3).max(200).required()
})
