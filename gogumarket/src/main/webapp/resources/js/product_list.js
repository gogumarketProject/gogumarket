
// 카테고리 배열
const categories = [
    "패션의류", "패션잡화", "가방/핸드백", "시계/쥬얼리", 
    "가전제품", "모바일/태블릿", "노트북/PC", "게임", "가구/인테리어"
];

// 카테고리 리스트를 <td>에 출력
const categoryListTd = document.getElementById('category-list');
categoryListTd.innerHTML = categories.map(category => 
    `<span class="category-item">${category}</span>`
).join('');

// 버튼 클릭 시 숨겨진 행 표시/숨기기
document.getElementById('category-btn').addEventListener('click', function() {
    var hiddenRow = document.getElementById('hidden-row');
    hiddenRow.style.display = (hiddenRow.style.display === "none" || hiddenRow.style.display === "") 
        ? "table-row" 
        : "none";
});

// 이벤트 위임: category-list 내부에서 클릭된 항목을 감지하여 처리
document.getElementById('category-list').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('category-item')) {
        document.getElementById('selected-category').textContent = event.target.textContent;
    }
});

// 하트 찜 기능 이벤트 리스너 추가 함수
function addWishlistEventListeners() {
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            const wishlistText = button.previousElementSibling.querySelector('.wishlist');
            let currentWishlist = parseInt(wishlistText.textContent.replace('찜 ', ''), 10);
            if (button.classList.contains('liked')) {
                currentWishlist += 1;
            } else {
                currentWishlist -= 1;
            }
            wishlistText.textContent = `${currentWishlist}명 찜꽁!`;
        });
    });
}

// 초기 찜 기능 이벤트 리스너 설정
addWishlistEventListeners();


//초기화 기능
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('selected-category').innerHTML = '';
    document.getElementById('hidden-row').style.display = 'none';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.getElementById('min-price-hidden').value = '';
    document.getElementById('max-price-hidden').value = '';
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    
});





// 가격 기입에 관한 기능
function applyPriceFilter() {
	// 입력 값 가져오기 (콤마 제거 후 숫자로 변환)
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    
    const minPrice = parseInt(minPriceInput.value.replace(/,/g, ''), 10);
    const maxPrice = parseInt(maxPriceInput.value.replace(/,/g, ''), 10);
    
    if (!minPriceInput.value && !maxPriceInput.value) {
        return;
    }
    
    if (minPriceInput.value && minPrice < 10) {
        // 최소가격이 10원 미만이면 경고
        alert('최소가격을 10원 이상 적어주세요.');
        minPriceInput.focus();
        return;
    }

    if (maxPriceInput.value && maxPrice < 10) {
        // 최대가격이 10원 미만이면 경고
        alert('최대가격을 10원 이상 적어주세요.');
        maxPriceInput.focus();
        return;
    }

    if (minPriceInput.value && maxPriceInput.value && maxPrice < minPrice) {
        // 최대가격이 최소가격보다 낮으면 경고
        alert('최대가격이 최소가격보다 낮습니다.');
        maxPriceInput.focus();
        return;
    }
    
    // 숨겨진 input 필드에 콤마 제거한 값 저장
    document.getElementById('min-price-hidden').value = minPriceInput.value.replace(/,/g, '');
    document.getElementById('max-price-hidden').value = maxPriceInput.value.replace(/,/g, '');
    
}


// 체크박스를 radio처럼 동작하게 만들기
const statusNewCheckbox = document.getElementById('new');
const statusUsedCheckbox = document.getElementById('used');

function handleStatusChange() {
    if (this.checked) {
        // 하나만 선택되도록 다른 체크박스 해제
        if (this === statusNewCheckbox) {
            statusUsedCheckbox.checked = false;
        } else if (this === statusUsedCheckbox) {
            statusNewCheckbox.checked = false;
        }
        updateFilterText(); // 상태 필터 업데이트
    } else {
        // 둘 다 해제되면 상태 필터 삭제
        removeStatusFilter();
    }
}

statusNewCheckbox.addEventListener('change', handleStatusChange);
statusUsedCheckbox.addEventListener('change', handleStatusChange);

// 모든 정렬 버튼을 선택
const sortButtons = document.querySelectorAll('.sort-btn');

// 버튼 클릭 시 활성화 처리
sortButtons.forEach(button => {
    button.addEventListener('click', function() {
        sortButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});










// input price에 천 단위 콤마 추가 함수
function formatNumber(value) {
    return value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
