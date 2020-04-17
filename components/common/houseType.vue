<template>
     <div class="houseType">
            
           <!-- 第一个 -->
           <div class="item cursor" @click="toTypeDetail(item)" v-for="item in houseType" :key='item.id'>
                 <div class="left">
                      <img class="lazy-timeout-click" :src="imgHostUrl+item.imgs">
                 </div>
                 <div class="center">
                        <div class="name">{{item.name}}
                              <div class="flagBox box">在售</div>
                              <div class="flagBox">安全购</div>
                        </div>
                        <div class="price">总价<span>约{{item.type_all_price}}万</span>左右</div>
                        <div>类型：{{item.type}}</div>
                        <div class="discript">{{item.discription}}</div>
                 </div>
                 <div class="right">
                       <div class="btn" @click="send">了解户型报价</div>
                 </div>
           </div>

          
    
    
    
     </div>
</template>
<script>
import {imgHostUrl} from "@/util/api.js";
export default {
      created(){
            this.imgHostUrl = imgHostUrl;
      },
      data(){
           return{
                  imgHostUrl:""
           }
      },
      methods:{
            send(){
               this.$store.commit("setShowBox",true)
            },
            toTypeDetail(item){
            // 判断您当前页面是是哪一个，然后做出不同处理。
              let path = this.$route.path;
              console.log("当前页面的路由",path);
              if(path == "/houseType"){
                   this.$emit("changeType",item.id);                  
              }else{
                  let id = this.homeDetail.id;
                  let typeId = item.id;
                  this.$router.push({
                        path:"/houseType",
                        query:{
                              id,
                              typeId
                        }
                  })
              }


            }
      },
      props:{
            homeDetail:{
                  default:{}
            },
            houseType:{
                  default:{}
            }
      },
      mounted(){
            let that = this;
        setTimeout(function(){
            // console.log(this.homeDetail,"homeDetail");
        },2000)
          
      },
      filters:{
          allPrice(item){
            //   console.log(item,"这里是allprice")
              if(item=="")return;
              let house_size = item.house_size;
              house_size = house_size.split("-");
            //   console.log(house_size);
              let allPrice = '';
              house_size.forEach(e => {
                  allPrice += parseInt(e)*item.price/10000+"-";
              });

              allPrice = allPrice.substring(0,allPrice.length-1);
            //   console.log(allPrice);
              
              return allPrice

          }
      },
     


}

</script>
<style lang="scss" scoped>
       .flagBox{
            padding:2px 10px 3px;
            background-color:orange;
            border-radius: 3px;
            font-size: 12px;
            color: white;
            margin-left:20px;
      }

      .discript{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:1;
            overflow: hidden;
            text-overflow: ellipsis;
            // border: 1px solid red;
      }

      .box{
            background-color: #0ad487;
      }
      .houseType{
           width:800px;
      //      border: 1px solid darkcyan;
           margin-top: 50px;
           .item{
               margin: 20px 0px;
               width: 100%;
            //    height: 300px;
            //    border: 1px solid darkgreen;
               display: flex;
            

               &>div{
                  //    border: 1px solid darkmagenta;
               }

               .left{
                   width: 300px;
                   height: 170px;
                   flex-shrink: 0;
                  //  border: 1px solid red;
                   img{
                         width: 100%;
                         height: 100%;
                   }
               }

               .center{
                    width: 400px;
                  //     border: 1px solid darkblue;
                      
                    &>div{
                        // height: 25%;
                        margin:12px;
                    }

                    .name{
                          font-weight: 600;
                          font-size:17px;
                          color: #333;
                          display: flex;
                          align-items: center;
                    }

                    .price{
                        color: #ff6d6f;
                        font-weight: 700;
                        font-size: 13px;
                        &>span{
                              font-size: 20px;
                        }
                    }
               }
               .right{
                     display:flex;
                     align-items: center;
                    .btn{
                         border: 1px solid #ff6d6f;
                         color: #ff6d6f;
                         border-radius: 10px;
                         padding: 2px 20px 4px;
                    }
               }
           }
      }
</style>
<style>

</style>