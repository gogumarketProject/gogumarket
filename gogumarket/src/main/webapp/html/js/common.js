Promise.all([
    fetch('header.html').then(response => response.text()),
    fetch('menu_bar.html').then(response => response.text()),
    fetch('footer.html').then(response => response.text()),
    fetch('message.html').then(response => response.text())
]).then(([headerData, menuBarData, footerData, messageData]) => {
    document.getElementById('header').innerHTML = headerData;
    document.getElementById('menu_bar').innerHTML = menuBarData;
    document.getElementById('footer').innerHTML = footerData;
    document.getElementById('message').innerHTML = messageData;

    // message.js 파일을 동적으로 로드
    const script = document.createElement('script');
    script.src = 'js/message.js'; // message.js 파일의 경로로 변경
    document.body.appendChild(script);
}).catch(error => {
    console.error('HTML 로드 중 오류 발생:', error);
});