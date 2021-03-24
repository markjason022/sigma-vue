import { createApp } from 'vue';
import { reactive } from 'vue';
import router from './router';
import App from './App.vue';
import store from './stores/todos'
import PrimeVue from 'primevue/config';

import ConfirmationService from 'primevue/confirmationservice';
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/layout/layout.scss';
import './assets/layout/flags/flags.css';

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);

app.config.globalProperties.$appState = reactive({ inputStyle: 'outlined' });

app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);
app.use(store);
app.directive('ripple', Ripple);
app.mount('#app');