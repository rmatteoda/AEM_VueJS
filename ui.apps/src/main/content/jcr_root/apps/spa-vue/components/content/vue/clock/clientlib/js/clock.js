
const clock = {
    name: 'clock',
    component: {
        props: ['number'],
        template: `<div class="clock-container text-left">
    					<div v-text="dateTime"></div>
  					</div>`,
        data() {
		    return {
		      dateTime: '',
		    };
		},
		mounted() {
		    setInterval(this.updateDateTime, 1000);
		},
		methods: {
		    updateDateTime() {
		      this.dateTime = moment().format('YYYY.MM.DD HH:mm.ss');
		    },
		}
    }
}

export default clock

