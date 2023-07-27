package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Health;
import com.example.demo.repository.HealthRepo;







@Service
public class HealthService {
@Autowired
private  HealthRepo Enrollrepo;

public List<Health> getAll() {
return Enrollrepo.findAll();

}
public Health getHealthById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createHealth(Health Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Health updateEnroll(Long id, Health Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}