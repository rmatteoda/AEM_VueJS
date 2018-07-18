import Vue from 'vue'
import components from './components.js'
import store from './store'

function startApp() {

    components.forEach(cmp => Vue.component(cmp.name, cmp.component));

    const elements = document.querySelectorAll('[data-component]');
    ([]).forEach.call(elements, (el) => {

        el.dataset.initialized = 'true';

        new Vue({
        	el: el,
        	store
        });
    });
}

document.addEventListener("DOMContentLoaded", startApp);

