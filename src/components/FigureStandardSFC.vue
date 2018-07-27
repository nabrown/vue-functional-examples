<template>
  <figure :class="type" v-on:click="$emit('click')">
    <img :src="src" />
    <figcaption v-if="$slots.default">
      <slot></slot>
    </figcaption>
    <div class="tags" v-if="tags">
      <span v-for="tag in tags"> {{ tag }}</span>
    </div>
  </figure>
</template>

<script>
  export default {
    name: 'FigureStandardSFC',
    props: {
      src: {
        required: true,
        type: String
      },
      type: {
        required: true,
        type: String
      },
      tags: {
        required: false,
        type: Array
      }
    }
  }
</script>
