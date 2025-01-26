'use client'

import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface NewBoardButtonProps {
	orgId: string
	disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
	const { mutate, pending } = useApiMutation(api.board.create)
	const router = useRouter()
	const onClick = () => {
		mutate({
			orgId,
			title: 'Untitled',
		})
			.then(id => {
				toast.success('Board created')
				router.push(`/board/${id}`)
			})
			.catch(() => toast.error('Falield to create board'))
	}

	return (
		<button
			disabled={disabled || pending}
			onClick={onClick}
			className={cn(
				'group col-span-1 aspect-[100/127] bg-[hsl(210,40%,96.1%)] rounded-lg hover:bg-yellow-500/20 hover:scale-[1.02] flex flex-col items-center justify-center py-6 transition',
				(disabled || pending) && 'opacity-40 cursor-not-allowed'
			)}>
			<div></div>
			<Plus className="h-12 w-12 text-black stroke-1 group-hover:scale-105 transition" />
			<p className="text-sm text-black group-hover:scale-105 transition">New board</p>
		</button>
	)
}
