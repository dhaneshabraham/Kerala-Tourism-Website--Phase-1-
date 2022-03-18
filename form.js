function loginvalidation(){
    var x=document.getElementsByClassName("input")
    var y=document.getElementsByTagName("label");
    if(x[0].value=="" ||x[1].value=="") 
    {
        y[2].style.color="red"
        y[3].style.color="red"
        alert("cannot left empty")
        
        return false
    }       
    else
    {            
    return true
    }
    
    }
function signupvalidation(){
    
    var x=document.getElementsByClassName("input")
    var y=document.getElementsByTagName("label");
    var err=document.getElementsByClassName("laberr");
    if(x[2].value=="" ||x[3].value==""||x[4].value=="" ||x[5].value=="") 
    {
        y[5].style.color="red"
        y[6].style.color="red"
        y[7].style.color="red"
        y[8].style.color="red"
        alert("cannot left empty")
        return false
    }       
    else
    {
        let emailRegexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let userRegexp=/^[a-zA-Z0-9\.-]$/;
        var em=emailRegexp.test(x[2].value);
        var us=userRegexp.test(x[3].value);
        if (!em)
        {              
            err[0].innerHTML="Invalid email id ";
            return false;
        }
        else if(!us){
            err[0].innerHTML="Invalid username";
        }
        else
        {
            if(x[4].value!=x[5].value)
            {
                err[0].innerHTML="password doesnot match !";
                return false;
            }
        }
        
        return true
    }
    }