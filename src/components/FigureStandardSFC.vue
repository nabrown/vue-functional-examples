<template>
  <figure :class="type" v-on:click="$emit('click')">
    <img :src="src" />
    <figcaption v-if="$slots.default"><slot></slot></figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'FigureStandardSFC',
    props: ['type', 'src']
  };
</script>
