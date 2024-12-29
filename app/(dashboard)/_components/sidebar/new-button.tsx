'use client'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Hint from '@/components/hint'

export const NewButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="aspect-square">
					<Hint label="Create organization" side="right" align="start" sideOffset={18}>
						<button className="h-full w-full bg-white/25 rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition z-20">
							<Plus className="text-white" />
						</button>
					</Hint>
				</div>
			</DialogTrigger>
			<DialogContent className="p-0 bg-transparent border-none max-w-[430px]">
				<CreateOrganization />
			</DialogContent>
		</Dialog>
	)
}
