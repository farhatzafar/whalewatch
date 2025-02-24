package com.quebec.whalewatch.repository;

import com.quebec.whalewatch.model.CruiseDate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CruiseDateRepository extends JpaRepository<CruiseDate, Long> {
}
