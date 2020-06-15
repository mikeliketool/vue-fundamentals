<template>
  <div id="app">
    <OneWayBinding />
    <OneWayBindingExercise />
    <Events />
  </div>
</template>

<script>
import OneWayBinding from './components/OneWayBinding.vue'
import OneWayBindingExercise from './components/OneWayBindingExercise.vue'
import Events from './components/Events.vue'

export default {
  name: 'App',
  components: {
    OneWayBinding,
    OneWayBindingExercise,
    Events
  }
}
</script>
