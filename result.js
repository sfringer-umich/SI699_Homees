 
 window.addEventListener('load', () => {
     const params = (new URL(document.location)).searchParams;
     const address = params.get('name');
     
     document.getElementById('result_address').innerHTML = address;
 })