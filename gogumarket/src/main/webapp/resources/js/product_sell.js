
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
    	return priceA - priceB; // 낮은 가격 순서대로 정렬
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
