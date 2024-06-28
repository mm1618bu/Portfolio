import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

package com.restaurantbooking.controller;


@RestController
@RequestMapping("/booking")
public class BookingController {

    // Add your controller methods here
    // For example:
    
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable("id") Long id) {
        // Logic to retrieve booking by id
    }
    
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        // Logic to create a new booking
    }
    
    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable("id") Long id, @RequestBody Booking booking) {
        // Logic to update an existing booking
    }
    
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable("id") Long id) {
        // Logic to delete a booking by id
    }

}