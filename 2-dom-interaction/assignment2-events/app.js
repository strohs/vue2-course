new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function () {
                alert("Alert!");
            },
            storeKey: function (event) {
                this.value = event.target.value;
            }
        }
    });