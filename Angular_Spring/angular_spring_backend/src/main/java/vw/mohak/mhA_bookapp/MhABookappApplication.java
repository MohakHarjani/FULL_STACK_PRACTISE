package vw.mohak.mhA_bookapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import vw.mohak.mhA_bookapp.entity.Book;
import vw.mohak.mhA_bookapp.repository.BookRepository;

@SpringBootApplication
public class MhABookappApplication implements CommandLineRunner{
	
	@Autowired
	BookRepository br;

	public static void main(String[] args) {
		
		
		
		SpringApplication.run(MhABookappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Book book1 = new Book(1, "Gulliver Travels", 1000);
		Book book2 = new Book(2, "Harry Potter", 2000);
		Book book3 = new Book(3, "Man Called Ove", 3000);
		br.save(book1);
		br.save(book2);
		br.save(book3);

		
	}

}
