$(document).ready(function() {

    // chart
       $(function() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['15-6-2019', '20-6-2019', '25-6-2019', '30-6-2019', '06-6-2019'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#2693ff',
                    pointRadius: 4,
                    borderColor: '#e6e6e6',
                    data: [0, 10, 5, 2, 20]
                }]
            },

            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            fontColor: "#808080",
                            fontSize: 11,
                            top: 25
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        });
    });

    Chart.Legend.prototype.afterFit = function() {
        this.height = this.height + 50;
    };

    $(function() {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['06:00', '12:00', '18:00', '24:00'],
                datasets: [{
                    label: 'Download',
                    yAxisID: 'A',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#39b54a',
                    pointRadius: 0,
                    borderColor: '#39b54a',
                    borderWidth: 1,
                    data: [1, 4, 5, 5]
                }, {
                    label: 'Upload',
                    yAxisID: 'B',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#f7931e',
                    pointRadius: 0,
                    borderColor: '#f7931e',
                    borderDash: [8,3],
                    borderWidth: 1,
                    data: [2, 4, 6, 10]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            fontColor: "#808080",
                            fontSize: 11,
                            top: 25
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        },
                        id: 'A',
                        type: 'linear'
                    }, {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        },
                        id: 'B',
                        type: 'linear'
                    }]
                }
            }
        });
    });

    //chart open


    $('.chart_open').on('click', function () {
        $(this).toggleClass('rotate');
        $('.chart__content').slideToggle();
        $('.plan_graph__top').toggleClass('b-b');
    });
    // remove hover on touch devices
    (function addPointerClass() {
        var is_touch_event = false;
        function hasMouse(){
            if(is_touch_event === false){
                document.documentElement.classList.add('mouse');
                document.body.removeEventListener('mousemove', hasMouse);
            }
        }
        document.body.addEventListener('mousemove', hasMouse);
        document.body.addEventListener('touchstart', function () {
            is_touch_event = true;
        });
        document.body.addEventListener('touchend', function () {
            is_touch_event = false;
        });
        document.body.addEventListener('click', function () {
            if(is_touch_event) is_touch_event = false;

        });
        function is_Touch_event(){
            try{
                document.createEvent('TouchEvent');
                return true;
            }
            catch (e) {
                return false;
            }
        }
        if(is_Touch_event()){
            document.documentElement.classList.add('touch');
        }

    })();
    
   //phone
   window.onload = function() {
       var input = document.querySelector("#phone");
       window.intlTelInput(input);
   };

    //header notification

    $('.notification_close').on('click', function() {
      $('.header__notification').slideUp();
    });

    //hamburger

    $('#mob_nav').click(function() {
        $(this).toggleClass('active');
    })

    //close notification
   $('.icon_close').on('click', function () {
       $(this).parent('li').fadeOut();
   });
   $(".dropdown-menu").click(function(e){
       e.stopPropogation();
   });

   //Modal dashboard

   $(window).on('load', function() {

   $('#tutorials').modal('show');

   });

   //how to use accordion

   $('.accordion_action').on('click', function (){
       $(this).parent().find('.htu_list_item').slideToggle();
       $(this).parent('.box').toggleClass('active');
   })

   //show password

   //billing
  
   $('#nav-home-tab').on('click', function () {
    $('.billing_subscribed').hide();
    $('.billing_active').show();
 });
 
 $('#nav-profile-tab').on('click', function () {
     $('.billing_subscribed').show();
     $('.billing_active').hide();
 });
 $('#nav-contact-tab').on('click', function () {
     $('billing_subscribed').show();
     $('billing_active').hide();
 });

 $('.billing_check .cr').on('click', function (){
     $('.billing_pay_meth').slideToggle();
 });

 $('.plans_method__check .cr').on('click', function () {
     $('.plans_info__select').slideToggle();
 });
 
//billing payment

$('.professional_billing ul li a').on('click', function () {
    $('.professional_billing ul li a').removeClass('active');
    $(this).addClass('active');
});

//billing mobile

$('.accordion_arrow').on('click', function (){
    $('.billing_accordion').removeClass('active');
    $(this).parent('.billing_accordion').addClass('active');
    $(this).parent('.billing_accordion').find('.accordion_hidden').slideToggle();
});
$('.plans_info__select a').on('click', function () {
    $('.plans_info__select a').removeClass('active');
    $(this).addClass('active');
});

$('.plans_method__card').on('click', function () {
    $('.plans_method__check').slideToggle();
});




 //tutorials Logos


 $('.tutorials__logos li a').on('click', function () {
     $('.tutorials__logos li a').removeClass('active');
     $(this).toggleClass('active');
 });
    
 //tutorials instructions

 $('.tutorials__instructions li a').on('click', function () {
     $('tutorials__instructions li a').removeClass('active');
     $(this).toggleClass('active');
 });

 //steps tabs

 $('.btnNext').click(function() {
 $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
 });
 $('.btnPrevious').click(function() {
     $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
 });

 //show password

 $(".toggle-password").click(function() {
     $(this).toggleClass("fa-eye fa-eye-slash");
     var input = $('.show_pass');
     if(input.attr("type") == "password"){
         input.attr("type", "text");
     }
     else{
         input.attr("type", "password");
     }
 });

 //steps choose

$('.steps__choose li').on('click', function() {
    $(this).toggleClass('active');
});

$('.steps__device li a').on('click', function () {
   $('.steps__device li a').removeClass('active');
   $(this).toggleClass('active');
});

$('.steps__instructions li a').on('click', function () {
    $('.steps__instructions li a').removeClass('active');
    $(this).toggleClass('active');
 });

   //submit feedback active
 
   $('.feedback_item__list li a').on('click', function () {
       $(this).parent('li').parent('.feedback_item__list').find('a').removeClass('active');
       $(this).toggleClass('active');
   })


    // Plans Toggle

    var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-yearly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("yearly");

    e.addEventListener("click", function(){
        t.checked = false;
        e.classList.add("toggler--is-active");
        d.classList.remove("toggler--is-active");
        m.classList.remove("hide");
        y.classList.add("hide");
    });

    d.addEventListener("click", function(){
        t.checked = true;
        d.classList.add("toggler--is-active");
        e.classList.remove("toggler--is-active");
        m.classList.add("hide");
        y.classList.remove("hide");
    });

    t.addEventListener("click", function(){
        d.classList.toggle("toggler--is-active");
        e.classList.toggle("toggler--is-active");
        m.classList.toggle("hide");
        y.classList.toggle("hide");
    });

 //plan modal winzard

 $(function() {
     $("#professional_monthly").modalWizard();
 });


});
