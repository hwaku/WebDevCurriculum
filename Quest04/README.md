# Quest 04. OOP의 기본

## Introduction
* 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics
* 객체지향 프로그래밍
  * 프로토타입 기반 객체지향 프로그래밍
  * 자바스크립트 클래스
    * 생성자
    * 멤버 함수
    * 멤버 변수
  * 정보의 은폐
  * 다형성
* 코드의 재사용

## Resources
* [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
* [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
* [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
* [Class Composition](https://alligator.io/js/class-composition/)
* [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist
1. 객체지향 프로그래밍은 무엇일까요?
    - Object Oriented Programming(객체지향 프로그래밍)은 프로그램 설계 방법중에 하나라고 이해했다.
    - 프로그래밍 시 단순히 데이터와 처리방법으로 나누지 않고 객체라는 단위로 나누어 서로 상호작용할 수
   있으며 역할을 수행할 수 있다.
* `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
  * 객체 내부에서 외부에 의한 변경이나 간섭을 막기 위함이다. 예를 들어 내부에 고정값이 필요하다고 가정해보자.
  고정값이 외부에 의해 변경이 된다면 시스템에 큰 오류가 발생할 수 있을 것이다.
  또한, 정보 은닉을 통해서 복잡성을 덜어줄 수 있다. 완성된 클래스를 사용하는 개발자는 private 멤버 및 메서드를
  알 필요가 없기 때문에 복잡성이 줄어든다.
* 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
  * 다형성(Polymorphism)은 특정 기능을 **선언(설계)부분**과 **구현(동작)부분**으로 분리한 후 구현 부분을
  다양한 방법으로 만들어 선택하고 사용할 수 있게 하는 기능이다. 여기서 선언 부분은 Interface 라고도 한다.
  선언 부분은 구현 코드가 전혀 없는 텅 빈 상태이며 일종의 지켜야 할 약속(규약)으로 가득 찬 일종의 규약 문서이다.
  개발자는 문제를 해결하는 구현 코드를 선언부분에 맞게 구현하기만 하면 된다. 선언 부분과 구현 부분은 1:N 의
  다형성 관계라 형성 된다.
* 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
  * 자식 객체가 부모 객체의 변수와 함수를 그대로 물려 받는 것을 말한다. 상속에는 class와 prototype이 있다.
  * 부모 객체와 자식 객체의 공통적인 함수 및 필드를 상속하여 자식 객체에서 소스코드의 양이 줄어들고 기능을 확장하는데 용이하다.
  만약 상속 구조가 복잡해지면 부모 객체의 변화가 자식 객체에 주는 영향을 예측하기 힘들어 적절하지 못한 상속을 하면
  의도했던 것과 다르게 동작할 수 있다는 단점이 있다.
* OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
  * Composition이란 객체들을 조합하여 새로운 객체를 만드는 것이다.
  * 상속의 단점인 캡슐화를 깨뜨리지 않고 기존 클래스의 변화에 영향이 적어져 안정적이다.
2. 자바스크립트의 클래스는 어떻게 정의할까요?
    - class 선언
   ```javascript
   class Hwaku{
    constructor(name, age){
     this.name = name;
     this.age = age;
    }
   }
   ```
   - class 표현식 (class name을 정의할 수도 있고 정의하지 않을 수도 있다.)
   ```javascript
   // unnamed
   let Hwaku = class {
    constructor(name, age){
     this.name = name;
     this.age = age;
    }
   };
   
   // named
   let Hwaku = class Hwaku2{
   constructor(name, age){
     this.name = name;
     this.age = age;
    }
   };
   ```
* 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
  * 객체지향 프로그래밍의 한 형태의 갈래로 클래스가 없다. 상속을 사용하지 않고 객체를 원형(프로토타입)
  으로 하여 복제의 과정을 통해 객체의 동작 방식을 다시 사용할 수 있다.
  * 프로토타입 기반 프로그래밍은 클래스리스(class-less), 프로토타입 지향(prototype-oriented) 혹은 인스턴스
  기반(instance-based) 프로그래밍이라고도 한다.
* 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
  * class 문법이 추가되었지만 class 기반으로 변한 것은 아니다. class 키워드가 겉은 class 이더라도
  내부적으로 프로토타입 기반으로 구성되어있다.
  * 클래스는 런타임에 인스턴스화 할 수 있는 형식을 정의하고 프로토타입 자체는 객체 인스턴스이다.
  * 프로토 타입 기반 > 클래스 기반 변경은 쉽다, 클래스 기반 > 프로토 타입 기반 변경은 거의 불가능하다.
  * 프로토 타입 기반 언어는 동적 타입 언어이며, 클래스 기반 언어는 정적 타입 언어이다.

## Quest
* 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
* 요구사항은 다음과 같습니다:
  * 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  * 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  * 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  * 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  * 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  * Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced
* 객체지향의 역사는 어떻게 될까요?
* Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?
