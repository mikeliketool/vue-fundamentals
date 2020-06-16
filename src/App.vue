<template>
  <div id="app">
    <OneWayBinding />
    <OneWayBindingExercise />
    <Events />
    <EventsExercise />
  </div>
</template>

<script>
import OneWayBinding from './components/OneWayBinding.vue'
import OneWayBindingExercise from './components/OneWayBindingExercise.vue'
import Events from './components/Events.vue'
import EventsExercise from './components/EventsExercise.vue'

export default {
  name: 'App',
  components: {
    OneWayBinding,
    OneWayBindingExercise,
    Events,
    EventsExercise
  }
}
</script>
