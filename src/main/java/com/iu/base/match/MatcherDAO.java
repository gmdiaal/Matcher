package com.iu.base.match;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MatcherDAO {

	public List<WholeDataVO> getWholeData() throws Exception;
	public List<ConjunctiveVO> getConjunctive() throws Exception;
	public List<AdjModVO> getAdjMod() throws Exception;
	public List<NounVO> getNoun() throws Exception;
	
	
}
