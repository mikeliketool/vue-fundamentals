import  {createApp}   from 'vue'
import App from './App.vue'
import OneWayBinding from './components/OneWayBinding.vue'
import OneWayBindingExercise from './components/OneWayBindingExercise.vue'
import Events from './components/Events.vue'
import EventsExercise from './components/EventsExercise.vue'
import TwoWayBinding from './components/TwoWayBinding.vue'
import TwoWayBindingExercise from './components/TwoWayBindingExercise.vue'
import DynamicCSS from './components/DynamicCSS.vue'
import DynamicCSSExercise from './components/DynamicCSSExercise.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import ConditionalRenderingAndListRenderingExercise from './components/ConditionalRenderingAndListRenderingExercise.vue'


const app = createApp(App);
app.component('one-way-binding', OneWayBinding)
app.component('one-way-binding-exercise', OneWayBindingExercise)
app.component('events', Events)
app.component('events-exercise', EventsExercise)
app.component('two-way-binding', TwoWayBinding)
app.component('two-way-binding-exercise', TwoWayBindingExercise)
app.component('dynamic-css', DynamicCSS)
app.component('dynamic-css-exercise', DynamicCSSExercise)
app.component('conditonal-rendering', ConditionalRendering)
app.component('list-rendering', ListRendering)
app.component('conditional-and-list-rendering-exercise', ConditionalRenderingAndListRenderingExercise)
app.mount('#app');
