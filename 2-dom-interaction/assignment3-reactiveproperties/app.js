new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function () {
            return this.value < 37 ? 'Not There Yet' : 'Done';
        }
    },
    watch: {
        //watch the 'result' property
        result: function (newResult) {
            console.log('newresult' + newResult );
            var vm = this;
            setTimeout( function () {
                vm.value = 0;
            }, 5000)
        }
    }
});