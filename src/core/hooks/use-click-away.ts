import type { QRL } from '@builder.io/qwik';
import { useSignal, type Signal, useVisibleTask$ } from '@builder.io/qwik';
import { DEFAULT_CLICK_EVENTS } from '@constants/event';
import { off, on } from '@helpers/event';

export const useClickAway = (
	elementRef: Signal<HTMLElement | undefined>,
	onClick: QRL<(event: Event) => void>,
	events: string[] = DEFAULT_CLICK_EVENTS
) => {
	const savedCallback = useSignal<QRL<(event: Event) => void>>(onClick);

	useVisibleTask$(({ track }) => {
		track(() => onClick);

		savedCallback.value = onClick;
	});

	useVisibleTask$(({ track }) => {
		track(() => onClick);

		const handler = (event: Event) => {
			const { value: element } = elementRef;
			element &&
				!element.contains(event.target as Node) &&
				savedCallback.value(event);
		};

		for (const eventName of events) {
			on(document, eventName, handler);
		}

		return () => {
			for (const eventName of events) {
				off(document, eventName, handler);
			}
		};
	});
};
