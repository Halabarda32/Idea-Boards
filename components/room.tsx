'use client'

import { ReactNode } from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'

interface RoomProps {
	children: ReactNode
	roomId: string
    fallback: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
	return (
		<LiveblocksProvider publicApiKey={'pk_dev_iNML-D2bs_LMuWagfEJkSw1vUnc7cq_0mu762Zq90hX1ICizbYegPLjgx6XOTwp9'}>
			<RoomProvider id={roomId}>
				<ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	)
}
