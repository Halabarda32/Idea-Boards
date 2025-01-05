import Hint from '@/components/hint'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface AvatarProps {
	src?: string
	name?: string
	fallback?: string
	borderColor?: string
}

export const UserAvatar = ({ borderColor, fallback, name, src }: AvatarProps) => {
	return (
		<Hint label={name || 'Annonymous'} side="bottom" sideOffset={18}>
			<Avatar className="h-9 w-9 border-2 cursor-default" style={{ borderColor }}>
				<AvatarImage src={src} />
				<AvatarFallback className="text-sm font-semibold">{fallback}</AvatarFallback>
			</Avatar>
		</Hint>
	)
}
