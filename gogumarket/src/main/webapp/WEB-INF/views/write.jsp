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

</head>
<body>
    <%@include file="header.jsp" %>
    <%@include file="menu_bar.jsp" %>
    <%@include file="message.jsp" %>

<main>
    <input type="hidden" name="t_gubun">
    <div class="container">
        <form id="sell" enctype="multipart/form-data">
            <!-- 이미지 업로드 박스와 미리 보기 컨테이너를 묶음 -->
            <div class="upload-preview-container">
                <!-- 이미지 업로드 박스 -->
                <div class="upload-box">
                    <span class="upload-text">사진을 업로드 해주세요 (0/3)</span>
                    <input type="file" id="product-images" multiple accept="image/*">
                </div>
                <!-- 이미지 미리 보기 영역 -->
                <div class="preview-container"></div>
            </div>

            <!-- 상품명 입력 -->
            <div class="input-box">
                <input type="text" id="product-name" placeholder="상품명">
            </div>
            
            <!-- 선택한 카테고리 출력 -->
            <div class="input-box selected-category-display">
                <div id="selected-category-display"></div>
                <!-- 선택한 카테고리를 숨겨진 input 필드로 저장 -->
                <input type="hidden" id="selected-categories">
            </div>

            <!-- 카테고리 선택 -->
            <div class="category-container">
                <div class="category-box" data-value="fashion-clothing">패션의류</div>
                <div class="category-box" data-value="fashion-accessories">패션잡화</div>
                <div class="category-box" data-value="bag">가방/핸드백</div>
                <div class="category-box" data-value="watch-jewelry">시계/쥬얼리</div>
                <div class="category-box" data-value="electronics">가전제품</div>
                <div class="category-box" data-value="mobile-tablet">모바일/태블릿</div>
                <div class="category-box" data-value="laptop-pc">노트북/PC</div>
                <div class="category-box" data-value="game">게임</div>
                <div class="category-box" data-value="furniture-interior">가구/인테리어</div>
            </div>
            
            <div class="price-box">
                <input type="text" id="product-price" placeholder="판매가격" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
            </div>

            <!-- 상세 정보 입력 -->
            <div class="input-box">
                <textarea class="detail-box" id="product-details" placeholder="-상품명(브랜드)
-구매 시기
-오염 여부
-하자 여부
*실제 촬영한 사진과 함께 상세 정보를 입력해주세요.
				"></textarea>
            </div>

            <!-- 상품 상태 선택 -->
            <div class="check-con-box">
            	<span class="check-title">상품상태</span>
            	<div class="radio-container">
	                <input type="radio" id="option1" value="">
	                <label for="option1" class="radio-box">중고</label>
	                
	                <input type="radio" id="option2" value="">
	                <label for="option2" class="radio-box">새상품</label>
                </div>
            </div>

            <!-- 거래 방법 선택 -->
            <div class="check-con-box bottom-line">
            	<span class="check-title">거래방법</span>
            	<div  class="checkbox-container">
	                <input type="checkbox" id="delivery" value="delivery">
	                <label for="delivery" class="round-checkbox"><i class="fa-solid fa-check"></i></label>
	                <span class="label-text">택배</span>
	                
	                <input type="checkbox" id="meet" value="meet">
	                <label for="meet" class="round-checkbox"><i class="fa-solid fa-check"></i></label>
	                <span class="label-text">직거래</span>
                </div>
                
            </div>
			<div>
				<div id="meetLocationContainer" style="display: none;">
					<span class="meetLocation-title">희망 지역</span>
					<div style="display: flex; align-items: center;">
						<div class="meetLocation-add-box-con">
		                    <input type="text" id="meetLocation" placeholder="직거래 위치 입력">
		                    <button id="locationConfirmButton">추가</button>
	                    </div>
	                    <!-- 입력된 위치가 여기에 출력됩니다 -->
                		<div id="locationOutput">
                		</div>
                    </div>
                </div>
			</div>
            <!-- 체크박스 아래에 "등록" 박스 추가 -->
            <div class="register-box" onclick="goUpload()">
                등록
            </div>
            <div class="advertising-container">
            	<img src="${pageContext.request.contextPath}/resources/images/ad/advertising-image4.png" alt="ad">
            </div>
        </form>
    </div>
</main>

<%@include file="footer.jsp" %>

<script src="${pageContext.request.contextPath}/resources/js/write.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/message.js"></script>
</body>
</html>
