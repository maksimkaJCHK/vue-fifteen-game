import { createApp } from 'vue';
import App from './App.vue';

import UI from '@/UI/';

const app = createApp(App);

UI.forEach((el) => app.component(el.name, el));

app.mount('#app');
