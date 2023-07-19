package com.example.demo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class StudentController 
{
	@Autowired
	private ApiService apiService;
	
	@GetMapping("/get")
	public List<Student> getAllStudents() 
	{
		return apiService.getAllStudents();
	}
	
	@GetMapping("/get/{id}")
	public Student getStudentById(@PathVariable Integer id) 
	{
		return apiService.getStudentById(id);
	}
	
	@PostMapping("/post")
	public boolean createStudent(@RequestBody Student student) {
		return apiService.createStudent(student);
	}
	
	@PutMapping("/put/{id}")
	public Student updateStudent( @RequestBody Student student,@PathVariable Integer id) {
		return apiService.updateStudent(id, student);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteStudent(@PathVariable Integer id) {
		return apiService.deleteStudent(id);
	}
	
	@GetMapping("/startsWith/{name}")
	public List <Student> getNameStartingwithletter(@PathVariable String name)
	{
		return apiService.getNameStartingwithletter(name);
	}
	
	@GetMapping("/endsWith/{name}")
	public List<Student> getNameEndingwithLetter(@PathVariable String name)
	{
		return apiService.getNameEndingwithLetter(name);
	}
	
	@GetMapping("/contain/{name}")
	public List<Student> getLetterContaining(@PathVariable String name)
	{
		return apiService.getLetterContaining(name);
	}
	
	@GetMapping("/isContain/{name}")
	public List<Student> getNameContaining(@PathVariable String name)
	{
		return apiService.getNameContaining(name);
	}
}
