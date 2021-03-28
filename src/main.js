import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

// registered as global component because it is being used in multiple parts of the app
app.component('base-badge', BaseBadge);

app.mount('#app');
