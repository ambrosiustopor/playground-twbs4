const TWBS_V4_CLASSES = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"light",
	"dark",
	"link"
];

Vue.component('ui-button-edit', {

	props: [
		'buttonText',
		'buttonClass',
		'buttonOutline',
		'buttonDisabled',
		'buttonSize'
	],

	template: `
		<div>

			<div class="form-group">
				<label for="buttonText">Text</label>
				<input type="text" id="buttonText" v-model="buttonText" class="form-control" @input="notifyChange">
			</div>

			<div class="form-group">
				<label>Class</label>
				<select size="1" v-model="buttonClass" @change="notifyChange" class="form-control">
					<option v-for="twbsClass in TWBS_V4_CLASSES" :value="twbsClass">{{ twbsClass }}</option>
				</select>
			</div>

			<div class="form-group">
				<div>
					<label>Modifier</label>
				</div>
				<div class="form-check">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" v-model="buttonOutline" @change="notifyChange">
						Outline
					</label>
				</div>
				<div class="form-check">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" v-model="buttonDisabled" @change="notifyChange">
						Disabled
					</label>
				</div>
			</div>

			<div class="form-group">
				<div>
					<label>Size</label>
				</div>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input class="form-check-input" type="radio" name="buttonSize" value="" v-model="buttonSize" @change="notifyChange">
						Normal
					</label>
				</div>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input class="form-check-input" type="radio" name="buttonSize" value="sm" v-model="buttonSize" @change="notifyChange">
						Small
					</label>
				</div>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input class="form-check-input" type="radio" name="buttonSize" value="lg" v-model="buttonSize" @change="notifyChange">
						Large
					</label>
				</div>
			</div>

		</div>
	`,

	methods: {

		notifyChange: function() {
			this.$emit('change', {
				'text': this.buttonText,
				'class': this.buttonClass,
				'outline': this.buttonOutline,
				'size': this.buttonSize,
				'disabled': this.buttonDisabled
			});
		}

	}

})
