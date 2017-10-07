Vue.component('ui-button-source', {

	props: [
		'buttonText',
		'buttonClass',
		'buttonOutline',
		'buttonDisabled',
		'buttonSize'
	],

	template: `
		<pre>{{ buttonHTML }}</pre>
	`,

	computed: {

		buttonHTML: function() {
			
			var btnClass = 'btn-';
			if (this.buttonOutline) {
				btnClass += 'outline-';
			}

			btnClass += this.buttonClass;
			
			var classNames = [btnClass];

			if (this.buttonSize) {
				classNames.push('btn-' + this.buttonSize);
			}

			var _class = `class="${classNames.join(' ')}"`

			var _attr = [_class];
			if (this.buttonDisabled) {
				_attr.push('disabled');
			}
			_attr = _attr.join(' ');
			
			return `<button type="button" ${_attr}>${this.buttonText}</button>`;
		}

	}

});
