package com.quebec.whalewatch.service;

import com.quebec.whalewatch.controller.request.BookingRequest;
import com.quebec.whalewatch.controller.request.TicketRequest;
import com.quebec.whalewatch.model.Booking;
import com.quebec.whalewatch.model.CruiseDate;
import com.quebec.whalewatch.model.Ticket;
import com.quebec.whalewatch.model.User;
import com.quebec.whalewatch.repository.BookingRepository;
import com.quebec.whalewatch.repository.CruiseDateRepository;
import com.quebec.whalewatch.repository.TicketRepository;
import com.quebec.whalewatch.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private BookingRepository bookingRepository;

    private CruiseDateRepository cruiseDateRepository;

    private TicketRepository ticketRepository;

    private UserRepository userRepository;

    public BookingService(BookingRepository bookingRepository, CruiseDateRepository cruiseDateRepository,
                          TicketRepository ticketRepository, UserRepository userRepository) {
        this.bookingRepository = bookingRepository;
        this.cruiseDateRepository = cruiseDateRepository;
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
    }

    public List<Booking> findAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> findBookingById(Long bookingId) {
        return bookingRepository.findById(bookingId);
    }

    public List<Booking> getBookingsByUserName(String firstName, String lastName) {
        return bookingRepository.findByUserFirstNameAndUserLastName(firstName, lastName);
    }

    public Booking createBooking(BookingRequest bookingRequestDTO) {
        // 1. Check if the cruise date exists and has available slots
        Optional<CruiseDate> optionalCruiseDate = cruiseDateRepository.findById(bookingRequestDTO.getCruiseDateId());
        if (optionalCruiseDate.isEmpty()) {
            throw new IllegalArgumentException("Cruise date not found");
        }

        CruiseDate cruiseDate = optionalCruiseDate.get();
        if (cruiseDate.getAvailableSlots() < bookingRequestDTO.getNumPassengers()) {
            throw new IllegalArgumentException("Not enough available slots");
        }

        Optional<User> optionalUser = userRepository.findById(bookingRequestDTO.getUserId());
        if (optionalUser.isEmpty()) {
            throw new IllegalArgumentException("User not found");
        }

        User user = optionalUser.get();

        // 2. Create the booking
        Booking booking = new Booking();
        booking.setUser(user);  // Set the actual User object
        booking.setCruiseDate(cruiseDate);  // Set the actual CruiseDate object
        booking.setNumPassengers(bookingRequestDTO.getNumPassengers());
        booking.setBookingStatus("Pending");

        // Save the booking
        booking = bookingRepository.save(booking);

        // 3. Create tickets for each passenger
        List<Ticket> tickets = new ArrayList<>();
        for (TicketRequest ticketRequestDTO : bookingRequestDTO.getTickets()) {
            Ticket ticket = new Ticket();
            ticket.setBooking(booking);
            ticket.setPassengerName(ticketRequestDTO.getPassengerName());
            ticket.setAge(ticketRequestDTO.getAge());
            ticket.setTicketType(ticketRequestDTO.getTicketType());
            tickets.add(ticket);
        }
        ticketRepository.saveAll(tickets);

        // 4. Update available slots on the cruise date
        cruiseDate.setAvailableSlots(cruiseDate.getAvailableSlots() - bookingRequestDTO.getNumPassengers());
        cruiseDate.setBookedSlots(cruiseDate.getBookedSlots() + bookingRequestDTO.getNumPassengers());
        cruiseDateRepository.save(cruiseDate);

        return booking;
    }

    public void deleteBooking(Long bookingId) {
        if (!bookingRepository.existsById(bookingId)) {
            throw new IllegalArgumentException("Booking not found");
        }

        bookingRepository.deleteById(bookingId);
    }

    public void updateBookingCruiseDate(Long bookingId, BookingRequest bookingRequestDTO) {
        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isEmpty()) {
            throw new IllegalArgumentException("Booking not found");
        }

        Booking booking = optionalBooking.get();

        Optional<CruiseDate> optionalCruiseDate = cruiseDateRepository.findById(bookingRequestDTO.getCruiseDateId());
        if (optionalCruiseDate.isEmpty()) {
            throw new IllegalArgumentException("Cruise date not found");
        }

        CruiseDate newCruiseDate = optionalCruiseDate.get();

        if (newCruiseDate.getAvailableSlots() < booking.getNumPassengers()) {
            throw new IllegalArgumentException("Not enough available slots on the new cruise date");
        }

        booking.setCruiseDate(newCruiseDate);

        bookingRepository.save(booking);

        newCruiseDate.setAvailableSlots(newCruiseDate.getAvailableSlots() - booking.getNumPassengers());
        cruiseDateRepository.save(newCruiseDate);
    }

    public void updateBookingStatus(Long bookingId, String newStatus) {
        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isEmpty()) {
            throw new IllegalArgumentException("Booking not found");
        }

        Booking booking = optionalBooking.get();
        if (booking.getBookingStatus().equals("Pending") && newStatus.equals("Confirmed")) {
            booking.setBookingStatus("Confirmed");
        }
        bookingRepository.save(booking);
    }

}
