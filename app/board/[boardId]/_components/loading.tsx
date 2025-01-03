import { Loader } from 'lucide-react'
import { Info } from './info'
import { Participants } from './participants'
import { Toolbar } from './toolbar'

export const Loading = () => {
	return (
		<div>
			<main className="min-h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center">
				<Loader className="h6- w-6 text-muted-foreground animate-spin" />
				<Info.Skeleton />
				<Participants.Skeleton />
				<Toolbar.Skeleton />
			</main>
		</div>
	)
}
