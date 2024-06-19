// Thêm topnav vào trang
function addTopNav() {
    document.write(`    
	<div class="top-nav group">
        <section>
            <div class="social-top-nav">
                <a class="fa fa-facebook"><img style="width:15px; height:15px; opacity:0.5; padding-top: 7px;" src="http://localhost/webproject/Public/Pictures/facebook.png"></a>
                <a class="fa fa-twitter"><img style="width:13px; height:13px; opacity:0.5; padding-top: 7px;" src="http://localhost/webproject/Public/Pictures/twitter.png"></a>
                <a class="fa fa-google"><img style="width:14px; height:14px; opacity:0.5; padding-top: 7px;" src="http://localhost/webproject/Public/Pictures/instagram.png"></a>
                <a class="fa fa-youtube"><img style="width:15px; height:15px; opacity:0.5; padding-top: 7px;" src="http://localhost/webproject/Public/Pictures/youtube.png"></a>
            </div> <!-- End Social Topnav -->

            <ul class="top-nav-quicklink flexContain">
                <li><a href="index.html"><i class="fa fa-home"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/home.png"></i> Trang chủ</a></li>
                <li><a href="tintuc.html"><i class="fa fa-newspaper-o"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/news.png"></i> Tin tức</a></li>
                <li><a href="tuyendung.html"><i class="fa fa-handshake-o"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/hand-shake.png"></i> Tuyển dụng</a></li>
                <li><a href="gioithieu.html"><i class="fa fa-info-circle"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/information.png"></i> Giới thiệu</a></li>
                <li><a href="trungtambaohanh.html"><i class="fa fa-wrench"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/wrench.png"></i> Bảo hành</a></li>
                <li><a href="lienhe.html"><i class="fa fa-phone"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/telephone.png"></i> Liên hệ</a></li>
            </ul> <!-- End Quick link -->
        </section><!-- End Section -->
    </div><!-- End Top Nav  -->`);
}

// Thêm header
function addHeader() {
    document.write(`        
	<div class="header group">
        <div class="logo">
            <a href="index.html">
                <img src="http://localhost/webproject/Public/Pictures/logo.jpg" alt="Trang chủ Smartphone Store" title="Trang chủ Smartphone Store">
            </a>
        </div> <!-- End Logo -->

        <div class="content">
            <div class="search-header" style="position: relative; left: 162px; top: 1px;">
                <form class="input-search" method="get" action="index.html">
                    <div class="autocomplete">
                        <input id="search-box" name="search" autocomplete="off" type="text" placeholder="Nhập từ khóa tìm kiếm...">
                        <button type="submit">
                            <i class="fa fa-search"><img style="width:15px; height:15px; opacity:0.5;" src="http://localhost/webproject/Public/Pictures/search.png"></i>
                            Tìm kiếm
                        </button>
                    </div>
                </form> <!-- End Form search -->
                <div class="tags">
                    <strong>Từ khóa: </strong>
                    <ul>
                        <li><a href="">Samsung</a></li>
                        <li><a href="">iPhone</a></li>
                        <li><a href="">Huawei</a></li>
                        <li><a href="">Oppo</a></li>
                        <li><a href="">Mobi</a></li>
                    </ul>
                </div>
            </div> <!-- End Search header -->

            <div class="tools-member">
                <div class="member">
                    <a onclick="checkTaiKhoan()">
                        <i class="fa fa-user"><img style="width:15px; height:15px;" src="http://localhost/webproject/Public/Pictures/user.png"></i>
                        Tài khoản
                    </a>
                    <div class="menuMember hide">
                        <a href="nguoidung.html">Trang người dùng</a>
                        <a onclick="if(window.confirm('Xác nhận đăng xuất ?')) logOut();">Đăng xuất</a>
                    </div>

                </div> <!-- End Member -->

                <div class="cart">
                    <a href="giohang.html">
                        <i class="fa fa-shopping-cart"><img style="width:15px; height:15px;" src="http://localhost/webproject/Public/Pictures/cart.png"></i>
                        <span>Giỏ hàng</span>
                        <span class="cart-number"></span>
                    </a>
                </div> <!-- End Cart -->

                <!--<div class="check-order">
                    <a>
                        <i class="fa fa-truck"></i>
                        <span>Đơn hàng</span>
                    </a>
                </div> -->
            </div><!-- End Tools Member -->
        </div> <!-- End Content -->
    </div> <!-- End Header -->`)
}

// Thêm footer
function addFooter() {
    document.write(`
    <!-- ============== Alert Box ============= -->
    <div id="alert">
        <span id="closebtn">&otimes;</span>
    </div>

    <!-- ============== Footer ============= -->
    <div class="copy-right">
        <p><a href="index.html">LDD Phone Store</a> - All rights reserved © 2021 - Designed by
            <span style="color: #eee; font-weight: bold">group 10th</span></p>
    </div>`);
}

// Thêm plc (phần giới thiệu trước footer)
function addPlc() {
    document.write(`
    <div class="plc">
        <section>
            <ul class="flexContain">
                <li>Giao hàng hỏa tốc trong 1 giờ</li>
                <li>Thanh toán linh hoạt: tiền mặt, visa / master, trả góp</li>
                <li>Trải nghiệm sản phẩm tại nhà</li>
                <li>Lỗi đổi tại nhà trong 1 ngày</li>
                <li>Hỗ trợ suốt thời gian sử dụng.
                    <br>Hotline:
                    <a href="tel:12345678" style="color: #288ad6;">12345678</a>
                </li>
            </ul>
        </section>
    </div>`);
}

// Di chuyển lên đầu trang
function gotoTop() {
    if (window.jQuery) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 100);
    } else {
        document.getElementsByClassName('top-nav')[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}