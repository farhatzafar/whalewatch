package com.quebec.whalewatch.model;
//Implement 10 RESTful APIs using Spring Boot, following the design specified in Part 1.
// The implementation must include at least two GET methods, two DELETE methods,
// two POST methods, and two PUT methods.

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

//GET allbookings, GET userbyId, DELETE booking, DELETE user, POST new booking, POST new user, PUT booking,
// need another PUT, GET bookings by cruisedate, GET tickets per booking
@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "cruise_date_id", nullable = false)
    private CruiseDate cruiseDate;

    @Column(nullable = false)
    private Integer numPassengers;

    private String bookingStatus;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();



        // Getters and Setters
        public Long getBookingId() {
            return bookingId;
        }

        public void setBookingId(Long bookingId) {
            this.bookingId = bookingId;
        }

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }

        public CruiseDate getCruiseDate() {
            return cruiseDate;
        }

        public void setCruiseDate(CruiseDate cruiseDate) {
            this.cruiseDate = cruiseDate;
        }

        public Integer getNumPassengers() {
            return numPassengers;
        }

        public void setNumPassengers(Integer numPassengers) {
            this.numPassengers = numPassengers;
        }

        public LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
        }

        public LocalDateTime getUpdatedAt() {
            return updatedAt;
        }

        public void setUpdatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
        }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }
}


