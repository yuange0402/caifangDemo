<template>
   <div class="listW">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="brand">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>房产列表</el-breadcrumb-item>
            </el-breadcrumb>
             
            <!-- list -->
            <div class="list1">
                <!-- 父组件用@来监听一个事件，子组件用$emit 来触发一个事件 -->
                <List @getEnterItem = "getEnterItem" />

                <!--一个fixed -->
                <div :class="flag?'flag fixed':'recommend fixed'" v-if="enterItem.id">
                      <div class="top">
                          <div class="name"> {{enterItem.name}}<span class="icon">在售</span></div>
                          <div class="price">￥{{enterItem.price}}</div>
                          <div class="more cursor" @click="toDetail">查看全部信息 ></div>
                      </div>
                      <div class="center">
                           <div class="title">采房咨询师</div>
                           <div class="discribe">
                               <span class="iconfont icon-check-circle"></span>高素质
                               <span class="iconfont icon-check-circle"></span>严要求
                               <span class="iconfont icon-check-circle"></span>更专业
                           </div>
                           <div class="list">
                               <div class="item">
                                    <div class="header">
                                       <img :src="imgHostUrl+enterItem.headimg">
                                    </div>
                                    <div class="info">
                                        <div class="name">{{enterItem.agent_name}}</div>
                                        <div class="discribe">{{enterItem.school}}</div>
                                    </div>
                                    <div class="btnW">
                                         <div class="btn cursor" @click="send">点击咨询</div>
                                    </div>
                               </div>
                           </div>
                      </div>
                      <div class="bottom"></div>
               </div>
            </div>
    </div>
</template>
<script>
import List from '@/components/common/list.vue';
import {imgHostUrl} from '@/util/api.js';
import '../assets/fixed.scss';
export default {
     data(){
         return{
            //要不要显示悬浮窗的flag
             flag:false,
             enterItem:{},
             imgHostUrl:''
         }
     },
     methods:{
          toDetail(){
              let id = this.enterItem.id;
              this.$router.push({
                   path:"/detail",
                   query:{
                        id:id
                   }
              })
         },

        send(){
             this.$store.commit("setShowBox",true)
        },

        // 把子组件选中的item放过来，然后展示在悬浮框里面
        getEnterItem(item){
             console.log(item,"这里是getEnterItem");
             this.enterItem = item;
        },


        //获取更多信息跳转到更多信息页面
        // moreMsg(){
        //     console.log(this.enterItem.id);
        //     this.$router.push({
        //         path:"/houseDetail",
        //         query:{
        //             id:this.enterItem.id,
        //             name:this.enterItem.name
        //         }
        //     })
        // }
     },



    components:{
        List 
    },
    created(){
         this.imgHostUrl = imgHostUrl;
    },


    mounted(){
        let that = this;
      
      document.body.onscroll = function(e){
             let dom= document.getElementsByClassName("list1")[0];
             let top = dom.getBoundingClientRect().top;
             console.log(top);
             if(top<0){
                  if(this.flag==true)return;
                  that.flag =true;
             }else{
                 if(this.flag == false)return;
                  that.flag = false;
             }

             console.log(this.flag,'---------------')
       }
  
  
  
    },
   
}
</script>
<style lang="scss" scoped>

    .listW{
        // border: 2px solid darkgreen;
        width: 1200px;
        margin: auto;
        left: 0;
        right: 0;

      
    }
    // 面包屑
    .brand{
        // border: 1px solid red;
        margin-top:50px;
        // margin-left: 170px;
    }

   .list1{
        // padding: 0 200px;
        width: 100%;
        // border: 3px solid darkblue;
        display: flex;

    }


  

</style>