let arr=[];

function storeData(firstName,lastName,password){
    let data={id:arr.length+1,firstName:firstName,lastName:lastName,password:password}
    arr.push(data);
    return data;
}

function fetchAll(){
    return arr;
}

function fetchById(id){
    let found=false;
    for(let i=0;i<arr.length;i++){
        if(id===arr[i].id){
            found=true;
            return(arr[i]);
        }
    }
    if(found==false){
        return false;
    }
}

function updateData(id,password,newPassword){
    let found=false;
    for(let i=0;i<arr.length;i++){

        if(id===arr[i].id){
            if(password==arr[i].password){
                found=true;
                arr[i].password=newPassword;
                return arr[i];
            }else{
                return 0;
            }
        }
    }
    if(found==false){
        return 1;
    }
}

module.exports={storeData,fetchAll,fetchById,updateData};