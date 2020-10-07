$(document).ready(function () {
    var w = $("#all-slider-container").css("width");
    var h = $("#all-slider-container").css("height");
    var margin_image = (parseInt(h)-40)/2;
    $("#next").css({
        'marginTop':parseInt(margin_image)
    })
    $("#prev").css({
        'marginTop':parseInt(margin_image)
    })
    $(".slider-container").css({
        'width':parseInt(w),
        'height':parseInt(h)
    })
    $("#indicator-div").css({
        'width':parseInt(w)
    })
    $("#side-right").css({
        'height':parseInt(h)
    })
    $("#side-left").css({
        'height':parseInt(h)
    })


    var slider_array=[];
    var all_item = $(".slider-item").children();
    for (var i = 0; i < all_item.length; i++) {
        slider_array[i] = all_item.get(i).attributes[1].nodeValue;
        $("#indicator-container").append("<div class='indicator-"+i+"' style='width: 20px;height: 20px;border-radius: 50%;background-color: white;margin: 10px;transition: all .2s ease-in-out;display: inline-block;'></div>")

    }

    var x = 0;


    $(".slider-container").css({
        'backgroundImage':'url("'+slider_array[x]+'")'
    });


    for (var t = 0; t < slider_array.length; t++) {
        if (t == x){
            $(".indicator-"+t).css({
                'backgroundColor':'black'
            });
        }else{
            $(".indicator-"+t).css({
                'backgroundColor':'white'
            });
        }

    }


    $("#next").click(function () {
        ++x;
        if (x <= (slider_array.length - 1)){
            $(".slider-container").css({
                'backgroundImage':'url("'+slider_array[x]+'")'
            })
            for (var t = 0; t < slider_array.length; t++) {
                if (t == x){
                    $(".indicator-"+t).css({
                        'backgroundColor':'black'
                    });
                }else{
                    $(".indicator-"+t).css({
                        'backgroundColor':'white'
                    });
                }

            }
        }else{
            x = 0;
            $(".slider-container").css({
                'backgroundImage':'url("'+slider_array[0]+'")'
            })
            for (var t = 0; t < slider_array.length; t++) {
                if (t == x){
                    $(".indicator-"+t).css({
                        'backgroundColor':'black'
                    });
                }else{
                    $(".indicator-"+t).css({
                        'backgroundColor':'white'
                    });
                }

            }
        }
    })
    $("#prev").click(function () {
        --x;
        if (x >= 0){
            $(".slider-container").css({
                'backgroundImage':'url("'+slider_array[x]+'")'
            })
            for (var t = 0; t < slider_array.length; t++) {
                if (t == x){
                    $(".indicator-"+t).css({
                        'backgroundColor':'black'
                    });
                }else{
                    $(".indicator-"+t).css({
                        'backgroundColor':'white'
                    });
                }

            }
        }else{
            x = 0;
            $(".slider-container").css({
                'backgroundImage':'url("'+slider_array[0]+'")'
            })
            for (var t = 0; t < slider_array.length; t++) {
                if (t == x){
                    $(".indicator-"+t).css({
                        'backgroundColor':'black'
                    });
                }else{
                    $(".indicator-"+t).css({
                        'backgroundColor':'white'
                    });
                }

            }
        }
    })
    setInterval(function () {
        if (x < (slider_array.length - 1)){
            x++;
            $(".slider-container").css({
                'backgroundImage':'url("'+slider_array[x]+'")'
            })
            for (var t = 0; t < slider_array.length; t++) {
                if (t == x){
                    $(".indicator-"+t).css({
                        'backgroundColor':'black'
                    });
                }else{
                    $(".indicator-"+t).css({
                        'backgroundColor':'white'
                    });
                }

            }
        }else{
            x = 0;
            $(".slider-container").css({
                'backgroundImage':'url("'+slider_array[0]+'")'
            })
            for (var t = 0; t < slider_array.length; t++) {
                if (t == x){
                    $(".indicator-"+t).css({
                        'backgroundColor':'black'
                    });
                }else{
                    $(".indicator-"+t).css({
                        'backgroundColor':'white'
                    });
                }

            }
        }
        console.log(x)

    },4000);
})
