import { createSlice } from "@reduxjs/toolkit";

const initialState={
id:"",
password:"",
idWarning:"",
passWarning:"",
user:[],
}

export const enterSlice=createSlice({
name:"userpannel",    
initialState,
reducers:{
tryEnter:(state,action)=>{
state.id=action.payload.trim()
// console.log(state.id)
},
tryPass:(state,action)=>{
state.password=action.payload.trim()
// console.log(state.password)
},
tryButton:(state,action)=>{
let trueId=state.id.length<20
let trueIdTwo=state.id.length>6
let truePass=state.password.length>6
let both=trueIdTwo&&truePass
let newPerson={name:state.id,password:state.password,id:crypto.randomUUID()}
let checkUser=state.user.some((person)=>person.name === state.id)
if(trueId && truePass && trueIdTwo){
 if(!checkUser){
 state.user=[...state.user,newPerson]
 alert(`Yeni hesap oluşturuldu.Merhaba ${newPerson.name} `)
 console.log(state.user)
state.id=""
state.password=""
}
if(checkUser){
alert(`Login başarılı.Merhaba ${newPerson.name}`)
state.id=""
state.password=""
}

}else if(!trueId){
alert(`Kullanıcı id uzunluğu 20 karakterden küçük olmalı`)  
}else if(!trueIdTwo){
alert(`Kullanıcı id uzunluğu 6 karakterden büyük olmalı`)      
}else if(!truePass){
alert(`Kullanıcı şifre uzunluğu 6 karakterden büyük olmalı`)      
} else{
alert(`Birşeyler Ters gidiyor`)      
}



}






}
})

export const {tryEnter,tryPass,tryButton} =enterSlice.actions

export default enterSlice.reducer