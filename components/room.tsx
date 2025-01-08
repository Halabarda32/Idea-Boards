'use client'

import { LiveList, LiveMap, LiveObject } from '@liveblocks/client'
import { ReactNode } from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import { Layer, Color } from '@/types/canvas'

interface RoomProps {
	children: ReactNode
	roomId: string
	fallback: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
	//TODO: initialStorage is set to default

	return (
		<LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
			<RoomProvider
				id={roomId}
				initialPresence={{ cursor: null, selection: [] }}
				initialStorage={{
					layers: new LiveMap<string, LiveObject<Layer>>([]),
					layerIds: new LiveList([]),
				}}>
				<ClientSideSuspense fallback={fallback}>{() => children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	)
}
