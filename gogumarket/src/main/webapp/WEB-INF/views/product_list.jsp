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
	    	<span class="search-result">검색 결과</span>
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
			        <td></td>
			        <td id="category-list"></td>
			    </tr>
	            <tr>
	                <td>가격</td>
	                <td>
					    <div class="price-filter" style="display: inline-block;">
					        <input type="text" id="min-price" placeholder="최소 가격" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
					        ~ 
					        <input type="text" id="max-price" placeholder="최대 가격" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
					        <button type="button" class="apply-btn" onclick="applyPriceFilter()">적용</button>
					    </div>
					</td>
	            </tr>
	            <tr>
	                <td>거래 방법</td>
	                <td>
		                <div class="options">
		                    <input type="checkbox" id="delivery">
		                    <label for="delivery">택배</label>
		                    <input type="checkbox" id="direct">
		                    <label for="direct">직거래</label>
		                </div>
	                </td>
	            </tr>
	            <tr>
	                <td>상품 상태</td>
	                <td>
		                <div class="status-filter">
		                    <input type="radio" id="new" value="new">
		                    <label for="new">새상품</label>
		                    <input type="radio" id="used" value="used">
		                    <label for="used">중고</label>
		                </div>
	                </td>
	            </tr>
	            <tr>
	                <td>선택한 필터</td>
	                <td id="filter-display">
					    <div class="filter-container">
					        <span id="filter-text"></span>
					        <button id="reset-btn" style="white-space: pre;">초기화</button>
					    </div>
					</td>
	            </tr>
	        </table>
	    </div>
	
	    <!-- 정렬 박스 -->
	    <div class="sort-box">
		    <button class="sort-btn active" data-sort="recent">최신순</button> |
		    <button class="sort-btn" data-sort="low-price">낮은가격순</button> |
		    <button class="sort-btn" data-sort="high-price">높은가격순</button>
		</div>
	
	    <!-- 상품 목록 -->
		<div class="product-list" id="product-list">
		    <!-- 상품 카드들이 동적으로 생성될 영역 -->
		</div>
		
		<!-- 페이징 버튼 -->
		<div class="pagination" id="pagination">
		    <button id="prev-btn" disabled>Prev</button>
		    <span id="page-numbers"></span>
		    <button id="next-btn">Next</button>
		</div>
	</div>

	<%@include file="footer.jsp" %>	

    <script src="${pageContext.request.contextPath}/resources/js/product_list.js"></script>
</body>
</html>
