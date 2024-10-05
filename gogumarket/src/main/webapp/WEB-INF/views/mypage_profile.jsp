<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!-- profile.html -->
<div class="slide-panel" id="slidePanel">
    <button class="close-btn" id="closeBtn">닫기</button>
    <div class="panel-header">마이 프로필</div>
    <div class="panel-content">
        <!-- 프로필 이미지 및 변경 버튼 -->
        <div class="profile-img-container">
            <img src="https://via.placeholder.com/120" alt="프로필 이미지" id="profilePhoto">
            <button class="change-photo-btn" id="changePhotoBtn">사진 변경</button>
        </div>
        <!-- 닉네임 및 신뢰지수 -->
        <div class="info-container">
            <!-- 닉네임 및 닉네임 변경 버튼 -->
            <div class="nickname-container">
                <div class="nickname" id="nickname">히텅#00000001</div>
                <button class="change-nickname-btn" id="changeNicknameBtn">닉네임 변경</button>
            </div>
            <!-- 신뢰지수 및 레벨 -->
            <div class="trust-score">
                <div class="trust-score-label">신뢰지수 <span id="slide-trust-score-value">189</span></div>
                <div class="trust-bar">
                    <div class="trust-bar-inner" id="slide-trust-bar-inner"></div>
                    <div class="trust-bar-value">1,000</div>
                </div>
                <div class="profile-level" id="slide-profile-level">Level 1</div>
            </div>
        </div>
    </div>
    <!-- 내 주소지 섹션 -->
    <div class="address-section">
        <div class="address-header">
            <span class="address-title">내 주소지</span>
            <button class="add-address-btn" id="addAddressBtn">추가</button>
        </div>
        <div class="address-list">
            <div class="address-item">
                <div class="address-info">
                    <span class="address-alias">집</span>
                    <div class="address-details">
                        <span class="address">서울특별시 동작구 사당동 123-456</span>
                    </div>
                    <button class="change-address-btn updateAddressBtn">변경</button>
                </div>
            </div>
            <div class="address-item">
                <div class="address-info">
                    <span class="address-alias">회사</span>
                    <div class="address-details">
                        <span class="address">대전광역시 중구 오류동 희영빌딩 7층 704호</span>
                    </div>
                    <button class="change-address-btn updateAddressBtn">변경</button>
                </div>
            </div>
        </div>
    </div>
</div>