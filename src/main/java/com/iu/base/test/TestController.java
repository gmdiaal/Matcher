package com.iu.base.test;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//@Controller
public class TestController {

	@GetMapping("/")
	public String home() {

//		String paragraph = "사과는 사과다. 하지만 사과는 과자다";
//
//		// 한글 단어를 위한 정규표현식 패턴 생성
//		Pattern pattern = Pattern.compile("사과는");
//
//		// 패턴 매칭을 위한 Matcher 생성
//		Matcher matcher = pattern.matcher(paragraph);
//
//		// 패턴과 일치하는 단어 찾기
//		while (matcher.find()) {
//		    String word = matcher.group();
//		    if (word.equals("사과")) {
//		        System.out.println("단어 찾음: " + word);
//		        break;
//		    }
//		}
		
		
		return "index";
	}
}
