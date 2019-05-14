document.addEventListener('DOMContentLoaded',function(){
    let errMessge = document.querySelector('.error');
    let successMessage = document.querySelector('.success');

    if(errMessge.innerHTML !== '' || successMessage.innerHTML !=='') {
        setTimeout(function(){
            errMessge.innerHTML = '';
            successMessage.innerHTML = '';
        },5000);
    }
})