<template>
  <div class="events_excercise">
    <h1 v-once>
      {{ title }}
    </h1>
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
      <button @click="showAlert">
        Show Alert
      </button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
      <input
        type="text"
        @input="handleKeyDown"
      >
      <p>{{ pressedKey }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
      <input
        type="text"
        @keydown.enter="handleKeyDown"
      >
      <p>{{ pressedKey }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsExercise',
  data() {
		return {
      title: 'Events Exercise',
      pressedKey: ''
		};
  },
  methods: {
    showAlert() {
      alert('Alert!');
    },
    handleKeyDown(event) {
     this.pressedKey = event.target.value;
    }
  }
}
</script>
