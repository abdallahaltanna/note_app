'use client'
import { useState, useEffect } from 'react'
import INote from '../../src/interfaces/noteInterface'
import axios from '../axios'

interface UseNotesReturn {
  notes: INote[]
  addNote: (note: INote) => Promise<void>
}

export const useNotes = (): UseNotesReturn => {
  const [notes, setNotes] = useState<INote[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get<{ notes: INote[] }>('/api/notes')
      setNotes(data.notes)
    }
    fetchNotes()
  }, [])

  const addNote = async (note: INote): Promise<void> => {
    await axios.post<INote>('/api/notes', note)
    setNotes((prev) => [...prev, note])
  }

  return { notes, addNote }
}
