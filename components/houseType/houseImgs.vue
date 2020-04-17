<template>
    <div class="houseImgs">
         <div class="item" v-for="item in imgs" :key="item">
              <img :src="item" alt="" @click="showImg">
         </div>



            <!-- 查看图片的组件 -->
            <div class="bigImgs" @click="showImg" v-if="show">
                <el-carousel indicator-position="none" class="wrapper">
                    <el-carousel-item v-for="item in imgs" :key="item" class="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
       
    </div>
</template>

<script>
import {imgHostUrl} from '../../util/api.js'
import {getHomeById} from '../../util/api.js'

export default {
    data(){
        return{
        //    imgs:[],
           show:false
        }
    },
    props:{
        imgs:{
             type:Array,
             default:[]
        }
    },
    mounted(){
    //    let id = this.$route.query.id;

      
    },
    methods:{
          showImg(){
        // alert("show")
        this.show = !this.show;
          },
    },
  

}
</script>
<style lang="scss" scoped>

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
    //  border: 1px solid darkblue;
     padding-top:5%;



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

  


}





      .houseImgs{
           display: flex;
           flex-wrap: wrap;
           margin: 20px;

           .item{
              width:200px;
              height:133px;    
              margin: 30px;
              
              img{
                  width: 100%;
                  height: 100%;
                  border-radius: 10px;
              }
           }
      
      
      }
</style>

<style>

</style>