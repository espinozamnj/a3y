var results = []
function save_results(data) {
    // console.log(data)
    results = data
    mostrar(data)
}
var mostrar = function() {}
var google = function() {}
window.addEventListener('load', function() {
    let $ = function(et) { return document.querySelector(et) }
    $('#goo').setAttribute('type', 'text')
    $('#goo').setAttribute('autocomplete', 'off')
    $('#goo').setAttribute('spellcheck', 'false')
    
    google = function(text){
        open('https://www.google.com/search?q=' + encodeURIComponent(text) + '&igu=1', 'blank')
    }
    mostrar = function(data) {
        let sg = data[1]
        if (sg.length > 0) {
            $('.form').classList.add('open')
            $('.suggest').innerHTML = '<p style="display:none">' + data[0] + '</p>'
            function getNewValueInput(last, newr) {
                if (last.startsWith('?')) {
                    last = '?' + newr
                } else if (last.startsWith('.')) {
                    last = last.replace(/\s.+/, ' ' + newr)
                } else {
                    last = newr
                }
                return last
            }
            let ipnt = $('#goo')
            sg.forEach(function(d){
                let i = document.createElement('p')
                i.addEventListener('click', function(){
                    if (!navigator.userAgentData.mobile) {
                        sv(getNewValueInput(ipnt.value, i.innerText))
                    } else {
                        ipnt.value = getNewValueInput(ipnt.value, i.innerText)
                        setTimeout(function(){
                            ipnt.focus()
                        }, 2e2)
                        setTimeout(function(){
                            $('.form').classList.remove('open')
                            $('.form').classList.add('open')
                        }, 505)
                    }
                })
                i.innerHTML = d[0]
                $('.suggest').appendChild(i)
            })
        }
    }
    $('#goo').addEventListener('blur', function(){
        setTimeout(function() {
            $('.form').classList.remove('open')
        }, 5e2)
    })
    $('#goo').addEventListener('input', function(e){
        let v = e.target.value
        let isCMD = false
        let cmd = [
            '^-',
            '^--',
            '\\*$',
            '^save',
            '^@@\\.',
            '^\\.\\.',
            '/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/'
        ]
        cmd.forEach(function(c) {
            if (!isCMD) {
                let r = new RegExp(c)
                isCMD = r.test(v)
                // isCMD && console.log(r)
            }
        })
        v.startsWith("?") && ( v = v.slice(1) )
  
        if (v !== '' && !isCMD) {
            if (v.startsWith(':')) {
                $('.suggest').innerHTML = ''
                let result = []
                __apps__.forEach(function (a){
                    if (a.name.toLowerCase().includes(v.slice(1).toLowerCase())) {
                        result.push(a)
                    }
                })
                if (result.length > 0) {
                    $('.form').classList.add('open')
                    for (let ix = 0; ix < result.length; ix++) {
                        if (ix < 6) {
                            let r = result[ix]
                            let link = ''
                            r['url'].startsWith('@') ? link = '/_j.em/' + r['url'].slice(1) : link = r['url']
                            let i = document.createElement('p')
                            i.addEventListener('click', function(){
                                open(link, '_top')
                                setTimeout(function(){
                                    $('.form').classList.remove('open')
                                    $('.form').classList.add('open')
                                }, 505)
                            })
                            i.innerText = r['name']
                            $('.suggest').appendChild(i)
                        } else {
                            break
                        }
                    }
                }
            } else {
                let s = document.createElement('script')
                let reduce_bang = v
                if (v.startsWith('.')) {
                    let split = reduce_bang.match(/\s.+/)
                    if (!!split) {
                        reduce_bang = split[0].slice(1)
                    } else {
                        reduce_bang = v
                    }
                }
                if ((!(/\.\w{1,4} *$/).test(reduce_bang) || (/\.[^ ]+ .+/).test(reduce_bang)) && reduce_bang != '.') {
                    let url = {
                        client: 'https://www.google.com/complete/search',
                        params: {
                            'client': 'hp',
                            'hl': 'es-419',
                            'sugexp': 'msedr',
                            'gs_rn': '62',
                            'gs_ri': 'hp',
                            'cp': '1',
                            'gs_id': '9c',
                            'q': encodeURIComponent(reduce_bang),
                            'xhr': 't',
                            'callback': 'save_results'
                        },
                        prm: []
                    }
                    for(i in url.params) {
                        url.prm.push(i + '=' + url.params[i])
                    }
                    s.src = url.client + '?' + url.prm.join('&')
                    $('.sjs').appendChild(s)
                    setTimeout(function(){
                        s.parentNode.removeChild(s)
                    }, 1e3)
                }
            }
        } else {
            $('.form').classList.remove('open')
        }
    })
    $('#goo').addEventListener('keydown', function(e) {
        let it = e.target
        let isthis = false
        if (it.value.startsWith('?')) {isthis = true}
        let over = 'over'
        function copy_val (text) {
            if (it.value.startsWith('?')) {
                it.value = '?' + text
            } else if (it.value.startsWith('.')) {
                it.value = it.value.replace(/ .+/, ' ' + text)
            } else {
                it.value = text
            }
        }
        let kc = e.which
        if (kc == 38 || kc == 40) {
            e.preventDefault()
            if ($('.' + over)) {
                // console.log($('.' + over))
                let o = $('.' + over), n
                o.classList.remove(over)
                if (kc == 40) {
                    if (o == $('.suggest').lastChild) {
                        n = $('.suggest').firstChild
                    } else {
                        n = o.nextElementSibling
                    }
                } else {
                    if (o == $('.suggest').firstChild) {
                        n = $('.suggest').lastChild
                    } else {
                        n = o.previousElementSibling
                    }
                }
                n.classList.add(over)
                if (!e.target.value.startsWith(':')) {
                    copy_val(n.innerText)
                }
            } else {
                let n
                if (e.target.value.startsWith(':')) {
                    n = $('.suggest').children[0]
                    n.classList.add(over)
                } else {
                    n = $('.suggest').children[1]
                    n.classList.add(over)
                    copy_val(n.innerText)
                }
            }
        }
        if (kc == 13) {
            // google(e.target.value)
        }
    })
})