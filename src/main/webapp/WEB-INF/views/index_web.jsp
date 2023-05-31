<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7547555400963637"
     crossorigin="anonymous"></script>

<meta charset="UTF-8">
<title>나야나</title>
<!-- <link href="/webjars/bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

<style>
</style>
</head>
<body>



<div class="container-fluid">

<ul class="nav nav-tabs mt-2 mb-2">
  <li class="nav-item">
    <a id="btn_conjunctive" class="nav-link active" aria-current="page" href="#">접속어</a>
  </li>
  <li class="nav-item">
    <a id="btn_adjmod" class="nav-link" href="#">형용/수식</a>
  </li>
  <li class="nav-item">
    <a id="btn_gut" class="nav-link" href="#">것</a>
  </li>
  <li class="nav-item">
    <a id="btn_leng_dup" class="nav-link" href="#">길이/빈도</a>
  </li>
</ul>

<div class="menu_trace" data-save=""></div>

<div class="row mb-3">
<div class="form-floating col-6">
  <select class="form-select searchstand col-6" id="match_range" aria-label="Floating label select example">
    <option value="1" selected>단락마다</option>
    <option value="2">위/아래 줄</option>
    <option value="3">전체글</option>
  </select>
  <label for="floatingSelect">범위</label>
</div>
<div class="form-floating col-6">
  <select class="form-select searchLengthInput" id="match_length" aria-label="Floating label select example">
    <option value="2" selected>2</option>
    <option value="3">3</option>
    <option value="4">4+</option>
  </select>
  <label for="floatingSelect">중복 글자의 길이</label>
</div>
<div class="form-floating col-6">
  <select class="form-select duplicateLengthInput" id="match_freqency" aria-label="Floating label select example">
    <option value="2" selected>2+</option>
    <option value="3">3+</option>
    <option value="4">4+</option>
  </select>
  <label for="floatingSelect">중복 횟수</label>
</div>
</div>

<div id="input" class="row">
	<form id="myForm" action="" class="col-6">
	  <textarea id="textInput" class="test_match" rows="4" style="height: 500px; width: 100%;">
그래서그래서 그래 니나니나 고릴라야 나야나 나야나
그래서
그래서뭐
	  </textarea>
	  <button type="button" class="btn_sbm btn btn-success">제출</button>
	</form>
	
	<form id="out" action="" class="col-6">
	  <div id="result" class="border border-dark" style="height: 500px; width: 100%;">	  	
	  </div>

	</form>
</div>

<!-- 	<div id="result"></div> -->

</div>


<script src="/webjars/jquery/jquery.min.js"></script>
<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>

<script src="/js/match.js"></script>
</body>
</html>