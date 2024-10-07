<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>고구마켓</title>
    
    <!-- 폰트어썸 -->
    <script src="https://kit.fontawesome.com/cbbeedc0db.js" crossorigin="anonymous"></script>
    <!-- ... -->
    
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/write_form.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/common.css">
	<script type="text/javascript">
	function goUpload() {
		
	    // 이미지 파일 input을 찾습니다.
	    const imageInput = document.getElementById('product-images');
	    
	    // 파일이 없는 경우 경고 메시지 표시
	    if (!imageInput.files || imageInput.files.length === 0) {
	        alert("사진을 1장 이상 등록해 주세요.");
	        return;
	    }
	 	// 사진 용량 체크	
		var file = upload.image;
		var fileMaxSize  = 10; // 첨부 최대 용량 설정
		if(file.value !=""){
			// 사이즈체크
			var maxSize  = 1024 * 1024 * fileMaxSize;
			var fileSize = 0;
			// 브라우저 확인
			var browser=navigator.appName;
			// 익스플로러일 경우
			if (browser=="Microsoft Internet Explorer"){
				var oas = new ActiveXObject("Scripting.FileSystemObject");
				fileSize = oas.getFile(file.value).size;
			}else {
			// 익스플로러가 아닐경우
				fileSize = file.files[0].size;
			}

			if(fileSize > maxSize){
				alert(" 첨부파일 사이즈는 "+fileMaxSize+"MB 이내로 등록 가능합니다. ");
				return;
			}	
		}
	    
	    // 상품명 기재 안 한 경우 경고
	    const productName = document.getElementById('product-name');
	    if (!productName.value) {
	        alert("상품명을 기재해 주세요.");
	        productName.focus();
	        return;
	    }
	    
	    /* // 선택된 카테고리가 있는지 확인
	    const selectedCategories = document.querySelectorAll('#selected-category-display div'); // 선택된 카테고리들이 들어가는 곳
	    if (selectedCategories.length === 0) {
	        alert("카테고리를 선택해 주세요.");
	        return;
	    } */
	    
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
	        if(upload.area.value == ""){
	        	alert("직거래 위치를 확인해 주세요.");
	            return;
	        }
	    }
	    // 유효성 검사 통과 후 폼 제출 처리
	    upload.method = "post";
	    upload.action = "market?t_gubun=upload";
	    upload.submit();
	}
	
	function checkEnter(){
  		var keyValue = event.keyCode;
  		if(keyValue == 13){
  			event.preventDefault();
  			focus();
  		}
  	}
	</script>
</head>
<body>
    <%@include file="header.jsp" %>
    <%@include file="menu_bar.jsp" %>
    <%@include file="message.jsp" %>

<main>
    <div class="container">
        <form name="upload" enctype="multipart/form-data">
            <!-- 이미지 업로드 박스와 미리 보기 컨테이너를 묶음 -->
            <div class="upload-preview-container">
                <!-- 이미지 업로드 박스 -->
                <div class="upload-box">
                    <span class="upload-text">사진을 업로드 해주세요.</span>
                    <input type="file" name="image" id="product-images" multiple accept="image/*">
                </div>
                <!-- 이미지 미리 보기 영역 -->
                <div class="preview-container"></div>
            </div>

            <!-- 상품명 입력 -->
            <div class="input-box">
                <input type="text" name="title" id="product-name" placeholder="상품명" onkeypress="checkEnter()">
            </div>
            
            <!-- 선택한 카테고리 출력 -->
            <div class="input-box selected-category-display">
                <div id="selected-category-display"></div>
                <!-- 선택한 카테고리를 숨겨진 input 필드로 저장 (date-value 값이 들어옴 / 삭제하면 value=''로 변경)-->
                <input type="hidden" name="category_id" id="selected-categories">
            </div>

            <!-- 카테고리 선택 -->
            <div class="category-container">
                <div class="category-box" data-value="1">패션의류</div>
                <div class="category-box" data-value="2">패션잡화</div>
                <div class="category-box" data-value="3">가방/핸드백</div>
                <div class="category-box" data-value="4">시계/쥬얼리</div>
                <div class="category-box" data-value="5">가전제품</div>
                <div class="category-box" data-value="6">모바일/태블릿</div>
                <div class="category-box" data-value="7">노트북/PC</div>
                <div class="category-box" data-value="8">게임</div>
                <div class="category-box" data-value="9">가구/인테리어</div>
            </div>
            
            <div class="price-box">
                <input type="text" name="price" id="product-price" placeholder="판매가격" oninput="this.value = this.value.replace(/[^0-9]/g, '')" onkeypress="checkEnter()">
            </div>

            <!-- 상세 정보 입력 -->
            <div class="input-box">
                <textarea class="detail-box" name="contents" id="product-details" placeholder="
    -상품명(브랜드)
    -구매 시기
    -오염 여부
    -하자 여부
    *실제 촬영한 사진과 함께 상세 정보를 입력해주세요.
                "></textarea>
            </div>

            <!-- 상품 상태 선택 -->
            <div class="radio-container">
                <input type="radio" name="product_status" id="option1" value="1">
                <label for="option1" class="radio-box">중고</label>
                
                <input type="radio" name="product_status" id="option2" value="2">
                <label for="option2" class="radio-box">새상품</label>
            </div>

            <!-- 거래 방법 선택 -->
            <div class="checkbox-container">
                <input type="checkbox" name="delivery" id="delivery" value="1">
                <label for="delivery" class="round-checkbox"></label>
                <span class="label-text">택배</span>
                
                <input type="checkbox" name="meet" id="meet" value="2">
                <label for="meet" class="round-checkbox"></label>
                <span class="label-text">직거래</span>
                
                <div id="meetLocationContainer" style="margin-left: 15px; display: none;">
                    <input type="text" id="meetLocation" onkeypress="checkEnter()" placeholder="직거래 위치 ex) 둔산동" style="padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                    <button id="locationConfirmButton" style="width: 30px; border: 1px solid #ddd; height: 100%;">확인</button>
                </div>
                <!-- 입력된 위치가 여기에 출력됩니다 -->
                <div id="locationOutput"></div>
                <input type="hidden" name="area">
            </div>

            <!-- 체크박스 아래에 "등록" 박스 추가 -->
            <div class="register-box" onclick="goUpload()">
                등록
            </div>
        </form>
    </div>
</main>

<%@include file="footer.jsp" %>

<script src="${pageContext.request.contextPath}/resources/js/write.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/message.js"></script>
</body>
</html>
