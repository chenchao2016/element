<template>
  <div>hello <slot></slot></div>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElInputButton',
    mixins: [Emitter],
    componentName:'ElInputButton',

    props: {},

    methods: {}
  };
</script>
