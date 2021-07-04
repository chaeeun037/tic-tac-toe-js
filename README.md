# TIC TAC TOE GAME
> A tic-tac-toe game developed with JavaScript


![](https://github.com/chaeeun037/tic-tac-toe-js/blob/1f4be520b01170dc814f58119dbd146f02ffde53/%EC%BA%A1%EC%B3%90.JPG)


## 개발 목표

* 웹 브라우저에서 틱택토 게임을 만든다.





## 사용 기술

<img src="https://img.shields.io/badge/-HTML-%23E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/-CSS-%231572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>





## 개발 기간

2021.06.29 - 2021.07.01





## 학습 내용

* [배열의 forEach, map, filter, reduce 메서드를 사용한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/array-method.md)
* [객체 리터럴로 객체를 구성한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/object-literal.md)
* [ES Classes로 클래스를 만든다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/es-classes.md)
* [비동기에 대해 이해한다.](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/asynchronous.md)
* [DOM](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/dom-api.md), [Event](https://github.com/chaeeun037/chaeeun037.github.io/blob/master/_posts/event-api.md)의 기본 API를 이해한다.





## 요구사항 분석

* 두 명이서 틱택토 게임을 진행한다.
* 이긴 쪽의 점수가 올라간다.
* new game을 하면 하던 게임이 초기화된다.
* reset game을 하면 점수와 하던 게임이 초기화된다.
* 차례인 쪽의 점수에 표시를 한다.





## 게임 설명

* TIA TAC TOE 게임의 기본 룰을 따른다.
* 한 게임이 끝나면 다음 게임에 진 사람부터 시작한다.
* new game은 현재 게임이 처음부터 시작되고, 시작하는 차례는 유지된다.
* reset game은 현재 게임이 처음부터 시작되고, 시작하는 차례도 X로 초기화되며 점수도 초기화된다.
* 무승부일 경우 다음 차례는 X이다.





## 메모

* display grid를 사용해서 3 x 3 테이블을 쉽게 구현했다.

* O와 X를 그릴 때는 css만을 사용했다.

  * 이미지를 넣어서 쉽게 구현할지 고민했지만 성능상 css로 그리는 것이 좋을것 같다고 판단했다.
  * div 태그를 여러개 적는 것이 번거로워서 가상요소인 ::before과 ::after를 사용해서 간단하게 구현했다.

  

* CSS가 그려지기 전에 게임 결과가 먼저 뜨는 버그가 있었다.

  * 원인은 js 로직이 끝나고 css가 그려지기 때문이.
  * setTimeout()을 통해서 css가 그려지고 난 후에 로직을 수행하도록 처리했다.





## 개선사항

* 간헐적으로 setTimeout 해도 css mark 되기 전에 게임이 init되는 버그가 있다.
* 현재는 새로고침하면 점수가 reset되므로 추후에 localestorage에 저장하게 변경해보기





## 코드 리뷰

* [모듈화를 위해 전체 로직 함수로 묶기](https://github.com/chaeeun037/tic-tac-toe-js/commit/3cce68c828e55b1875c93651ba0b873b26eff1bf)

* [함수 내에서 전역변수 사용하지 않고 인자로 받아서 처리하기](https://github.com/chaeeun037/tic-tac-toe-js/commit/62fbc00a303e92275c8f59b4acec5d86e532c122)

