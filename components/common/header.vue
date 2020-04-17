<template>
    <div class="header">
        <div class="left">
            <div>
                <nuxt-link to="/">
                     <img src="../../static/amg/cf.png" alt="">
                </nuxt-link>
            </div>
            <div class="location">
                佛山
                <span class="iconfont icon-xia">
                </span>
                <div class="localPanel">
                     佛山
                </div>
            </div>
           
            <div class="phone">
               咨询热线： {{$store.state.phone}}
            </div>
        </div>
        <dl  class="right">
            <dd><nuxt-link to="/">首页</nuxt-link></dd>
            <dd @click="notOpen">楼盘检查</dd>
            <dd @click="notOpen">咨询师</dd>
            <dd @click="notOpen">成交记录</dd>
           
             <dd v-if="$store.state.username" class="user">
                欢迎您！<span class="name">{{$store.state.username}}</span>
            </dd>
             <dd v-else>
                 <span class="iconfont icon-denglu"></span> 
                  <nuxt-link to='/login'>
                      &nbsp;&nbsp;登录
                  </nuxt-link>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    methods:{
        notOpen(){
             alert("还没有开通哦！敬请期待！")
        }
    }

}
</script>
<style lang="scss" scoped>

     


     .header{ 
        // border:1px solid lawngreen;
        height: 70px;
        // padding: 0px 50px;
        display:flex;
        justify-content: space-between;
        width: 1200px;
        left: 0;
        right: 0;
        margin: auto;


        .left{
            // border: 1px solid red;
            width: 50%;
            display: flex;
            align-items: center;
            // border: 2px solid darkmagenta;


         


            &>div{
                // border: 1px solid darkgoldenrod;

                height: 100%;
               img{
                   height:50px;
                   width: 100px;
                   margin-top: 10px;;
                   
               }

            //    border: 2px solid darkgoldenrod;
            }

            .location{
                border-radius: 5px;
                width:70px;
                height:30px;
                border: 1px solid #ccc;
                font-size: 14px;
                color: #333;
                line-height: 30px;
                text-align: center;
                margin-left: 30px;
                position: relative;

                &:hover{
                    .localPanel{
                        display: inline-block;
                    }
                }

                .localPanel{
                    // border: 1px solid darkgoldenrod;
                    width: 500px;
                    height:300px;
                    display: none;
                    background-color: #fff;
                    position: relative;
                    z-index: 100;
                    padding: 30px;
                    text-align: left;
                    border-radius: 20px;
                }

                
            }

            .phone{
                line-height:70px;
                // border: 1px solid red;
                font-weight: 800;
                font-size: 18px;
                margin-left: 30px;
            }
            

        }

        .right{
            // border: 1px solid red;
            width: 50%;
            display: flex;
            justify-content: right;
            align-items: center;
            justify-content:flex-end;
            color: #444;


               .user{
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 font-size: 14px;
                 color: #666;
                padding: 0 20px;

                .name{
                    color: orange;
                }
            }
           
              dd{
                //  border: 1px solid red;
                 margin-left: 30px;

                 &:hover{
                     color: orange;
                 }
              }
        
        }
    }
</style>