<template>
  <div class="allMsg">
      <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>佛山楼盘</el-breadcrumb-item>
      <el-breadcrumb-item>时代城</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">
          金科集美山水
          <span class="label">在售</span>
          <span class="label">安全购</span>
          <span class="label">住宅</span>
          <span class="price"> 8897 元/㎡</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
     .allMsg{
          width: 1200px;
          // border: 1px solid red;
          margin: auto;
          left: 0;
          right: 0;
          margin-top:30px;



          .bread{
            //   font-size: 17px;
          }


          .title{
              font-size: 25px;
              font-weight: 700;
              margin-top:20px;
              display: flex;
              align-items: center;


              .label{
                   background-color:orange;
                   font-size: 12px;
                   color: white;
                   padding: 2px 8px;
                   border-radius: 3px;
                   transform: translate3d(0,3px,0);
                   margin-left:10px;
                   
              }

              .label:nth-of-type(2){
                   background-color: #0ad487;
              }


              .price{
                   color:#ff6d6f;
              }
          }
     }
</style>

<style>
</style>