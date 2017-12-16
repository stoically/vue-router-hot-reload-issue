<template>
  <div>
    Message from VueRouter: {{ message }}
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => vm.message = 'beforeRouteEnter')
  },
  data() {
    return {
      message: 'data'
    }
  }
}
</script>
