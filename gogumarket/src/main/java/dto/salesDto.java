package dto;

public class salesDto {
	private String s_id, category_id, title, contents, status, product_status, trade, area, reg_date, imageDir;
	private int s_no, price, likes;
	
	//물품 등록
	public salesDto(String s_id, String category_id, String title, String contents, String product_status, String trade,
			String area, String reg_date, String imageDir, int s_no, int price) {
		super();
		this.s_id = s_id;
		this.category_id = category_id;
		this.title = title;
		this.contents = contents;
		this.product_status = product_status;
		this.trade = trade;
		this.area = area;
		this.reg_date = reg_date;
		this.imageDir = imageDir;
		this.s_no = s_no;
		this.price = price;
	}
	
	public String getS_id() {
		return s_id;
	}
	public String getCategory_id() {
		return category_id;
	}
	public String getTitle() {
		return title;
	}
	public String getContents() {
		return contents;
	}
	public String getStatus() {
		return status;
	}
	public String getProduct_status() {
		return product_status;
	}
	public String getTrade() {
		return trade;
	}
	public String getArea() {
		return area;
	}
	public String getReg_date() {
		return reg_date;
	}
	public String getImageDir() {
		return imageDir;
	}
	public int getS_no() {
		return s_no;
	}
	public int getPrice() {
		return price;
	}
	public int getLikes() {
		return likes;
	}
	
	
}
