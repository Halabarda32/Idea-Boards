import Image from 'next/image'

export const EmptyFavorites = () => {
	return (
		<div className="h-full flex flex-col justify-center items-center">
			<Image src="/noFav.svg" alt="no favorites icon" width={200} height={200}></Image>
			<h2 className="text-2xl font-semibold mt-6">No favorites boards!</h2>
			<p className="text-muted-foreground text-sm mt-2">Add board to favorites</p>
		</div>
	)
}
