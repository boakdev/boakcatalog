package dev.brunocarvalho.boakcatalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import dev.brunocarvalho.boakcatalog.services.S3Service;

@SpringBootApplication
public class BoakcatalogApplication implements CommandLineRunner{
	
	@Autowired
	private S3Service s3Service;

	public static void main(String[] args) {
		SpringApplication.run(BoakcatalogApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		s3Service.uploadFile("D:\\OneDrive\\Imagens\\MEMEU\\goku.jpg");
		
	}

	
}
