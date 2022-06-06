window.addEventListener('load', function() {
    sett.apps.forEach(function(a){
        let t = a.split('|')
        let b = document.createElement('div')
        b.classList.add('site')
        let h = document.createElement('a')
        let n = document.createElement('span')
        let i = document.createElement('i')
        // dir_project
        let link = t[1].replace('@', _md + '_j.em/')
        h.href = link
        n.addEventListener('click', function(){
            window.open(link, '_blank', 'noreferrer')
        })
        let tit = t[0][0].toUpperCase() + t[0].slice(1)
        if (tit.includes('*')) {
            h.classList.add('frame')
            h.setAttribute('target', '_self')
        } else {
            h.setAttribute('target', '_top')
        }
        tit = tit.replace('*', '')
        h.setAttribute('title', tit)
        n.innerText = tit
        h.setAttribute('rel', 'noreferrer nofollow')
        i.className = t[2]
        b.appendChild(h)
        h.appendChild(i)
        b.appendChild(n)
        $('.sites').appendChild(b)
    })
})