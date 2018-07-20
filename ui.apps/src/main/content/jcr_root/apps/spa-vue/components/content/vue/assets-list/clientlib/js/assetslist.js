
const assetslist = {
    name: 'assetslist',
    el: '#example-1',
    component: {
        props: ['assets-path'],
        template: `<ul id="example-1">
					  <li v-for="asset in assets">
					    {{ asset.assetName }}
					  </li>
					</ul>`,
        computed: {
		    assets() {
		    	return this.$store.state.dam.assets
		    }
		  },
		created(){
    		//initialize store data structure by submitting action.
    		this.$store.dispatch('getAssets','/content/dam/spavue');
 		}, 
		methods: {
		    getTodoItems() {
		      const todoItemsRange = new Array(5);
		      return todoItemsRange;
		    }
		}
	}  
}

export default assetslist

