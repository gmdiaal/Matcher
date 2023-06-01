package com.iu.base.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;


@Configuration 
public class InterceptorConfig implements WebMvcConfigurer{

	@Autowired
	private LocaleChangeInterceptor localeChangeInterceptor;
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		
		
		////등록된 순서대로 움직인다. (아니면 똑같은 코드 또 써야댐)
		
		registry.addInterceptor(localeChangeInterceptor)
			.addPathPatterns("/**")
			;
		
//		//메서드체이닝 메서드를 연이어 캐스트
//		registry.addInterceptor(interceptor)
//			.addPathPatterns("/member/mypage")
////			.addPathPatterns("/member/*")
////			.excludePathPatterns("")
//			
////			.addPathPatterns("/qna/add")
//			.addPathPatterns("/qna/*")	
//			.excludePathPatterns("/qna/list")	
//			
//			.addPathPatterns("/notice/*")
//			.excludePathPatterns("/notice/list")
//			.excludePathPatterns("/notice/detail")
//			;
//		
//		//ADMIN CHECK
//		registry.addInterceptor(adminCheckInterceptor)
//		.addPathPatterns("/member/admin")
//		.addPathPatterns("/notice/*")
//		.excludePathPatterns("/notice/list")
//		.excludePathPatterns("/notice/detail")
//		;
		
	}


	
}
