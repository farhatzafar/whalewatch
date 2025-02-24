package com.quebec.whalewatch.controller.request;

public class UserRequest {

    String firstName;
    String lastName;
    String email;
    String phoneNumber;
    String passwordHash;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getPasswordHash() {
        return passwordHash;
    }
}
