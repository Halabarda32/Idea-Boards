'use client'

import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'

interface NewBoardButtonProps {
	orgId: string
	disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
	const { mutate, pending } = useApiMutation(api.board.create)
	const onClick = () => {
		mutate({
			orgId,
			title: 'Untitled',
		})
			.then(id => toast.success('Board created'))
			.catch(() => toast.error('Falield to create board'))
	}

	return (
		<button
			disabled={disabled || pending}
			onClick={onClick}
			className={cn(
				'group col-span-1 aspect-[100/127] bg-gray-400 rounded-lg hover:bg-gray-500 hover:scale-[1.02] flex flex-col items-center justify-center py-6 transition',
				(disabled || pending) && 'opacity-40 cursor-not-allowed'
			)}>
			<div></div>
			<Plus className="h-12 w-12 text-white stroke-1 group-hover:scale-105 transition" />
			<p className="text-sm text-white font-light group-hover:scale-105 transition">New board</p>
		</button>
	)
}
