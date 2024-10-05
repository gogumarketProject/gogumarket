<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!-- 배송지 추가 팝업 -->
<div class="address-popup" id="addressPopup">
    <div class="popup-content">
        <h2>배송지 추가</h2>
        <form id="addressForm">
            <div class="form-group">
                <label for="alias">배송지명 (최대 10글자)</label>
                <input type="text" id="alias" maxlength="10">
            </div>
            <div class="form-group">
                <label for="name">받는 분 성함</label>
                <input type="text" id="name">
            </div>
            <div class="form-group">
                <label for="phone">연락처</label>
                <input type="text" id="phone">
            </div>
            <div class="form-group">
                <label for="address">주소 검색</label>
                <input type="text" id="address">
            </div>
            <div class="form-group">
                <label for="details">상세 주소</label>
                <input type="text" id="details" placeholder="예시: 101동 101호">
            </div>       
            <div class="popup-buttons">
                <button type="button" id="closePopupBtn">닫기</button>
                <button type="submit" id="submitAddressBtn">완료</button>
            </div>
        </form>
    </div>
</div>

<!-- 주소지 변경 팝업 -->
<div class="address-update-popup" id="updatePopup">
    <div class="popup-content">
        <h2>배송지 변경</h2>
        <form id="updateForm">
            <div class="form-group">
                <label for="updateAlias">배송지명 (최대 10글자)</label>
                <input type="text" id="updateAlias" maxlength="10">
            </div>
            <div class="form-group">
                <label for="updateName">받는 분 성함</label>
                <input type="text" id="updateName">
            </div>
            <div class="form-group">
                <label for="updatePhone">연락처</label>
                <input type="text" id="updatePhone">
            </div>
            <div class="form-group">
                <label for="updateAddress">주소 검색</label>
                <input type="text" id="updateAddress">
            </div>
            <div class="form-group">
                <label for="updateDetails">상세 주소</label>
                <input type="text" id="updateDetails" placeholder="예시: 101동 101호">
            </div>       
            <div class="popup-buttons">
                <button type="button" id="closeUpdatePopupBtn">닫기</button>
                <button type="submit" id="submitUpdateBtn">완료</button>
            </div>
        </form>
    </div>
</div>