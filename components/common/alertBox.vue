<template>
    <div class="alertBox">
           <img class="lazy-timeout-click"   src="https://static.julive.com/frontend/images/zckf.gif">
         <!-- <canvas width="625" height="245" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 500px; height: 196px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas> -->
            <div class="msgW">
                  <div class="msg">输入您的联系方式，我们会尽快与您联系！</div>
                   <el-input
                        placeholder="请输入内容"
                        v-model="input"
                        clearable>
                    </el-input>
                    <el-button round class="btn" @click="send">发送</el-button>

            </div>
    </div>
</template>

<script>
import {login} from '@/util/api.js'
export default {
     data(){
         return{
             input:""
         }
     },
     methods:{
          send(){
               let that = this;
               console.log("send");
               if(this.input.length<5){
                    alert("请输入正确的联系方式");
                    return;
               }
               let data = {
                   username:this.input,
                   pwd:"默认",
                   msg:"咨询住房信息，请尽快联系我"
               }
               login(data).then(res=>{
                    console.log(res,"登录返回结果")
                    if(res.data=="success"){
                         that.$store.commit("setShowBox",false)
                         alert("我们已收到您的信息，感谢您的信任！")
                    }
               })
          }
     }
}
</script>
<style lang="scss" scoped>
         .alertBox{
              width: 500px;
              height: 400px;
              background-color:white;
              position:fixed;
              z-index:9999999999;
              top:calc(50% - 250px);
              margin: auto;
              left: 0; 
              right: 0; 
              border-radius: 30px;
              overflow: hidden;
              border: 1px solid #48b3e2;

              .msgW{
                  width: 100%;
                  padding: 30px;
                  text-align: center
                  ;
                 
              }

              img{
                  width: 100%;
                  height: auto;
              }

              .msg{
                   color: #666;
                   margin-top: 30px;
              }
 
              .el-input{
                  margin-top: 30px;
              }

              .btn{
                   background-color:#48b3e2;
                   color: white;
                   margin-top: 30px;
              }

         }
</style>
<style>

</style>