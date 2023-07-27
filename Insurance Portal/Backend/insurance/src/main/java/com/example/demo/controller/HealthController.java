package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Health;
import com.example.demo.service.HealthService;




@RestController


public class HealthController {
@Autowired
private HealthService Enrollserve;
@GetMapping("/health")	
public List<Health> getAllEnroll() {

return Enrollserve.getAll();
}
@GetMapping("/health/{id}")
public Health getHealthById(@PathVariable Long id) {
return Enrollserve.getHealthById(id);
}
@PostMapping("/health/addroll")
public boolean createHealth(@RequestBody Health Enroll) {
return Enrollserve.createHealth(Enroll);
}
@PutMapping("/health/updateroll/{id}")
public Health updateEnroll( @RequestBody Health Enroll,@PathVariable Long id) {
return Enrollserve.updateEnroll(id, Enroll);
}
@DeleteMapping("/health/deleteroll/{id}")
public String deleteEnroll(@PathVariable Long id) {
	Enrollserve.deleteEnroll(id);
	return "Details Deleted";
 
}
}