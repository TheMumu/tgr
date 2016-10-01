package com.tgr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

// @import to import addition configuration class
@ComponentScan
@Configuration
@EnableAutoConfiguration
public class AppConfig extends WebMvcConfigurerAdapter{

	public static void main(String[] args) {
		SpringApplication.run(AppConfig.class, args);
		
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("*.css").addResourceLocations("/assets/css/");
		registry.addResourceHandler("*.js").addResourceLocations("/assets/js/");
	}

}
