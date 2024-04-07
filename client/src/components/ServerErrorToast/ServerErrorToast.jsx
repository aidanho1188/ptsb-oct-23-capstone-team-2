import {useEffect} from 'react'
import {useToast} from '@/components/ui/use-toast'

function ServerErrorToast() {
  const {toast} = useToast()

  useEffect(() => {
    toast({
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
    })
  }, [toast])

  return null
}

export default ServerErrorToast
