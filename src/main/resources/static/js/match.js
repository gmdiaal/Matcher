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



////////////// n글자 초과시 안나옴
const regex11 = /[가-힣\w]{3,3}/g;
const text11 = "라떼는 개무식했어";

const matches11 = text11.match(regex11);
console.log(matches11);




//::::::::::::::::::::::::::::::::: 글자 길이와 횟수를 지정 v2 :::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::: 글자 길이와 횟수를 지정 v4 :::::::::::::::::::::::::::::::::::::

  let match_range = parseInt($('#match_range').val());
  let match_length = parseInt($('#match_length').val());
  let match_frequency = parseInt($('#match_freqency').val());
// var match_length = 2;
// var match_frequency = 2;
var text = "그래서그래서 그래 니나니나 고릴라야 나야나 나야나 가나다라마 가나다라마 카파하자카파하자";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var regex = new RegExp("[가-힣\\w]{" + match_length + ",}", "g");
var matches = text.match(regex);

if (matches) {
  var highlightedText = text;

  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    var count = text.split(match).length - 1;
    if (count >= match_frequency) {
      var color = getRandomColor();
      highlightedText = highlightedText.replace(new RegExp(match, 'g'), '<span style="background-color: ' + color + '">' + match + '</span>');
    }
  }
  
  $("#result").html(highlightedText);
}

//::::::::::::::::::::::::::::::::: 글자 길이와 횟수를 지정 v3 :::::::::::::::::::::::::::::::::::::

// var match_length = 2;
// var match_frequency = 2;
// var text = "그래서그래서 그래 니나니나 고릴라야 나야나 나야나";

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// var regex = new RegExp("[가-힣\\w]{" + match_length + "," + match_length + "}", "g");
// var matches = text.match(regex);

// if (matches) {
//   var highlightedText = text;
//   for (var i = 0; i < matches.length; i++) {
//     var match = matches[i];
//     var count = text.split(match).length - 1;
//     if (count >= match_frequency) {
//       var color = getRandomColor();
//       highlightedText = highlightedText.replace(new RegExp(match, 'g'), '<span style="color: ' + color + '">' + match + '</span>');
//     }
//   }
  
//   $("#result").html(highlightedText);
// }

//::::::::::::::::::::::::::::::::: 글자 길이와 횟수를 지정 v2 :::::::::::::::::::::::::::::::::::::

// function applyDuplicateColors() {
//   let match_range = parseInt($('#match_range').val());
//   let search_length = parseInt($('#match_length').val());
//   let duplicate_length = parseInt($('#match_freqency').val());
//   let text = $("#textInput").val();

//   console.log(search_length)
//   console.log(duplicate_length)

//   // 정규식을 사용하여 단어 추출
//   let words = text.match(/[가-힣\w]+/g);

//   // 중복된 단어와 그 개수를 저장할 객체
//   let duplicateCounts = {};

//   // 단락마다 적용할 색상을 저장할 객체
//   let colors = {};

//   // 중복된 단어를 찾고 개수를 세기
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i].toLowerCase();

//     // search_length 이상의 길이를 가지는 단어만 고려
//     if (word.length >= search_length) {
//       if (duplicateCounts[word]) {
//         duplicateCounts[word]++;
//       } else {
//         duplicateCounts[word] = 1;
//       }
//     }
//   }

//   // 중복된 단어에 적용할 색상 생성
//   let colorIndex = 0;
//   for (let word in duplicateCounts) {
//     let count = duplicateCounts[word];

//     // duplicate_length 이상 거론된 단어만 고려
//     if (count >= duplicate_length) {
//       if (!colors[word]) {
//         // 새로운 색상 생성
//         let color = getRandomColor();
//         colors[word] = color;
//         colorIndex++;
//       }
//     }
//   }

//   // 결과 출력
//   let result = $('#result');
//   result.empty();

//   let paragraphs = text.split('\n');
//   for (let j = 0; j < paragraphs.length; j++) {
//     let paragraph = paragraphs[j].trim();
//     if (paragraph !== '') {
//       let highlightedParagraph = $('<p></p>');
//       let wordsInParagraph = paragraph.split(' ');

//       for (let k = 0; k < wordsInParagraph.length; k++) {
//         let wordInParagraph = wordsInParagraph[k].toLowerCase();
//         let color = colors[wordInParagraph];

//         if (color) {
//           let highlightedWord = $('<span></span>').text(wordsInParagraph[k]).css('background-color', color);
//           highlightedParagraph.append(highlightedWord);
//         } else {
//           highlightedParagraph.append(wordsInParagraph[k]);
//         }

//         if (k !== wordsInParagraph.length - 1) {
//           highlightedParagraph.append(' ');
//         }
//       }

//       result.append(highlightedParagraph);
//     }
//   }
// }






// //::::::::::::::::::::::::::::::::: 글자 길이와 횟수를 지정 :::::::::::::::::::::::::::::::::::::

// function applyDuplicateColors() {
//   let search_length = parseInt($('#searchLengthInput').val());
//   let duplicate_length = parseInt($('#duplicateLengthInput').val());
//   let match_freqency = parseInt($('#match_freqency').val());
//   let text = $("#textInput").val();

//   // 정규식을 사용하여 단어 추출
//   let words = text.match(/[가-힣\w]+/g);

//   // 중복된 단어와 그 개수를 저장할 객체
//   let duplicateCounts = {};

//   // 단락마다 적용할 색상을 저장할 객체
//   let colors = {};

//   // 중복된 단어를 찾고 개수를 세기
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i].toLowerCase();

//     // search_length 이상의 길이를 가지는 단어만 고려
//     if (word.length >= search_length) {
//       if (duplicateCounts[word]) {
//         duplicateCounts[word]++;
//       } else {
//         duplicateCounts[word] = 1;
//       }
//     }
//   }

//   // 중복된 단어에 적용할 색상 생성
//   let colorIndex = 0;
//   for (let word in duplicateCounts) {
//     let count = duplicateCounts[word];

//     // duplicate_length 이상 거론된 단어만 고려
//     if (count >= duplicate_length) {
//       if (!colors[word]) {
//         // 새로운 색상 생성
//         let color = getRandomColor();
//         colors[word] = color;
//         colorIndex++;
//       }
//     }
//   }

//   // 결과 출력
//   let result = $('#result');
//   result.empty();

//   let paragraphs = text.split('\n');
//   for (let j = 0; j < paragraphs.length; j++) {
//     let paragraph = paragraphs[j].trim();
//     if (paragraph !== '') {
//       let highlightedParagraph = $('<p></p>');
//       let wordsInParagraph = paragraph.split(' ');

//       for (let k = 0; k < wordsInParagraph.length; k++) {
//         let wordInParagraph = wordsInParagraph[k].toLowerCase();
//         let color = colors[wordInParagraph];

//         if (color) {
//           let highlightedWord = $('<span></span>').text(wordsInParagraph[k]).css('background-color', color);
//           highlightedParagraph.append(highlightedWord);
//         } else {
//           highlightedParagraph.append(wordsInParagraph[k]);
//         }

//         if (k !== wordsInParagraph.length - 1) {
//           highlightedParagraph.append(' ');
//         }
//       }

//       result.append(highlightedParagraph);
//     }
//   }
// }




// $(document).ready(function () {
//   $('.btn_sbm').click(function () {
//     applyDuplicateColors();
//   });
// });


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

      $('#btn_noun').click(function() {
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

        if(type != "leng"){

          //조건 필터링
          // let words = wordsJSON[type]; // 해당 type의 데이터 가져오기
          let words = wordsJSON.filter(function(item) {
            return item.type == type;
          });
          // console.log(words);
          //조건 필터링 END //@잘 작동됨
      
          let text = $("#textInput").val();
          console.log(text);
      
          //측정할 단어들의 범위와 빈도 설정
          let paragraphs = text.split('\n');
          let result = ''; //background 컬러가 적용될 text를 담는 용도
          //측정할 단어들의 범위와 빈도 설정 끝
  
          for (let i = 0; i < paragraphs.length; i++) {
            let paragraph = paragraphs[i].trim();
            let highlightedWords = {};
      
            // Count word occurrences in the paragraph
            for (let j = 0; j < words.length; j++) {
              let wordArray = words[j].name;
              console.log(wordArray);
              let regex = new RegExp(wordArray, 'gi');
              let occurrences = paragraph.match(regex);
          
              if (occurrences && occurrences.length >= 2) {
                highlightedWords[wordArray] = occurrences.length;
              }
  
              //그, 래, 서, 그래, 래서 비교
              // for (let k = 0; k < wordArray.length; k++) {
              //   let word = wordArray[k];
              //   // console.log(word);
              //   let regex = new RegExp(word, 'gi');
              //   let occurrences = paragraph.match(regex);
            
              //   if (occurrences && occurrences.length >= 2) {
              //     highlightedWords[word] = occurrences.length;
              //   }
              // }
              //그, 래, 서, 그래, 래서 비교
  
  
            }
            
      
            // Apply background color to duplicate words
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
          console.log('else문이 호출됨.')
          applyDuplicateColors()

        }

      });

      // 랜덤한 배경색을 생성하는 함수
      function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
    
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
    
        return color;
      }


    },
    error: function(xhr, status, error) {
      // 오류 처리
    }
  });
});
