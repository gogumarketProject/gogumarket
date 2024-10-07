package common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBConnection {

	public static Connection getConnection() {
		Connection con = null;
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			System.out.println("oracle 드라이버 없음");
		}
		
		String db_url = "jdbc:oracle:thin:@182.217.138.73:1521:xe";
		String db_user = "db_used";
		String db_password = "used1234";
		
		try {
			con = DriverManager.getConnection(db_url, db_user, db_password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("DB 계정 설정 오류");
		}
		
		 return con;
	}
	
	public static void closeDB(Connection con, PreparedStatement ps, ResultSet rs) {
		
		if(rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		if(ps != null) {
			try {
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		if(con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			
		}
		
		
		
	}
	
	
}
