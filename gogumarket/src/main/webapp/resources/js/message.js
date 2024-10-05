document.addEventListener('DOMContentLoaded', function () {
    const noteButton = document.getElementById('noteButton');
    const noteSlidePanel = document.getElementById('noteSlidePanel');
    const closePanelButton = document.getElementById('closePanelButton');

    // 쪽지 버튼 클릭 시 슬라이드 패널 열기
    if (noteButton && noteSlidePanel) {
        noteButton.addEventListener('click', function () {
            noteSlidePanel.style.right = '0';
            noteSlidePanel.style.transition = 'right 0.3s ease-in-out';
        });
    }

    // 닫기 버튼 클릭 시 슬라이드 패널 닫기
    if (closePanelButton && noteSlidePanel) {
        closePanelButton.addEventListener('click', function () {
            noteSlidePanel.style.right = '-600px';
        });
    }
    // 메시지 카운트 숨기기 (메시지 카운트가 0인 경우)
	const messageCounts = document.querySelectorAll('.message-count');
	messageCounts.forEach(function (countElement) {
	    if (parseInt(countElement.dataset.count, 10) === 0) {
	        countElement.style.display = 'none';
	    }
	});
});


