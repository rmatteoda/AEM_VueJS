
const todoitem = {
    name: 'todoitem',
    el: '#example-1',
    component: {
        props: ['number'],
        template: `<ul id="example-1">
					  <li v-for="item in items">
					    {{ item }}
					  </li>
					</ul>`,
        data() {
	      return {
	        items: this.getTodoItems(),
	      };
		},
	    methods: {
		    getTodoItems() {
		      const todoItemsRange = new Array(this.number);
		      var taskId = 0;
		      for (let i = 0; i < this.number; i += 1) {
				taskId = i + 1;
		        todoItemsRange[i] = 'Task ' + taskId;
		      }
		      return todoItemsRange;
		    }
		}
	}  
}

export default todoitem

