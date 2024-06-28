import com.restaurantbooking.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

package com.restaurantbooking.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom methods here
    List<User> findByFirstName(String firstName);
    List<User> findByLastName(String lastName);
    User findByEmail(String email);
    User findByUsername(String username);
}   