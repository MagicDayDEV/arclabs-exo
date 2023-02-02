$(document).ready( function(){

    let $burger = $('#burger'),
        $li = $('nav>div:last-child>ul>li');

    $burger.on('click', function(){
        $li.slideToggle();
    });


});