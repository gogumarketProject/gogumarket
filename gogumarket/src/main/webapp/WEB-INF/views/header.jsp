<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<form name="mem">
	<input type="hidden" name="t_gubun">
</form>
<header>
    <div class="header-container">
        <div class="logo">Gogumarket</div>
        <div class="search-bar">
            <i class="fa-solid fa-magnifying-glass" style="color: black; margin-right: 5px;"></i>
            <input type="text" placeholder="어떤 상품을 찾으시나요? 카페상품, 앱상품 모두 검색">
        </div>
        <div class="search-buttons">
            <button>
                <span class="icon chat" id="noteButton" style="width:80px;" 
                <c:if test="${empty sessionLevel}">onclick="goLogin();"</c:if>
                >쪽지</span>
                <span class="notification-count">0</span>
            </button>
            <button>
                <span class="icon sell" style="width:80px;" 
                <c:if test="${empty sessionLevel}">onclick="goLogin();"</c:if>
                <c:if test="${not empty sessionLevel}">onclick="goWrite();"</c:if>
                >판매하기</span>
            </button>
            <button>
                <span class="icon my-account" style="width:80px;" 
                <c:if test="${empty sessionLevel}">onclick="goLogin();"</c:if>
                <c:if test="${not empty sessionLevel}">onclick="goMyPage();"</c:if>
                >마이</span> 
            </button>
        </div>
    </div>
</header>
