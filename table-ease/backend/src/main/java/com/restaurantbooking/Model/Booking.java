package com.restaurantbooking.Model;

public class Booking {
    private int id;
    private String customerName;
    private String date;
    private int numberOfGuests;

    // Constructor
    public Booking(int id, String customerName, String date, int numberOfGuests) {
        this.id = id;
        this.customerName = customerName;
        this.date = date;
        this.numberOfGuests = numberOfGuests;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }
}