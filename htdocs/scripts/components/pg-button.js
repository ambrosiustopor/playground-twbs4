Vue.component('pg-button', {

	props: [
		'twbsClass',
		'twbsOutline',
		'twbsSize',
		'btnDisabled'
	],

	template: `
		<button type="button"
			:class="btnClass"
			:disabled="btnDisabled"
		><slot></slot>
		</button>
	`,

	computed: {
		btnClass: function() {

			let _class = 'btn btn-';

			if (this.twbsOutline) {
				_class += 'outline-';
			}

			_class += this.twbsClass;

			if (this.twbsSize) {
				_class += ' btn-' + this.twbsSize;
			}

			return _class;
		}
	}

})
