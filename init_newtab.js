if (!location.protocol.includes('s') && !location.origin.includes('127')) {
    location.replace(location.href.replace(/http/,'https'))
}
var _md
location.origin.includes('.test') ? _md = 'https://locked.test/' : _md = 'https://espinozamnj.github.io' + '/' 
let g_S = location.href.split('?')
g_S.length == 2 ? g_S = g_S[1] : g_S = ''
'' != g_S && !location.pathname.includes('apps') && open(_md + '_j.em/links/?' + decodeURIComponent(g_S.replace(/[+]/g, '%20')), '_top')

function $(s) {
    return document.querySelector(s)
}
let sett = {
    'ascii': '    :::      ::::::::  ::::    ::::@  :+: :+:   :+:    :+: +:+:+: :+:+:+@ +:+   +:+         +:+ +:+ +:+:+ +:+@+#++:++#++:     +#++:  +#+  +:+  +#+@+#+     +#+        +#+ +#+       +#+@#+#     #+# #+#    #+# #+#       #+#@###     ###  ########  ###       ###',
    'attr': 'autocomplete|off||spellcheck|false||placeholder|Buscar en la web',
    'apps': [
        'bitrix|https://locked.bitrix24.es/|fa-solid fa-briefcase',
        'bookmarlets*|@off/save|fab fa-js-square',
        'contacts|https://contacts.google.com/?hl=es-419|fa-solid fa-address-book',
        'calendar|https://calendar.google.com/calendar/u/0/r|fa-solid fa-calendar',
        'deezer|https://www.deezer.com/es/|fa-brands fa-deezer',
        'docs|https://docs.google.com/document|fa-solid fa-file-lines',
        'drive|https://drive.google.com/drive|fa-brands fa-google-drive',
        'firenote*|@off/firenote|fa-solid fa-fire',
        'github|https://github.com/espinozamnj/|fa-brands fa-github',
        'google*|//www.google.com/?igu=1|fa-brands fa-google',
        'gmail|https://mail.google.com/mail|fas fa-at',
        'history*|@off/save/pa55|fa-solid fa-key',
        'main*|@off|fa-solid fa-house',
        'maps|https://www.google.com/maps|fa-solid fa-location-dot',
        'monaco*|@off/code/|fa-solid fa-laptop-code',
        'music|https://music.youtube.com/channel/UCSFMRGTyAcCHgE2Fp0xsD_A|fa-solid fa-music',
        'mp3*|@links/music|fa-solid fa-compact-disc',
        'notes*|@off/note|fas fa-sticky-note',
        'notion|https://notion.so/|fa-solid fa-notes-medical',
        'office|https://office.com|fab fa-microsoft',
        'onedrive|https://estudianteusatedu-my.sharepoint.com/|fa-solid fa-cloud',
        'outlook|https://outlook.office.com/mail/|fa-solid fa-envelope',
        'pad*|@off/pad.html|fas fa-sticky-note',
        'play store|https://play.google.com/store?hl=es-419|fa-brands fa-google-play',
        'raindrop|https://app.raindrop.io/|fas fa-paperclip fa-fw',
        'saved|https://saved.io/|fa-solid fa-heart',
        'speedtest*|https://openspeedtest.com/Get-widget.php|fa-solid fa-gauge',
        'telegram|https://t.me/NotesSaverBot|fa-solid fa-paper-plane',
        'tiktok|https://www.tiktok.com/|fa-brands fa-tiktok',
        'translate|https://translate.google.com/|fa-solid fa-language',
        'trello|https://trello.com/|fa-brands fa-trello',
        'tasksboard|https://tasksboard.com/app|fa-regular fa-circle-check',
        'videos*|@links/youtu-be.html|fa-solid fa-photo-film',
        'viewer*|@off/view|fa-solid fa-file',
        'whatsapp|https://web.whatsapp.com/|fa-brands fa-whatsapp',
        'youtube|https://www.youtube.com/|fa-brands fa-youtube',
    ]
}