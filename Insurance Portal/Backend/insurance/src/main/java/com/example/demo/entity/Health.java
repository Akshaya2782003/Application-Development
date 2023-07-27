package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue; 
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="health")
public class Health 
{	
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String mobile;
	private int age;
	private String gender;
	private String policyProvider;
	private double income;
	private String occupation;
	private String education;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPolicyProvider() {
		return policyProvider;
	}
	public void setPolicyProvider(String policyProvider) {
		this.policyProvider = policyProvider;
	}
	public double getIncome() {
		return income;
	}
	public void setIncome(double income) {
		this.income = income;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public Health(Long id, String name, String mobile, int age, String gender, String policyProvider, double income,
			String occupation, String education) {
		super();
		this.id = id;
		this.name = name;
		this.mobile = mobile;
		this.age = age;
		this.gender = gender;
		this.policyProvider = policyProvider;
		this.income = income;
		this.occupation = occupation;
		this.education = education;
	}
	public Health() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
