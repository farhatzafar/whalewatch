package com.quebec.whalewatch.repository;

import com.quebec.whalewatch.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
