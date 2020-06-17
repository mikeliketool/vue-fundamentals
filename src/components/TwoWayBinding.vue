<template>
  <div class='two_way_binding'>
    <h1 v-once>{{ title }}</h1>
    <input type='text' v-model='name'/>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'TwoWayBinding',
  data() {
		return {
      title: 'TwoWayBinding',
      name: 'Mike'
    };
  }
}
</script>
