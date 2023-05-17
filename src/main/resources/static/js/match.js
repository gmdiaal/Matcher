/**
 * 
 */




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::: 배열->JSON :::::::::::::::::::::::::::::::::::::

$(document).ready(function() {
    var wordsJSON = '{"fruits": ["사과", "바나나"], "snacks": ["과자", "쿠키"], "adjectives": ["맛있는", "신선한"]}';
    var words = JSON.parse(wordsJSON);
    var text = $("#textInput").val();

    $('.btn_sbm').click(function() {
        var text = $("#textInput").val();
        console.log(text);

        var paragraphs = text.split('\n');
        var result = '';

        for (var i = 0; i < paragraphs.length; i++) {
            var paragraph = paragraphs[i].trim();
            var highlightedWords = {};

            // Count word occurrences in the paragraph
            for (var key in words) {
                if (words.hasOwnProperty(key)) {
                    var wordArray = words[key];
                    for (var j = 0; j < wordArray.length; j++) {
                        var word = wordArray[j];
                        var regex = new RegExp(word, 'gi');
                        var occurrences = paragraph.match(regex);

                        if (occurrences && occurrences.length >= 2) {
                            highlightedWords[word] = occurrences.length;
                        }
                    }
                }
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

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }
});

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

