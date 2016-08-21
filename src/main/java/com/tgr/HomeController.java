package com.tgr;

import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

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
