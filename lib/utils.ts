import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F4D03F', '#8E44AD', '#2ECC71']

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
	return colors[connectionId % colors.length]
}
