<template>
    <div class="register">
          <div class="header">
              <div>
                  <nuxt-link to='/'>
                      <img src="../static/amg/cf.png" alt="采房">
                  </nuxt-link>
                  <div>
                      已有采房账号？
                      <el-button><nuxt-link to='/login'>登录</nuxt-link></el-button>
                  </div>
              </div>
          </div>
          <div class="main">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm registerPanel">
                    <el-form-item label="手机号" prop="phoneNum">
                        <el-input v-model="ruleForm.phoneNum"></el-input>
                        <el-button plain @click="getCode" class="codeBtn">{{codeMsg}}</el-button>
                    </el-form-item>
                    
                    <el-form-item label="验证码" prop="code">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="创建密码" prop="pwd">
                        <el-input v-model="ruleForm.pwd"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="pwdAgain">
                        <el-input v-model="ruleForm.pwdAgain"></el-input>
                        <p class="checkBox" v-if="checkPwd">{{checkPwd}}</p>
                    </el-form-item> -->
                    <el-form-item>
                         <el-button type="primary" @click="submitForm('ruleForm')" class="submitBtn">登录</el-button>
                    </el-form-item>
                    <!-- <el-form-item>
                         <div class="term">
                               <a class="f1" href="https://rules-center.meituan.com/rules-detail/4" target="_blank">《美团点评用户服务协议》</a>
                               <a class="f1" href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团点评隐私政策》</a>
                         </div>
                    </el-form-item> -->
                   
                </el-form>
          </div>
          <div class="footer">

          </div>
    </div>
</template>

<script>

import {login} from '@/util/api.js'
export default {
    
    
    layout:'null',
    data() {

    //    var checkPwdAgain = (rule, value, callback) => {
    //         if (value === '') {
    //           callback(new Error('请再次输入密码'));
    //         } else if (value !== this.ruleForm.pwd) {
    //           callback(new Error('两次输入密码不一致!'));
    //         } else {
    //           callback();
    //         }
    //     }

      return {
        checkPwd:'',
        codeMsg:'免费获取短信验证码',
        codeMsgNum:0,
        returnCode:0,
        ruleForm: {
          phoneNum: '',
          code:'',
        //   pwd:'',
        //   pwdAgain:'',
        },
        rules: {
          phoneNum: [
            { required: true, message: '请输入11位的手机号码',min:11,max:11, trigger: 'blur' },
            
          ],
          code:[
            { required: true, message: '验证码为空', trigger: 'blur' },
          ],

          
        }//return
      }
    },
    methods:{
        submitForm(formName) {
            let self = this;
            //验证手机号码和验证码
            this.$refs[formName].validate((valid) => {
                // 验证填写的信息通过
                console.log("验证结果",valid)
                if(valid){
                    // 验证验证码是不是正确
                    console.log("验证通过")
                    let returnCode = self.returnCode;
                    let code = self.ruleForm.code;
                    if(returnCode == code){
                        //验证成功
                        console.log("验证码正确")
                        self.$store.commit("setUser",self.ruleForm.phoneNum);
                        self.$router.push({
                            path:"/"
                        })
                         
                    }else{
                        alert("验证码错误")
                    }

                    
                }else{
                     console.log("验证不通过")
                    return false;
                }
            });
        },
        getCode(){
            let that = this;
            let validPhoneN;
           //验证手机号码
           this.$refs['ruleForm'].validateField('phoneNum',(valid,msg) => {
               validPhoneN = valid;
           })
            //验证不通过
           if(validPhoneN){ 
             

            //验证通过    
           }else{
             //判断是不是发送过，并且没有超过30s    
             if(this.codeMsgNum == 0){
                        // alert("发送验证码");
                        //直接发送登录请求
                        let data = {
                            username:this.ruleForm.phoneNum,
                            pwd:"验证码登录",
                            msg:"用户登录"
                        }
                        login(data).then(res=>{
                            console.log(res,"获取到验证码");
                             //保存验证码
                             if(res.data == false){
                                  alert("发送信息过于频繁，请稍后再试！")
                             }
                            this.returnCode = res.data;
                        })
                        //  标记已经发送了验证码
                        this.changeCodeMsg();
               }else{ 
                   alert("验证码已经发送啦");
               }
              
           }
        },
        changeCodeMsg(){
            let self = this;
            self.codeMsgNum = 60;
            self.codeMsg = '验证码已发送,还有'+self.codeMsgNum+"秒";
            let codeTimeKey = setInterval(()=>{
                console.log("正在定时")
                if(self.codeMsgNum == 0){
                  clearInterval(codeTimeKey);
                  self.codeMsg = '重新发送';
                }else{
                   self.codeMsg = '验证码已发送,还有'+ --self.codeMsgNum +"秒";
                }
            },1000)
        }



    }

}
</script>
<style lang="scss" scoped>
    .register{
        .header{
            border-bottom-color: #dddddd;
            border-style: none none solid none;
            border-width:2px;
            
            height: 60px;
            &>div{
                width: 1000px;
                height: 100%;
                margin: auto;

                img{
                    height: 40px;
                    width: auto;
                    margin-top: 10px;
                }

                &>div{
                   color: #333333;
                   float: right;
                   line-height: 60px;
                   font-size: 14px;
                   button{
                       margin-left: 10px;
                       background-color:orange;
                       padding: 5px 10px;
                      a{
                           color: #222222;
                      }
                   }
                }
            }
        }

        .main{
            width: 1000px;
            margin: auto;
            padding-top: 50px;
            .registerPanel{
                width: 500px;
                 .codeBtn{
                    padding: 5px 10px;
                    font-size: 12px;
                }

                .submitBtn{
                    // width:200px;
                    background-color:orange;
                    font-weight: 600;
                    color: #222222;
                    border: none;
                }

                .checkBox{
                    color: red;
                    font-size: 12px;
                }

                .term{
                    margin-top: -10px;
                    a{
                        color: orange;
                    }
                }

                 

              
            }
        }
    }
</style>
<style lang="scss">
   .main{
       .registerPanel{
            .codeBtn{
                // background-color: #fff;
                color:#999999;
                border-color:#dddddd;
                &:hover{
                  color:orange;
                  border-color:orange;
                }
            }

       }
   }

</style>