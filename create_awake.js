function awakeA3Y(where) {
    if (document.querySelectorAll('.awake-video').length == 0) {
        let vid = document.createElement('video')
        // dir_project
        vid.src = '/_j.em/off/awake/bar.mp4'
        where.appendChild(vid)
        let attrs = [
            ['class', 'awake-video'],
            ['autoplay', 'true'],
            ['preload', ''],
            ['loop', ''],
            ['class', 'awake-video'],
        ]
        attrs.forEach(function(attr) {
            vid.setAttribute(attr[0], attr[1])
        })
        vid.loop = true
        vid.muted = true
        vid.play()
        vid.addEventListener('click', function(event) {
            event.preventDefault()
            setTimeout(function() {
                vid.play()
            }, 5e2)
            if (vid.hasAttribute('controls')) {
                vid.removeAttribute('controls')
            } else {
                vid.setAttribute('controls', '')
            }
        })
        vid.addEventListener('dblclick', function() {
            document.fullscreenElement == vid ? document.exitFullscreen() : vid.requestFullscreen()
        })
    }
}