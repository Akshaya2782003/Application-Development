package com.example.demo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ApiService 
{
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAllStudents() 
	{
			return studentRepository.findAll();
	}
	
	public Student getStudentById(Integer id) 
	{
			return studentRepository.findById(id).get();
	}
	
	public boolean createStudent(Student student) 
	{
			return studentRepository.save(student) != null? true:false;
	}
	
	public Student updateStudent(Integer id, Student student) 
	{
		Student stu = studentRepository.findById(id).get();
		stu.setName(student.getName());
		stu.setAge(student.getAge());
		stu.setAddress(student.getAddress());
		stu.setDepartment(student.getDepartment());
		return studentRepository.save(stu);
	}
	
	public boolean deleteStudent(Integer id) 
	{
		if(studentRepository.findById(id).isPresent())
		{
			studentRepository.deleteById(id);
			return true;
		} 
		return false;
	}
	
	public Student getEmployeeById(int id)
	{
		return studentRepository.findById(id).get();
	}
	
	public List <Student> getNameStartingwithletter(String name)
	{
		return studentRepository.findBynamesStarttingwith(name);
	}
	
	public List <Student> getNameEndingwithLetter(String name)
	{
		return studentRepository.findByNamesEndingWith(name);
	}
	
	public List <Student> getLetterContaining(String name)
	{
		return studentRepository.findLetterContaining(name);
	}
	
	public List <Student> getNameContaining(String name)
	{
		return studentRepository.findNameContaining(name);
	}
}