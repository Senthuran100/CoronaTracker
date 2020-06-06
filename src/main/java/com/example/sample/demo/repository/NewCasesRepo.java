package com.example.sample.demo.repository;

import com.example.sample.demo.NewCases;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewCasesRepo extends JpaRepository<NewCases, Long> {

}
