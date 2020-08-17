// import carticon from '../Vendors/Images/baseline_shopping_cart_black_36dp.png';
// import carticon2 from '../Vendors/Images/baseline_shopping_cart_black_18dp.png';
window.addEventListener("DOMContentLoaded", function () {
    function cl(a) {
        console.log("Sơn đẹp trai vừa log được : ", a)
    }
    // khai báo cho slide ------------------------------------------------
    var btn_next = document.querySelector(".button-next .next");
    var btn_pre = document.querySelector(".button-next .pre");
    var slides = document.querySelectorAll(".list-slide-wrap .slide");
    var dots = document.querySelectorAll(".chuyentrang li.dot");
    var currentIndex = 0;
    var slideCount = slides.length;

    var variableReset = setInterval(() => {
        autoSlide();
    }, 5000)






    // gọi hàm chuyển slide khi bấm nextSlide
    btn_next.addEventListener("click", nextSlide);
    // gọi hàm chuyển slide khi bấm preSlide
    btn_pre.addEventListener("click", preSlide);
    // Hiển thị slide với nút doted bên dưới
    // click vào dot hiển thị slide tương ưng
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function () {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("kichhoat");
                slides[i].classList.remove("appendNext");
                slides[i].classList.remove("hiddenNext");

            }
            for (let k = 0; k < dots.length; k++) {
                dots[k].classList.remove("active");

            }
            this.classList.add("active");
            var vt = 0;
            var currentDot = this;
            for (vt = 0; currentDot = currentDot.previousElementSibling; vt++) { }
            cl("Đang ở dot số" + vt);
            if (vt > 0) {
                slides[vt].classList.add("kichhoat");
                slides[vt].classList.add("appendNext");
                slides[vt - 1].classList.add("hiddenNext");
            } else {
                slides[0].classList.add("kichhoat");
                slides[0].classList.add("appendNext");
                slides[1].classList.add("hiddenNext");
            }
        }

    }

    /// Chuyên slide khi bấm nút next
    function nextSlide() {
        // slide hiện tại đang được hiển thị ( mặc định là  slide số 1 với currentIndex =0 )
        var currentSlide = slides[currentIndex];

        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        for (let i = 0; i < slides.length; i++) {

            slides[i].classList.remove("kichhoat");
            slides[i].classList.remove("hiddenNext");
            slides[i].classList.remove("appendNext");
            // slides[i].classList.remove("hiddenNext");
        }
        if (currentIndex < slideCount - 1) {
            var currentSlide = slides[currentIndex],
                nextSlidee = currentSlide.nextElementSibling;
            currentIndex++;
            dots[currentIndex].classList.add("active");
            slides[currentIndex].classList.add("kichhoat");
            currentSlide.classList.add("hiddenNext");
            nextSlidee.classList.add("appendNext");
        } else {
            // khi đến slide cuối thì đảo chiều, bỏ class xuất hiện, thêm class ẩn đi
            // class xuất hiện được đẩy cho slide đầu vào tiếp tục vòng lặp
            slides[slides.length - 1].classList.add("hiddenNext");
            slides[slides.length - 1].classList.remove("appendNext");
            currentIndex = 0;
            slides[currentIndex].classList.add("appendNext");
            dots[currentIndex].classList.add("active");
            slides[currentIndex].classList.add("kichhoat");
        }

        // cl(" Next : Đang ở slide số  : " + (currentIndex + 1));


    }



    // Chuyển slide khi bấm nút lùi slide
    function preSlide() {

        var currentSlide = slides[currentIndex],
            preSlides = currentSlide.previousElementSibling;
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("kichhoat");
            slides[i].classList.remove("hiddenNext");
            slides[i].classList.remove("appendNext");
        }
        if (currentIndex > 0) {

            currentIndex--;
            currentSlide.classList.add("hiddenNext");
            preSlides.classList.add("appendNext");
        } else {
            currentIndex = slides.length - 1;
            slides[0].classList.add("hiddenNext");
            slides[slides.length - 1].classList.add("appendNext");
        }
        dots[currentIndex].classList.add("active");
        slides[currentIndex].classList.add("kichhoat");

        // cl(" Pre : Đang ở slide số  : " + (currentIndex+1));
    }

    var slideIndex = 0;
    // function auto slide 
    function autoSlide() {

        var currentSlide = document.querySelector(".list-slide-wrap .kichhoat");
        var nextSlides = currentSlide.nextElementSibling;
        for (slideIndex = 0; currentSlide = currentSlide.previousElementSibling; slideIndex++) { }
        // remove hết các class ở slide và dot trước khi thêm class cho slide  và dot hiện tại
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('kichhoat');
            slides[i].classList.remove('hiddenNext');
            slides[i].classList.remove('appendNext');
            dots[i].classList.remove('active');

        }
        // kiểm tra xem đã đến slide cuối chưa. vị trí hiện tại là slide cuối -1 
        if (slideIndex < slides.length - 1) {
            nextSlides.classList.add("kichhoat");
            slides[slideIndex].classList.add("hiddenNext");
            nextSlides.classList.add("appendNext");
            dots[slideIndex].nextElementSibling.classList.add("active");
        } else {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("kichhoat");
                dots[i].classList.remove("active");
            }
            slides[0].classList.add("kichhoat");
            slides[0].classList.add("appendNext");
            slides[slideCount - 1].classList.add("hiddenNext");
            dots[0].classList.add("active");
        }
        // cl(slideIndex);
        // cl("Xong 1 lần")
    }
    // gọi hàm tự chạy slide
    autoSlide();



    // Hiệu ứng thanh cuộn với menu 

    var banner = document.getElementById("banner"),
        logo = document.querySelector(".logo-wrap"),
        menuitems = document.querySelectorAll(".container-menu-item");
    window.addEventListener("scroll", function () {
        var posWin = window.pageYOffset; // vị trí window khi scroll
        if (posWin > 150) {
            banner.classList.add("bg-trang");
            logo.classList.add("small");
            // for (let i = 0; i < menuitems.length; i++) {
            //     menuitems[i].classList.remove("textwhite");

            // }

            // get.setAttribute("src", carticon) // Thay đổi src cho icon cart thay đổi màu khi header thay đổi màu
        }
        else if (posWin < 100) {
            banner.classList.remove("bg-trang");
            logo.classList.remove("small");
            // for (let i = 0; i < menuitems.length; i++) {
            //     menuitems[i].classList.add("textwhite");

            // }

            // get.setAttribute("src", carticon2) // Thay đổi src cho icon cart thay đổi màu khi header thay đổi màu
        }

        // cl(hahe);

    })
    var hahe = window.innerHeight - document.querySelector(".banner").offsetHeight;
    if (hahe >= 0) {
        document.querySelector(".block1").style.maxHeight = `${"100vh-100px"}`;
        // document.querySelector(".block1").style.maxHeight= " 837px ";
    }

    var get = document.querySelector(".geticon");
    window.addEventListener("resize", function () {
        var withWin = window.innerWidth;
        if (withWin < 768) {
            document.querySelector(".container-menu").classList.add("dni");
        } else {
            document.querySelector(".container-menu").classList.remove("dni");

        }
    })




    /// Tab item product preview home

    var tabProductDetail = document.querySelectorAll(".tab-control .tab-control-item"),
        tabContentDetail = document.querySelectorAll(".ModalDetailProduct-detail-txt .tab-content");
    for (let i = 0; i < tabProductDetail.length; i++) {
        tabProductDetail[i].onclick = function () {
            for (let k = 0; k < tabProductDetail.length; k++) {
                tabProductDetail[k].classList.remove("tab-active");
                tabContentDetail[k].classList.remove("tab-content-active");
            }
            this.classList.add("tab-active");
            tabContentDetail[i].classList.add("tab-content-active");

        }

    }


    var tabTitle = document.querySelectorAll(".product-tab-detail_title .tab-title"),
        tabContent = document.querySelectorAll(".product-tab-detail_content .tab-content");
    for (let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].onclick = function () {
            for (let k = 0; k < tabTitle.length; k++) {
                tabTitle[k].classList.remove("tab-title_black");
                tabContent[k].classList.add("dn");
            }
            this.classList.add("tab-title_black");
            tabContent[i].classList.remove("dn");
        }

    }










})

