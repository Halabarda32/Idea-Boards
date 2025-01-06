'use client'

import { ReactNode } from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'

interface RoomProps {
	children: ReactNode
	roomId: string
	fallback: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
	// const liveblocksKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_KEY
	// if (!liveblocksKey) {
	// 	throw new Error('NEXT_PUBLIC_LIVEBLOCKS_KEY is not defined in your environment variables')
	// }

	//TODO: initialStorage is set to default

	return (
		<LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
			<RoomProvider
				id={roomId}
				initialPresence={{ cursor: null }}
				// initialStorage={id => ({
				// 	animals: new LiveList<string>([`Room-${id}-Animal1`]),
				// })}
			>
				<ClientSideSuspense fallback={fallback}>{() => children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	)
}
