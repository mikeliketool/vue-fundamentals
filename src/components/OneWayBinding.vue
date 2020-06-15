<template>
  <div class='one_way_binding'>
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHello() }} - <a v-bind:href='link'>Google v-bind</a></p>
    <p v-html="finishedLink"></p>
  </div>
</template>

<script>
export default {
  name: 'OneWayBinding',
  data() {
		return {
      title: 'Hello World!',
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google v-html</a>'
		};
  },
  methods: {
    sayHello() {
      this.title='Hello!';
      return this.title;
    }
  }
}
</script>
