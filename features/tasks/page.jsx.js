'use client'

import { useTasks } from '@/features/tasks/useTasks'
import { useState } from 'react'

export default function TasksPage() {
  const { tasks, isLoading, error, addTask } = useTasks()
  const [title, setTitle] = useState('')

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>Error...</p>

  return (
    <div>
      <h1>Tareas</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim()) return
          addTask({ id: Date.now(), title, done: false })
          setTitle('')
        }}
      >
        Agregar
      </button>

      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  )
}