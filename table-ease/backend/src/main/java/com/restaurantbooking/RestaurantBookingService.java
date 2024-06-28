package com.restaurantbooking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantBookingService {

    @Autowired
    private BookingRepository bookingRepository;

    // Method to retrieve all bookings
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Method to find a booking by ID
    public Optional<Booking> findBookingById(String id) {
        return bookingRepository.findById(id);
    }

    // Method to add a new booking
    public Booking addBooking(Booking booking) {
        // Implement additional business logic if needed
        return bookingRepository.save(booking);
    }

    // Method to update an existing booking
    public Booking updateBooking(String id, Booking updatedBooking) {
        // Implement validation or additional logic if required
        updatedBooking.setId(id); // Ensure the ID is set in the updated booking
        return bookingRepository.save(updatedBooking);
    }

    // Method to delete a booking
    public void deleteBooking(String id) {
        bookingRepository.deleteById(id);
    }
}
