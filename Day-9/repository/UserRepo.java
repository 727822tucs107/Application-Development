package com.example.realestate.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realestate.Model.User;

public interface UserRepo extends JpaRepository<User ,Long> {

    Optional<User> findByEmail(String username);
   
}
