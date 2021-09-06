function firstnameValidate(){
    let first_name=document.getElementById('firstname').value
    if(first_name==''){
        displayMsg("firstname is required","fnamemsg","red")
        return false
    }
    else if(first_name<3){
        displayMsg("firstname must be more than 2 character","fnamemsg","red")
        return false
    }
    else{
        displayMsg("valid firstname","fnamemsg","red")
        return true
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("First name contain only Alphabate","fnamemsg","red")
    }

}
function displayMsg(message.idvalue,colorvalue){
    document.getElementById(idvalue).innerHTML=message
    document.getElementById(idvalue).style.color=colorvalue
}
function validForm(){

}
