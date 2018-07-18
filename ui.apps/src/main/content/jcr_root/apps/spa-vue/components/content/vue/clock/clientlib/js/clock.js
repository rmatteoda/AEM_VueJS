
const clock = {
    name: 'clock',
    component: {
        props: ['number'],
        template: `<div class="clock-container text-left">
        				Date/time now: <span class="label label-info" v-text="dateTime"></span><br>
  						Counter: <span class="label label-info" v-text="count"></span>
  					</div>`,
        data() {
		    return {
		      dateTime: '',
		    };
		},
		computed: {
		    count() {
			    return this.$store.state.counter.count
		    }
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

