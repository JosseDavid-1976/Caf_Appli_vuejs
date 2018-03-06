import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import MachineMachine from './MachineMachine.vue'


Vue.use(VueRouter);

const routes = [
    {path: '/list', component: MachinesList},
    {path: '/map', component: MachinesMap},
    {path: '/machine', component:MachineMachine}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
