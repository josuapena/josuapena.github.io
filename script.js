$(function(){
    if (window.matchMedia("(max-width: 576px)").matches) {
        $('div#name0').remove();
    }else {
        $('div#name0').add();
    }
});
