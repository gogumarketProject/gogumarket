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
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/product_sell.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

	<%@include file="header.jsp" %>
	<%@include file="menu_bar.jsp" %>
	<%@include file="message.jsp" %>
	
	<div class="container">
		<!-- 1번째 섹션 div -->
		<div class="section1">
			<!-- 좌측: 사진 div -->
			<div class="image-box">
				<img src="이미지경로" alt="상품 이미지">
			</div>
			<!-- 우측: 판매 정보 div -->
			<div class="info-box">
				<div class="info-box-category">홈 > 도서/음반/문구 > 문구/사무용품</div>
				<div class="info-box-product-name">슬라이딩 키보드 트레이</div>
				<div class="info-box-price"><strong>10,000원</strong></div>
				<div class="info-box-product-meta">34분 전 조회 3 채팅 0 찜 0</div>
				<!-- 한 줄로 나란히 배치된 li -->
				<ul class="li-details">
					<li class="li-line"><span>제품상태</span><button>중고</button></li>
					<li class="li-line"><span>거래방식</span><button>직거래</button></li>
					<li class="li-line"><span>배송비</span><button>-</button></li>
					<li class="li-line"><span>거래제안</span><button>가능</button></li>
				</ul>
				<div class="trade">
					<div class="trade-location">・거래희망지역</div>
					<div><button class="trade-location-btn">중화제2동</button></div>
				</div>


				<div class="action-buttons">
					<label class="wishlist">
						<input type="checkbox" style="display: none;">
						<i class="fa-regular fa-heart"></i>
					</label>
					<button class="send-msg" onclick="alert('쪽지보내기 버튼 클릭됨')">쪽지보내기</button>
					<button class="trade-offer" onclick="togglePriceBox()">가격제안</button>
				</div>
				<div class="trade-offer-price-box" style="visibility: hidden;">
					<div style="width:25px;"></div>
					<input type="text" class="trade-offer-price" placeholder=" 제안할 금액을 입력하세요.">
					<button class="trade-offer-price-submit">제안하기</button>
				</div>


			</div>
		</div>


		<!-- 2번째 섹션 div -->
		<div class="section2">
			<div class="section2-title">새 상품은 어떠세요?</div>
			<ul class="recommended-products">
				<li>
					<img src="이미지경로" alt="상품 이미지">
					<div class="recommend-products-content">
						<a href="#">엘디 엘마운트 슬라이딩 책상 키보드 트레이 APL-KT52 1개 엘디 엘마운트 슬라이딩 책상 키보드 트레이</a>
						<div class="recommend-price"><strong>36,700원</strong></div>
						<div class="recommend-advertisy"><span>쿠팡 | 광고</span></div>
					</div>
				</li>
				<li>
					<img src="이미지경로" alt="상품 이미지">
					<div class="recommend-products-content">
						<a href="#">헬시위드 탈부착 레일형 슬라이딩 키보드 트레이 월넛(상부) + 화이트(하부) 1개</a>
						<div class="recommend-price"><strong>35,000원</strong></div>
						<div class="recommend-advertisy"><span>쿠팡 | 광고</span></div>
					</div>
				</li>
				<li>
					<img src="이미지경로" alt="상품 이미지">
					<div class="recommend-products-content">
						<a href="#">헬시위드 탈부착 레일형 슬라이딩 키보드 트레이 월넛(상부) + 화이트(하부) 1개</a>
						<div class="recommend-price"><strong>35,000원</strong></div>
						<div class="recommend-advertisy"><span>쿠팡 | 광고</span></div>
					</div>
				</li>
			</ul>
		</div>


		<!-- 3번째 섹션 div -->
		<div class="section3">
			<!-- 좌측 큰 div -->
			<div class="left-box">
				<h3 class="left-box-header">상품 정보</h3>
				<p class="left-box-text">[반값이하, 특가] 키보드 트레이
					
					[1] 제품링크
					[2] 구매시기: 작년 즈음
					[3] 구매가: 44,000원
					[4] 제품 설명:
					--- [1] 화이트 1개 - 상태: 상급
					기능: 정상기능 작동
					하자내용: 약간의 사용감
					가격: 15,000원
					--- [2] 블랙 1개 - 상태: 중상급
					기능: 정상기능 작동
					하자내용: 뒷면에 나사 흔적이 있음
					가격: 10,000원
					
					[⭐⭐ 핫딜 ⭐⭐]
					2개를 한번에 구매하시면, 20000원에 드립니다.
					
					마무리 주의사항
					네고 없습니다.
					무조건 직거래로 제가 지정한 장소에서 거래합니다.
					거래장소는 CU 중화제일점 옆 공원입니다.
					감사합니다.
				</p>
				<div class="location-info">
					<p>거래희망지역</p>
					<button>중화제2동</button>
				</div>
			</div>
			<!-- 우측 큰 div -->
			<div class="right-box">
				<a href="#">
					<h3 class="right-box-header">
						가게 정보
						<i class="fa-solid fa-chevron-right"></i>
					</h3>
				</a>
				<div class="right-box-trade">
					<a href="#">
						<p class="counterparty">
							매너거래칼거래
							<i class="fa-solid fa-circle-user"></i>
						</p>
					</a>
				</div>
				<div class="counterparty-trust">
					<p>신뢰지수</p>
					<span>401</span>
				</div>
				<ul class="li-details counterparty-data">
					<li class="li-line"><span>안전거래</span><button>0</button></li>
					<li class="li-line"><span>거래후기</span><button>2</button></li>
					<li class="li-line"><span>단골</span><button>0</button></li>
				</ul>
				<div class="product-list">
					<div class="small-box">
						<div class="small-box-product-img"><img src="이미지경로" alt="상품 이미지"></div>
						<div class="small-box-content">
							<h2>슬라이딩 키보드 트레이</h2>
							<div class="small-box-price">10,000원</div>
						</div>
					</div>
					<div class="small-box">
						<div class="small-box-product-img"><img src="이미지경로" alt="상품 이미지"></div>
						<div class="small-box-content">
							<h2>mx keys mac 반값 2개</h2>
							<div class="small-box-price">50,000원</div>
						</div>
					</div>
					<div class="small-box margin-padding-reset">
						<div class="small-box-product-img"><img src="이미지경로" alt="상품 이미지"></div>
						<div class="small-box-content">
							<h2>아이패드 10세대 + 애플 펜슬 1세대 팝니다</h2>
							<div class="small-box-price">450,000원</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<%@include file="footer.jsp" %>
	
</body>
	<script src="${pageContext.request.contextPath}/resources/js/product_sell.js"></script>
</html>
