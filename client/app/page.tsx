'use client'

import { ChangeEvent, useState } from 'react'
import { useNotes } from '../hooks/useNotes'
import NoteCard from '../components/NoteCard'
import { validator } from '../../src/validation/validator'
import { noteSchema } from '../../src/validation/noteValidation'
import { ToastContainer, toast } from 'react-toastify'
import INote from '../../src/interfaces/noteInterface'

export default function Home() {
  const { notes, addNote } = useNotes()

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validate = await validator({
      schema: noteSchema,
      data: { title, content }
    })

    if (!validate.isValid) {
      toast.error(validate.error)
      return
    }

    try {
      await addNote({ title, content } as INote)
      toast.success('Note added successfully!')
      setTitle('')
      setContent('')
    } catch (error) {
      toast.error('Failed to add note')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Notes</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          className="border p-2"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="Title"
        />
        <input
          className="border p-2 ml-2"
          value={content}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          placeholder="Content"
        />
        <button className="ml-2 bg-blue-500 text-white p-2" type="submit">
          Add
        </button>
      </form>
      <div className="grid gap-4">
        {notes.map((note: INote, index: number) => (
          <NoteCard key={index} {...note} />
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}
