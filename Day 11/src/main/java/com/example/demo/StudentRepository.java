package com.example.demo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> 
{
	@Query(value="Select * from Student where name like ?1%" ,nativeQuery=true) 
	public List <Student> findBynamesStarttingwith(String name);

	@Query(value = "Select * from Student where name like %?1", nativeQuery = true)
	public List <Student> findByNamesEndingWith(String name);

	@Query(value = "Select * from Student where name like %?1%", nativeQuery = true)
	public List <Student> findLetterContaining(String name);

	@Query(value = "Select * from Student where name like ?1", nativeQuery = true)
	public List <Student> findNameContaining(String name);
}