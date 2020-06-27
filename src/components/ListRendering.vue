<template>
  <div class="list_rendering">
    <h1 v-once>
      {{ title }}
    </h1>
    <ul>
      <li
        v-for="(ingredient, ingredientIndex) in ingredients"
      >
        {{ ingredient }} ({{ ingredientIndex }})
      </li>
    </ul>
    <button @click="ingredients.push('spices')">
      Add New
    </button>
    <hr>
    <ul>
      <li
        v-for="person in persons"
      >
        {{ person.name }}
        <div
          v-for="(value, key, personIndex) in person"
          :key="value"
        >
          {{ key }}: {{ value }} ({{ personIndex }})
        </div>
      </li>
    </ul>
    <span
      v-for="n in 10"
    >{{ n }}</span>
    <hr>
    <template v-for="(ingredientInTemplate, ingredientInTemplateIndex) in ingredients">
      <h1>
        {{ ingredientInTemplate }}
      </h1>
      <p>
        {{ ingredientInTemplateIndex }}
      </p>
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
