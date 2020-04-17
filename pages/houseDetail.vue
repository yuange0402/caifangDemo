<template>
  <div class="houseDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="brand">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/list' }">房产列表</el-breadcrumb-item>
      <el-breadcrumb-item >{{home.name}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="title">
          <div>{{home.name}}</div>
          <div class="flagBox">在售</div>
          <div class="flagBox">安全购</div>
          <div class="flagBox">{{home.type}}</div>
          <div class="price">参考单价：{{home.price}}元/㎡</div>
    </div>


    <div class="title1">
         <div @click="toHouseMsg">
             住宅信息
         </div>
         <div @click="toImgs">
             图片
         </div>
         <div class="phone">咨询热线：{{$store.state.phone}}</div>
    </div>
    <div class="detailBox">
        <nuxt/>
    </div>



  </div>
</template>

<script>
import store from '@/store'
import {getHomeById} from '@/util/api.js';
export default {
  data() {
    return {
       name:'',
       home:{}
    };
  },

  mounted() {
      console.log("进入到houseDetail")
     let id = this.$route.query.id;
     this.id = id;
     this.name = this.$route.query.name;
     this.toHouseMsg();
     getHomeById(id).then(res=>{
         console.log(res,"这里是详情")
         this.home = res.data;
     })

  },
  methods:{
     toHouseMsg(){
         console.log(111)
         this.$router.push({
            path:"/houseDetail/houseMsg",
            query:{
               id:this.id
            }
           
         })
     },

     toImgs(){
          console.log(2222)
          this.$router.push({
            path:"/houseDetail/houseImgs",
            query:{
              id:this.id
            }
           
         })
     }

     
  }
};
</script>
<style lang="scss" scoped>

.flagBox{
    padding:2px 10px 3px;
    background-color:orange;
    border-radius: 3px;
    font-size: 12px;
    color: white;
}
.houseDetail {
  width: 1200px;
  left: 0;
  right: 0;
  margin: auto;
  // border: 1px solid red;

  .brand {
    margin-top: 50px;
  }

  .title{
      //  border: 1px solid darkcyan;
       margin: 20px;
       margin-top: 80px;
       display:flex;
       justify-content: flex-start;
       align-items: center;
      

       &>.price{
            color:#ff6d6f;
            font-weight: 700;
       }

       &>div{
           margin-left:10px;
       }

       &>div:nth-of-type(1){
           font-weight: 700;
           font-size:22px;
       }
       &>div:nth-of-type(2){
           background-color:#47b3e3;
       }
       &>div:nth-of-type(3){
           background-color:#0ad487;
       }
       &>div:nth-of-type(4){}
       &>div:nth-of-type(5){}
       
  }

  .title1{
      //  border: 1px solid darkcyan;
       margin: 20px;
       display:flex;
       justify-content: flex-start;
       align-items: center;
       padding: 10px;
       font-weight: 600;
       position: relative;
       margin-top: 30px;

       &>div{
           margin-right: 30px;
       }

       .phone{
            color: orange;
            font-size: 20px;
            position: absolute;
            right: 0;
       }
  }


  .detailBox{
      //  border: 2px solid darkcyan;
  }




}
</style>

<style>
</style>