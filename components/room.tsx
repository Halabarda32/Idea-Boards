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

	return (
		<LiveblocksProvider authEndpoint="/api/liveblocks-auth">
			<RoomProvider id={roomId}>
				<ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	)
}
