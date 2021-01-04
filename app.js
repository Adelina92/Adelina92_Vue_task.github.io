Vue.component('list-element', {
  template: '<li>{{ this.base }}<sup> {{ this.exp }}</sup>={{ value }}</li>',
  props: ['base', 'exp'],
  data: function () {
  	return {
  	value: this.base ** this.exp,
  	}
  }
})

var app = new Vue({
  el: '#app',
  data: {
   numberOfElements: 5
  },
  computed: {
  	items: function () {
  		const startPos = 10;
  		return [...Array(startPos + this.numberOfElements).keys()].slice(startPos);
  	}
  },
  methods: {
  	increase: function () {
  	this.numberOfElements++;
  }}
})