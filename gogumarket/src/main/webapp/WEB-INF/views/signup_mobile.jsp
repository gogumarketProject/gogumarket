<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>본인 인증</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/signup_mobile.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
	
	<style>
        
    </style>
</head>
<body>
    <%@include file="header.jsp" %>
	<%@include file="menu_bar.jsp" %>
	<%@include file="message.jsp" %>


    <!-- 로고 영역 -->
    <div class="logo-container">
        <h1>Gogumarket</h1>
    </div>

    <!-- 본인 인증 박스 -->
    <div class="auth-container">
        <div class="auth-box">
            <div class="auth-header">
                <i class="fa fa-arrow-left back-button"></i> <!-- 뒤로가기 버튼 -->
                <h2>본인인증</h2> <!-- 본인인증 텍스트 -->
            </div>

            <label for="phone-number">휴대폰번호</label>
            <input type="text" id="phone-number" maxlength="11" placeholder="-없이 숫자만 입력">
            <p class="error-message1" style="display: none;">휴대폰번호를 입력해주세요.</p>
            <p class="error-message1_1" style="display: none;">올바른 값을 입력해주세요.</p>

            <label for="carrier">통신사</label>
            <select id="carrier">
                <option value="">선택해 주세요</option>
                <option value="SKT">SKT</option>
                <option value="KT">KT</option>
                <option value="LGU+">LGU+</option>
            </select>
            <p class="error-message2" style="display: none;">통신사를 선택해 주세요.</p>

            <label for="id-number">주민등록번호</label>
            <div style="display: flex; gap: 10px;">
                <div class="id-container">
                    <input type="text" id="id-number" maxlength="6" placeholder="생년월일 6자리" style="flex: 1;">
                    
                    <span>-</span>
                    <div class="id-back">
                        <input type="text" id="id-number-back" maxlength="1"> <!-- 마지막 자릿수 입력 상자 -->
                        &nbsp;&nbsp; ● ● ● ● ● ●
                    </div>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 42px;"> <!-- 오류 메시지를 수평 정렬하기 위해 추가된 div -->
                <p class="error-message3" style="display: none;">생년월일을 입력해주세요.</p>
                <p class="error-message4" style="display: none;">성별을 입력해주세요.</p>
            </div>
            <div style="display: flex; align-items: center; gap: 42px;"> <!-- 오류 메시지를 수평 정렬하기 위해 추가된 div -->
                <p class="error-message3_1" style="display: none;">올바른 값을 입력해주세요.</p>
                <p class="error-message4_1" style="display: none;">올바른 값을 입력해주세요.</p>
            </div>
            <label for="name">이름</label>
            <input type="text" id="name" maxlength="8" placeholder="이름 입력">
            <p class="error-message5" style="display: none;">이름을 입력해주세요.</p>

            <button type="button" class="submit-btn" >제출하기</button>
        </div>
    </div>

    <%@include file="footer.jsp" %>
	
	<script src="${pageContext.request.contextPath}/resources/js/message.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/signup_mobile.js"></script>
</body>
</html>
