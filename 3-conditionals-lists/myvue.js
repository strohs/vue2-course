//conditional rendering with v-if
new Vue({
    el: '#app',
    data: {
        show: true
    }
});

<!-- Rendering lists with v-for -->
new Vue({
    el: '#app2',
    data: {
        ingredients: ['meat','fruit','cookies'],
        persons: [
            {name: 'Max', age: 27, color: 'red'},
            {name: 'Anna', age: 'unknown', color: 'blue'}
        ]
    }
});