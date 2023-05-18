package com.iu.base.match;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatcherController {
	
	@Autowired
	private MatcherService matcherService;
	
	
	@GetMapping("/allData")
	public List<WholeDataVO> getWholeData() throws Exception{
		return matcherService.getWholeData();
	};
	
	@GetMapping("/conjunctive")
	public List<ConjunctiveVO> getConjunctive() throws Exception{
		return matcherService.getConjunctive();
	};
	@GetMapping("/adjmod")
	public List<AdjModVO> getAdjMod() throws Exception{
		return matcherService.getAdjMod();
	};
	@GetMapping("/noun")
	public List<NounVO> getNoun() throws Exception{
		return matcherService.getNoun();
	};

}
