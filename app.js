let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        price: Number
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-component': PlanComponent
    },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict']
        }
    }
}



new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})