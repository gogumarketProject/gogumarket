<%@ page pageEncoding="UTF-8"%>
<!-- 슬라이드 패널 -->
<div id="tradeSlidePanel" class="slide-panel">
	<div class="slide-header">
        <span>쪽지</span>
        <!-- 
        추후 message.js와 연결 요구(현재 product_sell.js로 따로 만든 상태.
        class 및 id를 동일한 값으로 맞춘 후 
        getElementById를 getElementByClassName 또는 querySelectorAll로 바꾼다.(이건 js)
        이후 이벤트에 복수의 버튼이 활성화 될 수 있도록 변수.forEach(function(){})로 다중 class 및 id가 가능하게끔 설정.
         -->
        <button class="msg-close-btn">&times;</button>
    </div>
    <!-- <div class="app-download-section">
        <span>앱 다운로드 받고 더 빠르고 편리하게 채팅 이용하기</span>
        <img src="https://via.placeholder.com/50" alt="QR Code">
    </div> -->
    <div class="msg-background">
    	<div class="msg-container">
	    	<div class="msg-counterparty">		
				<img src="https://via.placeholder.com/50" alt="프로필 이미지" class="profile-image">
	            <div class="user-name">
	                <span class="user-name">중고나라#9499158</span>
	            </div>
			</div>
	    	<div class="msg-content">쪽지 내용</div>
	    	<div class="msg-writing-form">
	    		<textarea type="text" class="msg-writing" placeholder="쪽지 적기"></textarea>
	    		<button class="msg-send-btn">전송</button>
	    	</div>
    	</div>
    </div>
	
</div>
