<template>
    <div class="login">
              <div class="header">
                  <nuxt-link to='/'>
                      <img src="../static/amg/cf.png" alt="采房">
                  </nuxt-link>
                  <!-- 采房欢迎您 -->
              </div>
              <div class="main">
                  <div class="mainImg">
                      <img src="../static/amg/cf1.png" alt="采房">
                  </div>
                  <div> 
                       <div class="login-panel">
                           <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                                <p>
                                    <span>注册并登录</span>
                                    <span></span>
                                </p>
                                
                                    <el-form-item prop="username">
                                        <el-input placeholder="请输入手机号码" prefix-icon="el-icon-phone" v-model="ruleForm.username"></el-input>
                                    </el-form-item>
                                    <el-form-item  prop="pwd">
                                        <el-input type='password'
                                                placeholder="密码"
                                                prefix-icon="el-icon-unlock"
                                                v-model="ruleForm.pwd">
                                        </el-input>
                                    </el-form-item>
                                    <p>
                                        <span></span>
                                    </p>
                                    <el-button @click="submitForm('ruleForm')">登录</el-button>
                                    <p>
                                        <span></span>
                                        <nuxt-link to='/register'>手机验证登录</nuxt-link>
                                    </p>
                           </el-form>
                       </div>
                      
                  </div>
              </div>
              <div class="footer">
              </div>
    </div>
</template>
<script>
import {login} from '@/util/api.js';
export default {
    layout:'null',
    data(){
        return{
            ruleForm: {
               username:'',
               pwd:''
            },
            rules: {
                username: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '手机号码格式不正确', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                     { min:6, max:18, message: '6-18为字母数字和下划线', trigger: 'blur' }
                ],
            }    
        }
    }, 
    methods: {
        submitForm(formName) {
        let self = this;
        self.$refs[formName].validate((valid) => {
             console.log("验证通过");
             console.log(valid)
             if(valid){
                    let data = {
                        username:this.ruleForm.username,
                        pwd:this.ruleForm.pwd,
                        msg:"用户登录"
                    }

                    login(data).then(res=>{
                        console.log(res,"登录结果")
                        if(res.data == "success"){
                                self.$store.commit("setUser",this.ruleForm.username);
                                self.$router.push({
                                    path:"/"
                                })
                        }else{
                                self.$store.commit("setUser",this.ruleForm.username);
                                self.$router.push({
                                    path:"/"
                                })
                        }
                    })
             }else{
                // 验证不通过

             }
            
       
       
       });
      },
    }
}
</script>
<style lang="scss" scoped>
   .login{
       width: 1100px;
       margin: auto;
       color: #333333;

   }

   .header{
       height:100px;

       img{
           height: 50px;
           width: auto;
           margin-top: 25px;
       }
   }

   .main{
      display: flex;
      .mainImg{
           width: 400px;
           height: 400px;
           margin-top:50px;

           img{
               width: 100%;
               height: 100%;
               border-radius: 30px;
           }
      }

      div{
          width: 50%;
          
          .login-panel{
              margin: auto;
              margin-top: 30px;
              width: 270px;
              font-size: 14px;
              color:#888888;
              p:nth-of-type(1){
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 10px;
                  
                  span:nth-last-of-type(1){
                      font-size: 12px;
                  }
              }

              .el-input {
                  width:270px;
                //   margin-top:15px;
                  .el-input__inner:focus{
                      border: 1px solid red;
                  }
              }

              p:nth-of-type(2){
                 text-align: right;
                 font-size: 12px;
                 color: orange;
                //  margin-top: 10px;
              }

              .el-button{
                  width: 100%;
                  background-color:orange;
                  color:white;
                  margin-top: 10px;
                 
              }

               p:nth-of-type(3){
                   margin-top: 10px;
                   
                   span{

                   } 

                   a{
                       color: orange;
                   }
               }
          }
      }
   }

</style>
<style lang="scss">
       .login-panel{
              .el-input {
                 input:focus{
                   border-color: orange;
                 }
              }

              .el-button{
                  outline:none;
                  border: none;
                  
                
              }
       }

</style>
