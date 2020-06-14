<template>
  <div class="hello">
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
      return this.title;
    }
  }
}
</script>
