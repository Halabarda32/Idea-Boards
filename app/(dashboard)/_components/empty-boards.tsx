'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import Image from 'next/image'
import { useOrganization } from '@clerk/clerk-react'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { toast } from 'sonner'

export const EmptyBoards = () => {
	const router = useRouter()
	const { organization } = useOrganization()
	const { mutate, pending } = useApiMutation(api.board.create)

	const onClick = () => {
		if (!organization) return
		mutate({
			orgId: organization?.id,
			title: 'Untitled',
		})
			.then(id => {
				toast.success('Board created')
				router.push(`/board/${id}`)
			})
			.catch(() => toast.error('Failed to create board'))
	}

	return (
		<div className="h-full flex flex-col justify-center items-center">
			<Image src="/noBoards.svg" alt="no favorites icon" width={400} height={400}></Image>
			<h2 className="text-2xl font-semibold mt-6">No boards at all!</h2>
			<p className="text-muted-foreground text-sm mt-2">Start by creating a board for your organization</p>
			<div className="mt-6">
				<Button disabled={pending} onClick={onClick} size="lg">
					Create board
				</Button>
			</div>
		</div>
	)
}
