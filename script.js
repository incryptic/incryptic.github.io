fetch('https://api.ipify.org/?format=json')
.then(res => res.json())
.then(data => document.body.innerText = data.ip)
 
