<template functional>
  <figure :class="props.type" v-on:click="listeners.click">
    <img :src="props.src" />
    <figcaption v-if="slots().default">
      <span><slot></slot></span>
    </figcaption>
    <div class="tags" v-if="props.tags && props.type != 'framed'">
      <span v-for="tag in props.tags"> {{ tag }}</span>
    </div>
  </figure>
</template>

<script>
  export default {
    name: 'FigureFunctionalSFC',
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
