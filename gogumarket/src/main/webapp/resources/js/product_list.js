
const products = [
    { img: 'product1.png', name: '상품명 1', price: '100,000원', location: '서울특별시', uploadTime: '업로드 1시간 전', wishlist: '찜 2' },
    { img: 'product2.png', name: '상품명 2', price: '120,000원', location: '부산광역시', uploadTime: '업로드 2시간 전', wishlist: '찜 5' },
    { img: 'product3.png', name: '상품명 3', price: '90,000원', location: '대구광역시', uploadTime: '업로드 30분 전', wishlist: '찜 8' },
    { img: 'product4.png', name: '상품명 4', price: '110,000원', location: '인천광역시', uploadTime: '업로드 1일 전', wishlist: '찜 4' },
    { img: 'product5.png', name: '상품명 5', price: '150,000원', location: '대전광역시', uploadTime: '업로드 5분 전', wishlist: '찜 1' },
    { img: 'product6.png', name: '상품명 6', price: '200,000원', location: '울산광역시', uploadTime: '업로드 6시간 전', wishlist: '찜 12' },
    { img: 'product7.png', name: '상품명 7', price: '85,000원', location: '광주광역시', uploadTime: '업로드 3시간 전', wishlist: '찜 9' },
    { img: 'product8.png', name: '상품명 8', price: '60,000원', location: '경기도', uploadTime: '업로드 4시간 전', wishlist: '찜 7' },
    { img: 'product9.png', name: '상품명 9', price: '130,000원', location: '충청북도', uploadTime: '업로드 30분 전', wishlist: '찜 3' },
    { img: 'product10.png', name: '상품명 10', price: '95,000원', location: '전라북도', uploadTime: '업로드 10분 전', wishlist: '찜 2' },
    { img: 'product11.png', name: '상품명 11', price: '125,000원', location: '경상북도', uploadTime: '업로드 1일 전', wishlist: '찜 6' },
    { img: 'product12.png', name: '상품명 12', price: '170,000원', location: '제주도', uploadTime: '업로드 12시간 전', wishlist: '찜 10' },
    { img: 'product13.png', name: '상품명 13', price: '140,000원', location: '강원도', uploadTime: '업로드 2일 전', wishlist: '찜 15' },
    { img: 'product14.png', name: '상품명 14', price: '210,000원', location: '서울특별시', uploadTime: '업로드 30분 전', wishlist: '찜 4' },
    { img: 'product15.png', name: '상품명 15', price: '240,000원', location: '부산광역시', uploadTime: '업로드 1시간 전', wishlist: '찜 2' },
    { img: 'product16.png', name: '상품명 16', price: '50,000원', location: '대구광역시', uploadTime: '업로드 3시간 전', wishlist: '찜 3' },
    { img: 'product17.png', name: '상품명 17', price: '75,000원', location: '인천광역시', uploadTime: '업로드 5분 전', wishlist: '찜 7' },
    { img: 'product18.png', name: '상품명 18', price: '99,000원', location: '대전광역시', uploadTime: '업로드 10분 전', wishlist: '찜 11' },
    { img: 'product19.png', name: '상품명 19', price: '135,000원', location: '울산광역시', uploadTime: '업로드 20분 전', wishlist: '찜 5' },
    { img: 'product20.png', name: '상품명 20', price: '160,000원', location: '광주광역시', uploadTime: '업로드 4시간 전', wishlist: '찜 2' },
    { img: 'product21.png', name: '상품명 21', price: '180,000원', location: '경기도', uploadTime: '업로드 5분 전', wishlist: '찜 6' },
    { img: 'product22.png', name: '상품명 22', price: '230,000원', location: '충청북도', uploadTime: '업로드 1시간 전', wishlist: '찜 9' },
    { img: 'product23.png', name: '상품명 23', price: '280,000원', location: '전라북도', uploadTime: '업로드 2시간 전', wishlist: '찜 10' },
    { img: 'product24.png', name: '상품명 24', price: '300,000원', location: '경상북도', uploadTime: '업로드 3시간 전', wishlist: '찜 12' },
    { img: 'product25.png', name: '상품명 25', price: '350,000원', location: '제주도', uploadTime: '업로드 4시간 전', wishlist: '찜 5' },
    { img: 'product26.png', name: '상품명 26', price: '400,000원', location: '강원도', uploadTime: '업로드 1일 전', wishlist: '찜 8' },
    { img: 'product27.png', name: '상품명 27', price: '450,000원', location: '서울특별시', uploadTime: '업로드 2일 전', wishlist: '찜 1' },
    { img: 'product28.png', name: '상품명 28', price: '500,000원', location: '부산광역시', uploadTime: '업로드 1시간 전', wishlist: '찜 9' },
    { img: 'product29.png', name: '상품명 29', price: '550,000원', location: '대구광역시', uploadTime: '업로드 3시간 전', wishlist: '찜 4' },
    { img: 'product30.png', name: '상품명 30', price: '600,000원', location: '인천광역시', uploadTime: '업로드 30분 전', wishlist: '찜 2' },
];

// 카테고리 배열
const categories = [
    "패션의류", "패션잡화", "가방/핸드백", "시계/쥬얼리", 
    "가전제품", "모바일/태블릿", "노트북/PC", "게임", "가구/d인테리어"
];

// 카테고리 리스트를 <td>에 출력
const categoryListTd = document.getElementById('category-list');
categoryListTd.innerHTML = categories.map(category => 
    `<span class="category-item" style="margin-right: 10px; cursor: pointer;">${category}</span>`
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
            wishlistText.textContent = `찜 ${currentWishlist}`;
        });
    });
}

// 초기 찜 기능 이벤트 리스너 설정
addWishlistEventListeners();


//초기화 기능
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('selected-category').innerHTML = '';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.getElementById('filter-text').innerHTML = '';
});

// 가격 기입에 관한 기능
function applyPriceFilter() {
    const minPriceInput = document.getElementById('min-price').value;
    const maxPriceInput = document.getElementById('max-price').value;

    const minPrice = parseInt(minPriceInput, 10);
    const maxPrice = parseInt(maxPriceInput, 10);

    let filterText = '';

    // 최소/최대 가격이 기입되었을 때만 체크
    if (minPriceInput && minPrice < 10) {
        // 최소가격이 10원 미만이면 경고
        alert('최소가격을 10원 이상 적어주세요.');
        document.getElementById('min-price').focus();
        return;
    }

    if (maxPriceInput && maxPrice < 10) {
        // 최대가격이 10원 미만이면 경고
        alert('최대가격을 10원 이상 적어주세요.');
        document.getElementById('max-price').focus();
        return;
    }

    if (minPriceInput && maxPriceInput && maxPrice < minPrice) {
        // 최대가격이 최소가격보다 낮으면 경고
        alert('최대가격이 최소가격보다 낮습니다.');
        document.getElementById('max-price').focus();
        return;
    }

    // 가격 필터 적용
    if (minPriceInput && !maxPriceInput) {
        // 최소가격만 입력된 경우 "10원 ~"
        filterText = ` ${minPriceInput} ~ `;
    } else if (!minPriceInput && maxPriceInput) {
        // 최대가격만 입력된 경우 "~ 20원"
        filterText = ` ~ ${maxPriceInput} `;
    } else if (minPriceInput && maxPriceInput) {
        // 최소가격과 최대가격 모두 입력된 경우
        filterText = ` ${minPriceInput} ~ ${maxPriceInput} `;
    }

    // 카테고리 필터 추가
    const selectedCategory = document.getElementById('selected-category').textContent;
    if (selectedCategory) {
        filterText += ` ${selectedCategory} `;
    }

    // 체크박스 (거래 방법) 필터 추가
    const delivery = document.getElementById('delivery').checked ? '택배' : '';
    const direct = document.getElementById('direct').checked ? '직거래' : '';
    const deliveryMethod = [delivery, direct].filter(Boolean).join(' ');

    if (deliveryMethod) {
        filterText += ` ${deliveryMethod} `;
    }

    // 라디오 버튼 (상품 상태) 필터 추가
	const productStatusNew = document.getElementById('new');
	const productStatusUsed = document.getElementById('used');
	
	if (productStatusNew.checked) {
	    filterText += ` ${productStatusNew.nextElementSibling.textContent} `;
	} else if (productStatusUsed.checked) {
	    filterText += ` ${productStatusUsed.nextElementSibling.textContent} `;
	}

    // 필터 텍스트 업데이트
    document.getElementById('filter-text').textContent = filterText;
}

// 카테고리 선택 시 필터 적용
document.getElementById('category-list').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('category-item')) {
        document.getElementById('selected-category').textContent = event.target.textContent;
        applyPriceFilter();  // 카테고리 선택 시 필터 텍스트 업데이트
    }
});

// 체크박스와 라디오 버튼 변경 시 필터 적용
document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
    input.addEventListener('change', applyPriceFilter);  // 선택 상태가 변경되면 필터 적용
});


// 페이지가 로드될 때 기본 정렬을 recent로 설정
window.onload = function() {
    sortProducts('recent');  // 페이지가 처음 로드되면 자동으로 'recent' 정렬
};

// 모든 정렬 버튼을 선택
const sortButtons = document.querySelectorAll('.sort-btn');

// 버튼 클릭 시 활성화 처리
sortButtons.forEach(button => {
    button.addEventListener('click', function() {
        sortButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// 페이지 정보
const productsPerPage = 25;
let currentPage = 1;
let sortedProducts = [...products]; // 현재 정렬된 상품 목록

// 상품 리스트 렌더링 함수
function renderProducts(page) {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '';

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, sortedProducts.length);

    for (let i = startIndex; i < endIndex; i++) {
        const product = sortedProducts[i];
        const productCardHTML = `
            <div class="product-card">
                <div class="image-container">
                    <img src="${product.img}" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="price">${product.price.toLocaleString()}원</span>
                    <div class="product-meta">
                        <span class="location">${product.location}</span> | 
                        <span class="upload-time">${product.uploadTime}</span>
                    </div>
                    <div class="wishlist">${product.wishlist}</div>
                </div>
                <button class="like-btn">♥</button>
            </div>
        `;
        productListDiv.innerHTML += productCardHTML;
    }

    // 새로 추가된 상품 카드들에 찜 이벤트 추가
    addWishlistEventListeners();
}

// 업로드 시간을 숫자로 변환하는 함수
function getTimeValue(uploadTime) {
    const timeParts = uploadTime.match(/(\d+)(분|시간|일) 전/);
    const value = parseInt(timeParts[1]);
    const unit = timeParts[2];

    if (unit === '분') return value; // 분은 그대로
    if (unit === '시간') return value * 60; // 시간은 분으로 변환
    if (unit === '일') return value * 24 * 60; // 일은 분으로 변환
    return 0;
}

// 정렬 함수
function sortProducts(criteria) {
    if (criteria === 'recent') {
        // 최신순: 가장 최근에 업로드된 순으로 정렬 (역순)
        sortedProducts = [...products].sort((a, b) => {
            return getTimeValue(a.uploadTime) - getTimeValue(b.uploadTime);
        });
    } else if (criteria === 'low-price') {
        // 낮은 가격순으로 정렬
        sortedProducts = [...products].sort((a, b) => {
            return parseInt(a.price.toString().replace(/,/g, '')) - parseInt(b.price.toString().replace(/,/g, ''));
        });
    } else if (criteria === 'high-price') {
        // 높은 가격순으로 정렬
        sortedProducts = [...products].sort((a, b) => {
            return parseInt(b.price.toString().replace(/,/g, '')) - parseInt(a.price.toString().replace(/,/g, ''));
        });
    }
    currentPage = 1; // 정렬 후 첫 페이지로 이동
    renderProducts(currentPage); // 정렬된 데이터를 다시 렌더링
    renderPagination(); // 페이지네이션도 다시 렌더링
}


// 정렬 버튼 클릭 이벤트 처리
document.querySelectorAll('.sort-btn').forEach(button => {
    button.addEventListener('click', () => {
        // 모든 버튼에서 active 클래스 제거 후 현재 클릭된 버튼에 추가
        document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const sortCriteria = button.getAttribute('data-sort');
        sortProducts(sortCriteria);
    });
});

// 페이지 버튼 렌더링 함수
function renderPagination() {
    const pageNumbersSpan = document.getElementById('page-numbers');
    pageNumbersSpan.innerHTML = '';

    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
        const pageButtonHTML = `<span class="page-number" data-page="${i}">${i}</span>`;
        pageNumbersSpan.innerHTML += pageButtonHTML;
    }

    document.querySelectorAll('.page-number').forEach(span => {
        if (parseInt(span.getAttribute('data-page'), 10) === currentPage) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    });

    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === totalPages;
}

// 페이지 변경 함수
function changePage(page) {
    currentPage = page;
    renderProducts(page);
    renderPagination();
}

// 페이지 번호 클릭 이벤트 설정
document.getElementById('page-numbers').addEventListener('click', (e) => {
    if (e.target.classList.contains('page-number')) {
        const selectedPage = parseInt(e.target.getAttribute('data-page'), 10);
        changePage(selectedPage);
    }
});

// Prev/Next 버튼 클릭 이벤트 설정
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        changePage(currentPage + 1);	
    }
});

// 초기 렌더링
renderProducts(currentPage);
renderPagination();
