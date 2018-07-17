
const todoitem = {
    name: 'todoitem',
    component: {
       props: ['text', 'number'],
       template: `<li :id="number">{{number}} : {{text}}</li>`
    }
}

export default todoitem

