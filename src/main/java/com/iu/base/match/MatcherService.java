package com.iu.base.match;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatcherService {

	@Autowired
	private MatcherDAO matcherDAO;
	
	public List<ConjunctiveVO> getConjunctive() throws Exception{
		return matcherDAO.getConjunctive();
	};
	public List<AdjModVO> getAdjMod() throws Exception{
		return matcherDAO.getAdjMod();
	};
	public List<NounVO> getNoun() throws Exception{
		return matcherDAO.getNoun();
	};
	
}
