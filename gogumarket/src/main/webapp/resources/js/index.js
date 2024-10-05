document.addEventListener("DOMContentLoaded", function () {
    // 배너 슬라이더 스크립트
    let currentBannerIndex = 0;
    const banners = document.querySelectorAll('.banner-item');
    const totalBanners = banners.length;
    const bannerContainer = document.getElementById('bannerContainer');
    const indicators = document.querySelectorAll('.indicator');
    let autoSlide;

    function updateBannerPosition() {
        bannerContainer.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
        updateIndicators();
    }

    // 배너 밑 인디케이터
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentBannerIndex);
        });
    }

    function nextBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
        updateBannerPosition();
        resetAutoSlide();
    }

    function prevBanner() {
        currentBannerIndex = (currentBannerIndex - 1 + totalBanners) % totalBanners;
        updateBannerPosition();
        resetAutoSlide();
    }

    function jumpToBanner(index) {
        currentBannerIndex = index;
        updateBannerPosition();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextBanner, 5000); // 5초마다 자동 전환
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // 페이지 로드 시 자동 슬라이드 시작 및 인디케이터 초기화
    startAutoSlide();
    updateIndicators();

    // 배너 인디케이터 클릭 이벤트 추가
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            jumpToBanner(index);
        });
    });

    // 버튼 클릭 이벤트 리스너 추가
    document.querySelector('.arrow.left').addEventListener('click', prevBanner);
    document.querySelector('.arrow.right').addEventListener('click', nextBanner);

    // 함수들을 전역에 할당
    window.nextBanner = nextBanner;
    window.prevBanner = prevBanner;

    // 실시간 인기 상품 슬라이드 스크립트
    let currentIndexPopular = 0;
    let currentIndex = 0;
    let currentIndexRecommended = 0;

    // 인기 상품 왼쪽
    window.slideLeftPopular = function () {
        const popularItemContainer = document.getElementById('popularItemContainer');
        const itemWidth = document.querySelector('.item').offsetWidth + 20;
        if (currentIndexPopular > 0) {
            currentIndexPopular -= 5;
            if (currentIndexPopular < 0) currentIndexPopular = 0;
        }
        popularItemContainer.style.transform = `translateX(-${currentIndexPopular * itemWidth}px)`;
    };

    // 인기 상품 오른쪽
    window.slideRightPopular = function () {
        const popularItemContainer = document.getElementById('popularItemContainer');
        const itemWidth = document.querySelector('.item').offsetWidth + 20;
        const totalItems = document.querySelectorAll('#popularItemContainer .item').length;
        const itemsInView = 5;
        if (currentIndexPopular < totalItems - itemsInView) {
            currentIndexPopular += 5;
            if (currentIndexPopular > totalItems - itemsInView) currentIndexPopular = totalItems - itemsInView;
        }
        popularItemContainer.style.transform = `translateX(-${currentIndexPopular * itemWidth}px)`;
    };

    // 방금 등록된 상품 왼쪽
    window.slideLeft = function () {
        const itemContainer = document.getElementById('itemContainer');
        const itemWidth = document.querySelector('.item').offsetWidth + 20;
        if (currentIndex > 0) {
            currentIndex -= 5;
            if (currentIndex < 0) currentIndex = 0;
        }
        itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    // 방금 등록된 상품 오른쪽
    window.slideRight = function () {
        const itemContainer = document.getElementById('itemContainer');
        const itemWidth = document.querySelector('.item').offsetWidth + 20;
        const totalItems = document.querySelectorAll('#itemContainer .item').length;
        const itemsInView = 5;
        if (currentIndex < totalItems - itemsInView) {
            currentIndex += 5;
            if (currentIndex > totalItems - itemsInView) currentIndex = totalItems - itemsInView;
        }
        itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    // 추천 상품 왼쪽
    window.slideLeftRecommended = function () {
        const recommendedItemContainer = document.getElementById('recommendedItemContainer');
        const itemWidth = document.querySelector('.item').offsetWidth + 20;
        if (currentIndexRecommended > 0) {
            currentIndexRecommended -= 5;
            if (currentIndexRecommended < 0) currentIndexRecommended = 0;
        }
        recommendedItemContainer.style.transform = `translateX(-${currentIndexRecommended * itemWidth}px)`;
    };

    // 추천 상품 오른쪽
    window.slideRightRecommended = function () {
        const recommendedItemContainer = document.getElementById('recommendedItemContainer');
        const itemWidth = document.querySelector('.item').offsetWidth + 20;
        const totalItems = document.querySelectorAll('#recommendedItemContainer .item').length;
        const itemsInView = 5;
        if (currentIndexRecommended < totalItems - itemsInView) {
            currentIndexRecommended += 5;
            if (currentIndexRecommended > totalItems - itemsInView) currentIndexRecommended = totalItems - itemsInView;
        }
        recommendedItemContainer.style.transform = `translateX(-${currentIndexRecommended * itemWidth}px)`;
    };
});
