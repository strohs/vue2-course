new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
        increase: function (step,event) {
            this.counter += step;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function () {
            alert('Alert!');
        }
    }
});

//demo 2-way binding
new Vue({
    el: '#app2',
    data: {
        name: 'Max'
    }
});

//reacting to changes with computed properties
new Vue({
    el: '#app3',
    data: {
        counter: 0,
        secondCounter: 0
    },
    //computed properties are cached based on their dependencies. A computed property will only re-evaluate when
    // some of its dependencies have changed
    // Best practice is to use computed properties wherever you can versus using "watch"
    computed: {
        output: function () {
            console.log('Computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    },
    //watch property will execute code upon data changes, most useful when you want to perform
    // asynchronous or expensive operations in response to changing data
    watch: {
        counter: function (value) {
            //HAVE to declare vm here so that the callback function (below) can use 'this'
            var vm = this;
            setTimeout( function () {
                vm.counter = 0;
            }, 5000)
         }
    },
    methods: {
        result: function () {
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});

//dynamic styling with css classes
new Vue({
    el: '#app4',
    data: {
        attachRed: false,
        color: 'green'
    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed,
            }
        }
    }
});

//setting styles dynamically without css classes
new Vue({
    el: '#app5',
    data: {
        color:'gray',
        width: 100,
    },
    computed: {
       myStyle: function () {
           return {
               backgroundColor: this.color,
               width: this.width + 'px'
           }
       }
    }
});