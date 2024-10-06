	
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
		
	
	//가격제안 버튼 활성화 시 아래 div display
	function togglePriceBox() {
	  	const priceBox = document.querySelector('.trade-offer-price-box');
	  
	  	if (priceBox.style.visibility === 'hidden') {
	    	priceBox.style.visibility = 'visible'; // 보이게 설정
	  	} else {
	    	priceBox.style.visibility = 'hidden'; // 다시 숨김
		}
	}
	
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
	
	