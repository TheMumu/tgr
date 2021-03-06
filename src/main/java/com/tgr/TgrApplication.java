package com.tgr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

// @import to import addition configuration class
@ComponentScan
@Configuration
@EnableAutoConfiguration
public class TgrApplication {

	public static void main(String[] args) {
		SpringApplication.run(TgrApplication.class, args);
		
	}
}
