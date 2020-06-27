<template>
  <div class='list_rendering'>
    <h1 v-once>{{ title }}</h1>
    <ul>
      <li v-for='(ingredient, i) in ingredients' :key='ingredient'>{{ ingredient }} ({{ i }})</li>
    </ul>
    <template v-for='(ingredient, i) in ingredients'>
      <h1 :key='ingredient'>{{ ingredient }}</h1>
      <p :key='i'>{{ i }}</p>
    </template>
    
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
