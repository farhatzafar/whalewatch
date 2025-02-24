package com.quebec.whalewatch.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "cruise_dates")
public class CruiseDate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cruiseDateId;

    private LocalDate cruiseDate;

    private Integer availableSlots;

    private Integer bookedSlots = 0;

    private Boolean isActive = true;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    public CruiseDate() {
    }

    // Getters and Setters
    public Long getCruiseDateId() {
        return cruiseDateId;
    }

    public void setCruiseDateId(Long cruiseDateId) {
        this.cruiseDateId = cruiseDateId;
    }

    public LocalDate getCruiseDate() {
        return cruiseDate;
    }

    public void setCruiseDate(LocalDate cruiseDate) {
        this.cruiseDate = cruiseDate;
    }

    public Integer getAvailableSlots() {
        return availableSlots;
    }

    public void setAvailableSlots(Integer availableSlots) {
        this.availableSlots = availableSlots;
    }

    public Integer getBookedSlots() {
        return bookedSlots;
    }

    public void setBookedSlots(Integer bookedSlots) {
        this.bookedSlots = bookedSlots;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
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
}
