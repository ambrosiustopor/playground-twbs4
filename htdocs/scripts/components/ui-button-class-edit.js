const twbsClasses = [
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

Vue.component('ui-button-class-edit', {

	props: ['twbsClass'],

	template: `
		<div class="form-group">
			<label>Class</label>
			<select size="1" v-model="twbsClass" @change="notifyChange" class="form-control">
				<option v-for="twbsClasses_item in twbsClasses" :value="twbsClasses_item">{{ twbsClasses_item }}</option>
			</select>
		</div>
	`,

	methods: {
		notifyChange: function() {
			this.$emit('change', this.twbsClass);
		}
	}

})
