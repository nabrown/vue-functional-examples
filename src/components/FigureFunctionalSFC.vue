<template functional>
  <figure :class="props.type" v-on:click="listeners.click">
    <img :src="props.src" />
    <figcaption v-if="slots().default">
      <slot></slot>
    </figcaption>
    <div v-if="props.tags" class="tags">
      <span v-for="tag in props.tags"> {{ tag }}</span>
    </div>
  </figure>
</template>

<script>
  export default {
    name: 'FigureFunctionalSFC',
    props: ['type', 'src', 'tags']
  };
</script>
