import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTasks, addTask } from '@/services/tasksService'

export function useTasks() {
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const mutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return {
    tasks: data || [],
    isLoading,
    error,
    addTask: mutation.mutate,
  }
}