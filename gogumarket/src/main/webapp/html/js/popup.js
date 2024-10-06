document.addEventListener('DOMContentLoaded', function () {    
    const addAddressBtn = document.getElementById('addAddressBtn');
    const addressPopup = document.getElementById('addressPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const addressForm = document.getElementById('addressForm');
    const updatePopup = document.getElementById('updatePopup');
    const closeUpdatePopupBtn = document.getElementById('closeUpdatePopupBtn');
    const updateForm = document.getElementById('updateForm');

    // 배송지 추가 팝업 열기
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', function () {
            addressPopup.style.display = 'flex';
        });
    }

    // 배송지 추가 팝업 닫기
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function () {
            addressPopup.style.display = 'none';
        });
    }

    // 배송지 변경 팝업 열기 - 이벤트 위임 사용
    document.querySelector('.address-list').addEventListener('click', function (event) {
        if (event.target.classList.contains('updateAddressBtn')) {
            updatePopup.style.display = 'flex';
        }
    });

    // 배송지 변경 팝업 닫기
    if (closeUpdatePopupBtn) {
        closeUpdatePopupBtn.addEventListener('click', function () {
            updatePopup.style.display = 'none';
        });
    }

    // 팝업 외부 클릭 시 닫기
    window.addEventListener('click', function (event) {
        if (event.target === addressPopup) {
            addressPopup.style.display = 'none';
        } else if (event.target === updatePopup) {
            updatePopup.style.display = 'none';
        }
    });

    // 배송지 추가 폼 제출 시 팝업 닫기
    if (addressForm) {
        addressForm.addEventListener('submit', function (event) {
            event.preventDefault();
            addressPopup.style.display = 'none';
        });
    }

    // 배송지 변경 폼 제출 시 팝업 닫기
    if (updateForm) {
        updateForm.addEventListener('submit', function (event) {
            event.preventDefault();
            updatePopup.style.display = 'none';
        });
    }
});