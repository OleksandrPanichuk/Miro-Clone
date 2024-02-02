'use client'
import { Cursor, Path } from '@/components/screens/board'
import { colorToCss } from '@/lib/utils'
import { useOthersConnectionIds, useOthersMapped } from '@/liveblocks'
import { shallow } from '@liveblocks/client'
import { memo } from 'react'

const Cursors = () => {
	const ids = useOthersConnectionIds()

	return (
		<>
			{ids.map(connectionId => (
				<Cursor key={connectionId} connectionId={connectionId} />
			))}
		</>
	)
}

const Drafts = () => {
	const others = useOthersMapped(
		other => ({
			pencilDraft: other.presence.pencilDraft,
			penColor: other.presence.penColor,
		}),
		shallow
	)
	return (
		<>
			{others.map(([key, other]) => {
				if (other.pencilDraft) {
					return (
						<Path
							key={key}
							x={0}
							y={0}
							points={other.pencilDraft}
							fill={other.penColor ? colorToCss(other.penColor) : '#000'}
						/>
					)
				}

				return null
			})}
		</>
	)
}

export const CursorsPresence = memo(() => {
	return (
		<>
			<Cursors />
			<Drafts />
		</>
	)
})

CursorsPresence.displayName = 'CursorsPresence'
