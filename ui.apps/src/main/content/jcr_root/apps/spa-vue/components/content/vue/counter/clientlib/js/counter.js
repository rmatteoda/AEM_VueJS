
const counter = {
    name: 'counter',
    component: {
        props: ['number', 'buttonText'],
        template: `<div>
                 <button @click="increment">{{buttonText}} </button>
                 <h4>{{counter}}</h4>
               </div>`,
        methods: {
            increment() {
                this.counter++;
            }
        },
        data() {
            return {
                counter: Number.parseInt(this.number)
            }
        }

    }
}

export default counter

