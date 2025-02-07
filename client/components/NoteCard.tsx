import React from 'react'
import INote from '../../src/interfaces/noteInterface'

interface NoteCardProps extends INote {}

const NoteCard: React.FC<NoteCardProps> = ({ title, content }) => (
  <div className="p-4 border rounded shadow">
    <h3>
      <strong className="font-bold">Title:</strong> {title}
    </h3>
    <p>
      <strong className="font-bold">Content:</strong> {content}
    </p>
  </div>
)

export default NoteCard
