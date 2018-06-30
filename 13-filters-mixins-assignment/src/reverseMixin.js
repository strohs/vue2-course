export const reverseMixin = {
  data() {
    return {
      text: 'mixin text'
    }
  },

  computed: {
    reverseAndAppendLength() {
      const reversed = this.text.split('').reverse().join('');
      return `${reversed} (${reversed.length})`;
    }
  }
};
