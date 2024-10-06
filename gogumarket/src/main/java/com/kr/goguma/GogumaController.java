package com.kr.goguma;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import common.CommonExecute;
import member.command.MemberLogin;

@Controller
public class GogumaController {
	
	@RequestMapping("market")
	public String market(HttpServletRequest request) {
		String gubun = request.getParameter("t_gubun");
		String viewPage = "";
		
		//인덱스
		if(gubun == null) viewPage = "index";
		
		//로그인 폼
		else if(gubun.equals("login")) {
			viewPage = "login";
		}
		//DB로그인
		else if(gubun.equals("DBLogin")) {
			CommonExecute goguma = new MemberLogin();
			goguma.execute(request);
			viewPage = "common_alert";
		}
		//판매등록 폼
		else if(gubun.equals("writeForm")) {
			viewPage = "write";
		}
		//마이페이지
		else if(gubun.equals("myPage")) {
			viewPage = "mypage";
		}
		
		
		
		
		
		return viewPage;
	}
}
