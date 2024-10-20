function goUpload() {
    let locationConfirmed = false; // 직거래 위치 확인 상태를 저장할 지역 변수

    // 이미지 파일 input을 찾습니다.
    const imageInput = document.getElementById('product-images');
    
    // 파일이 없는 경우 경고 메시지 표시
    if (!imageInput.files || imageInput.files.length === 0) {
        alert("사진을 1장 이상 등록해 주세요.");
        return;
    }
    
    // 상품명 기재 안 한 경우 경고
    const productName = document.getElementById('product-name');
    if (!productName.value) {
        alert("상품명을 기재해 주세요.");
        productName.focus();
        return;
    }
    
    // 선택된 카테고리가 있는지 확인
    const selectedCategories = document.querySelectorAll('#selected-category-display div'); // 선택된 카테고리들이 들어가는 곳
    if (selectedCategories.length === 0) {
        alert("카테고리를 선택해 주세요.");
        return;
    }
    
    // 상품 정보를 기재 안 한 경우 경고
    const productDetails = document.getElementById('product-details');
    if (productDetails.value.length < 3) {
        alert("상세 정보를 3자 이상 입력해 주세요.");
        productDetails.focus();
        return;
    }
    
    // 상품 상태가 선택되지 않은 경우 경고
    const productState = document.querySelector('input[type="radio"]:checked');
    if (!productState) {
        alert("상품 상태를 선택해 주세요.");
        return;
    }

    // 거래 방법이 선택되지 않은 경우 경고
    const deliveryMethod = document.querySelector('input[type="checkbox"]:checked');
    if (!deliveryMethod) {
        alert("거래 방법을 선택해 주세요.");
        return;
    }
    
    // 직거래를 선택한 경우 직거래 위치가 입력되었는지 확인
    const meetCheckbox = document.getElementById('meet');
    const meetLocation = document.getElementById('meetLocation');
    if (meetCheckbox.checked) {
        if (!meetLocation.value) {
            alert("직거래 위치를 입력해 주세요.");
            meetLocation.focus();
            return;
        }

        // 직거래 위치를 입력했지만 "확인" 버튼을 누르지 않았을 경우 경고
        if (!locationConfirmed) {
            alert("직거래 위치를 확인해 주세요.");
            return;
        }
    }
    
    document.getElementsByName('t_gubun')[0].value = "upload";  // t_gubun 값을 'upload'로 설정

    // 유효성 검사 통과 후 폼 제출 처리
    document.getElementById('sell').method = "post";
    document.getElementById('sell').action = "Goguma";
    document.getElementById('sell').submit();
}

// 이미지 업로드 개수 카운트 및 미리 보기
const uploadBox = document.querySelector('.upload-box');
const uploadText = document.querySelector('.upload-text');
const uploadInput = uploadBox.querySelector('input');
const previewContainer = document.querySelector('.preview-container'); // 미리 보기 영역
let uploadedFiles = []; // 업로드한 파일들을 저장하는 배열
let fileIdCounter = 0; // 각 파일에 고유 ID를 부여하기 위한 카운터

// 이미지 업로드 시 처리
uploadInput.addEventListener('change', () => {
    const files = Array.from(uploadInput.files); // 파일 리스트를 배열로 변환

    // 새로 선택한 파일에 고유 ID 부여 및 업로드된 파일 목록에 추가 (중복 허용)
    files.forEach((file) => {
        uploadedFiles.push({ id: fileIdCounter++, file });
    });

    uploadedFiles = uploadedFiles.slice(0, 3); // 최대 3장까지만 허용

    // 파일 수를 업로드 텍스트에 표시
    uploadText.textContent = `사진을 업로드 해주세요 (${uploadedFiles.length}/3)`;

    // 미리 보기 갱신
    renderPreviews();

    // 업로드 제한이 3장을 넘으면 더 이상 추가하지 않도록 설정
    if (uploadedFiles.length >= 3) {
        uploadInput.disabled = true; // 더 이상 파일 선택 불가
    }
});

// 미리 보기 및 삭제 버튼 렌더링 함수
function renderPreviews() {
    // 미리 보기 영역 초기화
    previewContainer.innerHTML = '';

    uploadedFiles.forEach(({ id, file }) => {
        const reader = new FileReader();

        // 파일이 로드된 후 미리 보기 생성
        reader.onload = (e) => {
            const previewDiv = document.createElement('div');
            previewDiv.classList.add('preview-item');
            previewDiv.style.position = 'relative';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview-image');

            const removeButton = document.createElement('button');
            removeButton.textContent = '삭제';
            removeButton.classList.add('remove-button');
            removeButton.onclick = () => removeFile(id); // 삭제 버튼 클릭 시 파일 삭제

            previewDiv.appendChild(img);
            previewDiv.appendChild(removeButton);
            previewContainer.appendChild(previewDiv);
        };

        // 이미지 파일 읽기
        reader.readAsDataURL(file);
    });

    // 파일 수를 다시 표시 (제거 후에도 정확하게 카운트)
    uploadText.textContent = `사진을 업로드 해주세요 (${uploadedFiles.length}/3)`;

    // 파일 수가 3장 미만일 때 업로드 활성화
    if (uploadedFiles.length < 3) {
        uploadInput.disabled = false;
    }
}

// 파일 삭제 함수
function removeFile(id) {
    // 파일 목록에서 해당 ID를 가진 파일 제거
    uploadedFiles = uploadedFiles.filter((file) => file.id !== id);

    // 미리 보기 갱신
    renderPreviews();
}

// 카테고리 데이터
const categories = {
    'fashion-clothing': '패션의류',
    'fashion-accessories': '패션잡화',
    'electronics': '가전제품',
    'bag': '가방/핸드백',
    'watch-jewelry': '시계/쥬얼리',
    'mobile-tablet': '모바일/태블릿',
    'laptop-pc': '노트북/PC',
    'game': '게임',
    'furniture-interior': '가구/인테리어',
};

const productPriceInput = document.getElementById('product-price');
const selectedCategoryDisplay = document.getElementById('selected-category-display');
let selectedCategories = [];

// 카테고리 선택 처리 함수
function selectCategory(category) {
    if (selectedCategories.length >= 3) {
        alert("최대 3개의 카테고리만 선택 가능합니다.");
        return;
    }

    // 이미 선택한 카테고리인지 확인
    if (!selectedCategories.includes(category)) {
        selectedCategories.push(category);
        renderSelectedCategories();
        updateHiddenInput(); // 숨겨진 input에 선택한 카테고리 저장
    }
}

// 선택한 카테고리 업데이트
function updateHiddenInput() {
    document.getElementById('selected-categories').value = selectedCategories.join(', ');  // 배열을 문자열로 변환
}

// 선택된 카테고리 삭제 함수
function removeCategory(index) {
    selectedCategories.splice(index, 1); // 해당 인덱스의 카테고리를 삭제
    renderSelectedCategories();
}

// 선택된 카테고리 출력 및 삭제 버튼 추가
function renderSelectedCategories() {
    const displayContainer = document.getElementById("selected-category-display");
    displayContainer.innerHTML = ""; // 기존 출력 초기화

    selectedCategories.forEach((category, index) => {
        const categoryElement = document.createElement("div");
        categoryElement.innerHTML = `${categories[category]} <span class="remove-category" onclick="removeCategory(${index})">[삭제]</span>`;
        displayContainer.appendChild(categoryElement);
    });
}

// 카테고리 클릭 시 이벤트 처리
document.querySelectorAll('.category-box').forEach(categoryBox => {
    categoryBox.addEventListener('click', function () {
        const categoryValue = this.getAttribute('data-value');
        selectCategory(categoryValue);
    });
});

// 직거래 관련 동적 필드 처리
const meetCheckbox = document.getElementById('meet');
const meetLocationContainer = document.getElementById('meetLocationContainer');

// 직거래 체크박스 이벤트 처리
meetCheckbox.addEventListener('change', function() {
    if (meetCheckbox.checked) {
        // 직거래가 체크되면 텍스트 필드를 표시
        meetLocationContainer.style.display = 'inline-block';
    } else {
        // 체크 해제 시 텍스트 필드를 숨기고 입력된 위치와 확인 상태를 초기화
        meetLocationContainer.style.display = 'none';
        document.getElementById('meetLocation').value = ''; // 입력 필드 초기화
        document.getElementById('locationOutput').innerHTML = ''; // 출력된 위치 초기화
        document.getElementById('locationOutput').style.display = 'none';
        locationConfirmed = false; // 추가 상태 초기화
    }
});

// "추가" 버튼 클릭 시 이벤트 처리
document.getElementById('locationConfirmButton').addEventListener('click', function (event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지

    const locationInput = document.getElementById('meetLocation').value;

    if (locationInput) {
        // 직거래 위치가 입력되었으면 확인 플래그를 true로 설정
        locationConfirmed = true;

        // 파란색 글씨로 출력하고 삭제 버튼 추가
        document.getElementById('locationOutput').innerHTML = `
        	<span style="color: #878686;"><i class="fa-solid fa-location-dot"></i></span>
            <span style="color: #878686; margin:0 6px 0 5px;">${locationInput}</span>
            <span id="deleteLocation" style="color: #878686; cursor: pointer;"><i class="fa-solid fa-xmark"></i></span>
        `;
		document.getElementById('locationOutput').style.display = 'flex';
        // 삭제 버튼 클릭 시 입력된 위치 삭제
        document.getElementById('deleteLocation').addEventListener('click', function () {
            document.getElementById('locationOutput').innerHTML = ''; // 위치 출력 초기화
            document.getElementById('meetLocation').value = ''; // 입력 필드 초기화
            document.getElementById('locationOutput').style.display = 'none';
            locationConfirmed = false; // 확인 상태 초기화
        });
    } else {
        alert("직거래 위치를 입력하세요."); // 입력값이 없을 때 경고창
    }
});
