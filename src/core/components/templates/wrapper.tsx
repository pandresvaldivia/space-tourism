import type { ClassList } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export const Wrapper = component$(({ class: className }: WrapperProps) => {
	return (
		<div class={[className, 'px-6 max-w-wrapper']}>
			<Slot />
		</div>
	);
});

type WrapperProps = {
	class?: ClassList;
};
