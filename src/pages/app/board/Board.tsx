import { Kanban } from '@/components/Kanban'
import { Button } from '@/components/ui/Button'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { GoPencil } from 'react-icons/go'
import { useState } from 'react'

const Board = () => {
  const [editMode, setEditMode] = useState(false)
  const [boardTitle, setBoardTitle] = useState('Meu board')

  return (
    <>
      <div className="relative w-full overflow-x-auto">
        <div className="flex items-center justify-between gap-3 px-1 text-foreground">
          <div className="m-5 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-primary">
              {!editMode && boardTitle}
              {editMode && (
                <input
                  value={boardTitle}
                  type="text"
                  autoFocus
                  onChange={(e) => setBoardTitle(e.target.value)}
                  onBlur={() => setEditMode(false)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter') return
                    setEditMode(false)
                  }}
                />
              )}
            </h1>
            <GoPencil
              onClick={() => setEditMode(true)}
              type="button"
              className="ml-2 h-4 w-4 cursor-pointer text-primary"
            />
          </div>
          <div className="m-5">
            <Button
              variant={'outline'}
              type="button"
              className="hover:ring-2 hover:ring-primary"
            >
              Adicionar coluna
              <MdOutlineAddToPhotos className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <Kanban tasks={{ todo: [], inProgress: [], done: [] }} />
      </div>
    </>
  )
}

export { Board }
