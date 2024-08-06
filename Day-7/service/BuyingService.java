package com.example.realestate.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.realestate.Model.User;
import com.example.realestate.repository.UserRepo;

public class BuyingService {
    @Autowired
    private UserRepo userRepo;

    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }
}
