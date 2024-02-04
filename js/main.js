(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        // sticky header
        $(function () {
            var header = $("#header-area");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 10) {
                    header.addClass("sticky");
                } else {
                    header.removeClass("sticky");
                }
            });
        });
        // winner-carousel starts //
        $('#winner-carousel').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            nextArrow: '<img src="images/right-arrow.png" alt="" class="next">',
            prevArrow: '<img src="images/left-arrow.png" alt="" class="prev">',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow:5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
            ]
        });
        // winner-carousel ends //
        // selfie-of-the-day carousel starts //
        $('#selfie-of-the-day').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            nextArrow:null,
            prevArrow:null,
        });
        // winner-carousel ends //
        // magnific popup
        $(function(){
            $('.inner-content').magnificPopup({
                delegate: '.gallery',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: false,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    markup: '<div class="mfp-figure">' +
                        '<div class="mfp-close"></div>' +
                        '<div class="mfp-img"></div>' +
                        '<div class="mfp-bottom-bar">' +
                        '<div class="mfp-title"></div>' +
                        '<div class="mfp-counter"></div>' +
                        '<div class="meta-modal-details"><ul><li><a href="#"><img src="images/heart.svg" alt="" />250 Likes</a></li><li><a href="#" class="vvff" data-toggle="modal" data-target="#comments-modal"><img src="images/commentary.svg" alt="" />30 Comments</a></li></ul></div>' +
                        '</div>' +
                        '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
                    cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
                    // titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
                    // Or the function that should return the title. For example:
                    titleSrc: function(item) {
                      return item.el.attr('title') + '<small>A small description about the image goes here.</small>';
                    },
                    verticalFit: true, // Fits image in area vertically
                    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
                }
            });
        });
       // magnific popup
       // comment box open
        $(function(){
            $(".bottom-details ul li .form-control").focus(function () {
                $(this).parent().parent().prevAll().addClass("cstm-hide");

            }).blur(function () {
                $(this).parent().parent().prevAll().removeClass("cstm-hide");
            })
        });
        // comment box open
        // login signup
        $(function () {
            $('#header-area .dropdown .dropdown-toggle').on('click', function (event) {
                $(this).parent().toggleClass('show');
                $(this).next().toggleClass('show');
                $(this).parent().siblings().removeClass('show');
                $(this).parent().siblings().children().removeClass('show');
            });
        });
        // login signup
        // add class to the input type file label
        $(function(){
            $("input[type='file']").parent().children("label").addClass("pointer");
        });
        // add class to the input type file label
        // search content
        $(function(){
            $("#search-d").focus(function () {
                $('#search-content').show();
            });
            $('#search-d').blur(function () {
                if (!$(this).val()) {
                    $('#search-content').hide();
                }
            });
        });
        // search content
        // preview image
            $(function () {
                $(document).on("change", "#selfieupload", function () {
                    var uploadFile = $(this);
                    var files = !!this.files ? this.files : [];
                    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

                    if (/^image/.test(files[0].type)) { // only image file
                        var reader = new FileReader(); // instance of the FileReader
                        reader.readAsDataURL(files[0]); // read the local file
                        reader.onloadend = function () { // set image data as background of div
                            $('.imagePreview').css("background-image", "url(" + this.result + ")");
                        }
                    }
                });
            });
        // preview image
    });
}(jQuery));