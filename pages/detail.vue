<template>
  <div class="detail">
     <div v-if="homeDetail.id">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{$store.state.city}}楼盘</el-breadcrumb-item>
      <el-breadcrumb-item>{{homeDetail.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 标题 -->
    <div class="title">
      <div class="left">
        {{homeDetail.name}}
        <span class="flag2">{{$store.state.city}}销量较高楼盘</span>
      </div>
      <div class="right">咨询热线：{{$store.state.phone}}</div>
    </div>
    <!-- 详细信息 -->
    <div class="detailMsg">
      <div class="left" @click="showImg">
        <!-- 跑马灯 -->
        <el-carousel indicator-position="none" width="600px" height="400px">
          <el-carousel-item v-for="item in imgs" :key="item" class="item cursor">
              <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
        <!-- <div class="minImg">
          <div class="imgW" v-for="item in 4" :key="item">
            <img
              src="http://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvMFwvMjAwMTMwNjNcL2NcLzIwMTkwOTA0MTc0MDMzNjM5LmpwZyIsImltZ19wYXJhbV9hcnIiOltdLCJ4LW9zcy1wcm9jZXNzIjoiXC9mb3JtYXQsd2VicCJ9"
              alt
            />
          </div>
        </div> -->
      </div>
      <div class="right">
        <div class="price">
          <span class="title1">参考单价</span>
          <span>{{homeDetail.price}}元/㎡</span>
          <!-- <span>获取房源实时信息</span> -->
        </div>
        <div class="allPrice">
          <span class="title1">参考总价</span>
          <span class>{{homeDetail | allPrice}}万元</span>
        </div> 
        <div>
          <span class="title1">楼盘类型</span>
          <span>{{homeDetail.type}}</span>
        </div>
        <div>
          <span class="title1">楼盘地址</span>
          <span>{{homeDetail.address}}</span>
        </div>
        <div>
          <span class="title1">楼盘户型</span>
          <span>三居，四居，五居</span>
        </div>
        <div class="freeCat" @click="send">免费专车看房</div>
      </div>
    </div>

    <div class="centerBar">
          <div class="item itemBorder" >
               户型分析
          </div>
          <div class="item"  @click="toTypeDetail('photo')">
               相册
          </div>
           <div class="item" @click="toTypeDetail('msg')">
               详细信息
          </div>
    </div>

    <div class="houseType scrollFlag">
        <HouseType :homeDetail="homeDetail" :houseType="houseType" />
        
        <!--一个fixed -->
        <div class="fixed" v-if="flag">
              <div class="top">
                  <div class="name"> {{homeDetail.name}}<span class="icon">在售</span></div>
                  <div class="price">￥{{homeDetail.price}}</div>
                  <div class="more cursor" @click.stop="toTypeDetail('msg')">查看全部信息 ></div>
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
                                <img :src="imgHostUrl+homeDetail.headimg">
                            </div>
                            <div class="info">
                                <div class="name">{{homeDetail.agent_name}}</div>
                                <div class="discribe">{{homeDetail.school}}</div>
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




    <!-- 查看图片的组件 -->
    <div class="bigImgs" @click="showImg" v-if="show">
              <el-carousel indicator-position="none"  autoplay="false" class="wrapper">
                  <el-carousel-item v-for="item in imgs" :key="item" class="item">
                      <img :src="item" alt="">
                  </el-carousel-item>
            </el-carousel>
    </div>

</div>
  </div>
</template>
<script>
// import '../assets/fixed.scss';
import { getHomeById } from "@/util/api.js";
import { imgHostUrl } from "@/util/api.js";
import {getHouseType} from '@/util/api.js';
import HouseType from '@/components/common/houseType.vue';
import "../assets/fixed.scss";
// import { getHouseType } from '../util/api';
export default {
  components:{
       HouseType,
  },

  data() {
    return {
      dialogVisible: false,
      homeDetail:{},
      houseType:{},
      imgs:[],
      show:false,
      enterItem:[],
      flag:false,
      imgHostUrl:""
          
    };
  },
    created(){
        this.imgHostUrl = imgHostUrl;
    },


  methods: {


    //跳转到类型详情页面
     toTypeDetail(flag){
        let id = this.homeDetail.id;
        let typeId = this.houseType[0].id;
        console.log(this.houseType,"typeId----------------");
        this.$router.push({
              path:"/houseType",
              query:{
                    id,
                    typeId:typeId,
                    flag
              }
        })
    },

    // moreMsg(){
    //     console.log(this.enterItem.id);
    //     this.$router.push({
    //         path:"/houseDetail",
    //         query:{
    //             id:this.homeDetail.id,
    //             name:this.homeDetail.name
    //         }
    //     })
    // },

     send(){
         this.$store.commit("setShowBox",true)
     },


    showImg(){
        // alert("show")
        this.show = !this.show;
    },


    getEnterItem(item) {
       console.log(item, "detail EnterItem");
    },

    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }

    getDetailById(id){
        console.log("获取详情",id);
        getHomeById(id).then(res=>{
            console.log(res.data,"获取到详情信息");
            this.homeDetail = res.data;

            //解析图片
            let imgs = res.data.imgs;
            
            imgs = imgs.split(","); 
                //拼接完整地址
            imgs = imgs.map(item=>{
                    return imgHostUrl+item
            })
            this.imgs = imgs;
            console.log(imgHostUrl)
            console.log(imgs);
            this.imgs= imgs;   


            //获取到户型详情
            this.getHouseType(res.data.flag_id);
        })
    },

    
    getHouseType(flag_id){
         getHouseType(flag_id).then(res=>{
                console.log(res,"房产类型列表")
                this.houseType = res.data;
         })
    }


  },

  mounted() {
    let that = this;
    let id = this.$route.query.id;
    // console.log(id, "detail页面------------------------------------------");

    // 根据id查询详情
    this.getDetailById(id);



   
      document.body.onscroll = function(e){
             let dom= document.getElementsByClassName("scrollFlag")[0];
             let top = dom.getBoundingClientRect().top;
             console.log(top);
             if(top<0){
                  if(that.flag==true)return;
                  that.flag =true;
             }else{
                 if(that.flag == false)return;
                  that.flag = false;
             }
             console.log(that.flag,'---------------')
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

            // 这里很奇怪，在获取到数据之前就会调用一次过滤器，然后发现homedetail没有想要的数据
            // 然后就会报错
            // 解决办法是给homedetail一个默认值,如果是默认值那么就停止执行;
              console.log(item,"这里是allprice++++++++++")
              if(item=="")return ""
              let house_size = item.house_size;
              house_size = house_size.split("-");
              console.log(house_size);
              let allPrice = '';
              house_size.forEach(e => {
                  allPrice += parseInt(e)*item.price/10000+"-";
              });

              allPrice = allPrice.substring(0,allPrice.length-1);
              console.log(allPrice);
              
              return allPrice;

          }
    }
};
</script>
<style lang="scss" scoped>

.houseType{
    // border: 2px solid darkgreen;
    width: 100%;
    // height: 500px;
    
  
}

.centerBar{
  //  border: 1px solid red;
   display: flex;
    font-size:18px;
    font-weight: 700;
    color: black;
    background-color: #f4f4f4;
    margin-top: 20px;

   .item{
        cursor: pointer;
        margin:5px;
        padding:10px 0px;
        color: black;
        margin-left:30px;
        // border: 1px solid darkcyan;
   }

   .itemBorder{
       border-bottom:5px solid black;
   }


}

.freeCat{
    width:200px;
    height: 40px;
    background-color:orange;
    display: flex;
   justify-content: center;
   color: white;
   border-radius:10px;
    align-items: center;
    margin-left:30px;
}




.bigImgs{
   position: fixed;
   width:100vw;
   height: 100vh;
   background-color:black;
   z-index:99999999;
   top: 0;
   left: 0;

   .wrapper{
     width: 100%;
     height: 100%;
     //border: 1px solid darkblue;
     padding-top:5%;
   }

   .item{
    //  border: 1px solid red;
     width:50vw;
     height:33vw;
     margin: auto;
     left: 0;
     right: 0;
     

     img{
        width: 100%;
        height: 100%;
     }
   }


}



.detail {
  width: 1200px;
  // border: 1px solid red;
  margin-top: 100px;
  margin: auto;
  left: 0;
  right: 0;
  clear: both;
  min-height:1000px;
  // height: 1000px;

  .bread {
    margin-top: 30px;
  }

  .title {
    font-size:30px;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .left {
      .flag {
        padding: 1px 5px 2px;
        background-color: #0ad487;
        font-size: 12px;
        color: white;
        border-radius: 2px;
      }

      .flag2 {
        color: #666;
        background-color: #eee;
        font-size: 12px;
        padding: 1px 3px 2px;
        border-radius: 2px;
        margin-top: 30px;
      }
    }

    .right {
      font-size:25px;
      color: orange;
      font-weight: 800;
    }
  }
  .detailMsg {
    // border: 1px solid red;
    width: 100%;
    // height: 400px;
    display: flex;
    margin-top: 20px;
    padding-left:100px;
    

    & > .left {
      width:600px;
      height:400px;
      // border: 1px solid darkkhaki;
      // padding-top:40px;

      .item{
        width: 600px;
        height: 400px;
        flex-shrink: 0;
        // border: 1px solid darkblue;
        // height: 320px;
        img{
          //  height:400px;
          //  width: 600px;
          width: 100%;
          height: 100%;
           border-radius:15px;
        }
      }
      // .img {
      //   width: 100%;
      //   height: 320px;
      //   border: 1px solid red;
      // }

      // .minImg {
      //   height: 70px;
      //   width: 100%;
      //   margin-top: 5px;
      //   display: flex;
      //   overflow: hidden;

      //   .imgW {
      //     height: 70px;
      //     width: 90px;
      //     border-radius: 20px;
      //     margin-left: 20px;
      //     border: 1px solid darkcyan;
      //     overflow: hidden;

      //     img {
      //       width: 100%;
      //       height: 100%;
      //     }
      //   }
      // }
 
 
 
    }

    & > .right {
      width:500px;
      // border: 1px solid darkgreen;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 30px;
      & > div {
        // border: 1px solid red;
        //    display: flex;
        font-weight: 600;

        & > .title1 {
          color: #333;
          font-size: 15px;
          font-weight: 400;
          margin-right: 20px;
        }

        & > span:nth-of-type(3) {
        }
      }

      & > .price > span:nth-of-type(2) {
        font-size: 30px;
        color: #ff6d6f;
      }

      & > .price > span:nth-of-type(3) {
        // border: 1px solid orange;
        padding: 1px 3px 2px;
        color: orange;
        font-size: 13px;
        border-radius: 5px;
        margin-left: 20px;
        font-weight: 400;
      }

      & > .bottom {
        // border: 1px solid red;
        height: 80px;
        width: 100%;
      }
    }
  }

  .bottomList {
    // border: 1px solid darkcyan;
    width: 75%;
    height: 300px;

    .item {
      width: 100%;
      height: 200px;
    }
  }

  .listW {
    // border: 3px solid darkmagenta;
    width: 100%;
    display: flex;

    .fixedRight {
      width: 300px;
      height: 500px;
      position: sticky;
      top: 0;
      background-color: darkseagreen;
    }
  }
}
</style>

<style>

</style>