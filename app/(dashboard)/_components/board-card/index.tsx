'use client'

import { Overlay } from './overlay'
import { Footer } from './footer'
import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { useAuth } from '@clerk/nextjs'
import { Skeleton } from '@/components/ui/skeleton'
import { Actions } from '@/components/actions'
import { MoreHorizontal } from 'lucide-react'

interface BoardCardProps {
	id: string
	title: string
	imageUrl: string
	authorId: string
	authorName: string
	createdAt: string
	orgId: string
	isFavorite: boolean
}

export const BoardCard = ({
	id,
	title,
	authorId,
	authorName,
	createdAt,
	imageUrl,
	isFavorite,
	orgId,
}: BoardCardProps) => {
	const { userId } = useAuth()
	const authorLabel = userId === authorId ? 'You' : 'Author name'
	const createAtLabel = formatDistanceToNow(createdAt, {
		addSuffix: true,
	})

	return (
		<Link href={`/board/${id}`}>
			<div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
				<div className="relative flex-1 bg-amber-50">
					<Image src={imageUrl} alt={title} fill className="object-fit group-hover:scale-110 transition duration-500" />
					<Overlay />
					<Actions id={id} title={title} side="right">
						<button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
							<MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
						</button>
					</Actions>
				</div>
				<Footer
					isFavorite={isFavorite}
					title={title}
					authorLabel={authorLabel}
					createdAtLabel={createAtLabel}
					onClick={() => {}}
					disabled={false}
				/>
			</div>
		</Link>
	)
}

BoardCard.Skeleton = function BoardCardSkeleton() {
	return (
		<div className="aspect-[100/127] rounded-lg justify-between overflow-hidden">
			<Skeleton className="h-full" />
		</div>
	)
}