import com.restaurantbooking.model.Booking;
import com.restaurantbooking.repository.BookingRepository;
import com.restaurantbooking.model.Booking;
import com.restaurantbooking.repository.BookingRepository;
import java.util.List;

package com.restaurantbooking.service;


public class BookingService {
    private BookingRepository bookingRepository;


    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking createBooking(Booking booking) {
        // Add logic to create a new booking
        return bookingRepository.save(booking);
    }

    public Booking getBookingById(Long id) {
        // Add logic to retrieve a booking by its ID
        return bookingRepository.findById(id).orElse(null);
    }

    public List<Booking> getAllBookings() {
        // Add logic to retrieve all bookings
        return bookingRepository.findAll();
    }

    public Booking updateBooking(Booking booking) {
        // Add logic to update an existing booking
        return bookingRepository.save(booking);
    }

    public void deleteBooking(Long id) {
        // Add logic to delete a booking by its ID
        bookingRepository.deleteById(id);
    }

    // Add other business logic methods here
}