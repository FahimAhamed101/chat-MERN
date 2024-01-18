export const baseurl="";
export const postReguest = async(url,body)=>{
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body
    })


    const data = await response.json()
    if (!response){
        let message;
        if (data?.message){
            message = data.message;

        } else{
            message = data;
        }
        return {error:true,message};
    }
}

