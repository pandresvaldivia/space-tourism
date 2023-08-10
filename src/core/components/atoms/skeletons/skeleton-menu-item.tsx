import { component$ } from '@builder.io/qwik';
import skeletonMenuItem from '@styles/atoms/skeleton-menu-item.module.css';

export const SkeletonMenuItem = component$(
	({ isActive }: SkeletonMenuItemProps) => {
		return (
			<div
				class={[
					skeletonMenuItem.main,
					{
						'before:absolute before:right-0 before:h-full before:bg-white/40 before:w-1':
							isActive,
					},
					'relative pl-8 w-full flex items-center gap-2.5',
				]}
			>
				<div class="h-4 w-3.5 rounded bg-white/40" />
				<div class="h-4 w-12 rounded bg-white/40" />
			</div>
		);
	}
);

type SkeletonMenuItemProps = {
	isActive?: boolean;
};
