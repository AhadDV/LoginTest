const ui = new UI();

var params2=`UserName=${ui.form.UserName} &Password=${ui.form.Password} &IPs=`

ui.submit_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    const FD = new FormData();
    FD.append("func", "Login");
    FD.append("params", params2);
    
    fetch("http://isapi.mekashron.com/soapclient/soapclient.php?URL=http://isapi.icu-tech.com/icutech-test.dll%2Fwsdl%2FIICUTech", {
        method: 'POST',
        body: FD
    }).then(result => result.json(),).then(
        (result) => {
            var a=JSON.parse(result.ret)
           if(a.ResultCode==-1){
            ui.section.innerHTML+=`<div class="alert alert-danger" role="alert">
            ${a.ResultMessage}
          </div>`
           }else{
            ui.section.innerHTML+=`<div class="alert alert-success" role="alert">
            ${a.ResultMessage}
          </div>`
           }
        }
    )
})
