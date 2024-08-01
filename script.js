function sendEmail(){
    let parms ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
        phone:document.getElementById("number").value
    };
    emailjs.send("service_email","template_ihjmu4a",parms).then(alert("will contact soon"));
    
}
