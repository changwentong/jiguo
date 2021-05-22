window.onload = function() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Misfort.XMLHTTP');

    ajax_.open('get', 'http://1.15.132.9:3000/play/hot', true);

    ajax_.send();

    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {

                var data = JSON.parse(ajax_.responseText);

                console.log(data);
                // console.log(data);
                var tepText = doT.template(document.getElementById('play_script').innerText);

                document.getElementById('list').innerHTML = tepText(data[2]) + tepText(data[3]);
            }
        }
    }
}


function play_fn() {
    var div = document.getElementsByClassName('nb')[0]
    div.innerHTML = '<p>' + '<img src="../img/loading-icon.gif" alt="">' + '&nbsp;' + '正在加载中' + '<p>';

}