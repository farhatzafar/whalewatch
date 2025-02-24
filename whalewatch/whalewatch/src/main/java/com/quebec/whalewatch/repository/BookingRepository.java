package com.quebec.whalewatch.repository;

import com.quebec.whalewatch.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserFirstNameAndUserLastName(String firstName, String lastName);
}
