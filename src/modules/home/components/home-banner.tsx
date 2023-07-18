import { component$ } from '@builder.io/qwik';
import homeBannerStyles from '@styles/modules/home/home-banner.module.css';
import { Wrapper } from '@templates';
import { ExploreButton } from './explore-button';

export const HomeBanner = component$(() => {
	return (
		<section class={[homeBannerStyles.main, 'min-h-screen pt-28']}>
			<Wrapper class="flex flex-col gap-20 items-center text-center">
				<div>
					<p class="text-secondary mb-4 font-barlow-condensed">
						SO, YOU WANT TO TRAVEL TO
					</p>
					<h1
						class={[
							homeBannerStyles.title,
							'leading-tight font-bellefair text-white mb-4',
						]}
					>
						SPACE
					</h1>
					<p class=" text-secondary">
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
