$(document).ready(function () {
    $('.icon-left').click(function (e) { 
        e.preventDefault();
        $('.info-left').toggle('show');
    });
    $('.right-header-inner').click(function (e) { 
        e.preventDefault();
        // $('.info').toggle('show');
        $(this).find('.info').toggle('show');
        $(this).siblings().toggle('hide');
    });
    $( ".nav-icon" ).click(function() {
        $('.menu').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $('.cover').removeClass('active');
    });
});