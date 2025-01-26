'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/clerk-react'
import { LayoutDashboard, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'

const fonts = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

export const OrgSidebar = () => {
	const searchParams = useSearchParams()
	const favorites = searchParams.get('favorites')

	return (
		<div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 top-0 left-0 h-lvh">
			<Link href="/">
				<div className="flex items-center gap-x-2">
					<Image src="/logo.svg" alt="Logo" height={60} width={60}></Image>
					<span className={cn('font-semibold', 'text-2xl', fonts.className)}>
						Idea <br />
						Board
					</span>
				</div>
			</Link>
			<OrganizationSwitcher
				hidePersonal
				appearance={{
					elements: {
						rootBox: {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
						},
						organizationSwitcherTrigger: {
							padding: '6px',
							width: '100%',
							borderRadius: '8px',
							border: '1px solid #E5E7EB',
						},
					},
				}}
			/>
			<div className="space-y-1 w-full">
				<Button
					asChild
					size="lg"
					className="font-normal justify-start px-2 w-full"
					variant={favorites ? 'board' : 'boardActive'}>
					<Link href="/">
						<LayoutDashboard className="h-4 w-4 mr-2" />
						Team boards
					</Link>
				</Button>
				<Button
					asChild
					size="lg"
					className="font-normal justify-start px-2 w-full"
					variant={favorites ? 'boardActive' : 'board'}>
					<Link
						href={{
							pathname: '/',
							query: {
								favorites: true,
							},
						}}>
						<Star className="h-4 w-4 mr-2" />
						Favorite boards
					</Link>
				</Button>
			</div>
		</div>
	)
}
