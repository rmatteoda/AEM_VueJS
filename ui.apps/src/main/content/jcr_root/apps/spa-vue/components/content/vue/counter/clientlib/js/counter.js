
const counter = {
    name: 'counter',
    component: {
        props: ['step'],
        template: `<div>
                 <h4>{{ count }}</h4>
				 <p>
				    <button class="btn btn-sm btn-primary" @click="increment">+</button>
				    <button class="btn btn-sm btn-primary" @click="decrement">-</button>
				 </p>
               </div>`,
        computed: {
		    count() {
			    return this.$store.state.counter.count
		    }
		  },
		methods: {
		    increment () {
		      this.$store.commit('increment')
		    },
		    decrement () {
		      this.$store.commit('decrement')
		    }
		}
    }
}

export default counter

