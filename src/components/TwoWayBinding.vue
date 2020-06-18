<template>
  <div class='two_way_binding'>
    <h1 v-once>{{ title }}</h1>
    <input type='text' v-model='name'/>
    <p>{{ name }}</p>
    <button v-on:click='counter++'>Increase</button>
    <button v-on:click='counter--'>Decrease</button>
    <button v-on:click='secondCounter++'>Increase Second</button>
    <p>Counter: {{ counter }} | {{ secondCounter }}</p>
    <p>Result: {{ result() }} | {{ output }}</p>
  </div>
</template>

<script>
export default {
  name: 'TwoWayBinding',
  data() {
		return {
      title: 'TwoWayBinding',
      name: 'Mike',
      counter: 0,
      secondCounter: 0,
    }
  },
  computed: {
    output() {
      console.log('Computed')
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    
    }
  },
  methods: {
    result() {
      console.log('Method')
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    }
  }
}
</script>
