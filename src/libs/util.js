let util = {

}
util.filterUnaccess=function(arr,currentAccess){
    let arrout=[];
    for (let index=0;index<arr.length;index++) {
        if (arr[index].children!=undefined&&arr[index].children.length!=0){
            arr[index].children=this.filterUnaccess(arr[index].children,currentAccess);
        }
        if (arr[index].meta===undefined||arr[index].meta.access===undefined||this.isInArray(arr[index].meta.access,currentAccess)){
            arrout.push(arr[index]);
        }
    }
    return arrout;
}
util.isInArray=function(arr,item){
    return arr.filter((i)=>{
        return i==item;
    }).length>=1;
}

export {util}
