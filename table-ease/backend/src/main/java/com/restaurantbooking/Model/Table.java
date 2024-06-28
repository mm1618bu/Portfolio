package com.restaurantbooking.Model;

public class Table {
    private int tableNumber;
    private int capacity;
    private boolean isOccupied;

    public Table(int tableNumber, int capacity) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.isOccupied = false;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public int getCapacity() {
        return capacity;
    }

    public boolean isOccupied() {
        return isOccupied;
    }

    public void setOccupied(boolean occupied) {
        isOccupied = occupied;
    }

    // Add any additional methods or properties here

    @Override
    public String toString() {
        return "Table{" +
                "tableNumber=" + tableNumber +
                ", capacity=" + capacity +
                ", isOccupied=" + isOccupied +
                '}';
    }
}