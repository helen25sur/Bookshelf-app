<template>
  <v-progress-circular
  color="primary"
  indeterminate
  :size="$props.size"
  :width="$props.width"
></v-progress-circular>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
