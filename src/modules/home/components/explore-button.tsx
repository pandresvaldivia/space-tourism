import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import exploreButtonStyles from '@styles/modules/home/explore-button.module.css';

export const ExploreButton = component$(
	({ text, link }: ExploreButtonProps) => {
		return (
			<Link
				href={link}
				class={[
					exploreButtonStyles.main,
					'relative flex items-center justify-center uppercase text-primary font-bellefair aspect-square',
					'before:absolute before:block before:bg-white before:rounded-full before:w-full before:aspect-square',
				]}
			>
				<span class="relative flex items-center bg-white justify-center h-full aspect-square rounded-full">
					{text}
				</span>
			</Link>
		);
	}
);

type ExploreButtonProps = {
	text: string;
	link: string;
};
