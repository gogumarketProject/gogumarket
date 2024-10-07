package common;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CommonUtil {
	//Images Directory
	public static String getImageDir() {
		String dir = "/Users/Hoejun/Desktop/gogumarket/gogumarket/src/main/webapp/resources/images";
		return dir;
	}
	//getTodayTime yyyy-MM-dd
	public static String getToday() {
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String today = dateFormat.format(date);
		
		return today;
	}
	//getTodayTime yyyy-MM-dd HH:mm:ss
	public static String getTodayTime() {
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String today = dateFormat.format(date);			
		return today;
	}	
}
