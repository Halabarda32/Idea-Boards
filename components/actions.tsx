'use client'

import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'
import { Link2, Pencil, Trash2 } from 'lucide-react'
import { useApiMutation } from '@/hooks/use-api-mutation'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'
import { api } from '@/convex/_generated/api'
import { ConfirmModal } from './confirm-modal'
import { Button } from '@/components/ui/button'
import { useRenameModal } from '@/store/use-rename-modal'

interface ActionsProps {
	children: React.ReactNode
	side?: DropdownMenuContentProps['side']
	sideOffset?: DropdownMenuContentProps['sideOffset']
	id: string
	title: string
}

export const Actions = ({ children, id, title, side, sideOffset }: ActionsProps) => {
	const { onOpen } = useRenameModal()
	const { mutate, pending } = useApiMutation(api.board.remove)

	const onCopyLink = () => {
		navigator.clipboard
			.writeText(`${window.location.origin}/board/${id}`)
			.then(() => toast.success('Link copied to clipboard'))
			.catch(() => toast.error('Failed to copy link'))
	}

	const onDelete = () => {
		mutate({ id })
			.then(() => toast.success('Board deleted'))
			.catch(() => toast.error('Failed to delete board'))
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent side={side} sideOffset={sideOffset} onClick={e => e.stopPropagation()} className="w-60">
				<DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
					<Link2 className="h-4 w-4 mr-2" />
					Copy board link
				</DropdownMenuItem>
				<DropdownMenuItem className="p-3 cursor-pointer" onClick={() => onOpen(id, title)}>
					<Pencil className="h-4 w-4 mr-2" />
					Rename
				</DropdownMenuItem>
				<ConfirmModal
					header="Are you sure you want to remove the board?"
					description="This will delete the board and all of its contents"
					disabled={pending}
					onConfirm={onDelete}>
					<Button
						variant="ghost"
						className="p-3 min-w-[230px] cursor-pointer text-sm rounded-sm justify-start font-normal">
						<Trash2 className="h-4 w-4 mr-2" />
						Delete
					</Button>
				</ConfirmModal>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
