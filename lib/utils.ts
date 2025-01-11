import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Camera, Color } from '@/types/canvas'

const colors = ['#d9b01e', '#2eab44', '#556ee6', '#41bfb3', '#ab61c9', '#db69d2']

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
	return colors[connectionId % colors.length]
}

export function pointerEventToCanvasPoint(e: React.PointerEvent, camera: Camera) {
	return {
		x: Math.round(e.clientX) - camera.x,
		y: Math.round(e.clientY) - camera.y,
	}
}

export function colorToCss(color: Color) {
	return `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`
}
