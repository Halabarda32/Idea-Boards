'use client'

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

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
	return (
		<ClerkProvider publishableKey={publishableKey}>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				<AuthLoading>
					<Loading />
				</AuthLoading>
				<Authenticated>{children}</Authenticated>
				<Unauthenticated>{children}</Unauthenticated>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	)
}
