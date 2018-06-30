/**
 * MIXINS allows us to create reusable code components that we can re-use throughout our VUE application.
 * Vue does some clever merging of the different sections so that nothing is destroyed.
 * You can also add lifecycle hooks in the mixin as well as the component, mixin lifecycle hooks are executed first
 * then any component lifecycle hooks are executed
 *
 * @type {{data(): *, computed: {filteredFruits(): *}}}
 */

export const fruitMixin = {
  data() {
    // NOTE each component that uses this MIXIN, will get their own copy of the data()
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'] ,
      filterText: ''
    }
  },
  //computed properties may be a better alternative to using filters, may perform better too
  computed: {
    filteredFruits() {
      return this.fruits.filter(value => {
        return value.match( this.filterText );
      })
    }
  },
  created() {
    console.log('mixin created');
  }
};
