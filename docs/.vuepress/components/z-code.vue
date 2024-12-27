<template>
  <div>{{msg}}</div>
</template>
<script>
export default {
  name: "z-code",
  props: {
    msg: {
      type: String,
      default: null
    }
  },
  data () {
    return {
    }
  }
}
</script>