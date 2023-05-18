<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
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
    <a class="nav-link active" aria-current="page" href="#">접속어</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">형용/수식</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">명사</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>


<div id="input">
	<form id="myForm" ction="">
	  <textarea id="textInput" class="test_match" rows="4" style="height: 500px; width: 500px;"></textarea>
	  <button type="button" class="btn_sbm btn btn-success">제출</button>
	</form>
</div>
	
	<div id="result"></div>

</div>


<script src="/webjars/jquery/jquery.min.js"></script>
<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>

<script src="/js/match.js"></script>
</body>
</html>