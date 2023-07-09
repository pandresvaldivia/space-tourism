import { component$ } from '@builder.io/qwik';
import { IconLogo } from '../icons/icon-logo';

export default component$(() => {
	return (
		<header>
			<div>
				<div>
					<IconLogo />
				</div>
				<ul>
					<li>
						<a
							href="https://qwik.builder.io/docs/components/overview/"
							target="_blank"
						>
							Docs
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/examples/introduction/hello-world/"
							target="_blank"
						>
							Examples
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/tutorial/welcome/overview/"
							target="_blank"
						>
							Tutorials
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
});
