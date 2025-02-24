package com.quebec.whalewatch.repository;

import com.quebec.whalewatch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
