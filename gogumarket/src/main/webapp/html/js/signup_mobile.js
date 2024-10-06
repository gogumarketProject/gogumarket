document.addEventListener("DOMContentLoaded", function() {
    /*** 휴대폰 번호 입력 유효성 검사 ***/
    const phoneNumberInput = document.getElementById("phone-number");
    const errorMessage1 = document.querySelector(".error-message1");
    const errorMessage1_1 = document.querySelector(".error-message1_1");

    // 휴대폰 번호 입력란에 포커스 시 오류 메시지 표시 (값이 없거나 유효하지 않을 경우)
    phoneNumberInput.addEventListener("focus", function() {
        if (phoneNumberInput.value === "" || !/^\d+$/.test(phoneNumberInput.value) || phoneNumberInput.value.length < 10) {
            errorMessage1.style.display = "block";
        }
    });

    // 휴대폰 번호 입력 시 유효성 검사 및 오류 메시지 업데이트
    phoneNumberInput.addEventListener("input", function() {
        const phoneNumber = this.value;

        if (phoneNumber === "") {
            // 비어 있을 경우 오류 메시지 1 표시
            errorMessage1.style.display = "block";
            errorMessage1_1.style.display = "none";
        } else if (!/^\d+$/.test(phoneNumber) || phoneNumber.length < 10) {
            // 숫자가 아니거나 10자리 미만일 경우 오류 메시지 1_1 표시
            errorMessage1.style.display = "none";
            errorMessage1_1.style.display = "block";
        } else {
            // 올바른 값일 경우 모든 오류 메시지 숨김
            errorMessage1.style.display = "none";
            errorMessage1_1.style.display = "none";
        }
    });

    /*** 주민등록번호 앞자리 입력 유효성 검사 ***/
    const idNumberInput = document.getElementById("id-number");
    const errorMessage3 = document.querySelector(".error-message3");
    const errorMessage3_1 = document.querySelector(".error-message3_1");

    // 주민등록번호 앞자리 입력란에 포커스 시 오류 메시지 표시 (값이 없거나 유효하지 않을 경우)
    idNumberInput.addEventListener("focus", function() {
        if (idNumberInput.value === "" || !/^\d{6}$/.test(idNumberInput.value)) {
            errorMessage3.style.display = "block";
        }
    });

    // 주민등록번호 앞자리 입력 시 유효성 검사 및 오류 메시지 업데이트
    idNumberInput.addEventListener("input", function() {
        const idNumber = this.value;

        if (idNumber === "") {
            // 비어 있을 경우 오류 메시지 3 표시
            errorMessage3.style.display = "block";
            errorMessage3_1.style.display = "none";
        } else if (!/^\d{6}$/.test(idNumber)) {
            // 6자리 숫자가 아닐 경우 오류 메시지 3_1 표시
            errorMessage3.style.display = "none";
            errorMessage3_1.style.display = "block";
        } else {
            // 올바른 값일 경우 모든 오류 메시지 숨김
            errorMessage3.style.display = "none";
            errorMessage3_1.style.display = "none";
        }
    });

    /*** 주민등록번호 뒷자리 입력 유효성 검사 ***/
    const idNumberBackInput = document.getElementById("id-number-back");
    const errorMessage4 = document.querySelector(".error-message4");
    const errorMessage4_1 = document.querySelector(".error-message4_1");

    // 주민등록번호 뒷자리 입력란에 포커스 시 오류 메시지 표시 (값이 없거나 유효하지 않을 경우)
    idNumberBackInput.addEventListener("focus", function() {
        if (idNumberBackInput.value === "" || !/^[1-2]$/.test(idNumberBackInput.value)) {
            errorMessage4.style.display = "block";
        }
    });

    // 주민등록번호 뒷자리 입력 시 유효성 검사 및 오류 메시지 업데이트
    idNumberBackInput.addEventListener("input", function() {
        const idNumberBack = this.value;

        if (idNumberBack === "") {
            // 비어 있을 경우 오류 메시지 4 표시
            errorMessage4.style.display = "block";
            errorMessage4_1.style.display = "none";
        } else if (!/^[0-9]$/.test(idNumberBack)) {
            // 0 ~ 9가 아닐 경우 오류 메시지 4_1 표시
            errorMessage4.style.display = "none";
            errorMessage4_1.style.display = "block";
        } else {
            // 올바른 값일 경우 모든 오류 메시지 숨김
            errorMessage4.style.display = "none";
            errorMessage4_1.style.display = "none";
        }
    });

    /*** 통신사 선택 유효성 검사 ***/
    const carrierSelect = document.getElementById("carrier");
    const errorMessage2 = document.querySelector(".error-message2");

    // 통신사 선택란에 포커스 시 오류 메시지 표시 (값이 없을 경우)
    carrierSelect.addEventListener("focus", function() {
        if (carrierSelect.value === "") {
            errorMessage2.style.display = "block";
        }
    });

    // 통신사 선택 변경 시 오류 메시지 업데이트
    carrierSelect.addEventListener("change", function() {
        if (carrierSelect.value === "") {
            // 값이 선택되지 않았을 경우 오류 메시지 표시
            errorMessage2.style.display = "block";
        } else {
            // 값이 선택되었을 경우 오류 메시지 숨김
            errorMessage2.style.display = "none";
        }
    });

    /*** 이름 입력 유효성 검사 ***/
    const nameInput = document.getElementById("name");
    const errorMessage5 = document.querySelector(".error-message5");

    // 이름 입력란에 포커스 시 오류 메시지 표시 (값이 없을 경우에만)
    nameInput.addEventListener("focus", function() {
        if (nameInput.value === "") {
            errorMessage5.style.display = "block";
        }
    });

    // 이름 입력 시 오류 메시지 숨김 처리
    nameInput.addEventListener("input", function() {
        if (this.value !== "") {
            // 값이 있을 경우 오류 메시지 숨김
            errorMessage5.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    /*** 폼 유효성 검사에 사용할 요소들 ***/
    const phoneNumberInput = document.getElementById("phone-number");
    const idNumberInput = document.getElementById("id-number");
    const idNumberBackInput = document.getElementById("id-number-back");
    const carrierSelect = document.getElementById("carrier");
    const nameInput = document.getElementById("name");
    const submitButton = document.querySelector(".submit-btn");

    const errorMessages = document.querySelectorAll(".auth-box p");

    /*** 유효성 검사 함수 ***/
    function validateForm() {
        let hasError = false;

        // 오류 메시지 중 하나라도 표시된 것이 있는지 확인
        errorMessages.forEach((msg) => {
            if (msg.style.display === "block") {
                hasError = true;
            }
        });

        // 입력란 중 하나라도 비어 있는지 확인
        if (
            phoneNumberInput.value.trim() === "" ||
            idNumberInput.value.trim() === "" ||
            idNumberBackInput.value.trim() === "" ||
            carrierSelect.value === "" ||
            nameInput.value.trim() === ""
        ) {
            hasError = true;
        }

        // 오류가 있거나 입력란이 비어 있는 경우 제출 버튼 비활성화
        if (hasError) {
            submitButton.disabled = true;
            submitButton.style.cursor = "not-allowed"; // 커서를 금지 표시로 변경
        } else {
            submitButton.disabled = false;
            submitButton.style.cursor = "pointer"; // 커서를 일반 클릭 가능 표시로 변경
        }
    }

    /*** 각 입력란의 이벤트 리스너 추가 ***/
    phoneNumberInput.addEventListener("focus", validateForm);
    phoneNumberInput.addEventListener("input", validateForm);

    idNumberInput.addEventListener("focus", validateForm);
    idNumberInput.addEventListener("input", validateForm);

    idNumberBackInput.addEventListener("focus", validateForm);
    idNumberBackInput.addEventListener("input", validateForm);

    carrierSelect.addEventListener("focus", validateForm);
    carrierSelect.addEventListener("change", validateForm);

    nameInput.addEventListener("focus", validateForm);
    nameInput.addEventListener("input", validateForm);

    // 초기 폼 유효성 검사 실행
    validateForm();
});