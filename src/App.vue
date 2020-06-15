<template>
  <div id="app">
    <OneWayBinding />
    <Exercise1 />
    <Events />
  </div>
</template>

<script>
import OneWayBinding from './components/OneWayBinding.vue'
import Exercise1 from './components/Exercise1.vue'
import Events from './components/Events.vue'

export default {
  name: 'App',
  components: {
    OneWayBinding,
    Exercise1,
    Events
  }
}
</script>
