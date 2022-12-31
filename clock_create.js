function clockA3Y(where, refresh) {
    where.innerHTML = ''
    let formate = function(numb) {
        let s = numb.toString()
        numb < 10 ? s = '0' + s : s = s
        return s
    }
    let ccex = 'clock-index'
    function createEmt(_class) {
        let newEmt = document.createElement('div')
        newEmt.classList.add(_class)
        where.appendChild(newEmt)
        return newEmt
    }
    let e = {
        h: createEmt('clock-h'),
        s: createEmt('clock-s'),
        m: createEmt('clock-m')
    }
    let s = document.createElement('style')
    s.setAttribute(ccex, '')
    s.innerHTML = '.clock-s{animation-name:ddot;animation-duration:1s;animation-iteration-count:infinite}@keyframes ddot{0%{opacity:0}49%{opacity:0}50%{opacity:1}100%{opacity:1}}'
    where.appendChild(s)
    e.s.innerText = ':'
    let interval
    function checktime() {
        if (!!where.querySelector('[' + ccex + ']')) {
            let dt = new Date()
            e.h.innerHTML = formate(dt.getHours())
            e.m.innerHTML = formate(dt.getMinutes())
        } else {
            clearInterval(interval)
        }
    }
    checktime()
    interval = setInterval(function() {
        checktime()    
    }, refresh)
    return where
}