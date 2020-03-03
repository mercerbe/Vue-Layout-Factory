<script>
import Cell from './LayoutComposer/components/Layout/components/Cell/Index'

export default {
  name: 'Item',
  components: {
    Cell,
  },
  props: {
    // standard props
    initialConfig: Object,
    editable: Boolean,
    cellProps: Object,

    // custom props
    content: String,
    background: String,
    classes: String,
  },
  computed: {
    config() {
      return {
        ...this.initialConfig,
        hello: 'world',
      }
    },
    style() {
      const { classes } = this

      return {
        classes,
      }
    },
  },
  methods: {
    getConfig() {
      return this.config
    },
    onClick() {
      console.log('clicked')
    },
  },
}
</script>
<template>
  <cell
    v-bind="cellProps"
    :display="config.display"
    :draggable="editable"
    @delete:content="$emit('delete:content')"
  >
    <div :class="classes" @click="onClick">{{ content }}</div>
  </cell>
</template>
