import com.restaurantbooking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

package com.restaurantbooking.Repository;


@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Add custom query methods here if needed
    
    List<Booking> findByUserId(Long userId);
    
    List<Booking> findByRestaurantId(Long restaurantId);
    
    List<Booking> findByDateBetween(Date startDate, Date endDate);
    
    List<Booking> findByUserIdAndRestaurantId(Long userId, Long restaurantId);
    
    List<Booking> findByUserIdAndDateBetween(Long userId, Date startDate, Date endDate);
    
    List<Booking> findByRestaurantIdAndDateBetween(Long restaurantId, Date startDate, Date endDate);
    
    List<Booking> findByUserIdAndRestaurantIdAndDateBetween(Long userId, Long restaurantId, Date startDate, Date endDate);
}