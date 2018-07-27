<template functional>
  <figure :class="props.type" v-on:click="listeners.click">
    <img :src="props.src" />
    <figcaption v-if="slots().default"><slot></slot></figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'FigureFunctionalSFC',
    props: ['type', 'src']
  };
</script>
