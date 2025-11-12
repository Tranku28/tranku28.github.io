function ShowNav(){
    var nav = document.querySelector('.link-container');

    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    }  else {
        nav.style.display = 'block';
    }
}