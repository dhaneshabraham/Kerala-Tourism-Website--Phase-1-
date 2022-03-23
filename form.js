function loginvalidation(){
    
    var input1=document.getElementsByClassName("input1")
    var y=document.querySelector("#errlabel");    
    
    if(input1[0].value=="" ||input1[1].value==""||input1[2].value=="" ) 
    {
        y.innerHTML="fields cannot left empty";
        return false
    }       
    else
    {   
        let emailRegExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // let emailRegExp=/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,3})([a-zA-Z]{2,3})?$/

        let passRegExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        let numOnlyRegExp=/(?=.*\d)/
        let numFormatRegExp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        var emv=emailRegExp.test(input1[0].value);
        var psv=passRegExp.test(input1[1].value);
        var nsv_o=numOnlyRegExp.test(input1[2].value);
        var nsv_f=numFormatRegExp.test(input1[2].value);
        if (!emv)
        {              
            y.innerHTML="Invalid email id ";
            return false;
        }   
        else if(!psv)
        {
            y.innerHTML="Invalid password format ";
            document.getElementById('pass_hint').hidden=false;
            return false;
        }  
        else   
        {
            if (!nsv_o){
                y.innerHTML="Invalid Phone Number";
                return false;
            }
            else if (!nsv_f){
                y.innerHTML="Phone Number Format Is  Not Valid ";
                return false;
            }

            
        }

    return true 
    }

    }


function signupvalidation(){
    var input1=document.getElementsByClassName("input1")
    var y=document.querySelector("#errlabel");    
    if(input1[0].value=="" ||input1[1].value==""||input1[2].value==""||input1[3].value=="" ) 
    {
        y.innerHTML="fields cannot left empty";
        return false
    }       
    else
    {   let emailRegExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // let emailRegExp=/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,3})([a-zA-Z]{2,3})?$/

        let passRegExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        let numOnlyRegExp=/(?=.*\d)/
        let numFormatRegExp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        var emv=emailRegExp.test(input1[0].value);
        var psv=passRegExp.test(input1[1].value);
        var nsv_o=numOnlyRegExp.test(input1[3].value);
        var nsv_f=numFormatRegExp.test(input1[3].value);
        if (!emv)
        {              
            y.innerHTML="Invalid email id ";
            return false;
        }   
        else if(!psv)
        {
            y.innerHTML="Invalid password format ";
            document.getElementById('pass_hint').hidden=false;
            return false;
        }  
        else   
        {
            if(input1[1].value!=input1[2].value)
            {
                y.innerHTML="Password Missmatch";
                document.getElementById('pass_hint').hidden=false;
                return false;
            }

            if (!nsv_o){
                y.innerHTML="Invalid Phone Number";
                return false;
            }
            else if (!nsv_f){
                y.innerHTML="Phone Number Format Is  Not Valid ";
                return false;
            }

            
        }

    return true 
    }


}


    // clear error label
    function hideLabel()
    {
        document.getElementById('errlabel').innerHTML= "";
        document.getElementById('pass_hint').hidden=true;
    }
   