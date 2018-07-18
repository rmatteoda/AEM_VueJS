import counter from '../../../components/content/vue/counter/clientlib/js/counter.js'
import todoitem from '../../../components/content/vue/todo-list/clientlib/js/todoitem.js'
import clock from '../../../components/content/vue/clock/clientlib/js/clock.js'
import assetslist from '../../../components/content/vue/assets-list/clientlib/js/assetslist.js'

const components = [];

components.push(...[
    counter,
    todoitem,
    clock,
    assetslist]);

export default components;