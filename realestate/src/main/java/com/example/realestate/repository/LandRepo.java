package com.example.realestate.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realestate.Model.User;

public interface LandRepo extends JpaRepository<User ,Long> {
    
}
