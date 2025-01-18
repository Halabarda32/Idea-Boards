'use client'

import { LiveList, LiveMap, LiveObject } from '@liveblocks/client'
import { ReactNode } from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import { Layer } from '@/types/canvas'
import { Loading } from '@/app/board/[boardId]/_components/loading'

interface RoomProps {
	children: ReactNode
	roomId: string
	fallback: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId }: RoomProps) => {
	return (
		<LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
			<RoomProvider
				id={roomId}
				initialPresence={{ cursor: null, selection: [], pencilDraft: null, pencilColor: null }}
				initialStorage={{
					layers: new LiveMap<string, LiveObject<Layer>>([]),
					layerIds: new LiveList([]),
				}}>
				<ClientSideSuspense fallback={<Loading />}>{() => children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	)
}
