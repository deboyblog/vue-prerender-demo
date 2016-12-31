<template>
  <div>
    {{content}}
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        content: ''
      }
    },
    ready () {
      this.$http.get('content.json').then((res) => {
        this.content = res.data.data
      })
    }
  }
</script>
