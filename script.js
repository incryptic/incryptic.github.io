fetch('https://api.ipify.org/?format=json')
.then(res => res.json()
.then(data => body.document.innerText = data.ip)
