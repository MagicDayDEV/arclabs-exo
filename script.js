$(document).ready( function(){

    let $burger = $('#burger');
    let $li = $('nav>div:last-child>ul>li');

    $burger.on('click', function(){
        $li.slideToggle();
    });


});