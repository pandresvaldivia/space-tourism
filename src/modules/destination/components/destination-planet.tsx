import { component$ } from '@builder.io/qwik';
import { useDestinationContext } from '../providers/destination';
import destinationPlanetStyles from '@styles/modules/destination/destination-planet.module.css';

export const DestinationPlanet = component$(() => {
	const { value } = useDestinationContext();
	const { image } = value.data!.Destination;
	const { alt, height, width, url } = image;

	return (
		<div class="flex flex-col items-center mb-7">
			<h2 class="flex gap-4 text-white font-barlow-condensed tracking-subtitle uppercase mb-8">
				<span class="opacity-25">01</span>
				<span>Pick your destination</span>
			</h2>
			<img
				src={url}
				alt={alt}
				height={height}
				width={width}
				class={[destinationPlanetStyles.image, 'aspect-square']}
			/>
		</div>
	);
});
