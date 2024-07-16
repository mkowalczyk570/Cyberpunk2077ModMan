import { getModFileIds } from "./nexusApi.js";

try{
    const res = await getModFileIds(15751)
    console.log(res)
    
}catch(e){
    console.log(e)
}