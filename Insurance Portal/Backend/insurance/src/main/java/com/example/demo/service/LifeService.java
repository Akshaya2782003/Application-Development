package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Life;
import com.example.demo.repository.LifeRepo;







@Service
public class LifeService {
@Autowired
private  LifeRepo Enrollrepo;

public List<Life> getAll() {
return Enrollrepo.findAll();

}
public Life getHealthById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createHealth(Life Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Life updateEnroll(Long id, Life Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}