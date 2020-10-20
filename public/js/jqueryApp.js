// carousel
$(function() {
    carousel('.slider-banner-prod', 0, [1, 1, 1, 1]);
    carousel('.feedback-slider', 1, [1, 1, 1, 1]);

    function carousel(carouselName, margin, responArr) {
        let carousel = $(carouselName);
        $(carousel).owlCarousel({
            loop: true,
            margin: margin,
            nav: true,
            responsive: {
                0: {
                    items: responArr[0]
                },
                768: {
                    items: responArr[1]
                },
                1000: {
                    items: responArr[2]
                },
                1200: {
                    items: responArr[3]
                }
            }
        })
    }
});

$(function() {
    carousel('.video-slider-wrap', 30);

    function carousel(carouselName, margin) {
        let carousel = $(carouselName);
        $(carousel).owlCarousel({
            loop: true,
            margin: margin,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
            }
        })
    }
});
$(function() {
    carousel('.slider-treding-hidden', 1);

    function carousel(carouselName, margin) {
        let carousel = $(carouselName);
        $(carousel).owlCarousel({
            loop: true,
            margin: margin,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
});


// purchase popup random
$(function() {
    handleMessagePurchase();

    function listPurchaseInfo() {
        return [{
                type: 'customer',
                title: 'A/c <strong>Nguyễn Quang Nhật</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Trần Thanh Đăng</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Thị Thúy</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Trần Minh Phụng</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Phạm Thanh Đăng</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Phạm Thị Trang</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Trần Thị Ngọc Ánh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>MA THỊ THU UYÊN</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>PHẠM NGỌC LINH</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>TRỊNH THU HƯƠNG</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>BÙI THỊ THANH THẢO</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>THÂN PHƯƠNG THẢO</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>NGUYỄN MINH PHƯỢNG</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Lê Tuấn Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Tuấn Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Như Bách</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'customer',
                title: 'A/c <strong>NGUYỄN THỊ LAN HƯƠNG</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>NGUYỄN THỊ HÀ CHI</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>HOÀNG THỊ KIỀU MY</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>NGUYỄN THỊ HUYỀN CHÂM</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>ĐẶNG QUỲNH NHƯ</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Duy An</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Nhật Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Ngô Hoàng Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Hà Tùng Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Lê Tuấn Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Tuấn Anh</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Như Bách</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'customer',
                title: 'A/c <strong>Vũ Văn Bảo</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Tô Công Bình</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Thanh Bình</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Trương Bá Chiến</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Vũ Quang Chính</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Trần Quang Cơ</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Thịnh Quách Cương</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Lương Thanh Đạt</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Phạm Trung Đức</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'customer',
                title: 'A/c <strong>Nguyễn Ngọc Dũng</strong> đã đặt mua',
                timeOrder: randTimeOrder()
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
            {
                type: 'notification',
                title: randomViews(),
                timeOrder: ''
            },
        ];
    }

    function handleMessagePurchase() {
        var timeStart = setInterval(() => {
            setOpenPopupPurchase();
            clearInterval(timeStart);
            setTimePopupRandom();
        }, 30000);
    }

    var interPurchase = null;

    function setTimePopupRandom() {
        let popupEl = $(".popup-modal-customer-order");
        if (popupEl.hasClass("open")) {
            clearInterval(interPurchase);
            setPopup2();
        } else {
            setTimeout(() => {
                // console.log('Hiện random', randomTimeOpenPopup());
                setOpenPopupPurchase();
                setTimePopupRandom();
            }, randomTimeOpenPopup());
        }
    }

    function setPopup2() {
        setTimeout(() => {
            // console.log('ẩn 5000');
            setOpenPopupPurchase();
            setTimePopupRandom();
        }, 5000);
    }

    function randomTimeOpenPopup() {
        return Math.floor(10000 + Math.random() * 5000);
    }

    function setOpenPopupPurchase() {
        let popupEl = $(".popup-modal-customer-order");
        popupEl.toggleClass('open');
        if (popupEl.hasClass("open")) {
            let lengthData = listPurchaseInfo().length;
            let dataItem = getDataPurchase(randomPopup(lengthData));
            let firseInfo = $(".first-message");
            let finalyInfo = $(".finaly-message");
            if (dataItem != undefined) {
                firseInfo.html(dataItem['title']);
                finalyInfo.html(dataItem['timeOrder']);
            } else {
                firseInfo.html('A/c <strong>Nguyễn Thanh Bình</strong> đã đặt mua');
                finalyInfo.html('Cách đây 18 giờ trước');
            }
        }
    }

    function getDataPurchase(idPurchase) {
        return listPurchaseInfo()[idPurchase];
    }

    function randomPopup(rand_D_End) {
        return Math.floor(Math.random() * (rand_D_End + 1));
    }



    function randomViews() {
        let views = Math.floor(30 + Math.random() * 50);
        return `Có <strong>${views}</strong> khách hàng đang xem`;
    }

    function randTimeOrder() {
        let timeR = Math.floor(1 + Math.random() * 23);
        if (timeR <= 10) {
            return "Cách đây " + (timeR) + " phút trước";
        } else {
            return "Cách đây " + (timeR) + " giờ trước";
        }
    }
});

// handle header
$(function() {
    let header = $("#header");
    let heightBanner = $("#banner").innerHeight();
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > heightBanner) {
            header.addClass('bg');
        } else {
            header.removeClass('bg');
        }
    });
})

// scroll menu
$(function() {
    var url = window.location.href;

    scrollTo__URL(getIdEl(url));
    clickButtonScroll();

    function clickButtonScroll() {
        let listBtn = $("[data-tab-scroll]");
        let mobileMenu = $(".mobile-site");
        let btnToggle = $(".btn-icon");
        let timer = $(".hot-count-down-time");
        listBtn.click(function() {
            let tabName = $(this).attr('data-tab-scroll');
            scrollTo__URL(tabName);
            if (mobileMenu.hasClass('open')) {
                mobileMenu.attr('style', 'transform: translateX(-300)');
                btnToggle.removeClass('close-act');
                btnToggle.addClass('open-act');
            }
        });
    }

    function getIdEl(url) {
        let replace = url.split("#");
        if (replace[1] != undefined) {
            let idEl = replace[1];
            return "#" + idEl;
        }
    }

    function scrollTo__URL(idEl) {
        if (idEl != undefined) {
            let locationEl = $('[data-space-scroll="' + (idEl) + '"]').offset().top;
            $("html, body").animate({
                scrollTop: locationEl - 150
            }, 2000);
        }
    }
});

// video modal
$(function() {
    let listVideo = $("section.video-intro .video-intro-it a.btn-wrap");
    listVideo.click(function() {
        event.preventDefault();
        let srcVideo = $(this).attr('data-video-iframe');
        openModalVideo(srcVideo);
    });

    function openModalVideo(srcVideo) {
        let spaceAppendVideo = $("#video-popup");
        let popupModalVideo = $(".popup-modal.__video");
        spaceAppendVideo.attr('src', srcVideo);
        popupModalVideo.addClass('open');
        buttonActModal();
    }

    function buttonActModal() {
        let btnClose = $(".close-modal-video");
        let popupModalVideo = $(".popup-modal.__video");
        let spaceAppendVideo = $("#video-popup");
        btnClose.click(function() {
            popupModalVideo.removeClass('open');
            spaceAppendVideo.removeAttr('src');
            stopVideo();
        });
    }

    function stopVideo() {
        let iframeVideo = $("#video-popup");
        iframeVideo.stopVideo();
    }
});

//open modal order
$(function() {
    let btnOpen = $(".order-button");
    let modal = $(".popup-modal-order");
    let close = $(".close-order");
    btnOpen.click(function() {
        event.preventDefault();
        modal.addClass('open');
    });
    close.click(function() {
        modal.removeClass('open');
    });
});

// choose color
$(function() {
    let listColorEl = $(".modal-content .form-order-body .list-color li");
    listColorEl.click(function() {
        listColorEl.each(item => {
            listColorEl[item].classList.remove('active');
            // listColorEl[item].removeClass('active');
        });
        $(this).addClass('active');
    });
});

// zoom images
$(function() {
    let btnOpen = $("[data-zoom-img]");
    let modal = $(".popup-modal.__image");
    let btnClose = $(".close-modal-img");
    let imgEl = $("#img-show-full");
    btnOpen.click(function() {
        event.preventDefault();
        let srcIMG = $(this).attr('data-zoom-img');
        imgEl.attr('src', srcIMG);
        modal.addClass('open');
    });
    btnClose.click(function() {
        imgEl.removeAttr('src');
        modal.removeClass('open');
    });
});
// select color => price
let price = $(".modal-content .form-order-body .list-color li.active").attr('data-price');
colorToPrice(price);

function colorToPrice(__price) {
    let price = __price;
    let placeAppendPriceByColor = $("#price-by-color");
    placeAppendPriceByColor.text(price);
    handleClickSelectColor();
}

function handleClickSelectColor() {
    let btn = $(".modal-content .form-order-body .list-color li");
    btn.click(function() {
        let price = $(this).attr('data-price');
        colorToPrice(price);
    });
}