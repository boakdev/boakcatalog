package dev.brunocarvalho.boakcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.brunocarvalho.boakcatalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
