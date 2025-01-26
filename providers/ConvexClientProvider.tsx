'use client'

import { useEffect } from 'react'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from 'convex/react'
import { Loading } from '@/components/atoms/loading/loading'

interface ConvexClientProviderProps {
	children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!
const convex = new ConvexReactClient(convexUrl)

const appearance = {
	elements: {
		card: 'bg-white shadow-lg rounded-lg p-6',
		headerTitle: 'text-2xl font-bold text-gray-800',
		headerSubtitle: 'text-sm text-gray-600',
		socialButtonsBlockButton: 'hover:bg-yellow-500/20 text-gray-900 font-semibold py-2 px-4 rounded',
		buttonPrimary: 'bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded',
		input: 'rounded py-2 px-4',
	},
}

const localization = {
	signIn: {
		start: {
			title: 'Welcome to Idea Boards!',
			subtitle: 'Please sign in to continue',
		},
	},
}

const AuthenticatedWrapper = ({ children }: { children: React.ReactNode }) => {
	const { isLoaded, isSignedIn } = useAuth()

	useEffect(() => {
		if (isLoaded && !isSignedIn) {
			setTimeout(() => {
				alert('login: yohos82240@evnft.com password: IdeaBoard12345!')
			}, 500)
		}
	}, [isLoaded, isSignedIn])

	return (
		<>
			<AuthLoading>
				<Loading />
			</AuthLoading>
			<Authenticated>{children}</Authenticated>
			<Unauthenticated>{children}</Unauthenticated>
		</>
	)
}

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
	return (
		<ClerkProvider publishableKey={publishableKey} appearance={appearance} localization={localization}>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				<AuthenticatedWrapper>{children}</AuthenticatedWrapper>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	)
}
