import { component$ } from '@builder.io/qwik';
import { SkeletonMenuItem } from '@atoms';

export const SkeletonSidebarMenu = component$(() => {
	return (
		<div class="flex flex-col gap-5 animate-pulse">
			<SkeletonMenuItem isActive />
			<SkeletonMenuItem />
			<SkeletonMenuItem />
			<SkeletonMenuItem />
		</div>
	);
});
