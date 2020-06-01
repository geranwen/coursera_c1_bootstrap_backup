$(document).ready( () => {
   toggleCarousel();
   triggerLogin();
   triggerReservation();
});

const toggleCarousel = () => {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
}

const triggerLogin = () => {
    $('#loginBtn').click(() => {
        $('#loginModal').modal('show');
    });
}

const triggerReservation = () => {
    $('#reservationBtn').click(() => {
        $('#reservationModal').modal('show');
    });
}