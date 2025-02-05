'use client'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface ConfirmModalProps {
	children: React.ReactNode
	onConfirm: () => void
	disabled?: boolean
	header: string
	description?: string
}

export const ConfirmModal = ({ children, header, onConfirm, description, disabled }: ConfirmModalProps) => {
	const handleConfirm = () => {
		onConfirm()
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{header}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						className="bg-red-500 hover:bg-red-600 transiton"
						disabled={disabled}
						onClick={handleConfirm}>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
