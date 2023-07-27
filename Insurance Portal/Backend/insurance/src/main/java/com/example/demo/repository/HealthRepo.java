package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Health;

public interface HealthRepo extends JpaRepository<Health, Long>{

}
