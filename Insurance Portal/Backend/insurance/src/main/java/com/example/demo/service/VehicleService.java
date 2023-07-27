package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Vehicle;
import com.example.demo.repository.VehicleRepo;







@Service
public class VehicleService {
@Autowired
private  VehicleRepo Enrollrepo;

public List<Vehicle> getAll() {
return Enrollrepo.findAll();

}
public Vehicle getVehicleById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createVehicle(Vehicle Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Vehicle updateEnroll(Long id, Vehicle Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}