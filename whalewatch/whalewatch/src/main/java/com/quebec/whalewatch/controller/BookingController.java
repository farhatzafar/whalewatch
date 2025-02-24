package com.quebec.whalewatch.controller;

import com.quebec.whalewatch.controller.request.BookingRequest;
import com.quebec.whalewatch.model.Booking;
import com.quebec.whalewatch.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/bookings")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.findAllBookings();
    }

    // GET http://localhost:8080/api/bookings/username?firstName=Alice&lastName=Johnson
    @GetMapping("/username")
    public ResponseEntity<List<Booking>> getBookingsByUserName(@RequestParam String firstName, @RequestParam String lastName) {
        List<Booking> bookings = service.getBookingsByUserName(firstName, lastName);
        if (bookings.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(bookings);
    }

    // POST http://localhost:8080/api/bookings
    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody @Validated BookingRequest bookingRequestDTO) {
        try {
            Booking booking = service.createBooking(bookingRequestDTO);
            return new ResponseEntity<>(booking, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{bookingId}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long bookingId) {
        try {
            service.deleteBooking(bookingId);
            return ResponseEntity.ok("Booking deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Booking not found");
        }
    }

    @PutMapping("/{bookingId}")
    public ResponseEntity<String> updateBookingCruiseDate(
            @PathVariable Long bookingId,
            @RequestBody BookingRequest bookingRequestDTO) {

        try {
            service.updateBookingCruiseDate(bookingId, bookingRequestDTO);
            return ResponseEntity.ok("Booking updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @PutMapping("/{bookingId}/status")
    public ResponseEntity<String> updateBookingStatus(
            @PathVariable Long bookingId,
            @RequestParam String newStatus) {

        try {
            service.updateBookingStatus(bookingId, newStatus);
            return ResponseEntity.ok("Booking status updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping("/{bookingId}")
    public Optional<Booking> getBookingByBookingId (@PathVariable Long bookingId) {
        return service.findBookingById(bookingId);
    }
}
