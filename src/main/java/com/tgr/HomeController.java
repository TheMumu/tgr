package com.tgr;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;

@Controller
public class HomeController {

	@RequestMapping("/")
	public ModelAndView welcome() {
		ModelAndView model = new ModelAndView("home");
		model.addObject("time", new Date());
		model.addObject("message", "THIS is the message");
		return model;
	}
}
