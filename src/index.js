import Theme from '@swup/theme';
import styles from './index.scss';

export default class StripesOverlayTheme extends Theme {
	name = 'StripesOverlayTheme';

	constructor(options) {
		super();

		const defaultOptions = {
			color1: '#5513FF',
			color2: '#E40059',
			color3: '#F07700',
			color4: '#F8EE00',
			duration: 400
		};

		this.options = {
			...defaultOptions,
			...options
		};
	}

	mount() {
		this.applyStyles(styles);
		this.applyHTML(`
			<div class="swup-transition-stripes-overlay" style="transition-duration: ${
				this.options.duration
			}ms">
				<div style="border-bottom: 80vh solid ${this.options.color1}; transition: left ${this.options
			.duration / 2}ms, bottom ${this.options.duration / 2}ms;"></div>
				<div style="border-bottom: 100vh solid ${this.options.color2}; transition: left ${this.options
			.duration / 2}ms, bottom ${this.options.duration / 2}ms;"></div>
				<div style="border-top : 100vh solid ${this.options.color3}; transition: right ${this.options
			.duration / 2}ms, top ${this.options.duration / 2}ms;"></div>
				<div style="border-top : 80vh solid ${this.options.color4}; transition: right ${this.options
			.duration / 2}ms, top ${this.options.duration / 2}ms;"></div>
			</div>
		`);
	}
}
