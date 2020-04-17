<template>
  <div class="wrapp">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main class="main">
         <nuxt/>
         <AlertBox v-if="$store.state.showBox"/>
      </el-main>
      <el-footer class="cfFooter">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import AlertBox from '@/components/common/alertBox';

export default {
    components:{
       Header,
       Footer,
       AlertBox,
       input:""
    }
}
</script>

<style lang="scss" scope>

.cfFooter{
  width:100%;
  padding: 0;
  margin: 0;
}
.wrapp{
  // border: 1px solid red;
  // width:100px;
  // overflow: hidden;
  box-sizing: border-box;
}
    .main{
        padding: 0;
        width: 100%;
        // border: 2px solid darkblue;
        overflow: hidden;
    }
</style>
