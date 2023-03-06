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
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
