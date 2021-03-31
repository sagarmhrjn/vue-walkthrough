import { createApp } from 'vue';

import App from './App';
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'
import BaseDialog from './components/UI/BaseDialog'

const app = createApp(App);

// global components;base card might be used in other part of the app as well; 
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app');
