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
    
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/product_list.css">
</head>
<body>

	<%@include file="header.jsp" %>
	<%@include file="menu_bar.jsp" %>
	<%@include file="message.jsp" %>
    
	<div class="container">
	    <!-- 2열 4행 테이블 -->
	    <div class="table-container">
	    	<div class="table-title-con">
	    		<span class="search-result"><strong>'~에 대한'</strong> 검색 결과</span><span class="list-count">총 N개</span>
	    	</div>
	        <table id="details-table">
	        	<colgroup>
	        		<col width="15%">
	        		<col width="85%">
	        	</colgroup>
	            <tr>
	                <td class="category-cell">
		                카테고리
		                <button id="category-btn" class="category-btn">+</button>
	                </td>
	                <td id="selected-category"></td>
	            </tr>
	            <tr id="hidden-row" style="display: none;"> <!-- 기본적으로 숨겨져 있는 행 -->
			        <td>나야.. 들기름</td>
			        <td id="category-list"></td>
			    </tr>
	            <tr>
	                <td>가격</td>
	                <td>
					    <div class="price-filter" style="display: inline-block;">
					        <input type="text" id="min-price" placeholder="최소 가격" oninput="this.value = formatNumber(this.value)" style="margin-left:0;"/>
					        <span>~</span> 
					        <input type="text" id="max-price" placeholder="최대 가격" oninput="this.value = formatNumber(this.value)" />
					    </div>
					</td>
	            </tr>
	            <tr>
	                <td>거래 방법</td>
	                <td>
		                <div class="options">
		                	<input type="checkbox" id="delivery">
			                <label for="delivery" class="round-checkbox"><i class="fa-solid fa-check"></i></label>
			                <span class="label-text">택배</span>
			                
			                <input type="checkbox" id="direct">
			                <label for="direct" class="round-checkbox"><i class="fa-solid fa-check"></i></label>
			                <span class="label-text">직거래</span>
		                </div>
	                </td>
	            </tr>
	            <tr>
	                <td>상품 상태</td>
	                <td>
		                <div class="status-filter">
		                	<input type="checkbox" id="new">
			                <label for="new" class="round-checkbox"><i class="fa-solid fa-check"></i></label>
			                <span class="label-text">새상품</span>
			                
			                <input type="checkbox" id="used">
			                <label for="used" class="round-checkbox"><i class="fa-solid fa-check"></i></label>
			                <span class="label-text">중고</span>
		                </div>
	                </td>
	            </tr>
	        </table>
	        <div style="display: flex; justify-content: center; ">
		        <div class="filter-control-box">
		        	<button class="filter-btn" id="search-btn" onclick="applyPriceFilter()">검색</button>
		        	<button class="filter-btn" id="reset-btn">초기화</button>
		        </div>
	        </div>
	    </div>
	
	    <!-- 정렬 박스 -->
	    <div class="sort-box">
		    <button class="sort-btn active" data-sort="recent">최신순</button> |
		    <button class="sort-btn" data-sort="low-price">낮은가격순</button> |
		    <button class="sort-btn" data-sort="high-price">높은가격순</button>
		</div>
	
	    <!-- 상품 목록 -->
		<div class="product-list" id="product-list">
	    	<div class="product-card">
                <div class="image-container">
                    <img src="" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>상품명</h3>
                    <span class="product-price">5,000원</span>
                    <div class="product-meta">
                        <span class="location">대전 오류동</span> | 
                        <span class="upload-time">1분 전</span>
                    </div>
                    <div class="wishlist">99명 찜꽁!</div>
                </div>
                <button class="like-btn">
                	<i class="fa-solid fa-heart"></i>
                </button>
            </div>
			
			<div class="product-card">
                <div class="image-container">
                    <img src="" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>상품명</h3>
                    <span class="product-price">10,000원</span>
                    <div class="product-meta">
                        <span class="location">대전 오류동</span> | 
                        <span class="upload-time">5분 전</span>
                    </div>
                    <div class="wishlist">112명 찜꽁!</div>
                </div>
                <button class="like-btn">
                	<i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="product-card">
                <div class="image-container">
                    <img src="" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>상품명</h3>
                    <span class="product-price">22,000원</span>
                    <div class="product-meta">
                        <span class="location">대전 오류동</span> | 
                        <span class="upload-time">31분 전</span>
                    </div>
                    <div class="wishlist">7명 찜꽁!</div>
                </div>
                <button class="like-btn">
                	<i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="product-card">
                <div class="image-container">
                    <img src="" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>상품명</h3>
                    <span class="product-price">1,400,000원</span>
                    <div class="product-meta">
                        <span class="location">대전 오류겐</span> | 
                        <span class="upload-time">2분 전</span>
                    </div>
                    <div class="wishlist">1명 찜꽁!</div>
                </div>
                <button class="like-btn">
                	<i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="product-card">
                <div class="image-container">
                    <img src="" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>상품명</h3>
                    <span class="product-price">600원</span>
                    <div class="product-meta">
                        <span class="location">대전 오류동</span> | 
                        <span class="upload-time">10초 전</span>
                    </div>
                    <div class="wishlist">32명 찜꽁!</div>
                </div>
                <button class="like-btn">
                	<i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="product-card">
                <div class="image-container">
                    <img src="" alt="상품이미지">
                </div>
                <div class="product-info">
                    <h3>상품명</h3>
                    <span class="product-price">1,000원</span>
                    <div class="product-meta">
                        <span class="location">대전 오류동</span> | 
                        <span class="upload-time">3시간 전</span>
                    </div>
                    <div class="wishlist">17명 찜꽁!</div>
                </div>
                <button class="like-btn">
                	<i class="fa-solid fa-heart"></i>
                </button>
            </div>
			
		    
		</div>
		
		<!-- 페이징 버튼 -->
		<div class="pagination" id="pagination">
			<a href><i class="fa-solid fa-angles-left"></i></a>
			<a href><i class="fa-solid fa-angle-left"></i></a>
			<a href class="active">1</a>
			<a href>2</a>
			<a href>3</a>
			<a href>4</a>
			<a href><i class="fa-solid fa-angle-right"></i></a>
			<a href><i class="fa-solid fa-angles-right"></i></a>
		</div>
	</div>

	<%@include file="footer.jsp" %>	

    <script src="${pageContext.request.contextPath}/resources/js/product_list.js"></script>
</body>
</html>
