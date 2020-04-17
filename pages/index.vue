<template>
     <div class="mainPage">
          <div class="banner">
              <div class="left">
                   <div class="title1">高学历咨询师帮你买好房</div>
                   <div class="title2">
                       <div>
                            采房
                            <span class="iconfont icon-triangle-down shape"></span>
                       </div>&nbsp;&nbsp;一站式购房平台
                   </div>
                   <div class="search">
                        <input type="text" class="input" v-model="searchCtx" placeholder="请输入楼盘名称">
                        <div class="button cursor" @click="searchHome">开始找房</div>
                   </div>

              </div>
              <div class="right">

              </div>
          </div>
         
            <!-- 外层需要添加一个template 标签用于遍历 -->
          <div class="list1Title">品质楼盘</div>
          <div class="list1">
             
                <div class="item" v-for="item in home1" :key="item.id"
                    @click="toDetail(item.id)">
                     <img :src="item.imgs|imgsFilter">
                     <div class="info">
                         <span>{{item.address|parseAddress}}</span>
                         <span>建面：{{item.house_size}}㎡</span>
                         <span>{{item.price}}元/㎡</span>
                     </div>
                     <div class="name">{{item.name}}</div>
                     <div class="address">
                          <span>
                               {{item.address}}
                          </span>
                     </div>
               </div>
              
          </div>  


          <div class="list2Title">热门好盘</div>
          <div class="list2">
               <div class="item"  v-for="item in home2" :key="item.id"  @click="toDetail(item.id)" >
                    <img :src="item.imgs|imgsFilter">
                    <div class="info">
                           <div>{{item.name}}</div>
                           <div>{{item.address}}</div>
                           <div>
                                <span>建面：{{item.house_size}}㎡</span>
                                <span>{{item.price}}元/㎡</span>
                           </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import { getMainHome } from '../util/api';
import { imgHostUrl } from '../util/api';


export default {
     data(){
          return{
                searchCtx:"",
                home1:[],
                home2:[]
          }
     },
     methods:{
          toDetail(id){
               this.$router.push({
                    path:"/detail",
                    query:{
                         id
                    }
               })
          },

          searchHome(){
               let ctx = this.searchCtx;
               console.log(ctx);
               this.$router.push({
                     path:"/list",
                     query:{
                          ctx,
                     }
               })
          },

          getAllHome(){
               getMainHome().then(res=>{
                     console.log(res,"主页房源");
                     let allHome = res.data;
                     let  home1=[];
                     let  home2=[];

                    // 获取到前三个放进第一个列表里面
                     allHome.forEach((item,idx)=>{
                           if(idx<3){
                                home1.push(item);
                           }

                           if(idx>=3&&idx<11){
                                home2.push(item);
                           }
                     })

                     this.home1 = home1;
                     this.home2 = home2;
                     console.log(home2,home1,"-------------")
                    //  获取到第四个到第七个放到第二个列表里面
                     



               })
          },
     },
     mounted(){
           this.getAllHome();
     },
     filters:{
           imgsFilter(e){
               console.log(e,"这里是filter 过滤器");
               if(!e)return;
               let imgs = e.split(",");
               console.log(imgs);
               let imgPath = imgHostUrl+imgs[0];
               return imgPath;
          },
          parseAddress(e){
              if(e == ""||e==undefined)return
              return e.substring(0,2);
          }
     }
     
}
</script>
<style lang="scss" scoped>
    .mainPage{
         overflow: hidden;
     //     width: 100%;
     //     border: 1px solid darkgoldenrod;
       .banner{
          //  border: 3px solid red;
           height: 410px;
          //  width:100%;
           margin-top: 10px;
           background-color: orange;
           display: flex;
           padding: 50px 150px;
          //  padding:0 80px;
           .left{
               //  border: 1px solid red;
                flex: 3;
                display: flex;
                flex-direction:column;
                justify-content:space-around;
                color: white;
               //  padding:80px;
                .title1{
                     font-size:50px;
                }
                 .title2{
                      font-size:35px;
                      div{
                           display: inline-block;
                           background-color: #fff;
                           color: orange;
                           padding:1px 20px 0 8px;
                           transform: skew(5deg);
                           position: relative;
                           z-index:100;

                           .shape{
                                position: absolute;
                                top: -2px;
                                right:-20px;
                                color: white;

                           }


                      }
                     
                }

                 .search{
                    //  border: 1px solid red;
                     height: 50px;
                     width: 600px;
                     border-radius:10px;
                     overflow: hidden;
                     padding:3px;
                     position: relative;
                     box-sizing: border-box;
                     display: flex;
                     background-color: #fff;
                    
                    input{
                         width: 80%;
                         height: 100%;
                         border: 0;
                         // border: 1px solid red;
                         padding-left: 30px;
                         outline: none;
                    }

                    input::placeholder{
                         color: #bbb;
                    }

                    .button{
                        background-color:orange;
                        height:100%;
                        width:20%;
                    //     border: 1px solid red;
                        border-radius: 5px;
                        text-align: center;
                        line-height:43px;
                    }
                }
                                
           }

           .right{
               //   border: 1px solid red;
                 flex:2;
           }
       }

       .list1Title{
            font-size: 35px;
            font-weight: 800;
            margin: 50px 0 50px 150px;
       }

       .list1{
          //   display:none;
          border-radius: 10px;
          // overflow: hidden;
          width: 1200px;
          margin: auto;
          left: 0;
          right: 0;

          //   border: 2px solid red;
            display: flex;
            justify-content: space-between;


            .item{
                 width:360px;
                 height:240px;
               //   border: 2px solid darkcyan;
                 position: relative;
                 overflow: hidden;
                    flex-shrink: 0;
               //   border: 1px solid red;
                 img{
                      width:100%;
                      height: 100%;
                      filter: brightness(60%);
                      opacity:0.7;
                      border-radius:10px;
                      overflow:hidden;
                 }

                 .info{
                    //   border: 2px solid red;
                      border-radius:0 0 10px 10px;
                      overflow:hidden;
                      height: 50px;
                      position: absolute;
                      bottom: 0px;
                      z-index: 100;
                      width:100%;
                      background-color:rgba(0,0,0,0.6);
                      display: flex;
                      span{
                         //   border: 1px solid red;
                           text-align: center;
                           line-height: 50px;
                           color: white;
                           font-size: 13px;
                      }

                      span:nth-of-type(1){
                          flex:2;
                      }

                      span:nth-of-type(2){
                         flex: 5;
                      }

                      span:nth-of-type(3){
                         flex: 2;
                      }
                 }

                 .name{
                      position: absolute;
                    //   border: 1px solid red;
                      width:100%;
                      top: 0;
                      text-align: center;
                      margin-top: 20%;
                      font-size: 30px;
                      color: white;
                 }

                 .address{
                         position: absolute;
                    //   border: 1px solid red;
                      width: 100%;
                      text-align: center;
                      top:50%;
                      span{
                           border: 1px solid white;
                           padding: 2px 5px;
                           color: white;
                      }
                      
                 }


                 
            }
       }

       .list2Title{
            font-size: 35px;
            font-weight: 800;
            margin-left: 150px;
            margin-top:100px;
       }

       .list2{
          //   border: 3px solid red;
          //   padding: 0 150px;
          //   margin-top: 80px;
            display: flex;
            justify-content:space-between;
            width: 1200px;
            margin: auto;
            left: 0;
            right: 0;
            flex-wrap: wrap;
            
            .item{
               //   height:19vw;
             
               //   border: 2px solid darkcyan;
               //   margin: 20px;
                margin-top:100px;
                 flex-shrink: 0;
                 overflow: hidden;
               //   margin: 20px;

                 img{
                      width:250px;
                      height:170px;
                      border-radius:5px;
                    //   border: 1px solid darkcyan;
                 }

                 .info{
                      &>div{
                           margin-top: 10px;
                      }
                      
                      div:nth-of-type(1){
                           font-weight: 800;
                      }
                      div:nth-of-type(2){
                             font-size: 13px;
                             color: #999;
                             
                      }
                      div:nth-of-type(3){
                             font-size: 13px;
                             color: #999;
                             display: flex;
                             justify-content: space-between;
                             span:nth-of-type(2){
                                  color: #ff6d6f;
                                  font-size: 14px;
                                  font-weight: 700;
                             }
                      }

                 }
                 
            }
       }


       img:hover{
            transform:scale(1.1);
            transition: all 1s;
       }

       img{
            cursor: pointer;
       }




    }
</style>