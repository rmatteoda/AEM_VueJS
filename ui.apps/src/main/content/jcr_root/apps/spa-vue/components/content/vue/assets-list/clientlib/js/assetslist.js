
const assetslist = {
    name: 'assetslist',
    el: '#example-1',
    component: {
        props: ['assetsPath'],
        template: `<ul id="example-1">
					  <li v-for="asset in assets">
					    {{ asset.assetName }}
					  </li>
					</ul>`,
        computed: {
		    assets() {
		    	this.$store.dispatch('getAssets','/content/dam');
			    return this.$store.state.dam.assets
		    }
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

