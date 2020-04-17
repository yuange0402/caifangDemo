<template>
    <div class="footer">
         <div class="top">
             <!-- <span><nuxt-link to='/connectUs'>联系我们</nuxt-link></span> -->
             <span><nuxt-link to='/aboutUs'>关于采房</nuxt-link></span>
             <span><nuxt-link to='/serviceStatement'>服务声明</nuxt-link></span>
             <span><nuxt-link to='/feedBack'>投诉反馈</nuxt-link></span>
             <span><nuxt-link to='/cooperation'>楼盘合作</nuxt-link></span>
            <span><nuxt-link to='/serviceStatement'>隐私信息</nuxt-link></span>
             <i class="phone">联系电话:{{$store.state.phone}}</i>
         </div>
         <div class="meddle">
              <!-- <div class="qq">qq二维码</div>
              <div class="wx">微信二维码</div> -->
         </div>
         <div class="botton">
                <div class="copyright">
                    <p style="color: #666">佛山采房信息科技有限公司  &nbsp;：佛山市南海区桂澜北路28号万达广场A座507室</p>
                    <p style="color: #666">©2018-2020 caifangid.com, all rights reversed.  &nbsp; 固定电话：0757-63838600
                        &nbsp;&nbsp;<a target="_blank" style="color: #999" href="http://beian.miit.gov.cn">粤ICP备19025915号-1</a>
                        &nbsp;&nbsp;<a target="_blank" style="color: #999" href="/">ICP证</a>
                    </p>
                    </div>
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='scss'>



    .footer{
        // border: 3px solid darkblue;
        height: 10vh;
        height:300px;
        min-width: 1200px;
        margin-top: 50px;
        background-color:#333;
        padding: 0 150px;

        a{
             color: white;
        }
        
        .top{
            height: 80px;
            // border: 1px solid red;
            display: flex;
            align-items: center;
            // padding-left: 80px;
            // font-weight: 800;
            color: white;
            // border: 1px solid red;
            // width: 50%;
            
            span{
                flex: 1;
                margin-right:20px;
            }

            .phone{
                // border: 1px solid red;
                // width: 70%;
                text-align: right;
                // padding-right: 150px;
                font-size: 30px;
                color: orange;
                flex: 7;

            }
        }


       .meddle{
           height: 100px;
        //    border: 1px solid red;
           color: white;
           text-align: right;

           .qq{
               width: 100px;
               height: 100px;
               border: 1px solid red;
               float:right;
               margin-right:30px;
           }

            .wx{
               width: 100px;
               height: 100px;
               border: 1px solid red;
               float:right;
               margin-right:30px;
           }
       }
    }
</style>