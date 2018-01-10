<template>
  <div class="content">
    <Banner> </Banner>
  </div>
</template>

<script>  
  import { mapGetters, mapActions } from 'vuex';  
  import Banner from './banner.vue';
  
  export default {
    
    created(){      
      
    },
    components: {
      Banner
    }
  };
</script>

<style>
  .table {
    margin-left: 10px;
  }
  .el-table th>.cell {
    text-align: center;
  }
</style>
