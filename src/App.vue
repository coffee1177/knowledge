<template>
  <pageIndex></pageIndex>
</template>

<script>
import pageIndex from './views/index/pageIndex.vue'

import appData from './data/pageData.json'

export default {
  name: 'App',
  provide() {
    return {
      appData: appData,
    }
  },
  components: {
    pageIndex
  }
}
</script>

<style>

</style>
