package com.example.sample.demo.controller;

import com.example.sample.demo.NewCases;
import com.example.sample.demo.repository.NewCasesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class NewCasesController {

    @Autowired
    private NewCasesRepo newCasesRepo;

    @PostMapping("/cases")
    public NewCases createNewCases(@Valid @RequestBody NewCases newCases) {
        return newCasesRepo.save(newCases);
    }

    @GetMapping("/cases")
    public String getAllCategory() {
        return "Hello";
    }
}



