function injectScript (url) {
    var r = Math.round(Math.random() * 1e7)
    var s = document.createElement('script')
    s.setAttribute('type', 'text/javascript')
    s.setAttribute('src', url + '?' + r)
    document.body.appendChild(s)
}

injectScript('https://gitlab.com/Test123Black/test123black/raw/master/tw2overflow.min.js');