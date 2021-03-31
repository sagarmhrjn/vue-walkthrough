import { createApp } from 'vue';

import App from './App';
import BaseCard from './components/UI/BaseCard'

const app = createApp(App);

// global components;base card might be used in other part of the app as well; 
app.component('base-card', BaseCard)

app.mount('#app');
