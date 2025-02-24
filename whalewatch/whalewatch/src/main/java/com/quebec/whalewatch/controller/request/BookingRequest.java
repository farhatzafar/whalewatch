package com.quebec.whalewatch.controller.request;

import java.util.List;

public class BookingRequest {

    private Long userId;
    private Long cruiseDateId;
    private Integer numPassengers;
    private List<TicketRequest> tickets;

    public Long getUserId() {
        return userId;
    }

    public Long getCruiseDateId() {
        return cruiseDateId;
    }

    public Integer getNumPassengers() {
        return numPassengers;
    }

    public List<TicketRequest> getTickets() {
        return tickets;
    }
}
