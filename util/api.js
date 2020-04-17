import $axios from 'axios';
const hostUrl = "http://47.113.113.156:8080";
//  const hostUrl = "http://localhost:8081";
const imgHostUrl = 'http://47.113.113.156:80'
export {imgHostUrl};


export function getHouseType(id){
     console.log(id,"flag_id")
     return $axios.get(`${hostUrl}/getHouseTypeById?flag_id=`+id);
}

export function getOneHouseType(id){
     console.log(id,"flag_id")
     return $axios.get(`${hostUrl}/getOneHouseType?id=`+id);
}


export function getMainHome(){
     // console.log(`${hostUrl}/getMainHome`)
     return $axios.get(`${hostUrl}/getMainHouse`)

}
 
export function getAllHome(){
     console.log(`${hostUrl}/getAllHome`)
     return $axios.get(`${hostUrl}/getAllHome`)

}
export function getHomeById(id){
     console.log(`${hostUrl}`)
     return $axios.get(`${hostUrl}/getHomeById?id=${id}`)
}


export function searchHomeByName(name){
        console.log(`${hostUrl}`)
           return $axios.get(`${hostUrl}/searchHomeByName?name=${name}`)
}


   
export function login(data){
        console.log(`${hostUrl}`)
           return $axios.post(`${hostUrl}/login`,{
                ...data
           })
   
   }

