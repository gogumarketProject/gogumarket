document.addEventListener('DOMContentLoaded', function () {
    const nickname = document.getElementById('nicknamemain');
    const profileImage = document.getElementById('profileImage');
    const slidePanel = document.getElementById('slidePanel');
    const closeBtn = document.getElementById('closeBtn');

    // 닉네임 클릭 시 슬라이드 열기
    nickname.addEventListener('click', function () {
        slidePanel.classList.add('open');
        playTrustScoreAnimation();
    });

    // 프로필 이미지 클릭 시 슬라이드 열기
    profileImage.addEventListener('click', function () {
        slidePanel.classList.add('open');
        playTrustScoreAnimation();
    });

    // 닫기 버튼 클릭 시 슬라이드 닫기
    closeBtn.addEventListener('click', function () {
        slidePanel.classList.remove('open');
    });

    // 신뢰지수 막대 애니메이션 함수
    function playTrustScoreAnimation() {
        const slideTrustScoreValue = parseInt(document.getElementById("slide-trust-score-value").innerText);
        const slideTrustBarInner = document.getElementById("slide-trust-bar-inner");
        let slideCurrentValue = 0;
        const slideMaxScore = 1000;

        // 애니메이션 초기화
        slideTrustBarInner.style.width = "0";

        // 애니메이션 시작
        const slideInterval = setInterval(() => {
            if (slideCurrentValue >= slideTrustScoreValue) {
                clearInterval(slideInterval);
            } else {
                slideCurrentValue += 2; // 증가 속도 조절 가능
                const widthPercentage = (slideCurrentValue / slideMaxScore) * 100;
                slideTrustBarInner.style.width = widthPercentage + "%";
            }
        }, 10); // 증가 간격 조절 가능
    }
});