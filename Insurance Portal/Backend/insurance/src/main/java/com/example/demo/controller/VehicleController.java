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

import com.example.demo.entity.Vehicle;
import com.example.demo.service.VehicleService;




@RestController


public class VehicleController {
@Autowired
private VehicleService Enrollserve;
@GetMapping("/vehicle")	
public List<Vehicle> getAllEnroll() {

return Enrollserve.getAll();
}
@GetMapping("/vehicle/{id}")
public Vehicle getVehicleById(@PathVariable Long id) {
return Enrollserve.getVehicleById(id);
}
@PostMapping("/vehicle/addroll")
public boolean createVehicle(@RequestBody Vehicle Enroll) {
return Enrollserve.createVehicle(Enroll);
}
@PutMapping("/vehicle/updateroll/{id}")
public Vehicle updateEnroll( @RequestBody Vehicle Enroll,@PathVariable Long id) {
return Enrollserve.updateEnroll(id, Enroll);
}
@DeleteMapping("/vehicle/deleteroll/{id}")
public String deleteEnroll(@PathVariable Long id) {
	Enrollserve.deleteEnroll(id);
	return "Details Deleted";
 
}
}