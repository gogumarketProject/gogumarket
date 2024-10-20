
//하트 찜 활성화 시 색깔
document.addEventListener('DOMContentLoaded', function() {
  	const wishlist = document.querySelector('.wishlist input');
  	const heartIcon = document.querySelector('.wishlist i');

  	wishlist.addEventListener('change', function() {
    	if (this.checked) {
      		heartIcon.classList.remove('fa-regular');
      		heartIcon.classList.add('fa-solid');
      		heartIcon.style.color = 'red'; // 하트를 빨간색으로 변경
    	} else {
	      	heartIcon.classList.remove('fa-solid');
	      	heartIcon.classList.add('fa-regular');
	      	heartIcon.style.color = '#9e9e9e'; // 다시 비어있는 회색 하트로
    	}
  	});
});


//게시물 삭제
function goDelete(){
	if(confirm('삭제된 게시물은 복구할 수 없습니다. \n해당 게시물을 삭제하시겠습니까?')){
		alert('삭제띠~');
	}
}

//가격 낮은 순으로 나열
document.addEventListener('DOMContentLoaded', function() {
	const sellers = document.querySelectorAll('.trade-seller');
	const sellersArray = Array.from(sellers); // NodeList를 배열로 변환

  	// seller-price 값으로 낮은 순서대로 정렬
  	sellersArray.sort((a, b) => {
	    const priceA = parseInt(a.querySelector('.seller-price strong').innerText.replace(/[^0-9]/g, ''));
	    const priceB = parseInt(b.querySelector('.seller-price strong').innerText.replace(/[^0-9]/g, ''));
    	return priceB - priceA; // 낮은 가격 순서대로 정렬
  	});

  	// 정렬된 요소들을 다시 DOM에 추가
  	const parent = document.querySelector('.trade-seller').parentNode;
  	sellersArray.forEach(seller => {
    	parent.appendChild(seller); // 정렬된 순서로 다시 추가
  	});
});

	
//더보기
window.onload = function() {
  const textContainer = document.getElementById("leftBoxText");
  const toggleButton = document.getElementById("toggleButton");

  // 텍스트가 지정된 높이를 넘으면 '더보기' 버튼을 표시
  if (textContainer.scrollHeight > textContainer.clientHeight) {
    toggleButton.style.display = "block";
  }

  // 더보기 버튼 클릭 이벤트 핸들러
  toggleButton.addEventListener("click", function() {
    if (textContainer.style.height === "237px" || textContainer.style.height === "") {
      textContainer.style.height = "auto"; // 전체 텍스트 표시
      toggleButton.innerText = "접 기"; // 버튼 텍스트 변경
    } else {
      textContainer.style.height = "237px"; // 다시 텍스트를 숨김
      toggleButton.innerText = "더보기"; // 버튼 텍스트 변경
    }
  });
}


//쪽지 보내기 슬라이드 패널
document.addEventListener('DOMContentLoaded', function () {
    const tradeButtons = document.querySelectorAll('.trade-options'); // 모든 거래 옵션 버튼 선택
    const tradeSlidePanel = document.getElementById('tradeSlidePanel'); // 슬라이드 패널
	const closeButton = document.getElementsByClassName('msg-close-btn');
	
    // 각 거래 옵션 버튼에 이벤트 리스너 추가
    tradeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // 패널 열기/닫기
            if (tradeSlidePanel.classList.contains('open')) {
                tradeSlidePanel.classList.remove('open'); // 패널 닫기
            } else {
                tradeSlidePanel.classList.add('open'); // 패널 열기
            }
        });
    });
    
     // 모든 닫기 버튼에 이벤트 리스너 추가
    Array.from(closeButton).forEach(function (button) {
        button.addEventListener('click', function () {
            tradeSlidePanel.classList.remove('open'); // 패널 닫기
        });
    });
});


// 드롭다운 열기/닫기 제어
document.addEventListener("DOMContentLoaded", function() {
  // selected-circum 요소가 존재하는지 확인
  const selectedCircum = document.querySelector('.selected-circum');

  if (selectedCircum) {
    // 요소가 존재할 때만 이벤트 리스너를 등록
    selectedCircum.addEventListener('click', function(event) {
      event.stopPropagation(); // 클릭 이벤트가 부모로 전파되는 것을 방지
      document.querySelector('.circum-options').style.display = 'block';
    });
  } else {
    console.error("selected-circum 요소를 찾을 수 없습니다.");
  }
});


// 옵션 선택 시 동작
document.querySelectorAll('.circum-option').forEach(function(option) {
  option.addEventListener('click', function(event) {
    event.stopPropagation(); // 클릭 이벤트가 부모로 전파되는 것을 방지
    // 선택된 항목을 상단에 표시
    document.querySelector('.selected-circum').textContent = option.textContent;
	
	// 선택된 값을 hidden input에 저장
    document.querySelector('.circum-value').value = option.getAttribute('data-value');
	
    // 드롭다운 메뉴 숨기기
    document.querySelector('.circum-options').style.display = 'none';
  });
});

// 문서 전체에 클릭 이벤트 추가
document.addEventListener('click', function() {
  // 드롭다운이 열린 상태에서 외부 클릭 시 닫기
  document.querySelector('.circum-options').style.display = 'none';
});


// 신뢰지수 막대 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    const trustScoreValue = parseInt(document.querySelector(".trust-score-value").innerText);
    const trustBarInner = document.querySelector(".trust-bar-inner");
    
    //trust-bar의 max-width 가져오는 변수
    let trustBarElement = document.querySelector(".trust-bar");
    
    // 최대 신뢰 지수 설정
    const maxScore = 1000;
    const targetWidth = (trustScoreValue / maxScore) * 100;
	
    // 애니메이션 효과를 위한 setInterval 사용
    let currentValue = 0;
    const interval = setInterval(() => {
        if (currentValue >= targetWidth) {
            clearInterval(interval);
        } else {
            currentValue += 1; // 증가 속도 조절 가능
            trustBarInner.style.width = currentValue + "%";
        }
    }, 10); // 증가 간격 조절 가능
});
