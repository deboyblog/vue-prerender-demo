<template>
  <div>
    这网页的标题是从后端获取的
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {}
    },
    ready () {
      this.$http.get('title.json').then((res) => {
        window.document.title = res.data.data
      })
    }
  }
</script>
