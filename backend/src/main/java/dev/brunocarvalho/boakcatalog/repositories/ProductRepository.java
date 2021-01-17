package dev.brunocarvalho.boakcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.brunocarvalho.boakcatalog.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
