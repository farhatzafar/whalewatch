package com.quebec.whalewatch.service;

import com.quebec.whalewatch.model.User;
import com.quebec.whalewatch.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repository;

    private final static String USER_NOT_FOUND="user is not found!";

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> findAllUsers() {return repository.findAll(); }

    public Optional<User> findUserByUserId(Long userId) {
        return repository.findById(userId);
    }

    public void createUser(String firstName, String lastName, String email, String phoneNumber, String passwordHash) {
        if (passwordHash == null || passwordHash.isBlank() || email == null || email.isBlank()
                || firstName == null || firstName.isBlank() || lastName == null || lastName.isBlank()
                || phoneNumber == null || phoneNumber.isBlank()) {
            throw new RuntimeException();
        } else {
            repository.save(new User(firstName, lastName, email, phoneNumber, passwordHash));
        }
    }

    public void deleteUser(Long userId) {
        User user = repository
                .findById(userId)
                .orElseThrow(()->new IllegalArgumentException(USER_NOT_FOUND));
        repository.delete(user);
    }
}
