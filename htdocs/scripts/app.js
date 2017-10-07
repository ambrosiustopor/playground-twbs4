var app = new Vue({

	el: "#app",

	data: {

		buttonText: 'Button',
		buttonClass: 'primary',
		buttonOutline: false,
		buttonDisabled: false,
		buttonSize: ''

	},

	methods: {

		changeButtonEdit: function(properties) {

			this.buttonOutline = properties.outline;
			this.buttonDisabled = properties.disabled;
			this.buttonText = properties.text;
			this.buttonSize = properties.size;
			this.buttonClass = properties['class'];

		}

	}

});
