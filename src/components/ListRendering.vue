<template>
  <div class='list_rendering'>
    <h1 v-once>{{ title }}</h1>
    <ul>
      <li v-for='ingredient in ingredients' :key='ingredient'>{{ ingredient }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListRendering',
  data() {
		return {
      title: 'ListRendering',
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        {name: 'Max', age: 27, color: 'red'},
        {name: 'Anna', age: 'unknown', color: 'blue'}
      ]
    }
  }
}
</script>
