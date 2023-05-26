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



////////////// n글자 초과시 짤려서 나옴 

// const regex11 = /[가-힣\w]{3}(?!\w)/g;
// const text11 = "라떼는 개무식했어";

// const matches11 = text11.match(regex11);
// console.log(matches11);

////////////// n글자 초과시 안나옴
const regex11 = /[가-힣\w]{3,3}/g;
const text11 = "라떼는 개무식했어";

const matches11 = text11.match(regex11);
console.log(matches11);

//::::::::::::::::::::::::::::::::: 글자 길이와 횟수를 지정 :::::::::::::::::::::::::::::::::::::

function applyDuplicateColors() {
  var search_length = parseInt($('#searchLengthInput').val());
  var duplicate_length = parseInt($('#duplicateLengthInput').val());
  var text = $("#textInput").val();

  // 정규식을 사용하여 단어 추출
  var words = text.match(/[가-힣\w]+/g);

  // 중복된 단어와 그 개수를 저장할 객체
  var duplicateCounts = {};

  // 단락마다 적용할 색상을 저장할 객체
  var colors = {};

  // 중복된 단어를 찾고 개수를 세기
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();

    // search_length 이상의 길이를 가지는 단어만 고려
    if (word.length >= search_length) {
      if (duplicateCounts[word]) {
        duplicateCounts[word]++;
      } else {
        duplicateCounts[word] = 1;
      }
    }
  }

  // 중복된 단어에 적용할 색상 생성
  var colorIndex = 0;
  for (var word in duplicateCounts) {
    var count = duplicateCounts[word];

    // duplicate_length 이상 거론된 단어만 고려
    if (count >= duplicate_length) {
      if (!colors[word]) {
        // 새로운 색상 생성
        var color = getRandomColor();
        colors[word] = color;
        colorIndex++;
      }
    }
  }

  // 결과 출력
  var result = $('#result');
  result.empty();

  var paragraphs = text.split('\n');
  for (var j = 0; j < paragraphs.length; j++) {
    var paragraph = paragraphs[j].trim();
    if (paragraph !== '') {
      var highlightedParagraph = $('<p></p>');
      var wordsInParagraph = paragraph.split(' ');

      for (var k = 0; k < wordsInParagraph.length; k++) {
        var wordInParagraph = wordsInParagraph[k].toLowerCase();
        var color = colors[wordInParagraph];

        if (color) {
          var highlightedWord = $('<span></span>').text(wordsInParagraph[k]).css('background-color', color);
          highlightedParagraph.append(highlightedWord);
        } else {
          highlightedParagraph.append(wordsInParagraph[k]);
        }

        if (k !== wordsInParagraph.length - 1) {
          highlightedParagraph.append(' ');
        }
      }

      result.append(highlightedParagraph);
    }
  }
}




$(document).ready(function () {
  $('.btn_sbm').click(function () {
    applyDuplicateColors();
  });
});


//::::::::::::::::::::::::::::::::: 모든 Data를 한번에v3 -key값검증 삭제. @정상작동 :::::::::::::::::::::::::::::::::::::


var wordsJSON = {}; // 초기에 빈 객체로 선언

$(document).ready(function() {

  //처음 페이지 로딩 시 검색타입
  var type = "conjunctive";

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
        showFormFloatingElements();

      });


      //제출버튼 클릭 시
      $('.btn_sbm').click(function() {

        //조건 필터링
        // var words = wordsJSON[type]; // 해당 type의 데이터 가져오기
        var words = wordsJSON.filter(function(item) {
          return item.type == type;
        });
        // console.log(words);
        //조건 필터링 END //@잘 작동됨
    
        var text = $("#textInput").val();
        console.log(text);
    
        //측정할 단어들의 범위와 빈도 설정
        var paragraphs = text.split('\n');
        var result = ''; //background 컬러가 적용될 text를 담는 용도
        //측정할 단어들의 범위와 빈도 설정 끝

        for (var i = 0; i < paragraphs.length; i++) {
          var paragraph = paragraphs[i].trim();
          var highlightedWords = {};
    
          // Count word occurrences in the paragraph
          for (var j = 0; j < words.length; j++) {
            var wordArray = words[j].name;
            console.log(wordArray);
            var regex = new RegExp(wordArray, 'gi');
            var occurrences = paragraph.match(regex);
        
            if (occurrences && occurrences.length >= 2) {
              highlightedWords[wordArray] = occurrences.length;
            }

            //그, 래, 서, 그래, 래서 비교
            // for (var k = 0; k < wordArray.length; k++) {
            //   var word = wordArray[k];
            //   // console.log(word);
            //   var regex = new RegExp(word, 'gi');
            //   var occurrences = paragraph.match(regex);
          
            //   if (occurrences && occurrences.length >= 2) {
            //     highlightedWords[word] = occurrences.length;
            //   }
            // }
            //그, 래, 서, 그래, 래서 비교


          }
          
    
          // Apply background color to duplicate words
          var highlightedParagraph = paragraph;
          for (var word in highlightedWords) {
            if (highlightedWords.hasOwnProperty(word)) {
              var occurrences = highlightedWords[word];
              var color = getRandomColor();
    
              var regex = new RegExp(word, 'gi');
              highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
                occurrences--;
                return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
              });
            }
          }
    
          result += '<p>' + highlightedParagraph + '</p>';
        }
    
        $('#result').html(result);
      });

      // 랜덤한 배경색을 생성하는 함수
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
    
        for (var i = 0; i < 6; i++) {
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


//::::::::::::::::::::::::::::::::: 모든 Data를 한번에v2 :::::::::::::::::::::::::::::::::::::

// var wordsJSON = {}; // 초기에 빈 객체로 선언

// $(document).ready(function() {
//   var type = "conjunctive";

//   $.ajax({
//     url: '/allData',
//     method: 'GET',
//     dataType: 'json',
//     success: function(response) {
//       wordsJSON = response; // 받은 JSON 데이터를 변수에 저장
//       // console.log(wordsJSON);

//       // 데이터를 받은 후 버튼 클릭 핸들러 등록
//       $('#btn_conjunctive').click(function() {
//         type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//         console.log(type);
//       });

//       $('#btn_adjmod').click(function() {
//         type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//         console.log(type);
//       });

//       $('#btn_noun').click(function() {
//         type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//         console.log(type);
//       });


//       $('.btn_sbm').click(function() {

//         //조건 필터링
//         // var words = wordsJSON[type]; // 해당 type의 데이터 가져오기
//         var words = wordsJSON.filter(function(item) {
//           return item.type == "conjunctive";
//         });
//         // console.log(words);
//         //조건 필터링 END //@잘 작동됨
    
//         var text = $("#textInput").val();
//         console.log(text);
    
//         //측정할 단어들의 범위와 빈도 설정
//         var paragraphs = text.split('\n');
//         var result = ''; //background 컬러가 적용될 text를 담는 용도
//         //측정할 단어들의 범위와 빈도 설정 끝

//         for (var i = 0; i < paragraphs.length; i++) {
//           var paragraph = paragraphs[i].trim();
//           var highlightedWords = {};
    
//           // Count word occurrences in the paragraph
//           for (var key in words) {
//             if (words.hasOwnProperty(key)) {
//               var wordArray = words[key];
    
//               // console.log(":::::"+key);
//               console.log(wordArray.name);
//               console.log(Object.keys(wordArray).length);
    
//               for (var j = 0; j < wordArray.length; j++) {
//                 var word = wordArray[j].name; // wordArray의 각 항목의 name 속성을 가져옴
//                 console.log(word);
//                 var regex = new RegExp(word, 'gi');
//                 var occurrences = paragraph.match(regex);
              
//                 if (occurrences && occurrences.length >= 2) {
//                   highlightedWords[word] = occurrences.length;
//                 }
//               }

//             }
//           }
    
//           // Apply background color to duplicate words
//           var highlightedParagraph = paragraph;
//           for (var word in highlightedWords) {
//             if (highlightedWords.hasOwnProperty(word)) {
//               var occurrences = highlightedWords[word];
//               var color = getRandomColor();
    
//               var regex = new RegExp(word, 'gi');
//               highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
//                 occurrences--;
//                 return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
//               });
//             }
//           }
    
//           result += '<p>' + highlightedParagraph + '</p>';
//         }
    
//         $('#result').html(result);
//       });
    
//       function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';
    
//         for (var i = 0; i < 6; i++) {
//           color += letters[Math.floor(Math.random() * 16)];
//         }
    
//         return color;
//       }


//     },
//     error: function(xhr, status, error) {
//       // 오류 처리
//     }
//   });
// });

//::::::::::::::::::::::::::::::::: 모든 Data를 한번에 :::::::::::::::::::::::::::::::::::::

// var wordsJSON = {}; // 초기에 빈 객체로 선언
// // 페이지 로딩 시 모든 데이터 받아오기
//   $.ajax({
//     url: '/allData',
//     method: 'GET',
//     dataType: 'json',
//     success: function(response) {
//       wordsJSON = response; // 받은 JSON 데이터를 변수에 저장
//       console.log('워드JSON TYPE:'+wordsJSON);
//     },
//     error: function(xhr, status, error) {
//       // 오류 처리
//     }
//   });

// $(document).ready(function() {




//   var type ="";
//   $('#btn_conjunctive').click(function() {
//     type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//     console.log(type);
//   })
//   $('#btn_adjmod').click(function() {
//     type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//     console.log(type);
//   })
//   $('#btn_noun').click(function() {
//     type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//     console.log(type);
//   })

//   $('.btn_sbm').click(function() {
//     // type = $(this).attr('id').split('_')[1]; // 버튼 id에서 type 추출
//     var words = wordsJSON[type]; // 해당 type의 데이터 가져오기

//     var text = $("#textInput").val();
//     console.log(text);
//     console.log( '워드:'+words);
//     console.log('워드JSON TYPE:'+wordsJSON[type]);

//     var paragraphs = text.split('\n');
//     var result = '';

//     for (var i = 0; i < paragraphs.length; i++) {
//       var paragraph = paragraphs[i].trim();
//       var highlightedWords = {};

//       // Count word occurrences in the paragraph
//       for (var key in words) {
//         if (words.hasOwnProperty(key)) {
//           var wordArray = words[key];

//           console.log(":::::"+key);
//           console.log(":::::"+wordArray);

//           for (var j = 0; j < wordArray.length; j++) {
//             var word = wordArray[j];
//             var regex = new RegExp(word, 'gi');
//             var occurrences = paragraph.match(regex);

//             if (occurrences && occurrences.length >= 2) {
//               highlightedWords[word] = occurrences.length;
//             }
//           }
//         }
//       }

//       // Apply background color to duplicate words
//       var highlightedParagraph = paragraph;
//       for (var word in highlightedWords) {
//         if (highlightedWords.hasOwnProperty(word)) {
//           var occurrences = highlightedWords[word];
//           var color = getRandomColor();

//           var regex = new RegExp(word, 'gi');
//           highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
//             occurrences--;
//             return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
//           });
//         }
//       }

//       result += '<p>' + highlightedParagraph + '</p>';
//     }

//     $('#result').html(result);
//   });

//   function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';

//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }

//     return color;
//   }
// });

//::::::::::::::::::::::::::::::::: 배열->JSON :::::::::::::::::::::::::::::::::::::

// var wordsJSON = '{"fruits": ["사과", "바나나"], "snacks": ["과자", "쿠키"], "adjectives": ["맛있는", "신선한"]}';

// $(document).ready(function() {

//   // 버튼 클릭 이벤트 핸들러
//   $('#btn_conjunctive').click(function() {
//     $.ajax({
//       url: '/conjunctive',
//       method: 'GET',
//       dataType: 'json',
//       success: function(response) {
//         var wordsJSON = response.words; // 받은 JSON 배열을 변수에 저장
//         // 이후 작업 수행
//       },
//       error: function(xhr, status, error) {
//         // 오류 처리
//       }
//     });
//   });
//   // 버튼 클릭 이벤트 핸들러
//   $('#btn_adjmod').click(function() {
//     $.ajax({
//       url: '/adjmod',
//       method: 'GET',
//       dataType: 'json',
//       success: function(response) {
//         var wordsJSON = response.words; // 받은 JSON 배열을 변수에 저장
//         // 이후 작업 수행
//       },
//       error: function(xhr, status, error) {
//         // 오류 처리
//       }
//     });
//   });
//   // 버튼 클릭 이벤트 핸들러
//   $('#btn_noun').click(function() {
//     $.ajax({
//       url: '/noun',
//       method: 'GET',
//       dataType: 'json',
//       success: function(response) {
//         var wordsJSON = response.words; // 받은 JSON 배열을 변수에 저장
//         // 이후 작업 수행
//       },
//       error: function(xhr, status, error) {
//         // 오류 처리
//       }
//     });
//   });

//     var words = JSON.parse(wordsJSON);
//     var text = $("#textInput").val();

//     $('.btn_sbm').click(function() {
//         var text = $("#textInput").val();
//         console.log(text);

//         var paragraphs = text.split('\n');
//         var result = '';

//         for (var i = 0; i < paragraphs.length; i++) {
//             var paragraph = paragraphs[i].trim();
//             var highlightedWords = {};

//             // Count word occurrences in the paragraph
//             for (var key in words) {
//                 if (words.hasOwnProperty(key)) {
//                     var wordArray = words[key];
//                     for (var j = 0; j < wordArray.length; j++) {
//                         var word = wordArray[j];
//                         var regex = new RegExp(word, 'gi');
//                         var occurrences = paragraph.match(regex);

//                         if (occurrences && occurrences.length >= 2) {
//                             highlightedWords[word] = occurrences.length;
//                         }
//                     }
//                 }
//             }

//             // Apply background color to duplicate words
//             var highlightedParagraph = paragraph;
//             for (var word in highlightedWords) {
//                 if (highlightedWords.hasOwnProperty(word)) {
//                     var occurrences = highlightedWords[word];
//                     var color = getRandomColor();

//                     var regex = new RegExp(word, 'gi');
//                     highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
//                         occurrences--;
//                         return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
//                     });
//                 }
//             }

//             result += '<p>' + highlightedParagraph + '</p>';
//         }

//         $('#result').html(result);
//     });

//     function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';

//         for (var i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }

//         return color;
//     }
// });

//::::::::::::::::::::::::::::::::: 잘되는데 배열 :::::::::::::::::::::::::::::::::::::

// $(document).ready(function() {
//     var words = ["사과", "과자", "맛있는"];



//     $('.btn_sbm').click(function() {
        
//         var text = $("#textInput").val();
//         console.log(text)

//         var paragraphs = text.split('\n');
//         var result = '';

//         for (var i = 0; i < paragraphs.length; i++) {
//             var paragraph = paragraphs[i].trim();
//             var highlightedWords = {};

//             // Count word occurrences in the paragraph
//             for (var j = 0; j < words.length; j++) {
//                 var word = words[j];
//                 var regex = new RegExp(word, 'gi');
//                 var occurrences = paragraph.match(regex);

//                 if (occurrences && occurrences.length >= 2) {
//                     highlightedWords[word] = occurrences.length;
//                 }
//             }

//             // Apply background color to duplicate words
//             var highlightedParagraph = paragraph;
//             for (var word in highlightedWords) {
//                 if (highlightedWords.hasOwnProperty(word)) {
//                     var occurrences = highlightedWords[word];
//                     var color = getRandomColor();

//                     var regex = new RegExp(word, 'gi');
//                     highlightedParagraph = highlightedParagraph.replace(regex, function(match) {
//                         occurrences--;
//                         return (occurrences < 0) ? match : '<span style="background-color:' + color + ';">' + match + '</span>';
//                     });
//                 }
//             }

//             result += '<p>' + highlightedParagraph + '</p>';
//         }

//         $('#result').html(result);
//     });

//     function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';

//         for (var i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }

//         return color;
//     }
// });

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// $(document).ready(function() {
//     $('.btn_sbm').click(function() {
//       var text = `맛있는 사과는 맛있는 붉은색 사과이다. 
//   맛있는 사과는 없다.
//   맜있는 사과는 있지만 모든 사과가 맛있는 것은 아니다.`;
  
//       var paragraphs = text.split('\n');
//       var colors = generateRandomColors(paragraphs.length);
//       var result = '';
  
//       for (var i = 0; i < paragraphs.length; i++) {
//         var paragraph = paragraphs[i];
//         var words = paragraph.split(' ');
//         var wordCount = {};
  
//         for (var j = 0; j < words.length; j++) {
//           var word = words[j];
  
//           if (wordCount[word]) {
//             wordCount[word]++;
//           } else {
//             wordCount[word] = 1;
//           }
//         }
  
//         var highlightedParagraph = '';
  
//         for (var j = 0; j < words.length; j++) {
//           var word = words[j];
  
//           if (wordCount[word] >= 2) {
//             var color = colors[i];
//             highlightedParagraph += `<span style="background-color: ${color}">${word}</span> `;
//           } else {
//             highlightedParagraph += word + ' ';
//           }
//         }
  
//         result += `<p>${highlightedParagraph}</p>`;
//       }
  
//       $('#result').html(result);
//     });
  
//     function generateRandomColors(count) {
//       var colors = [];
  
//       for (var i = 0; i < count; i++) {
//         var color = getRandomColor();
//         colors.push(color);
//       }
  
//       return colors;
//     }
  
//     function getRandomColor() {
//       var letters = '0123456789ABCDEF';
//       var color = '#';
  
//       for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
  
//       return color;
//     }
//   });

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// function generateText() {
//     const paragraphs = [
//       "맛있는 사과는 맛있는 붉은색 사과이다.",
//       "맛있는 사과는 없다.",
//       "맛있는 사과는 있지만 모든 사과가 맛있는 것은 아니다."
//     ];

//     const colors = [
//         "red",
//         "orange",
//         "yellow",
//         "green",
//         "blue",
//         "purple",
//         "pink",
//         "brown",
//         "gray"
//     ];

//     const resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "";

//     for (let i = 0; i < paragraphs.length; i++) {
//       const paragraph = paragraphs[i];
//       const words = paragraph.split(" ");

//       let coloredParagraph = "";
//       for (let j = 0; j < words.length; j++) {
//         const word = words[j];
//         let color = colors[Math.floor(Math.random() * colors.length)];

//         if (countOccurrences(words, word) > 1) {
//           coloredParagraph += `<span style="color: ${color};">${word}</span> `;
//         } else {
//           coloredParagraph += `${word} `;
//         }
//       }

//       const paragraphDiv = document.createElement("div");
//       paragraphDiv.innerHTML = coloredParagraph;
//       resultDiv.appendChild(paragraphDiv);
//     }
//   }

//   function countOccurrences(array, value) {
//     return array.reduce((count, item) => count + (item === value ? 1 : 0), 0);
//   }

//   $(".btn_sbm").click(() => {
//     generateText();
//   });

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  
//   function highlightOccurrences(paragraph, words) {
//     let highlightedParagraph = paragraph;
  
//     for (const word of words) {
//       const pattern = new RegExp(word, "g");
//       const color = getRandomColor();
//       highlightedParagraph = highlightedParagraph.replace(pattern, `<span style="color: ${color}">${word}</span>`);
//     }
  
//     return highlightedParagraph;
//   }
  
//   function highlightParagraphs() {
//     const paragraphs = $("#textInput").val().split("\n");
//     const words = ["사과", "과자", "맛있는"];

    
  
//     for (const paragraph of paragraphs) {

//       console.log(paragraph)

//       const count = words.reduce((total, word) => {
//         const pattern = new RegExp(word, "g");
//         const matches = paragraph.match(pattern);
//         return total + (matches ? matches.length : 0);
//       }, 0);
  
//       let highlightedParagraph = paragraph;
//       if (count > 1) {
//         highlightedParagraph = highlightOccurrences(paragraph, words);
//       }
  
//       const $p = $("<p>").html(highlightedParagraph);
//       $("#myForm").append($p);
//     }
//   }


  
//   $(".btn_sbm").click(() => {
//     highlightParagraphs();
//   });

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// function highlightOccurrences(paragraph, words) {
//     let highlightedParagraph = paragraph;
//     for (const word of words) {
//       const pattern = new RegExp(word, "g");
//       highlightedParagraph = highlightedParagraph.replace(pattern, `<span class="highlight">${word}</span>`);
//     }
//     return highlightedParagraph;
//   }

//   function highlightParagraphs() {
//     // event.preventDefault();
//     const paragraphs = $("#textInput").val().split("\n");
//     const words = ["사과", "과자", "맛있는"];

//     for (const paragraph of paragraphs) {
//       const highlightedParagraph = highlightOccurrences(paragraph, words);
//       const $p = $("<p>").html(highlightedParagraph);
//       $("#myForm").append($p);
//     }
//   }

//   $(".btn_sbm").click(()=>{

//     highlightParagraphs()

//   })


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// function countOccurrences(paragraph, word) {
//     const pattern = new RegExp(`${word}`, "g");
//     const matches = paragraph.match(pattern);
//     return matches ? matches.length : 0;
//   }

//   function highlightParagraphs(event) {
//     event.preventDefault();
//     const paragraphs = $("#textInput").val().split("\n");

//     for (const paragraph of paragraphs) {
//       const count = countOccurrences(paragraph, "사과");
//       if (count >= 2) {
//         console.log("2개 이상 일치함.")
//         const $p = $("<p>").text(paragraph).addClass("highlight");
//         $("#myForm").append($p);
//       }
//     }
//   }

//   $("#myForm").submit(highlightParagraphs);


// -----------------------------------------------------------------------

// let conjunction_regex = "";

// //:::::::::::: 버튼을 누르면 단어와 paragraph를 비교하는 함수.
// $(".btn_sbm").click(()=>{

//     const paragraph = $(".test_match").val()
//     console.log($(".test_match").val())
//     // const paragraph = "사과는 사과다. 하지만 사과는 과자다";

//     // 정규표현식 패턴 생성
//     const pattern = /사과/g;
    
//     // 패턴과 일치하는 단어 찾기
//     const matches = paragraph.match(pattern);
    
//     // 결과 출력
//     if (matches) {
//       for (const match of matches) {
//         console.log("단어:", match);
//       }
//     } else {
//       console.log("일치하는 단어를 찾을 수 없습니다.");
//     }


// })

