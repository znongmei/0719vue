<template>
  <div>
    <Router-view></Router-view>
    <!-- v-show="$route.meta.isShowFooter"解决路由元信息 -->
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>


<script type="text/ecmascript-6">
  import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
  export default {
    
    async mounted(){
      // 通知action异步获取address并保存到state
      this.$store.dispatch('getAddress')
    },
    components: {
      FooterGuide,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
