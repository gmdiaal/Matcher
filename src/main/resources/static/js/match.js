/**
 * 
 */

///메인메뉴 버튼 강조 이동
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		// Remove 'active' class from all links
		navLinks.forEach(link => link.classList.remove('active'));

		// Add 'active' class to the clicked link
		link.classList.add('active');
	});
});

// 범위/빈도/길이 하위메뉴 숨기기(form-floating 클래스 요소들을 표시하는 함수)
function showFormFloatingElements() {
	$('.form-floating').show();
}
function hideFormFloatingElements() {
	$('.form-floating').hide();
}




//::::::::::::::::::::::::::::::::: 띄어쓰기. 글자 길이와 횟수를 지정 v5 :::::::::::::::::::::::::::::::::::::


//::::::::::::::::::::::::::::::::: 4. 글자 길이와 횟수를 지정 v4 :::::::::::::::::::::::::::::::::::::



function applyDuplicateColors() {
	let match_range = parseInt($('#match_range').val());
	let match_length = parseInt($('#match_length').val());
	let match_frequency = parseInt($('#match_freqency').val());
	let text = $("#textInput").val();

	var highlightedTexts = [];

	if (match_range === 1) {
		var paragraphs = text.split('\n\n');
		for (var j = 0; j < paragraphs.length; j++) {
			var paragraph = paragraphs[j];
			var highlightedParagraph = applyColorsToText(paragraph, match_length, match_frequency);
			highlightedTexts.push(highlightedParagraph);
		}

		// <br> 태그를 사용하여 합친 텍스트를 생성
		var finalHighlightedText = highlightedTexts.join('<br><br>');
		$("#result").html(finalHighlightedText);
	} else if (match_range === 3) {
		var highlightedText = applyColorsToText(text, match_length, match_frequency);
		$("#result").html(highlightedText);
	}

}

// 랜덤한 배경색을 생성하고 색상을 적용하는 함수// 랜덤한 배경색을 생성하고 색상을 적용하는 함수// 랜덤한 배경색을 생성하고 색상을 적용하는 함수// 랜덤한 배경색을 생성하고 색상을 적용하는 함수
function applyColorsToText(text, length, frequency) {
	var highlightedText = text;

	var regex = new RegExp(">[^<]+(?=<\/[^>]+>)|(?<!\\p{L})\\p{L}{" + length + ",}(?!\\p{L})", "gu");
	if (length == 4) {
		regex = new RegExp(">[^<]+(?=<\/[^>]+>)|(?<!\\p{L})\\p{L}{" + length + ",}", "gu");
	}

	var matches = text.match(regex);
//	console.log("matches: ", matches);

	if (matches) {
		var colors = {};

		for (var i = 0; i < matches.length; i++) {
			var match = matches[i];

			var count = text.split(match).length - 1;

			if (count >= frequency) {
				if (!colors.hasOwnProperty(match)) {
					colors[match] = getRandomColor();
				}

				var color = colors[match];
				highlightedText = highlightedText.replace(
					new RegExp("(?<!<[^>]*[^<])" + match + "(?<!<[^>]*[^<])", "g"),
					'<span style="background-color: ' + color + '">' + match + '</span>'
				);
			}
		}
	}

	return highlightedText;
}

//::::::::::::::::::::::::::::::::: 모든 Data를 한번에v3 -key값검증 삭제. @정상작동 :::::::::::::::::::::::::::::::::::::


let wordsJSON = {}; // 초기에 빈 객체로 선언

$(document).ready(function() {

	//첫로딩시 길이/범위 숨기기
	hideFormFloatingElements();
	//처음 페이지 로딩 시 검색타입
	let type = "conjunctive";

//서버에서 받아올 시
/*	$.ajax({
		url: '/allData',
		method: 'GET',
		dataType: 'json',
		success: function(response) {
			wordsJSON = response; // 받은 JSON 데이터를 변수에 저장
			console.log(wordsJSON);

		},
		error: function() {
			console.log("ready오류")
			// 오류 처리
			wordsJSON = [{ "name": "등", "type": "gut" }, { "name": "accordingly", "type": "conjunctive" }, { "name": "additionally", "type": "conjunctive" }, { "name": "after", "type": "conjunctive" }, { "name": "also", "type": "conjunctive" }, { "name": "although", "type": "conjunctive" }, { "name": "and", "type": "conjunctive" }, { "name": "anyway", "type": "conjunctive" }, { "name": "as", "type": "conjunctive" }, { "name": "as far as", "type": "conjunctive" }, { "name": "as if", "type": "conjunctive" }, { "name": "as long as", "type": "conjunctive" }, { "name": "as much as", "type": "conjunctive" }, { "name": "as soon as", "type": "conjunctive" }, { "name": "as though", "type": "conjunctive" }, { "name": "because", "type": "conjunctive" }, { "name": "before", "type": "conjunctive" }, { "name": "besides", "type": "conjunctive" }, { "name": "both", "type": "conjunctive" }, { "name": "but", "type": "conjunctive" }, { "name": "but also", "type": "conjunctive" }, { "name": "by the time", "type": "conjunctive" }, { "name": "by the way", "type": "conjunctive" }, { "name": "certainly", "type": "conjunctive" }, { "name": "comparatively", "type": "conjunctive" }, { "name": "consequently", "type": "conjunctive" }, { "name": "conversely", "type": "conjunctive" }, { "name": "either", "type": "conjunctive" }, { "name": "elsewhere", "type": "conjunctive" }, { "name": "equally", "type": "conjunctive" }, { "name": "even", "type": "conjunctive" }, { "name": "even if", "type": "conjunctive" }, { "name": "even though", "type": "conjunctive" }, { "name": "finally", "type": "conjunctive" }, { "name": "for", "type": "conjunctive" }, { "name": "further", "type": "conjunctive" }, { "name": "furthermore", "type": "conjunctive" }, { "name": "hence", "type": "conjunctive" }, { "name": "henceforth", "type": "conjunctive" }, { "name": "how", "type": "conjunctive" }, { "name": "however", "type": "conjunctive" }, { "name": "if", "type": "conjunctive" }, { "name": "if only", "type": "conjunctive" }, { "name": "if when", "type": "conjunctive" }, { "name": "in addition", "type": "conjunctive" }, { "name": "in as much as", "type": "conjunctive" }, { "name": "in case", "type": "conjunctive" }, { "name": "in comparison", "type": "conjunctive" }, { "name": "in contrast", "type": "conjunctive" }, { "name": "in order that", "type": "conjunctive" }, { "name": "in order to", "type": "conjunctive" }, { "name": "inasmuch", "type": "conjunctive" }, { "name": "incidentally", "type": "conjunctive" }, { "name": "indeed", "type": "conjunctive" }, { "name": "instead", "type": "conjunctive" }, { "name": "just", "type": "conjunctive" }, { "name": "just as", "type": "conjunctive" }, { "name": "lest", "type": "conjunctive" }, { "name": "like", "type": "conjunctive" }, { "name": "likewise", "type": "conjunctive" }, { "name": "meanwhile", "type": "conjunctive" }, { "name": "moreover", "type": "conjunctive" }, { "name": "namely", "type": "conjunctive" }, { "name": "neither", "type": "conjunctive" }, { "name": "nevertheless", "type": "conjunctive" }, { "name": "next", "type": "conjunctive" }, { "name": "no sooner", "type": "conjunctive" }, { "name": "nonetheless", "type": "conjunctive" }, { "name": "nor", "type": "conjunctive" }, { "name": "not only", "type": "conjunctive" }, { "name": "now", "type": "conjunctive" }, { "name": "now since", "type": "conjunctive" }, { "name": "now that", "type": "conjunctive" }, { "name": "now when", "type": "conjunctive" }, { "name": "or", "type": "conjunctive" }, { "name": "or not", "type": "conjunctive" }, { "name": "otherwise", "type": "conjunctive" }, { "name": "provide that", "type": "conjunctive" }, { "name": "provided", "type": "conjunctive" }, { "name": "rather", "type": "conjunctive" }, { "name": "regardless", "type": "conjunctive" }, { "name": "similarly", "type": "conjunctive" }, { "name": "since", "type": "conjunctive" }, { "name": "so", "type": "conjunctive" }, { "name": "so that", "type": "conjunctive" }, { "name": "sometimes", "type": "conjunctive" }, { "name": "still", "type": "conjunctive" }, { "name": "subsequently", "type": "conjunctive" }, { "name": "such", "type": "conjunctive" }, { "name": "supposing", "type": "conjunctive" }, { "name": "than", "type": "conjunctive" }, { "name": "that", "type": "conjunctive" }, { "name": "then", "type": "conjunctive" }, { "name": "thereafter", "type": "conjunctive" }, { "name": "therefore", "type": "conjunctive" }, { "name": "though", "type": "conjunctive" }, { "name": "thus", "type": "conjunctive" }, { "name": "till", "type": "conjunctive" }, { "name": "undoubtedly", "type": "conjunctive" }, { "name": "unless", "type": "conjunctive" }, { "name": "unlike", "type": "conjunctive" }, { "name": "until", "type": "conjunctive" }, { "name": "what", "type": "conjunctive" }, { "name": "when", "type": "conjunctive" }, { "name": "whenever", "type": "conjunctive" }, { "name": "where", "type": "conjunctive" }, { "name": "where if", "type": "conjunctive" }, { "name": "whereas", "type": "conjunctive" }, { "name": "wherever", "type": "conjunctive" }, { "name": "whether", "type": "conjunctive" }, { "name": "while", "type": "conjunctive" }, { "name": "whoever", "type": "conjunctive" }, { "name": "whose", "type": "conjunctive" }, { "name": "why", "type": "conjunctive" }, { "name": "yet", "type": "conjunctive" }, { "name": "가운데", "type": "conjunctive" }, { "name": "것", "type": "gut" }, { "name": "결과", "type": "conjunctive" }, { "name": "결국", "type": "conjunctive" }, { "name": "경우", "type": "conjunctive" }, { "name": "고로", "type": "conjunctive" }, { "name": "곧", "type": "conjunctive" }, { "name": "그동안", "type": "conjunctive" }, { "name": "그때", "type": "conjunctive" }, { "name": "그래서", "type": "conjunctive" }, { "name": "그러니", "type": "conjunctive" }, { "name": "그러니까", "type": "conjunctive" }, { "name": "그러면", "type": "conjunctive" }, { "name": "그러므로", "type": "conjunctive" }, { "name": "그런고로", "type": "conjunctive" }, { "name": "그런즉", "type": "conjunctive" }, { "name": "그럼에도", "type": "conjunctive" }, { "name": "그렇다면", "type": "conjunctive" }, { "name": "그리고", "type": "conjunctive" }, { "name": "그리하여", "type": "conjunctive" }, { "name": "나머지", "type": "conjunctive" }, { "name": "다만", "type": "conjunctive" }, { "name": "단지", "type": "conjunctive" }, { "name": "대부분", "type": "conjunctive" }, { "name": "던", "type": "gut" }, { "name": "동안", "type": "conjunctive" }, { "name": "든", "type": "gut" }, { "name": "따라서", "type": "conjunctive" }, { "name": "또는", "type": "conjunctive" }, { "name": "또한", "type": "conjunctive" }, { "name": "및", "type": "conjunctive" }, { "name": "불구하고", "type": "conjunctive" }, { "name": "뿐", "type": "gut" }, { "name": "수", "type": "gut" }, { "name": "아니면", "type": "conjunctive" }, { "name": "연고로", "type": "conjunctive" }, { "name": "오랫동안", "type": "conjunctive" }, { "name": "오직", "type": "conjunctive" }, { "name": "올해", "type": "conjunctive" }, { "name": "요즘", "type": "conjunctive" }, { "name": "요컨대", "type": "conjunctive" }, { "name": "원래", "type": "conjunctive" }, { "name": "이때", "type": "conjunctive" }, { "name": "이상", "type": "conjunctive" }, { "name": "이후", "type": "conjunctive" }, { "name": "정도", "type": "conjunctive" }, { "name": "정작", "type": "conjunctive" }, { "name": "제일", "type": "conjunctive" }, { "name": "즉", "type": "conjunctive" }, { "name": "즉시", "type": "conjunctive" }, { "name": "지난해", "type": "conjunctive" }, { "name": "차례", "type": "conjunctive" }, { "name": "처음", "type": "conjunctive" }, { "name": "최근", "type": "conjunctive" }, { "name": "최대한", "type": "conjunctive" }, { "name": "하지만", "type": "conjunctive" }, { "name": "한때", "type": "conjunctive" }, { "name": "한편", "type": "conjunctive" }, { "name": "혹은", "type": "conjunctive" }]
			console.log(wordsJSON);
		}
	});*/
	wordsJSON = [{ "name": "등", "type": "gut" }, { "name": "accordingly", "type": "conjunctive" }, { "name": "additionally", "type": "conjunctive" }, { "name": "after", "type": "conjunctive" }, { "name": "also", "type": "conjunctive" }, { "name": "although", "type": "conjunctive" }, { "name": "and", "type": "conjunctive" }, { "name": "anyway", "type": "conjunctive" }, { "name": "as", "type": "conjunctive" }, { "name": "as far as", "type": "conjunctive" }, { "name": "as if", "type": "conjunctive" }, { "name": "as long as", "type": "conjunctive" }, { "name": "as much as", "type": "conjunctive" }, { "name": "as soon as", "type": "conjunctive" }, { "name": "as though", "type": "conjunctive" }, { "name": "because", "type": "conjunctive" }, { "name": "before", "type": "conjunctive" }, { "name": "besides", "type": "conjunctive" }, { "name": "both", "type": "conjunctive" }, { "name": "but", "type": "conjunctive" }, { "name": "but also", "type": "conjunctive" }, { "name": "by the time", "type": "conjunctive" }, { "name": "by the way", "type": "conjunctive" }, { "name": "certainly", "type": "conjunctive" }, { "name": "comparatively", "type": "conjunctive" }, { "name": "consequently", "type": "conjunctive" }, { "name": "conversely", "type": "conjunctive" }, { "name": "either", "type": "conjunctive" }, { "name": "elsewhere", "type": "conjunctive" }, { "name": "equally", "type": "conjunctive" }, { "name": "even", "type": "conjunctive" }, { "name": "even if", "type": "conjunctive" }, { "name": "even though", "type": "conjunctive" }, { "name": "finally", "type": "conjunctive" }, { "name": "for", "type": "conjunctive" }, { "name": "further", "type": "conjunctive" }, { "name": "furthermore", "type": "conjunctive" }, { "name": "hence", "type": "conjunctive" }, { "name": "henceforth", "type": "conjunctive" }, { "name": "how", "type": "conjunctive" }, { "name": "however", "type": "conjunctive" }, { "name": "if", "type": "conjunctive" }, { "name": "if only", "type": "conjunctive" }, { "name": "if when", "type": "conjunctive" }, { "name": "in addition", "type": "conjunctive" }, { "name": "in as much as", "type": "conjunctive" }, { "name": "in case", "type": "conjunctive" }, { "name": "in comparison", "type": "conjunctive" }, { "name": "in contrast", "type": "conjunctive" }, { "name": "in order that", "type": "conjunctive" }, { "name": "in order to", "type": "conjunctive" }, { "name": "inasmuch", "type": "conjunctive" }, { "name": "incidentally", "type": "conjunctive" }, { "name": "indeed", "type": "conjunctive" }, { "name": "instead", "type": "conjunctive" }, { "name": "just", "type": "conjunctive" }, { "name": "just as", "type": "conjunctive" }, { "name": "lest", "type": "conjunctive" }, { "name": "like", "type": "conjunctive" }, { "name": "likewise", "type": "conjunctive" }, { "name": "meanwhile", "type": "conjunctive" }, { "name": "moreover", "type": "conjunctive" }, { "name": "namely", "type": "conjunctive" }, { "name": "neither", "type": "conjunctive" }, { "name": "nevertheless", "type": "conjunctive" }, { "name": "next", "type": "conjunctive" }, { "name": "no sooner", "type": "conjunctive" }, { "name": "nonetheless", "type": "conjunctive" }, { "name": "nor", "type": "conjunctive" }, { "name": "not only", "type": "conjunctive" }, { "name": "now", "type": "conjunctive" }, { "name": "now since", "type": "conjunctive" }, { "name": "now that", "type": "conjunctive" }, { "name": "now when", "type": "conjunctive" }, { "name": "or", "type": "conjunctive" }, { "name": "or not", "type": "conjunctive" }, { "name": "otherwise", "type": "conjunctive" }, { "name": "provide that", "type": "conjunctive" }, { "name": "provided", "type": "conjunctive" }, { "name": "rather", "type": "conjunctive" }, { "name": "regardless", "type": "conjunctive" }, { "name": "similarly", "type": "conjunctive" }, { "name": "since", "type": "conjunctive" }, { "name": "so", "type": "conjunctive" }, { "name": "so that", "type": "conjunctive" }, { "name": "sometimes", "type": "conjunctive" }, { "name": "still", "type": "conjunctive" }, { "name": "subsequently", "type": "conjunctive" }, { "name": "such", "type": "conjunctive" }, { "name": "supposing", "type": "conjunctive" }, { "name": "than", "type": "conjunctive" }, { "name": "that", "type": "conjunctive" }, { "name": "then", "type": "conjunctive" }, { "name": "thereafter", "type": "conjunctive" }, { "name": "therefore", "type": "conjunctive" }, { "name": "though", "type": "conjunctive" }, { "name": "thus", "type": "conjunctive" }, { "name": "till", "type": "conjunctive" }, { "name": "undoubtedly", "type": "conjunctive" }, { "name": "unless", "type": "conjunctive" }, { "name": "unlike", "type": "conjunctive" }, { "name": "until", "type": "conjunctive" }, { "name": "what", "type": "conjunctive" }, { "name": "when", "type": "conjunctive" }, { "name": "whenever", "type": "conjunctive" }, { "name": "where", "type": "conjunctive" }, { "name": "where if", "type": "conjunctive" }, { "name": "whereas", "type": "conjunctive" }, { "name": "wherever", "type": "conjunctive" }, { "name": "whether", "type": "conjunctive" }, { "name": "while", "type": "conjunctive" }, { "name": "whoever", "type": "conjunctive" }, { "name": "whose", "type": "conjunctive" }, { "name": "why", "type": "conjunctive" }, { "name": "yet", "type": "conjunctive" }, { "name": "가운데", "type": "conjunctive" }, { "name": "것", "type": "gut" }, { "name": "결과", "type": "conjunctive" }, { "name": "결국", "type": "conjunctive" }, { "name": "경우", "type": "conjunctive" }, { "name": "고로", "type": "conjunctive" }, { "name": "곧", "type": "conjunctive" }, { "name": "그동안", "type": "conjunctive" }, { "name": "그때", "type": "conjunctive" }, { "name": "그래서", "type": "conjunctive" }, { "name": "그러니", "type": "conjunctive" }, { "name": "그러니까", "type": "conjunctive" }, { "name": "그러면", "type": "conjunctive" }, { "name": "그러므로", "type": "conjunctive" }, { "name": "그런고로", "type": "conjunctive" }, { "name": "그런즉", "type": "conjunctive" }, { "name": "그럼에도", "type": "conjunctive" }, { "name": "그렇다면", "type": "conjunctive" }, { "name": "그리고", "type": "conjunctive" }, { "name": "그리하여", "type": "conjunctive" }, { "name": "나머지", "type": "conjunctive" }, { "name": "다만", "type": "conjunctive" }, { "name": "단지", "type": "conjunctive" }, { "name": "대부분", "type": "conjunctive" }, { "name": "던", "type": "gut" }, { "name": "동안", "type": "conjunctive" }, { "name": "든", "type": "gut" }, { "name": "따라서", "type": "conjunctive" }, { "name": "또는", "type": "conjunctive" }, { "name": "또한", "type": "conjunctive" }, { "name": "및", "type": "conjunctive" }, { "name": "불구하고", "type": "conjunctive" }, { "name": "뿐", "type": "gut" }, { "name": "수", "type": "gut" }, { "name": "아니면", "type": "conjunctive" }, { "name": "연고로", "type": "conjunctive" }, { "name": "오랫동안", "type": "conjunctive" }, { "name": "오직", "type": "conjunctive" }, { "name": "올해", "type": "conjunctive" }, { "name": "요즘", "type": "conjunctive" }, { "name": "요컨대", "type": "conjunctive" }, { "name": "원래", "type": "conjunctive" }, { "name": "이때", "type": "conjunctive" }, { "name": "이상", "type": "conjunctive" }, { "name": "이후", "type": "conjunctive" }, { "name": "정도", "type": "conjunctive" }, { "name": "정작", "type": "conjunctive" }, { "name": "제일", "type": "conjunctive" }, { "name": "즉", "type": "conjunctive" }, { "name": "즉시", "type": "conjunctive" }, { "name": "지난해", "type": "conjunctive" }, { "name": "차례", "type": "conjunctive" }, { "name": "처음", "type": "conjunctive" }, { "name": "최근", "type": "conjunctive" }, { "name": "최대한", "type": "conjunctive" }, { "name": "하지만", "type": "conjunctive" }, { "name": "한때", "type": "conjunctive" }, { "name": "한편", "type": "conjunctive" }, { "name": "혹은", "type": "conjunctive" }]



	// 데이터를 받은 후 버튼 클릭 핸들러 등록
	$('#btn_conjunctive').click(function() {
		type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
		console.log(type);
		$(".menu_trace").attr("data-save", $(this).attr('id').split('_')[1])
		hideFormFloatingElements();
	});

	$('#btn_adjmod').click(function() {
		type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
		console.log(type);
		$(".menu_trace").attr("data-save", $(this).attr('id').split('_')[1])
		hideFormFloatingElements();
	});

	$('#btn_gut').click(function() {
		type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
		console.log(type);
		$(".menu_trace").attr("data-save", $(this).attr('id').split('_')[1])
		hideFormFloatingElements();
	});

	//n글자 이상 중복을 출력. 
	$('#btn_leng_dup').click(function() {
		type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
		console.log(type);
		$(".menu_trace").attr("data-save", $(this).attr('id').split('_')[1])
		showFormFloatingElements();

	});


	//제출버튼 클릭 시
	$('.btn_sbm').click(function() {

//		console.log(type)
		let text = $("#textInput").val();
//		console.log(text);

		if (type != "leng") {
			console.log('접속어.')
			//조건 필터링
			// let words = wordsJSON[type]; // 해당 type의 데이터 가져오기
			let words = wordsJSON.filter(function(item) {
				return item.type == type;
			});
//			console.log(words);
			//조건 필터링 END //@잘 작동됨



			//측정할 단어들의 범위와 빈도 설정
			// let paragraphs = text.split('\n\n');
			let paragraphs = text.replace(/\n/g, '<br>').split('<br><br>');

			let result = ''; //background 컬러가 적용될 text를 담는 용도
			//측정할 단어들의 범위와 빈도 설정 끝

			for (let i = 0; i < paragraphs.length; i++) {
				let paragraph = paragraphs[i].trim();
				console.log("paragraph: ", paragraph)
				let highlightedWords = {};

				// 일치 획수 검색
				for (let j = 0; j < words.length; j++) {
					let wordArray = words[j].name;
					//              console.log(wordArray);
					let regex = new RegExp(wordArray, 'gi');
					let occurrences = paragraph.match(regex);
					//							console.log("occurrences: ", occurrences)
					if (occurrences && occurrences.length >= 1) { //n번 이상 일치할 때
//						console.log("두번이상일치함")
						highlightedWords[wordArray] = occurrences.length;
//						console.log("occurrences.length: ", occurrences.length)
//						console.log("highlightedWords[wordArray]: ", highlightedWords[wordArray])
					}


				}


				// 색상 적용
				let highlightedParagraph = paragraph;
				for (let word in highlightedWords) {
					if (highlightedWords.hasOwnProperty(word)) {
						let occurrences = highlightedWords[word];
						let color = getRandomColor();

						let regex;
						if ($("#lang_save").text() == 'korean') {
							regex = new RegExp(word, 'gi'); //띄어쓰기
						} else {
							regex = new RegExp('\\b' + word + '\\b', 'gi'); //한글안댐	
						}
						// let regex = new RegExp('(\\s|^)' + word + '(\\s|$)', 'gi');
						// let regex = new RegExp('(^|[^\\u3131-\\uD79D])' + word + '($|[^\\u3131-\\uD79D])', 'gi');


//						console.log("regex: ", regex)
						highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
							occurrences--;
							return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
						});
					}
				}
//				console.log("적용된 highlightedParagraph: ", highlightedParagraph)

				result += '<p>' + highlightedParagraph + '</p>';
			}

			$('#result').html(result);
		} else if (type == "leng") {
			//길이/빈도 검색
//			console.log('커스텀단어.')
			applyDuplicateColors()

		}

	});


});


// 랜덤한 배경색을 생성하는 함수. (임계값 이상 밝기의)
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	var threshold = 128; // 밝기 임계값 //하늘색은 여전히 흰색과 구분이안댐.. 청색파장 없애서그런가..?

	// 랜덤으로 밝은 색상을 생성
	function generateBrightColor() {
		var brightColor = "#";
		for (var i = 0; i < 6; i++) {
			brightColor += letters[Math.floor(Math.random() * 16)];
		}
		return brightColor;
	}

	// 생성된 색상의 밝기 측정
	function getColorBrightness(color) {
		var hex = color.substring(1); // # 제거
		var r = parseInt(hex.substring(0, 2), 16);
		var g = parseInt(hex.substring(2, 4), 16);
		var b = parseInt(hex.substring(4, 6), 16);
		var brightness = (r * 299 + g * 587 + b * 114) / 1000;
		return brightness;
	}

	// 밝기 임계값 이하의 색상을 생성하지 않도록 반복 생성 시도
	do {
		color = generateBrightColor();
	} while (getColorBrightness(color) <= threshold);

	return color;
}
