

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import Example from './components/Example.vue';
import AlgoliaVueSearch from './components/AlgoliaVueSearch';
import AlgoliaAutocomplete from './components/AlgoliaAutocomplete';
import BlogPosts from './components/BlogPosts';



// Vue.component('example', require('./components/Example.vue'));
Vue.component('example-component', Example);
Vue.component('algolia-vue-search', AlgoliaVueSearch);
Vue.component('algolia-autocomplete', AlgoliaAutocomplete);
Vue.component('blog-posts', BlogPosts);
Vue.use(InstantSearch);

const app = new Vue({
    el: '#app'
});
