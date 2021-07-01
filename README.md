# TIC TAC TOE GAME
> A tic-tac-toe game developed with JavaScript



## 개발 목표

* 웹 브라우저에서 틱택토 게임을 만든다.





## 사용 기술

<img src="https://img.shields.io/badge/-HTML-%23E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/-CSS-%231572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>





## 개발 기간

2021.06.29 - 2021.07.01





## 학습 내용

[학습한 내용 보기](https://github.com/chaeeun037/chaeeun037.github.io/tree/master/_posts) // TODO: 아래 리스트에 파일 링크해보기

* 배열의 forEach, map, filter, reduce 메서드를 사용한다.
* 객체 리터럴로 객체를 구성한다.
* ES Classes로 클래스를 만든다.
* 비동기에 대해 이해한다.
* DOM, Event의 기본 API를 이해한다.





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

  

* CSS가 그려지기 전에 로직이 끝나버리는 버그가 있었다.

  * setTimeout()을 통해서 css가 그려지고 난 후에 로직을 수행하도록 처리했다.



## 개선사항

* setTimeout 해도 css mark 되기 전에 게임이 init되는 버그가 있다.
* 현재는 새로고침하면 점수가 reset되므로 localestorage에 저장하게 변경해보기

