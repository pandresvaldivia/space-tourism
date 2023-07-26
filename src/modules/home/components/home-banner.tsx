import { component$ } from '@builder.io/qwik';
import homeBannerStyles from '@styles/modules/home/home-banner.module.css';
import { Wrapper } from '@templates';
import { ExploreButton } from './explore-button';

export const HomeBanner = component$(() => {
	return (
		<section
			class={[homeBannerStyles.main, 'min-h-screen pt-28 md:pt-52 lg:pt-0']}
		>
			<Wrapper
				class={[
					homeBannerStyles.wrapper,
					'flex flex-col lg:flex-row gap-20 md:gap-36 items-center lg:items-end lg:justify-between text-center lg:text-left mx-auto h-screen md:pb-20 lg:px-20',
				]}
			>
				<div class="max-w-md">
					<p
						class={[
							homeBannerStyles.subtitle,
							'text-secondary leading-tight font-barlow-condensed mb-4 md:mb-6 tracking-subtitle',
						]}
					>
						SO, YOU WANT TO TRAVEL TO
					</p>
					<h1
						class={[
							homeBannerStyles.title,
							'font-bellefair leading-none lg:leading-tight text-white mb-4 md:mb-6',
						]}
					>
						SPACE
					</h1>
					<p class="text-secondary lg:text-lg leading-body">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<ExploreButton text="Explore" link="/destinations/moon" />
			</Wrapper>
		</section>
	);
});
