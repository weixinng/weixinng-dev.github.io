$(document).ready(function() {
    // 1. 导航栏滚动效果：改变透明度/背景
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(10,25,47,0.95)');
        } else {
            $('.navbar').css('background', 'linear-gradient(135deg, #0a192f 0%, #0f2b3d 100%)');
        }
        
        // 显示/隐藏回到顶部按钮
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    
    // 2. 平滑滚动 (点击导航链接)
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });
    
    // 3. 回到顶部按钮
    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });
    
    // 4. 表单提交模拟提示（演示用）
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        $('#formMessage').removeClass('d-none').addClass('alert-success').html('<i class="fas fa-check-circle"></i> 感谢留言！我会尽快与你联系。');
        $(this)[0].reset();
        // 3秒后自动隐藏提示
        setTimeout(function() {
            $('#formMessage').addClass('d-none');
        }, 3000);
    });
});