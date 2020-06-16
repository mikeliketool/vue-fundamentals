<template>
  <div class='two_way_binding'>
    <h1 v-once>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TwoWayBinding',
  data() {
		return {
      title: 'TwoWayBinding',
    };
  }
}
</script>
