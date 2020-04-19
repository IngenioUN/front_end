import Vue from 'vue';
import App from './components/App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app'); // Specify the 'div' ID where it will be mounted.