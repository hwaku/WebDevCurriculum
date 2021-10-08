# Quest 05. OOP 특훈

## Checklist
1. 관심사의 분리 원칙이란 무엇인가요? 웹에서는 이러한 원칙이 어떻게 적용되나요?
   - 관심사 분리(Separation of Concerns) 원칙 : 프로그램이 고유한 섹션을 가져야 한다는
   아이디어에 중점을 둔 소프트웨어 개발의 지침 원칙이며, 각 섹션은 그 자체의 관심사에 대한
   책임이 있다.
   - 웹에서의 원칙 적용
     - HTML과 CSS 분리
       ```text
       HTML에 CSS Class를 바로 적용하지 않고 CSS파일에서 Class를 처리할 수 있게한다.
       ```
     - CSS와 JavaScript 분리
       ```text
       1. 요소를 대상으로 할 때 일반적으로 ID(가능한 경우)를 대상으로 하는 것을 선호하며
       해당 ID 앞에 js를 붙인다. 이방법은 모든 사람이 코드를 읽었을때 해당 요소가 자바스크립트로
       연관된다는 것을 인지 시켜준다.
       ```
       `<div id="js-my-element" class="my-element"` or `<div class="my-element js-my-element">`
     
2. 객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?
   - 객체지향의 SOLID 원칙
     1. S - 단일 책임 원칙 (Single responsibility principle) : 한 클래스는 하나의 기능만 가지며
     하나의 기능을 수행하는데 역할을 집중해야한다. 즉, 어떤 변화에 의해 클래스를 변경해야 하는 이유는
     오직 하나뿐이어야 한다.
     2. O - 개방-폐쇄의 원칙 (Open/Closed Principle) : 소프트웨어의 구성 요소는 확장에 열려있고,
     변경에는 닫혀있어야 한다는 원칙이다. 즉, 요구사항의 변경이나 추가사항이 발생하더라도 기존
     구성요소는 수정이 일어나지 말아야 하며, 기존 구성요소를 쉽게 확장해서 재사용할 수 있어야
     한다는 뜻이다.
     3. L - 리스코프 치환 원칙 (The Liskov Substitution Principle) : 서브 타입은 언제나 기반 타입과
     호환될 수 있어야한다. 
     4. I - 인터페이스 분리 원칙 (Interface Segregation Principle) : 한 클래스는 자신이 사용하지 않는
     인터페이스는 구현하지 말아야 한다는 원리이다. 즉 어떤 클래스가 다른 클래스에 종속될 때에는 가능한
     최소한의 인터페이스만을 사용해야 한다.
     5. D - 의존성 역전의 원칙 (Dependency Inversion Principle) : 구조적 디자인에서 발생하던
     하위 레벨 모듈의 변경이 상위 레벨 모듈의 변경을 요구하는 위계관계를 끊는 의미의 역전이다.
     실제 사용 관계는 바뀌지 않으며, 추상을 매개로 메시지를 주고 받음으로써 관계를 최대한 느슨하게
     만드는 원칙이다.
   - 원칙의 예  
     [SRP 예제 참고링크](https://webdoli.tistory.com/210?category=959968)  
     [OCP 예제 참고링크](https://webdoli.tistory.com/211?category=959968)  
     [LSP 예제 참고링크](https://webdoli.tistory.com/212?category=959968)  
     [ISP 예제 참고링크](https://webdoli.tistory.com/213?category=959968)  
     [DIP 예제 참고링크](https://webdoli.tistory.com/214?category=959968)  
     [예제 참고링크1](https://sehun-kim.github.io/sehun/solid/)  
     [예제 참고링크2](https://victorydntmd.tistory.com/291)  
     [예제 참고링크3](https://www.nextree.co.kr/p6960/)
3. 로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?
  - 로컬 스토리지 : 간단한 키와 값을 저장할 수 있게 HTML5에서 추가된 저장소이며 사용자가 데이터를 삭제하지
않는 한 영구적으로 클라이언트에 저장되어있다.
  - 로컬 스토리지 내용 확인방법 : DevTools(F12) > Application 탭 > 저장소 > 로컬 저장소에서 확인 가능하다.