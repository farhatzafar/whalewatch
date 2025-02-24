package com.quebec.whalewatch.controller;

import com.quebec.whalewatch.controller.request.UserRequest;
import com.quebec.whalewatch.controller.response.UserResponse;
import com.quebec.whalewatch.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        return ResponseEntity.ok(
                service.findAllUsers()
                        .stream()
                        .map(UserResponse::toResponse)
                        .toList()
        );
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserResponse> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok(
                service.findUserByUserId(userId)
                        .map(UserResponse::toResponse)
                        .orElse(null)
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody UserRequest user) {
        service.createUser(user.getFirstName(),
                user.getLastName(), user.getEmail(), user.getPhoneNumber(), user.getPasswordHash());
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long userId) {
        try {
            service.deleteUser(userId);
            return ResponseEntity.ok("User deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(404).body("User not found");
        }
    }


}