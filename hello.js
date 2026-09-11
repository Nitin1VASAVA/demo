function ready(callback){
    console.log("pizza is rady")
    callback()
}

function call(){
    console.log("lene aa jana")
}

ready(call)