<template>
       <div class="list">
           <div  v-if="allHome.length>0" >
                <div    @click="toDetail(item.id)"
                        v-for="item in allHome" 
                        :key='item.id'>
                 <div class="ski"></div>
                    <div class="listItem"  @mouseenter="mouseEnter(item)">
                        <div class="left">
                            <img class="lazy" :src="item.imgs|imgsFilter">
                        </div>
                        <div class="middle">
                            <div>{{item.name}}</div>
                            <div>{{item.address}}</div>
                            <div>户型 三居、四居、五居及以上</div>
                            <div>面积 {{item.house_size}}㎡</div>
                            <div>
                                <span>{{item.type}}</span>
                                <span>{{$store.state.city}}销量较高楼盘</span>
                                </div>
                        </div>
                        <div class="right">
                                <div>均价<span>{{item.price}}</span>元/㎡</div>
                                <div>参考总价：{{item|allPrice}}万元</div>
                                <div>
                                    <span>{{item.agent_name}}</span>
                                    <span class="Consultation" @click.stop="send">向他咨询</span>
                                </div>
                        </div>
                    </div>
                </div>

                </div>
                <div class="null" v-else>
                       <span class="iconfont icon-null"></span>
                </div>
      </div>
</template>
<script>

import {getAllHome} from "../../util/api.js";
import {imgHostUrl} from "../../util/api.js";
import {searchHomeByName} from '@/util/api.js'
export default {
     data(){
          return{
              allHome:[],
            //   enterItem:{}
          }
     },
     mounted(){
         let query = this.$route.query;
        // 如果有ctx 那么去搜索
        console.log(query,"搜索关键字")
         if(query.ctx){
              searchHomeByName(query.ctx).then(res=>{
                   console.log(res,"搜索结果")
                     this.allHome = res.data;
              })
         }else{
              console.log(query,"组件里面的query");
                getAllHome().then(res=>{
                        console.log(res);
                        this.allHome = res.data;
                })
         }
        
     },
     methods:{
         send(){
         this.$store.commit("setShowBox",true)
         },
         mouseEnter(item){
              console.log("进入",item)
            //   this.enterItem = item;
              this.$emit("getEnterItem",item)

         },
         toDetail(id){
              this.$router.push({
                   path:"/detail",
                   query:{
                        id:id
                   }
              })
         }
     },
     filters:{
          imgsFilter(e){
               console.log(e,"这里是filter 过滤器");
               let imgs = e.split(",");
               console.log(imgs);
               let imgPath = imgHostUrl+imgs[0];
               return imgPath;
          },
          allPrice(item){
              console.log(item,"这里是allprice")
              let house_size = item.house_size;
              house_size = house_size.split("-");
              console.log(house_size);
              let allPrice = '';
              house_size.forEach(e => {
                  allPrice += parseInt(e)*item.price/10000+"-";
              });

              allPrice = allPrice.substring(0,allPrice.length-1);
              console.log(allPrice);
              
              return allPrice

          }
     }

     



}
</script>
<style lang="scss" scoped>
  
      .null{
          height: 100vh;
          width: 100%;
        //   border: 1px solid red;
          color: orange;
          text-align:center;
          padding-top:30vh;

          span{
             font-size: 100px;
          }
      }


      
    .list{
        // border: 2px solid darkcyan;
        width: 900px;
        margin-top: 30px;
        cursor: pointer;
        .listItem{
            display: flex;
            margin-top:50px;

            .middle{
                display: flex;
                flex-direction: column;
                margin-left:30px;
                justify-content: space-around;

                &>div:nth-of-type(1){
                    font-size: 20px;
                    color: black;
                    font-weight: 600;
                }
                &>div:nth-of-type(2){
                    color: #777;
                }
                &>div:nth-of-type(3){
                     color: #777;
                }
                &>div:nth-of-type(4){
                     color: #777;
                }
                &>div:nth-of-type(5){
                     color: #666;
                     margin-top: 20px;
                     font-size: 14px;
                     span{
                         background-color: #eee;
                         padding: 2px 5px;
                         border-radius: 5px;
                     }
                }
            }
            .left{
                width:300px;
                height:200px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius:10px;
                }
            }
            .right{
                padding-left:80px;
                // border: 1px solid red;
                display: flex;
                justify-content: center;
                flex-direction: column;
                div{
                    margin:10px;
                }

                div:nth-of-type(1){
                    color:#ff6d6f;
                    font-weight: 600;
                    span{
                        font-size: 30px;
                    }
                }
                div:nth-of-type(2){
                    color: #888;
                }
                div:nth-of-type(3){
                     font-weight: 600;
                }

                .Consultation{
                     border: 1px solid orange;
                     font-size: 12px;
                     color: orange;
                     font-weight: 400;
                     border-radius: 5px;
                     padding: 1px 10px 3px;
                     margin-left: 20px;

                }

            }

        }
    }

    // .rightfixed{
    //      border: 2px solid darkblue;
    //      position:sticky;
    //      width: 300px;
    //      height: 500px;
    //      right: 50px;
    //      top: 0;
    // }


</style>

<style>

</style>