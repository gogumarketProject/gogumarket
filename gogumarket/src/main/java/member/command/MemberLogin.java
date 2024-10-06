package member.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import common.CommonExecute;

public class MemberLogin implements CommonExecute {

	@Override
	public void execute(HttpServletRequest request) {
		HttpSession session = request.getSession();
		
		session.setAttribute("sessionId", "admin");
		session.setAttribute("sessionName", "관리자");
		session.setAttribute("sessionLevel", "top");
		
		//세션유지시간
		session.setMaxInactiveInterval(60 * 30);
		
		String msg = session.getAttribute("sessionName") + "님 환영합니다!";
		request.setAttribute("msg", msg);
		request.setAttribute("url", "market");

	}

}
