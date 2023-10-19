const request =async(url='',optionsObj=null,errMsg=null)=>{
    try{
        const rs= await fetch(url,optionsObj)
        if(!rs.ok) throw Error("Reload the app")
    }catch(err){
        errMsg = err.Message
    }finally{
        return errMsg
    }
}
export default request