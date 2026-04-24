let tasks = [
    { id: 1, title: 'Primera tarea', done: false },
  ]
  
  export const getTasks = async () => {
    return new Promise((res) => setTimeout(() => res([...tasks]), 500))
  }
  
  export const addTask = async (task) => {
    tasks.push(task)
    return task
  }