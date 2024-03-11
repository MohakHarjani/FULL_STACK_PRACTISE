package vw.mohak.mhA_bookapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import vw.mohak.mhA_bookapp.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
