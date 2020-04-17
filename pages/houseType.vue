<template>
  <div class="detail">
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
        <span class="flag2">{{$store.state.city}}全年销量较高楼盘</span>
      </div>
      <div class="right">咨询热线：{{$store.state.phone}}</div>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabWrapper">
      <el-tab-pane label="户型分析" name="first">
              <!-- 详细信息 -->
    <div class="detailMsg">
      <div class="left">
        <!-- 跑马灯 -->
        <el-carousel indicator-position="none" width="800px" height="533px">
          <el-carousel-item v-for="item in 1" :key="item" class="item">
            <img :src="imgHostUrl+typeDetail.imgs" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <div class="price">
          <span class="typeName">{{typeDetail.name}}</span>
          <!-- <span>获取房源实时信息</span> -->
        </div>
        <div class="msgBox">
          <div class="allPrice">
            <span class="title1">朝向</span>
            <span>{{typeDetail.direction}}</span>
          </div>
          <div class="allPrice">
            <span class="title1">层高</span>
            <span>{{typeDetail.height}}m</span>
          </div>
          <div class="allPrice">
            <span class="title1">类型</span>
            <span>{{typeDetail.type}}</span>
          </div>
          <div class="allPrice">
            <span class="title1">建面</span>
            <span>{{typeDetail.house_size}}㎡</span>
          </div>
        </div>

        <div>
          <span class="title1">楼盘类型</span>
          <span>{{homeDetail.type}}</span>
        </div>

        <div class="price">
          <span class="title1">参考单价</span>
          <span>{{homeDetail.price}}元/㎡</span>
          <!-- <span>获取房源实时信息</span> -->
        </div>
        <div class="allPrice">
          <span class="title1">参考总价</span>
          <span class>{{typeDetail.type_all_price}}万元</span>
        </div>

        <div class="allPrice">
          <span class="title1">参考首付</span>
          <span class>{{typeDetail.first_pay}}万元</span>
        </div>

        <div class="allPrice">
          <span class="title1">参考月供：</span>
          <span class>{{typeDetail.mon_pay}}元</span>
        </div>

        <div class="allPrice">
          <span class="title1">剩余套数：</span>
          <span class>{{typeDetail.num}}</span>
        </div>

        <div>
          <span class="title1">描述信息：</span>
          <span>{{typeDetail.discription}}</span>
        </div>

        <!-- <div>
          <span class="title1">楼盘地址</span>
          <span>{{homeDetail.address}}</span>
        </div>-->
        <!-- <div>
          <span class="title1">楼盘户型</span>
          <span>三居，四居，五居</span>
        </div>-->
        <div class="freeCat" @click="send">了解全部更多信息</div>
      </div>
    </div>

    
    <!--类型列表  -->
    <!-- 绑定一个方法用于更新户型信息 -->
    <HouseType :homeDetail="homeDetail" :houseType="typeList" @changeType ="changeType" />

      </el-tab-pane>
      <el-tab-pane label="相册" name="second">
           <HouseImgs :imgs = "imgs"/>
      </el-tab-pane>
      <el-tab-pane label="详细参数" name="third">
            <HouseMsg :houseMsg ="homeDetail"/>
      </el-tab-pane>
      <!-- <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>

    <!-- <div class="centerBar">
      <div class="item itemBorder">户型分析</div>
      <div class="item">相册</div>
      <div class="item">详细信息</div>
    </div> -->

   

    <!-- 中间菜单bar -->

    <!-- 基本信息组件 -->
    <!-- 
      <div class="houseMsg">
          <div class="title">
               基本信息
          </div>
          <div class="list">
              <div class="item">
                   楼盘名称：{{homeDetail.name}}
              </div>
              <div class="item">
                   楼盘单价：{{homeDetail.price}}元/㎡
              </div>
              <div class="item">
                   楼盘总价：{{homeDetail.allPrice}}万元
              </div>
              <div class="item">
                   户型：户型 三居(7)、四居(6)、五居及以上(3)
              </div>
                <div class="item">
                   楼盘地址：{{homeDetail.address}}
              </div>
          </div>


           <div class="title">
               建筑信息
          </div>
          <div class="list">
              <div class="item">
                   开发商：{{homeDetail.developers}}
              </div>
              <div class="item">
                   绿化率：30%
              </div>
              <div class="item">
                   建筑类型：{{typeDetail.type}}
              </div>
              <div class="item">
                   车位：{{homeDetail.cart_address}}
              </div>
          </div>



           <div class="title">
               物业信息
          </div>
          <div class="list">
           
              <div class="item">
                   车位：{{homeDetail.cart_address}}
              </div>
              
                <div class="item">
                   物业公司：{{homeDetail.property}}
              </div>
               <div class="item">
                   房产权：{{homeDetail.property_right}}年
              </div>
          </div>
    </div>-->

    <!-- 查看图片的组件 -->
    <div class="bigImgs" @click="showImg" v-if="show">
      <el-carousel indicator-position="none" autoplay="false" class="wrapper">
        <el-carousel-item v-for="item in imgs" :key="item" class="item">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import "../assets/fixed.scss";
import { getHomeById } from "@/util/api.js";
import { imgHostUrl } from "@/util/api.js";
import HouseType from "@/components/common/houseType.vue";
import "../assets/fixed.scss";
import { getOneHouseType, getHouseType } from "@/util/api.js";
import HouseImgs from '@/components/houseType/houseImgs.vue'
import HouseMsg from '@/components/houseType/houseMsg.vue'
export default {
  components: {
    HouseType,
     HouseImgs,
     HouseMsg
  },

  data() {
    return {
      activeName: 'first',
      dialogVisible: false,
      homeDetail: {},
      typeDetail: {},
      typeList: {},
      imgs: [],
      show: false,
      enterItem: [],
      flag: false,
      houseTypeImg: [],
      typeImg: "", //存放户型图的路径
      typeName: "",
      imgHostUrl:""
    };
  },
  created() {
    this.imgHostUrl = imgHostUrl;
  },

  methods: {

    //改变户型
    changeType(id){
      // 户型id
      console.log("获取到户型id",id);
      this.$message("已经为您切换户型")
      //根据id获取到户型的详细信息，然后重新渲染页面，发送一个提示信息。
      // typeDetail
      // 改变页面的query 中的typeId ，保证刷新之后还是当前的id
      this.$route.query.typeId = id;
      this.getHouseType(id);

    },
    // 点击头部
     handleClick(tab, event) {
        console.log(tab, event);
      },
    moreMsg() {
      console.log(this.enterItem.id);
      this.$router.push({
        path: "/houseDetail",
        query: {
          id: this.homeDetail.id,
          name: this.homeDetail.name
        }
      });
    },

    send() {
      this.$store.commit("setShowBox", true);
    },

    showImg() {
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

    getDetailById(id) {
      console.log("获取详情", id);
      getHomeById(id).then(res => {
        console.log(res.data, "获取到详情信息");
        this.homeDetail = res.data;

        //解析图片
        let imgs = res.data.imgs;
        imgs = imgs.split(",");
        //拼接完整地址
        imgs = imgs.map(item => {
          return imgHostUrl + item;
        });
        this.imgs = imgs;
        console.log(imgHostUrl);
        console.log(imgs);
        this.imgs = imgs;

        // 根据flag_id 获取typelist
        this.getHouseTypeList();
      });
    },

    getHouseType(id) {
      getOneHouseType(id).then(res => {
        console.log(res, "获取户型详情");
        this.typeDetail = res.data;
      });
    },

    getHouseTypeList() {
      // console.log(this.homeDetail,"homeDetail------")
      getHouseType(this.homeDetail.flag_id).then(res => {
        console.log("户型列表", res);
        this.typeList = res.data;
      });
    },

    
  },
  mounted() {
    //
    let that = this;
    let id = this.$route.query.id;
    let typeId = this.$route.query.typeId;
    let flag = this.$route.query.flag;
    //根据flag 确定进入哪一个标签页,如果没有flag 那么默认进入第一个
    //  activeName: 'second',

    if(flag == 'photo'){
           this.activeName = 'second'
    }else if(flag == 'msg'){
           this.activeName = 'third'
    }

    // 根据id查询详情
    this.getDetailById(id);
    this.getHouseType(typeId);
    


    // document.body.onscroll = function(e){
    //        let dom= document.getElementsByClassName("houseType")[0];
    //        let top = dom.getBoundingClientRect().top;
    //        console.log(top);
    //        if(top<0){
    //             if(this.flag==true)return;
    //             that.flag =true;
    //        }else{
    //            if(this.flag == false)return;
    //             that.flag = false;
    //        }
    //        console.log(this.flag,'---------------')
    //  }
  },
  filters: {
    imgsFilter(e) {
      console.log(e, "这里是filter 过滤器");
      let imgs = e.split(",");
      console.log(imgs);
      let imgPath = imgHostUrl + imgs[0];
      return imgPath;
    },
    allPrice(item) {
      // 这里很奇怪，在获取到数据之前就会调用一次过滤器，然后发现homedetail没有想要的数据
      // 然后就会报错
      // 解决办法是给homedetail一个默认值,如果是默认值那么就停止执行;
      console.log(item, "这里是allprice++++++++++");
      if (item == "") return "";
      let house_size = item.house_size;
      house_size = house_size.split("-");
      console.log(house_size);
      let allPrice = "";
      house_size.forEach(e => {
        allPrice += (parseInt(e) * item.price) / 10000 + "-";
      });

      allPrice = allPrice.substring(0, allPrice.length - 1);
      console.log(allPrice);

      return allPrice;
    }
  }
};
</script>
<style lang="scss">
     .houseType{
       width: 900px!important;
     }
   

     .el-tabs__item{
        font-size: 17px;
        
     }

     .el-tabs__nav-wrap::after{
        // height: 1px;
     }

     .el-tabs__item.is-active {
           color: orange;
             &>:hover{
               color:orange;
             }
      }

      .el-tabs__item:hover {
        color: orange;
        cursor: pointer;
       }

      .el-tabs__active-bar{
          background-color:orange;
          // height: 1px;
          &>:hover{
               background-color:orange;
          }
        
      }
</style>

<style lang="scss" scoped>

.tabWrapper{
  margin-top: 30px;
}
.centerBar {
  //  border: 1px solid red;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: black;
  // background-color: #f4f4f4;

  .item {
    cursor: pointer;
    margin: 5px;
    padding: 10px 0px;
    color: black;
    margin-left: 30px;
    // border: 1px solid darkcyan;
  }

  .itemBorder {
    border-bottom: 5px solid black;
  }
}

.houseMsg {
  margin: 30px;
  margin-top: 10px;
  //     border: 2px solid darkgoldenrod;
  width: 70%;
  //     height: 500px;

  .title {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      color: #666;
      margin-top: 20px;
    }
  }
}

.houseType {
  // border: 2px solid darkgreen;
}

.freeCat {
  width: 200px;
  height: 40px;
  // background-color:orange;
  display: flex;
  justify-content: center;
  color: white;
  border-radius: 10px;
  align-items: center;
  margin-left: 30px;
  color: #ff6d6f;
  border: 1px solid #ff6d6f;
}

.bigImgs {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 99999999;
  top: 0;
  left: 0;

  .wrapper {
    width: 100%;
    height: 100%;
    //  border: 1px solid darkblue;
    padding-top: 5%;
  }

  .item {
    //  border: 1px solid red;
    width: 50vw;
    height: 33vw;
    margin: auto;
    left: 0;
    right: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.typeName {
  font-size: 25px;
  font-weight: 700;
  color: black;
  // color: darkblue;
}

.detail {
  width: 1200px;
  min-height: 800px;
  // border: 1px solid red;
  margin-top: 100px;
  margin: auto;
  left: 0;
  right: 0;
  clear: both;
  // height: 1000px;

  .bread {
    margin-top: 30px;
  }

  .title {
    font-size: 30px;
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
      font-size: 25px;
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

    & > .left {
      width: 800px;
      height: 533px;
      // border: 1px solid darkkhaki;
      // padding-top:40px;

      .item {
        // width:800px;
        // height:533px;
        flex-shrink: 0;
        // border: 1px solid darkblue;
        // height: 320px;
        img {
          //  height:400px;
          //  width: 600px;
          width: 100%;
          height: 100%;
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
      width: 400px;
      // border: 1px solid darkgreen;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 30px;

      .msgBox {
        width: 100%;
        // border: 1px solid red;
        display: flex;
        flex-wrap: wrap;

        .title1 {
          color: #333;
          font-size: 15px;
          font-weight: 400;
          margin-right: 20px;
        }

        & > div {
          width: 50%;
          margin-top: 20px;
        }
      }

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