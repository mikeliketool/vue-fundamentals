<template>
  <div class="hello">
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
		return {
      title: 'Hello World!',
      link: 'http://google.com'
		};
  },
  methods: {
    sayHello() {
      this.title='Hello!'
      return this.title;
    }
  }
}
</script>
