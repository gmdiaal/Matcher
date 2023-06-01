package com.iu.base.config;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.AcceptHeaderLocaleResolver;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.i18n.FixedLocaleResolver;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

@Configuration
public class MessageConfig implements WebMvcConfigurer {

//	@Bean
//	public LocaleResolver getLocale() {
//		
////		AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
////		localeResolver.setDefaultLocale(Locale.US);
//
//		//1. session
//		SessionLocaleResolver sessionLocaleResolver = new SessionLocaleResolver();
//		sessionLocaleResolver.setDefaultLocale(Locale.KOREA);
////		
////		//2. cookie
////		CookieLocaleResolver cookieLocaleResolver = new CookieLocaleResolver();
////		cookieLocaleResolver.setDefaultLocale(Locale.KOREA);
////		cookieLocaleResolver.setCookieName("lang");
//		
//		return sessionLocaleResolver;
//	}
	

    @Bean
    public LocaleResolver localeResolver() {
    	SessionLocaleResolver resolver = new SessionLocaleResolver();
        resolver.setDefaultLocale(Locale.KOREAN); // 원하는 언어로 설정
        return resolver;
    }
    
	//쿠키만 되네... web브라우저랑 호환이..
//    @Bean
//    public LocaleResolver localeResolver() {
//        CookieLocaleResolver resolver = new CookieLocaleResolver();
//        resolver.setCookieName("lang"); // 쿠키 이름 설정
//        resolver.setCookieMaxAge(3600); // 쿠키 유효 시간 설정 (초 단위)
//        return resolver;
//    }
	
    
    
	@Bean
	public LocaleChangeInterceptor getLocaleChangeInterceptor() {
		LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
		localeChangeInterceptor.setParamName("lang");
		return localeChangeInterceptor;
	}
	
}
