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
      console.log('ddd')
      this.$http.get('title.json').then((res) => {
        console.log(res)
        window.document.title = res.data
      })
    }
  }
</script>
