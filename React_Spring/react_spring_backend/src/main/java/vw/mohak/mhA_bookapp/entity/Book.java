package vw.mohak.mhA_bookapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Book {
	
	@Id
	private int bookId;
	
	private String bookName;
	
	private double bookPrice;
	
	public Book()
	{
		
	}
	public Book(int bookId, String bookName, double bookPrice) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.bookPrice = bookPrice;
	}
	
	//================================================================================
	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public double getBookPrice() {
		return bookPrice;
	}

	public void setBookPrice(double bookPrice) {
		this.bookPrice = bookPrice;
	}

	public int getBookId() {
		return bookId;
	}
	//===============================================================================================

	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookName=" + bookName + ", bookPrice=" + bookPrice + "]";
	}
	
	//============================================================================================
	
	
	
	

}
