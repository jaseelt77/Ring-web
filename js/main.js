

    // Globals 
    var text = {
                'asset_1': "RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.",
                'asset_2': "See how Crop Quest uses RingCentral to improve communications with employees, vendors, and customers.",
                'asset_3': "Nu-Hope Laboratories never loses a second of productivity with RingCentral.",
                'asset_4': "Learn about the benefits of VoIP in the Cloud Phone System Buyers Guide.",       
                'asset_5': "See how a cloud phone system uniquely supports mobile.",       
                'asset_6': "Read how cloud communications lowers costs."       
           }
           var anchor = {
            'tag1': "WATCH VIDEO",
            'tag2': "WATCH VIDEO",
            'tag3': "WATCH VIDEO",
            'tag4': "READ IT",       
            'tag5': "READ IT",       
            'tag6': "READ IT"       
       }

// You dont need to re-set this variable each time a click is done
// So we take it out of the click function
var fs = $("#full-size-image");
var tb = $("#text-box");
var hash = $("#home-titles");
var watch=$("#watch-text");
// var title = $("");
$(document).ready(function() {
   $("a").click(function (e) {
       e.preventDefault();  
       var newClass = $(this).attr("id");
       var oldClass = fs.attr("class");
       var link = watch.attr("a");
       // Change the image
       fs.fadeOut(function() {
           fs.removeClass(oldClass).addClass(newClass).fadeIn("slow");
       });
       
       // Change the text
       tb.fadeOut(function() {
           tb.text(text[newClass]).fadeIn('slow');
       });
      
       watch.fadeOut(function() {
        watch.text(anchor[link]).fadeIn('slow');
        });
       //change the link text
     
       $('html, .home-section').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    // window.location.href = $('a').attr('href');
    // document.querySelector('a').text = value;
    //  link.(this).data("custom-value");
    
   });
});






// jQuery(document).ready(function($){

//     $('a').on({
//          'click': function(){
//              $('#full-size-image').attr('src','https://jaseelt77.github.io/Ring-web/img/women1.png');
//              $('#text-box').text('RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.');
            
//          }
//      });
//     $('a').on({
//          'click': function(){
//              $('#full-size-image').attr('src','https://jaseelt77.github.io/Ring-web/img/asset3.png');
//              $('#text-box').text('RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.');
            
//          }
//      });
//     $('a').on({
//          'click': function(){
//              $('#full-size-image').attr('src','https://jaseelt77.github.io/Ring-web/img/asset4.png');
//              $('#text-box').text('RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.');
            
//          }
//      });
//     $('a').on({
//          'click': function(){
//              $('#full-size-image').attr('src','https://jaseelt77.github.io/Ring-web/img/asset1.png');
//              $('#text-box').text('RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.');
            
//          }
//      });
//     $('a').on({
//          'click': function(){
//              $('#full-size-image').attr('src','https://jaseelt77.github.io/Ring-web/img/asset5.png');
//              $('#text-box').text('RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.');
            
//          }
//      });
//     $('a').on({
//          'click': function(){
//              $('#full-size-image').attr('src','https://jaseelt77.github.io/Ring-web/img/blog_1.png');
//              $('#text-box').text('RingCentral does the heavy lifting so Moving Labor  can keep their remote workforce connected.');
            
//          }
//      });
     
    
     
    
     
   
//     });


