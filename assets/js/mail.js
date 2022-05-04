// function sendEmail(){
//     var params={
//       from_name:document.getElementById('name').value,
//       email_id:document.getElementById('email').value,
//       message:document.getElementById('message'.value)
//     }
//     emailjs.send('service_p6wl9iy','template_87zss7r',params).then(function(res){
//       alert('Succes!'+res.status)
//     })
//   }

const service_id = 'service_p6wl9iy'
const tem_id = 'template_87zss7r'


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const [name, email, message] = formData
    // console.log(name)

    emailjs.send(service_id, tem_id, {
        name: name[1],
        email: email[1],
        message: message[1]
    }).then(function (response) {
        alert('SUCCESS!', response.status, response.text);
    }, function (error) {
        alert('FAILED...', error);
        
    });
    document.querySelector('form').reset()
})