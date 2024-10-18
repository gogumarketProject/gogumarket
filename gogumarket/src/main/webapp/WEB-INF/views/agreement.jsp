<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<style type="text/css">
		*{
			margin:0;
			background: 0;
		}
		.container{
			display:flex;
			justify-content:center;
		}
		.container_inner{
			width: 700px;
		}
		.agr-header{
			width:100%;
			padding: 30px 0;
			text-align:center;
			font-size: 22px;
			font-weight: 600;
		}
		.agr-contents{
			border: 1px solid #ddd;
			width:100%;
			height:385px;
			overflow:auto;
			white-space: pre-line;
			margin: 0 0 150px;
			padding: 20px;
		}
		.agr-btn-box{
			width:100%;
			height:50px;
			display: flex;
			justify-content: center;
			align-items: center;
			border:1px solid #17b75e;
			background-color: #17b75e;
			border-radius: 5px;
			margin: 0 0 5px;
		}
		.agr-btn{
			color : white;
			font-size: 17px;
			font-weight: 600;
			border: none;
		}
		.agr-logo-box{
			width: 100%;
			text-align: center;
		}
		.agr-logo{
			color: #8e8e8e;
			font-size: 18px;
			font-weight: 600;
			letter-spacing: -2px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="container_inner">
			<div class="agr-header">개인정보 제 3자 제공 동의</div>
			<div class="agr-contents"><strong>gogumarket</strong> 서비스 내 이용자 식별, 통계, 계정 연동 및 CS 등을 위해 이용자 식별자 정보와 함께 개인 정보가 제공됩니다. 제공된 정보는 서비스 이용기간 동안 활용/보관됩니다. 본 제공 동의를 거부할 권리가 있으나, 동의를 거부하실 경우 서비스 이용이 제한될 수 있습니다.

1. 제공받는 자 :
<strong>gogumarket</strong>

2. 필수 제공 항목 :
이용자 식별자, 이름, 이메일 주소

3. 선택 제공 항목 : 
휴대전화 번호, 별명, 프로필 사진

4. 제공 목적 :
<strong>gogumarket 서비스 내 이용자 식별, 통계, 계정 연동 및 CS처리</strong>

5. 보유 기간 :
<strong>서비스 이용기간 동안 보관하며 동의 철회 또는 서비스 탈퇴 시 지체없이 파기</strong></div>
			<div class="agr-btn-box"><button class="agr-btn">확인</button></div>
			<div class="agr-logo-box"><span class="agr-logo">GOGUMARKET</span></div>
		</div>
	</div>
</body>
</html>