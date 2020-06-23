<template>
  <div class='conditional_rendering'>
    <h1 v-once>{{ title }}</h1>
    <p v-if="show">You can see me!</p>
    <p v-else>Now you see me!</p>
    <template v-if="show">
      <h1>Heading</h1>
      <p>Inside a template</p>
    </template>
    <p>Do you also see me?</p>
    <button @click="show = !show">Switch</button>
  </div>
</template>

<script>
export default {
  name: 'ConditionalRendering',
  data() {
		return {
      title: 'ConditionalRendering',
      show: true
    }
  }
}
</script>
