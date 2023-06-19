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



function applyDuplicateColors(){
  let match_range = parseInt($('#match_range').val());
  let match_length = parseInt($('#match_length').val());
  let match_frequency = parseInt($('#match_freqency').val());
  let text = $("#textInput").val();

  var regex = new RegExp("[가-힣\\w]{" + match_length + "}", "gi");
  if(match_length==4){regex = new RegExp("[가-힣\\w]{" + match_length + ",}", "gi");}

  var matches = text.match(regex);


  let language = $("#lang_save").text();
  console.log($("#lang_save").text());
  
	if(language=="korean"){

	  if (matches) {
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
	    }else if (match_range === 3) {
	        var highlightedText = applyColorsToText(text, match_length, match_frequency);
	        $("#result").html(highlightedText);
		    }
		}
		
	}
	
	else{

	  if (matches) {
	    var highlightedTexts = [];
	
	    if (match_range === 1) {
	        var paragraphs = text.split('\n\n');
	        for (var j = 0; j < paragraphs.length; j++) {
	            var paragraph = paragraphs[j];
	            var highlightedParagraph = applyColorsToTextEng(paragraph, match_length, match_frequency);
	            highlightedTexts.push(highlightedParagraph);
	        }
	
	        // <br> 태그를 사용하여 합친 텍스트를 생성
	        var finalHighlightedText = highlightedTexts.join('<br><br>');
	        $("#result").html(finalHighlightedText);
	    } else if (match_range === 3) {
	        var highlightedText = applyColorsToTextEng(text, match_length, match_frequency);
	        $("#result").html(highlightedText);
		    }
		}
				
	}

}




  // 랜덤한 배경색을 생성하고 색상을 적용하는 함수
  function applyColorsToText(text, length, frequency) {
      var highlightedText = text;
      
	  var regex = new RegExp("[가-힣]{" + length + "}", "gi");
	  if(length==4){regex = new RegExp("[가-힣]{" + length + ",}", "gi");}
	  
      var matches = text.match(regex);

      if (matches) {
          for (var i = 0; i < matches.length; i++) {
              var match = matches[i];
              var count = text.split(match).length - 1;
              if (count >= frequency) {
                  var color = getRandomColor();
                  highlightedText = highlightedText.replace(new RegExp(match, 'gi'), '<span style="background-color: ' + color + '">' + match + '</span>');
              }
          }
      }

      return highlightedText;
  }

  // (영어)랜덤한 배경색을 생성하고 색상을 적용하는 함수
  function applyColorsToTextEng(text, length, frequency) {
      var highlightedText = text;
      
	  var regex = new RegExp("[A-Za-z]{" + length + "}", "gi");
	  if (length == 4) { regex = new RegExp("[A-Za-z\\w]{" + length + ",}", "gi"); }
	
      var matches = text.match(regex);

      if (matches) {
          for (var i = 0; i < matches.length; i++) {
              var match = matches[i];
              var count = text.split(match).length - 1;
              if (count >= frequency) {
                  var color = getRandomColor();
                  highlightedText = highlightedText.replace(new RegExp(match, 'gi'), '<span style="background-color: ' + color + '">' + match + '</span>');
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

  $.ajax({
    url: '/allData',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      wordsJSON = response; // 받은 JSON 데이터를 변수에 저장
      // console.log(wordsJSON);

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

        console.log(type)
        let text = $("#textInput").val();
        console.log(text);

        if(type != "leng"){
			console.log('접속어.')
          //조건 필터링
          // let words = wordsJSON[type]; // 해당 type의 데이터 가져오기
          let words = wordsJSON.filter(function(item) {
            return item.type == type;
          });
          // console.log(words);
          //조건 필터링 END //@잘 작동됨
      

      
          //측정할 단어들의 범위와 빈도 설정
          // let paragraphs = text.split('\n\n');
          let paragraphs = text.replace(/\n/g, '<br>').split('<br><br>');

          let result = ''; //background 컬러가 적용될 text를 담는 용도
          //측정할 단어들의 범위와 빈도 설정 끝
  
          for (let i = 0; i < paragraphs.length; i++) {
            let paragraph = paragraphs[i].trim();
            let highlightedWords = {};
      
            // 일치 획수 검색
            for (let j = 0; j < words.length; j++) {
              let wordArray = words[j].name;
              console.log(wordArray);
              let regex = new RegExp(wordArray, 'gi');
              let occurrences = paragraph.match(regex);
          
              if (occurrences && occurrences.length >= 2) { //2번 이상 일치할 때
                highlightedWords[wordArray] = occurrences.length;
              }
  

            }
            
      
            // 색상 적용
            let highlightedParagraph = paragraph;
            for (let word in highlightedWords) {
              if (highlightedWords.hasOwnProperty(word)) {
                let occurrences = highlightedWords[word];
                let color = getRandomColor();
      
                let regex = new RegExp(word, 'gi');
                highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
                  occurrences--;
                  return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
                });
              }
            }
      
            result += '<p>' + highlightedParagraph + '</p>';
          }
      
          $('#result').html(result);
        }else{
          //길이/빈도 검색
          console.log('커스텀단어.')
          applyDuplicateColors()

        }

      });

    },
    error: function(xhr, status, error) {
      // 오류 처리
    }
  });
});


      // 랜덤한 배경색을 생성하는 함수. (임계값 이상 밝기의)
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        var threshold = 128; // 밝기 임계값
      
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
