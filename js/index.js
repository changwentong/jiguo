var time = document.getElementById('time');
var index_span = time.getElementsByTagName('span');

setInterval(function() {
    var currentTime = new Date();
    var futureTime = new Date(2021, 5, 1);
    var differenceTime = futureTime - currentTime;
    var day = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
    day > 10 ? day : day = ('0' + day);
    var hours = Math.floor(differenceTime / 1000 / 60 / 60 % 24);
    hours > 10 ? hours : hours = ('0' + hours);
    var minutes = Math.floor(differenceTime / 1000 / 60 % 60);
    minutes > 10 ? minutes : minutes = ('0' + minutes);
    var second = Math.floor(differenceTime / 1000 % 60);
    second > 10 ? second : second = ('0' + second);
    index_span[0].innerHTML = day;
    index_span[1].innerHTML = hours;
    index_span[2].innerHTML = minutes;
    index_span[3].innerHTML = second;
}, 1000);
var shenqing = document.getElementById('shenqing');
var span = document.getElementById('span');
var num = 126;
shenqing.onclick = function() {
        num++;
        span.innerHTML = num
    }
    // var citem2 = document.getElementsByClassName('citem2')[0]
    // window.onload = function() {
    //     alert(1)
    // }

// $('.citem2 li')('click', function() {
//     alert(1)
// })


// function changeimg(a) {
//     // alert(111)
//     $('.citem3 li').eq(a).fadeIn().siblings().fadeOut();
//     // $('.num li').eq(a).addClass('active').siblings().removeClass('active')
// }
// changeimg(2)
// var step = 0;
// changeimg(step)
// var timer
//     // 图片循环切换
// function aotuPlay() {
//     timer = setInterval(function() {
//         step++;
//         if (step === 3) {
//             step = 0;
//         }
//         changeimg(step);
//     }, 2000)
// }
// aotuPlay();
// // 鼠标移入
// $('.citem2').mouseover(function() {
//     clearInterval(timer);
// }).mouseout(function() {
//     aotuPlay();

// })


// 按钮
var index_return = document.getElementsByClassName('return')[0];
var timer;


var xuan = document.getElementById('xuan');
var images_ = xuan.getElementsByTagName('li');
var citem2 = document.getElementsByClassName('citem2')[0];

// 自动执行的时间
var timer1 = null;
var timer2 = null; // 执行每一步的间隔函数
var x = 0; // 每张图片的下标
function autoMove() {
    timer1 = setInterval(function() {
        x++;
        // 图片下标不能大于图片的个数
        if (x > images_.length) {
            x = 0;
        }
        // 图片滑动
        var step = 0; // 初始化步数为零
        var maxStep = 20; // 通过20步走完一张图片
        var start = citem2.scrollLeft; // 以滚动条的水平位置为起始位置
        var end = images_[0].offsetWidth * x; // 以第x个图片的长度为结束位置
        var everyStep = (end - start) / maxStep; // 执行每一步的步长

        timer2 = setInterval(function() {
            step++;
            if (step >= maxStep) {
                step = 0;
                clearInterval(timer2);
            }
            start += everyStep;
            citem2.scrollLeft = start;
        }, 15)

        images_[x].onclick = function() {
            clearInterval(timer1);
        }
        images_[x].ondblclick = function() {
            autoMove();
        }
    }, 2100)
}

autoMove();





window.onscroll = function(e) {
    e = e || window.event;
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 300) {
        index_return.style.display = 'block';
    } else {
        index_return.style.display = 'none';
    }

    index_return.onclick = function(e) {
        e = e || window.event;
        clearInterval(timer);
        timer = setInterval(function() {
            document.documentElement.scrollTop -= 20;
            if (document.documentElement.scrollTop == 0) {
                clearInterval(timer);
                index_return.style.display = 'none';
            }
        }, 10)
    }
}

// 热门渲染