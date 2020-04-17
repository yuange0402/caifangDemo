<template>
    <div class="houseMsg">
          <div class="title">
               基本信息
          </div>
          <div class="list">
              <div class="item">
                   楼盘名称：{{houseMsg.name}}
              </div>
              <div class="item">
                   楼盘单价：{{houseMsg.price}}元/㎡
              </div>
              <div class="item">
                   楼盘总价：{{houseMsg.allPrice}}万元
              </div>
              <div class="item">
                   户型：户型 三居、四居、五居及以上
              </div>
                <div class="item">
                   楼盘地址：{{houseMsg.address}}
              </div>
          </div>


          <!-- 建筑信息 -->
           <div class="title">
               建筑信息
          </div>
          <div class="list">
              <div class="item">
                   开发商：{{houseMsg.developers}}
              </div>
              <div class="item">
                   绿化率：30%
              </div>
              <div class="item">
                   建筑类型：高层
              </div>
              <!-- <div class="item">
                   车位：{{houseMsg.cart_address}}
              </div> -->
                <!-- <div class="item">
                   物业信息：{{houseMsg.property}}
              </div> -->
          </div>



             <!-- 物业信息 -->
           <div class="title">
               物业信息
          </div>
          <div class="list">
              <div class="item">
                   车位：{{houseMsg.cart_address}}
              </div>
                <div class="item">
                   物业公司：{{houseMsg.property}}
              </div>
               <div class="item">
                   房产权：{{houseMsg.property_right}}年
              </div>
          </div>
    </div>
</template>

<script>
//  import {getHomeById} from "../../util/api.js"
export default {
     data(){
          return{
          //   houseMsg:{}
          }
     },
     props:{
          houseMsg:{
               type:Object,
               default:[]
          }
     },
     mounted(){
          // getHomeById().then(res=>{
          //       console.log(res);
          // })
          // let id = this.$route.query.id;
          // console.log(id,"detailMsg 的id");
          // // 
          // getHomeById(id).then(res=>{
          //       console.log(res);
          //       this.houseMsg = res.data;
          // })
         

     },
     watch:{
            houseMsg(){
                this.getAllPrice(this.houseMsg);
            }
     },

     methods:{
      
          getAllPrice(houseMsg){
               if(!houseMsg.price){
                     houseMsg.allPrice = "";
                     return;
               }
               console.log(houseMsg,"这里是allprice")
              let house_size = houseMsg.house_size;
              house_size = house_size.split("-");
              console.log(house_size);
              let allPrice = '';
              house_size.forEach(e => {
                  allPrice += parseInt(e)*houseMsg.price/10000+"-";
              });

              allPrice = allPrice.substring(0,allPrice.length-1);
              console.log(allPrice);
              
              houseMsg.allPrice = allPrice;
              this.houseMsg = houseMsg;
          }
     }
    

}
</script>
<style lang="scss" scoped>
     .houseMsg{
         margin:30px;
         margin-top:10px;
          //     border: 2px solid darkgoldenrod;
         width: 70%;
          //     height: 500px;

         .title{
              font-weight: 700;
              font-size: 22px;
              margin-bottom: 20px;
              margin-top: 50px;
         }

         .list{
             display: flex;
             flex-wrap: wrap;

             .item{
                  width: 50%;
                  color: #666;
                  margin-top: 20px;
             }
            
         }


     }
</style>

<style>

</style>