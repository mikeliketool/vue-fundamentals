<template>
  <div id="app">
    <OneWayBinding />
    <OneWayBindingExercise />
    <Events />
    <EventsExercise />
    <TwoWayBinding />
    <TwoWayBindingExercise />
    <DynamicCSS />
    <DynamicCSSExercise />
    <ConditionalRendering />
    <ListRendering />
    <ConditionalRenderingAndListRenderingExercise />
  </div>
</template>

<script>
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

export default {
  name: 'App',
  components: {
    OneWayBinding,
    OneWayBindingExercise,
    Events,
    EventsExercise,
    TwoWayBinding,
    TwoWayBindingExercise,
    DynamicCSS,
    DynamicCSSExercise,
    ConditionalRendering,
    ListRendering,
    ConditionalRenderingAndListRenderingExercise
  }
}
</script>
