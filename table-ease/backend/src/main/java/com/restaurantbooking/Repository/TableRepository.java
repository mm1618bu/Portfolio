import com.restaurantbooking.Model.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

package com.restaurantbooking.Repository;


@Repository
public interface TableRepository extends JpaRepository<Table, Long> {
    List<Table> findByCapacityGreaterThan(int capacity);
    
    List<Table> findByRestaurantId(Long restaurantId);
    
    // Add more custom queries here if needed
}