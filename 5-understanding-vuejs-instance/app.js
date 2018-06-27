// Vue.component('hello', {
//    template: '<h1>Hello!</h1>'
// });

var vm1 = new Vue({
  //explicitly mounted in javascript code below
    //el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log( this.$refs.myButton );
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// example of explicitly mounting a vue instance to an html element
vm1.$mount('#app1');

//we can access 'ref'ed  HTML elements via javascript and change them, but the changes won't be
// reactive, view could overwrite changes with items saved in its proxy object NOTE: vue does
//not recommend mutating nodes via $refs
//vm1.$refs.heading.innerText = 'Something Else...';
setTimeout( function () {
    vm1.title = 'Changed by timer';
    vm1.show();
}, 3000);


var vm2 = new Vue({
    el: '#app2',
    data: {
      title: 'The Second Instance'
    },
    methods: {
        onChange: function () {
            //accessing one VUE instance from another
           vm1.title = 'CHANGED!';
        }
    }
});

// using template to manually mount a vue js instance to an element. NOT COMMON TO DO THIS
var vm3 = new Vue({
    template: '<h1>Hello!!!</h1>'
});
vm3.$mount('#app3');