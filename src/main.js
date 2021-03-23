import { createApp } from 'vue';
import { reactive } from 'vue';
import router from './router';
import App from './App.vue';
import store from './stores/todos'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';

import ConfirmationService from 'primevue/confirmationservice';

import DataTable from 'primevue/datatable';

import Dialog from 'primevue/dialog';

import FileUpload from 'primevue/fileupload';

import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';

import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';

import Textarea from 'primevue/textarea';

import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
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

app.component('Button', Button);

app.component('DataTable', DataTable);

app.component('Dialog', Dialog);

app.component('FileUpload', FileUpload);

app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);

app.component('RadioButton', RadioButton);

app.component('Textarea', Textarea);

app.component('Toolbar', Toolbar);


app.mount('#app');