<template>
  <div class="conditional_rendering_and_list_rendering_exercise">
    <h1 v-once>
      {{ title }}
    </h1>
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="show = !show">
        Toggle
      </button>
      <p v-if="show">
        You either see me ...
      </p>
      <p v-else>
        ...or me
      </p>
      <p v-show="show">
        You either see me ...
      </p>
      <p v-show="!show">
        ...or me
      </p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <ul>
      <li
        v-for="(fantasyBook, index) in fantasyBooks"
      >
        {{ fantasyBook }} ({{ index }})
      </li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul>
      <li
        v-for="(value, key, index) in lotrObject"
        :key="key"
      >
        <div>{{ key }}: {{ value }} ({{ index }})</div>
      </li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul>
      <li
        v-for="value in testObject"
      >
        <template v-if="Array.isArray(value)">
          <ul>
            <li
              v-for="number in value"
            >
              {{ number }}
            </li>
          </ul>
        </template>
        <template v-else>
          {{ value }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConditionalRenderingAndListRenderingExercise',
  data() {
		return {
      title: 'ConditionalRenderingAndListRenderingExercise',
      show: true,
      fantasyBooks: ['Malazan Book of the Fallen', 'Song of Ice and Fire', 'The Stormlight Archive'],
      lotrObject: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'},
      testObject: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]}
   }
  }
}
</script>
