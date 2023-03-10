export type Auth ={
  username : string,
  password : string,
}

export type AuthRespuesta = {
  id : string,
  userName : string,
  email : string,
  firstName : string,
  lastName : string ,
  gender : 'male' | 'female'
  token : string
}
