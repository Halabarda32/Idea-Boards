import type { Metadata } from 'next'
import './globals.css'
import { ConvexClientProvider } from '@/providers/ConvexClientProvider'
import { SignedIn } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import { ModalProvider } from '@/providers/modal-provider'

export const metadata: Metadata = {
	title: 'Idea Boards',
	description: 'Collaborative, real-time whiteboard.',
	icons: {
		icon: '/logo.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<ConvexClientProvider>
					<header>
						<SignedIn>{/* <UserButton /> */}</SignedIn>
					</header>
					<main>
						<Toaster />
						<ModalProvider />
						{children}
					</main>
				</ConvexClientProvider>
			</body>
		</html>
	)
}
