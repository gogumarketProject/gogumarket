<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 페이지</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/common.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
    </style>
    
    <script>
    	function DBLogin() {
    		
    		if(login.t_id.value=='admin' && login.t_pw.value=='1234') {
    			login.t_gubun.value = "DBLogin";
    			
        		login.method="post";
        		login.action="market";
        		login.submit();
    		}
    		else {
    			alert('아이디와 비밀번호를 확인하세요.');
    		}
    	}
    	
    	function goLogin() {
			mem.t_gubun.value = "login";
			mem.method = "post";
			mem.action = "market";
			mem.submit();
		}
    </script>
</head>

<body>
    <%@include file="header.jsp" %>
	<%@include file="menu_bar.jsp" %>
	<%@include file="message.jsp" %>

    <!-- 로고 영역 추가 -->
    <div class="logo-container">
        <h1>Gogumarket</h1>
    </div>
	
	<form name="login">
		<input type="hidden" name="t_gubun"> 
    <!-- 로그인 박스 -->
    <div class="login-container">
        <div class="login-box">
        
            <p>고구마켓에 오신 것을 환영합니다.</p>
            
            
            <!-- 테스트용 -->
            <!-- 아이디와 비밀번호 입력란 추가 -->
            <div class="input-fields" style="margin-top: -100px;">
                <input type="text" name="t_id" placeholder="아이디">
                <input type="password" name="t_pw" placeholder="비밀번호">
                <button type="button" style="margin-top: 10px;" onclick="DBLogin();">로그인</button>
            </div>
            <!-- 테스트용 -->
            
            <button class="google-btn" style="margin-top:100px;"><i class="fab fa-google"></i> Google로 시작하기</button>
            <button class="naver-btn"><i class="fab fa-n"></i> 네이버로 시작하기</button>
            <button class="kakao-btn"><i class="fab fa-kakao"></i> 카카오로 시작하기</button>
            <button class="phone-btn"><i class="fas fa-mobile-alt"></i> 휴대폰번호로 시작하기</button>
            <div class="checkbox">
                <input type="checkbox" id="keep-login">
                <label for="keep-login">로그인 유지하기</label>
            </div>
            <small>공용 PC에서는 [로그인 유지하기]를 꺼주세요</small>
        </div>
    </div>
	</form>
	
	
	
    <%@include file="footer.jsp" %>

    <script src="${pageContext.request.contextPath}/resources/js/message.js"></script>
</body>

</html>
