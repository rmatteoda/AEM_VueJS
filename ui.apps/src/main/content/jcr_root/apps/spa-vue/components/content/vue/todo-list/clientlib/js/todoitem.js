
const todoitem = {
  name: 'todoitem',
  el: '#example-1',
  component: {
    props: ['number'],
    template: `<ul id="example-1">
					<li v-for="item in items">
					Edit properties of asset: <b>{{ item.assetName }}</b>
					</li>
				</ul>`,
	computed: {
	  items() {
		return this.$store.state.dam.assets;
	  }
	}
  }
}

export default todoitem

