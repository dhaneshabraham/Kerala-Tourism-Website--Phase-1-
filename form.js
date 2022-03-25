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
                y.innerHTML="Not a Number";
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
// password strength
password1.oninput = function() {
    document.getElementById('passerr').hidden=false;
    document.getElementById('passstr').hidden=false;
    document.getElementById('passstr').style.marginLeft='40px'
    document.getElementById('passstr').style.fontWeight='bold'
    document.getElementById('passerr').style.fontWeight='bold'
    document.getElementById('passerr').style.marginLeft='5px'
    document.getElementById('passerr').style.fontFamily="cursive"
    var pv=password1.value
    
    
    document.getElementById('passerr').style.paddingTop="20%"
    
    // <!-- label for strength greenorangered -->
    if (pv.length<=3){
        passerr.innerHTML = 'poor';
        document.getElementById('passerr').style.color="red";
    }
    else if (pv.length<=6){
        passerr.innerHTML = 'medium';
        document.getElementById('passerr').style.color="orange";
    }
    else if (pv.length>=8){
        passerr.innerHTML = 'strong';
        document.getElementById('passerr').style.color="green";
    }

  };
// sign up validation
function signupvalidation(){
    document.getElementById('passerr').hidden=true
    document.getElementById('passstr').hidden=true
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
                y.innerHTML="Not a Number";
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
        document.getElementById('passerr').hidden=true
        document.getElementById('passstr').hidden=true
    }
   