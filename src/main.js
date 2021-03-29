import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

// registered as global component because it is being used in multiple parts of the app
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
