import { component$ } from '@builder.io/qwik';
import destinationDetail from '@styles/modules/destination/destination-detail.module.css';

export const DestinationDetail = component$(
	({ title, content }: DestinationDetailProps) => {
		return (
			<div class="text-center font-barlow-condensed uppercase">
				<p class="text-sm text-secondary mb-3 tracking-subtitle">{title}</p>
				<p class={[destinationDetail.content, 'text-white font-bellefair']}>
					{content}
				</p>
			</div>
		);
	}
);

type DestinationDetailProps = {
	title: string;
	content: string;
};
