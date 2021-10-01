# Quest 03. 자바스크립트와 DOM

---

## Checklist
1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요? - 넷스케이프 커뮤니케이션즈 코퍼레이션의 Brendan Eich
가 모카(Mocha)를 개발 > 라이브스크립트(LiveScript) > 자바스크립트(JavaScript)로 이름이 바뀌었다. 2010년대 중반
이후 V8 JS Engine의 버프를 받아 계속 발전하고 있다. 또한 과거에는 프론트 엔드에서만 사용하는 프로그래밍 언어에 
불과했지만 현재는 Node.js를 통해 백엔드 언어로써도 재탄생했다.
   * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
     1. ES5(2009) : 배열에 forEach, map, filter, reduce, some, every와 같은 메소드, Object에 대한 getter / setter, 
     strict모드 지원, JSON을 지원하기 시작했다.
     2. ES6(2015) : let, const 키워드 추가, arrow 문법 지원, iterator / generator 추가, module imprt / export 추가,
     promise 등이 도입 됬다.
     3. ES2016(ES7) : 제곱연산자 (**), Array.includes 추가되었다.
     4. ES2017(ES 8) : async - await이 추가되었다.
   * 자바스크립트의 표준은 어떻게 제정될까요? - ECMA International 표준화 기구에 의해서 제정되며 자바스크립트의 표준은
ECMAScript 이다.
2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요? - 자바스크립트는 C언어, 자바와 다르게 primitive
type은 immutable value이다. 그리고 별도로 type을 명시하지 않는다. return 값에 대한 type도 명시하지 않아도 되는 등
여러가지 차이점이 많다.
   * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요? - while, do while, for을 사용하면 된다.
3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
    - `element.classList.add('class name')` : CSS class 추가하기
    - `element.classList.remove` : CSS class 삭제하기
    - `element.classList.toggle` : toggle을 통해 삭제했다 없앴다 할 수 있다.
   * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요? [[참고사이트]](https://github.com/afarkas/html5shiv)
     * HTML5shiv를 사용하면 IE 6-9, Safari 4.x (및 iPhone 3.x) 및 Firefox 3.x에 기본 HTML5 스타일을 제공한다.
     * HTML5shiv란? 새로운 HTML5 sectioning element들을 IE9 이전 버전에서 동작할 수 있도록 해주는 라이브러리이다.
     * html5shiv.js : createElement(), document.createElement(), document.createDocumentFragment, monkeypatches
     기술이 포함되어 있으며 IE9 이하 버전에 대한 기본적인 스타일링을 제공한다.
     * 위 기술을 다운받아 사용할 수 있지만 예외 처리로 호환성 문제가 있어 지원이 안된다는 메시지를 출력하기도 한다.
     
   
4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요? - {} block 안에 선언된 변수는 지역변수 (block scope) 이며
변수 앞에 global을 붙이면 전역 변수 (global scope) 가 된다.
   * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
     * `var` = 변수가 선언되기 전에 값을 저장할 수 있고 값을 할당하기 전에 출력할 수 있다. 이와 같은 기능을
     var hoisting이라고 한다. (var hoisting이란? 어디에 선언되었는지와 상관없이 항상 선언을 제일 위로 끌어올려주는것을
     말한다.)
5. 자바스크립트의 익명 함수는 무엇인가요? - 익명함수는 자바스크립트의 함수표현식중 하나이고 즉시 실행이 필요할 때 사용한다.
선언식을 print라는 변수에 함수를 대입할 수 있다는 뜻이다. 
선언식 `const print = function(){ console.log('print');};`는 `let print=function(){console.log('print');}`로
바꿔 쓸 수 있다.
   * 자바스크립트의 Arrow function은 무엇일까요?
   ```jav
   const simpePrint = function(){
    console.log('simplePrint!');
    };
   // 위와 같이 번거로운 함수 표현을 아래처럼 Arrow를 사용하여 표현할 수 있다.
   const simplePrint = () => console.log('simplePrint!');
   ```

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
  - [[Quest 03-1 완료]](https://github.com/hwaku/WebDevCurriculum/blob/master/Quest03/quest_03-1.js)
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.
    - [[Quset 03-2 완료]](https://github.com/hwaku/WebDevCurriculum/blob/master/Quest03/skeleton/quest.html)
## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
* [[Advanced 완료]](https://github.com/hwaku/WebDevCurriculum/blob/master/Quest03/Advanced.html)
