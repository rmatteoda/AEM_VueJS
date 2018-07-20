
const assetslist = {
    name: 'assetslist',
    el: '#example-1',
    component: {
        props: ['assets-path'],
        template: `<ul id="example-1">
        			  <li v-for="asset in assets">
        			  	<a :href="'http://localhost:4502' + asset.assetPath">
					    {{ asset.assetName }}
					    </a>
					  </li>
					</ul>`,
        computed: {
		    assets() {
		    	return this.$store.state.dam.assets
		    }
		  },
		created(){
    		this.$store.dispatch('getAssets','/content/dam/spavue');
 		}
	}  
}

export default assetslist

