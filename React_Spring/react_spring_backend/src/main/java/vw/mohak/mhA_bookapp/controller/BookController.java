package vw.mohak.mhA_bookapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vw.mohak.mhA_bookapp.entity.Book;
import vw.mohak.mhA_bookapp.repository.BookRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
	
	@Autowired
	BookRepository br;
	

	@GetMapping("/books")
	List<Book> getAllBooks()
	{
		return br.findAll();
	}
	

	@PostMapping("/book")
	ResponseEntity<Book> addBook(@RequestBody Book newBook)
	{
		
		br.save(newBook);
		return new ResponseEntity<>(newBook, HttpStatus.CREATED);
	}
	
	@GetMapping("/book/{id}")
	ResponseEntity<Book> getBook (@PathVariable int id)
	{
		Optional<Book>foundBook = br.findById(id);
		if (foundBook.isPresent())
		{
			System.out.println(foundBook.get());
			return new ResponseEntity<Book>(foundBook.get(), HttpStatus.OK);
		}
		else
			return new ResponseEntity<Book>(new Book(), HttpStatus.OK); //book with id = 0
	}
	
	

	@DeleteMapping("/book/{id}")
	void deleteBook(@PathVariable int id)
	{
		br.deleteById(id);
		
	}
	
	@PutMapping("/book")
	void updateBook(@RequestBody Book book)
	{
		br.save(book);
	}

}
