
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

    uploadedFiles = uploadedFiles.slice(0, 1); // 최대 1장까지만 허용

    // 파일 수를 업로드 텍스트에 표시
    uploadText.textContent = `사진을 업로드 해주세요 (${uploadedFiles.length}/1)`;

    // 미리 보기 갱신
    renderPreviews();

    // 업로드 제한이 1장을 넘으면 더 이상 추가하지 않도록 설정
    if (uploadedFiles.length >= 1) {
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
    uploadText.textContent = `사진을 업로드 해주세요 (${uploadedFiles.length}/1)`;

    // 파일 수가 1장 미만일 때 업로드 활성화
    if (uploadedFiles.length < 1) {
        uploadInput.disabled = false;
    }
}

// 파일 삭제 함수
function removeFile(id) {
    // 파일 목록에서 해당 ID를 가진 파일 제거
    uploadedFiles = uploadedFiles.filter((file) => file.id !== id);
    upload.image.value = '';

    // 미리 보기 갱신
    renderPreviews();
}

// 카테고리 데이터
const categories = {
    '1': '패션의류',
    '2': '패션잡화',
    '3': '가전제품',
    '4': '가방/핸드백',
    '5': '시계/쥬얼리',
    '6': '모바일/태블릿',
    '7': '노트북/PC',
    '8': '게임',
    '9': '가구/인테리어',
};

const productPriceInput = document.getElementById('product-price');
const selectedCategoryDisplay = document.getElementById('selected-category-display');
let selectedCategories = [];

// 카테고리 선택 처리 함수
function selectCategory(category) {
    if (selectedCategories.length >= 1) {
        alert("최대 1개의 카테고리만 선택 가능합니다.");
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
    document.getElementById('selected-categories').value = '';
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
        locationConfirmed = false; // 확인 상태 초기화
    }
});

// "확인" 버튼 클릭 시 이벤트 처리
document.getElementById('locationConfirmButton').addEventListener('click', function (event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지

    const locationInput = document.getElementById('meetLocation').value;

    if (locationInput) {
        // 직거래 위치가 입력되었으면 확인 플래그를 true로 설정
        locationConfirmed = true;

        // 파란색 글씨로 출력하고 삭제 버튼 추가
        document.getElementById('locationOutput').innerHTML = `
            <span style="color: blue;">#${locationInput}</span> 
            <span id="deleteLocation" style="color: red; cursor: pointer;">[삭제]</span>
        `;
        upload.area.value = locationInput;

        // 삭제 버튼 클릭 시 입력된 위치 삭제
        document.getElementById('deleteLocation').addEventListener('click', function () {
            document.getElementById('locationOutput').innerHTML = ''; // 위치 출력 초기화
            document.getElementById('meetLocation').value = ''; // 입력 필드 초기화
            locationConfirmed = false; // 확인 상태 초기화
           	upload.area.value = '';
        });
    } else {
        alert("직거래 위치를 입력하세요."); // 입력값이 없을 때 경고창
    }
});
