    //     // Globals 
    //     var text = {
    //         'asset_1': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected.",
    //         'asset_2': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",
    //         'asset_3': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",
    //         'asset_4': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",       
    //         'asset_5': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",       
    //         'asset_6': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected"       
    //    }
       
    //    // You dont need to re-set this variable each time a click is done
    //    // So we take it out of the click function
    //    var fs = $("#full-size-image");
    //    var tb = $("#text-box");
       
    //    $(document).ready(function() {
    //        $("a").click(function (e) {
    //            e.preventDefault();  
    //            var newClass = $(this).attr("id");
    //            var oldClass = fs.attr("class");
               
    //            // Change the image
    //            fs.fadeOut(function() {
    //                fs.removeClass(oldClass).addClass(newClass).fadeIn("slow");
    //            });
               
    //            // Change the text
    //            tb.fadeOut(function() {
    //                tb.text(text[newClass]).fadeIn('slow');
    //            });
    //        });
    //    });

    // Globals 
    var text = {
                'asset_1': "RingCentral does the heavy lifting so <b>Moving Labor</b>  can keep their remote workforce connected.",
                'asset_2': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",
                'asset_3': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",
                'asset_4': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",       
                'asset_5': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected",       
                'asset_6': "RingCentral does the heavy lifting so Moving Labor can keep their remote workforce connected"       
           }

// You dont need to re-set this variable each time a click is done
// So we take it out of the click function
var fs = $("#full-size-image");
var tb = $("#text-box");

$(document).ready(function() {
   $("a").click(function (e) {
       e.preventDefault();  
       var newClass = $(this).attr("id");
       var oldClass = fs.attr("class");
       
       // Change the image
       fs.fadeOut(function() {
           fs.removeClass(oldClass).addClass(newClass).fadeIn("slow");
       });
       
       // Change the text
       tb.fadeOut(function() {
           tb.text(text[newClass]).fadeIn('slow');
       });
   });
});