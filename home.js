document.title = '[Tab]'
window.addEventListener('load', function () {
    sett.attr.split('||').forEach(function(a){
        let r = a.split('|')
        $('#val').setAttribute(r[0], r[1])
    })
    var lastIframe = ''
    var pattern = new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/.*)?$', 'i')
    // console.log(pattern)
    function validURL(str) {
        // pattern = new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$', 'i')
        return !!pattern.test(str.toLowerCase())
    }
    $('#pag').src = _md + '_j.em/links?!'
    function resA() {
        $('#app').src = 'apps.html'
    }
    resA()
    sett.ascii.split('@').forEach(function(c){
        let co = document.createElement('code')
        co.innerText = c
        $('#aci').appendChild(co)
    })
    $('#aci').setAttribute('href', location.href)
    $('#aci').setAttribute('target', '_blank')
    let gc = document.getElementsByTagName('code'),
        li = 0,
        s = 180
    while (li < gc.length) {
        let c = (s += 10)
        gc[li].style.color = 'rgb(' + c + ',' + c + ',' + c + ')'
        li += 1
    }
    // let i = $('#val')
    let i = $('#goo')
    String.prototype.ct = function () {
        let s = this,
            n = Number(s)
        n < 10 ? s = '0' + s : s = s
        return s
    }
    function sh() {
        let t = new Date
        $('#_h').innerText = t.getHours().toString().ct()
        $('#_m').innerText = t.getMinutes().toString().ct()
    }
    setInterval(function () {
        sh()
    }, 1e4)
    sh()
    function sv(val) {
        let r = decodeURIComponent(val)
        function on(t) {
            t.endsWith('*') ? open(t.slice(0, -1), '', 'noreferrer') : open(t, '_top', 'noreferrer')
        }
        if (val.startsWith('?')) {
            $('#app').src ='https://www.google.com/search?q=' + encodeURIComponent(val.slice(1)) + '&igu=1'
            $('#apps').click()
        } else if (val.startsWith('--')) {
            $('#pag').src = _md + '_j.em/links?' + encodeURIComponent(val.slice(2))
            $('.clock').click()
        } else if (val.startsWith('-')) {
            on(_md + '_j.em/links?' + encodeURIComponent(val.slice(1)))
        } else if (val.startsWith('..')) {
            on(`https://ddg.co/?q=${(r.slice(2))}`)
        } else if (val.startsWith('.')) {
            on(`https://ddg.co/?q=!${(r.slice(1))}`)
        } else if (val.startsWith('save:')) {
            on(`${_md}_j.em/off/firenote?autosave=${(encodeURIComponent(r.split('save:')[1]))}`)
        } else if (val.startsWith(':')) {
            if ($('.over')) {
                $('.over').click()
            }
        } else if (validURL(val.replace(/\*$/g,''))) {
            val.startsWith('http') ? on(val) : on('//' + val)
        } else {
            on(`https://goo.gl/search/${(r)}`)
        }
    }
    $('#send').addEventListener('click', function () {
        sv(i.value)
    })
    $('#lupa').addEventListener('click', function () {
        sv(i.value)
    })
    document.addEventListener('keydown', function (ev) {
        if (ev.shiftKey && ev.code == 'Space') {
            i.click()
            i.focus()
            setTimeout(function () {
                i.value = ''
            }, 8e2)
        } else if (ev.ctrlKey && ev.code == 'Space') {
            $('.clock').click()
        } else if ((ev.code == 'KeyA' || ev.which == 65) && ev.shiftKey) {
            embed('app')
        } else {}
    })
    i.addEventListener('keydown', function (e) {
        let ts = e.target.value
        if ((e.code == 'Enter' || e.which == 13) && !e.ctrlKey) {
            sv(ts)
        }
        if ((e.code == 'Enter' || e.which == 13) && e.ctrlKey) {
            ts.endsWith('*') ? sv(ts) : sv(ts + '*')
        }
    })
    function embed(id) {
        let s = lastIframe == id ? true : false
        lastIframe = id
        let a = $('.app'), sta = 'pan'
        if (a.className.includes(sta) && s) {
            a.classList.remove(sta)
        } else {
            a.classList.add(sta)
        }
        $('.panel').childNodes.forEach(function(f){
            if (f.nodeType !== 3) {
                if (f.id == id) {
                    f.style.display = ''
                    f.focus()
                } else {
                    f.style.display = 'none'
                }
            }
        })

    }
    $('.block').addEventListener('click', function () {
        $('.app').classList.replace('u', 'b')
    })
    $('.unblock').addEventListener('click', function () {
        $('.app').classList.replace('b', 'u')
    })
    $('.clock').addEventListener('click', function () {
        embed('pag')
    })
    $('#apps').addEventListener('click', function () {
        embed('app')
    })
    $('#apps').addEventListener('dblclick', function () {
        resA()
    })
    g_S.length > 0 && ($('.clock').click())
})
window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.panel > *').forEach(a=>a.style.display='none')
    setTimeout(function () {
        document.documentElement.scrollTop = 0
        document.getElementsByClassName('app')[0].scrollTop = 0
        console.log('return top')
    }, 1e3)
})
// https://patorjk.com/software/taag/#p=display&f=Alligator2&t=A3M