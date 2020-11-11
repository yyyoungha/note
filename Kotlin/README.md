# Kotlin

## Contents

- [Install](##Install)

## Install

Kotlin 프로그램을 실행하기 위해서는 JDK 가 설치되어 있어야 한다.

### JDK and JRE

- JRE(Java Runtime Environment): Java 혹은 Kotlin 프로그램을 실행시키기 위해 필요한 실행 환경이다.
- JDK (Java Development Kit): JRE를 포함하고 있으며, Kotlin 프로그램을 작성하기 위한 개발 도구까지 포함하고 있다.

### REPL(read-eval-print loop)

컴파일러와는 달리, `Ctrl + Enter` (맥에서는 `Command + Enter`) 키를 입력했을 때 현재까지 입력한 부분까지 코드를 실행한다.

### Hello World

```kotlin
fun printHello () {
   println ("Hello World")
}

printHello()
```

- 함수를 나타내는 키워드 `fun`
- 괄호 안에는 함수 인자가 위치한다.
- 마지막에 세미콜론(;)과 같은 문장 부호가 오지 않는다.

늘 새로운 것을 배우면 [Kotlin 공식 문서][reference-kotlin]를 확인하는 것이 유용하다.

[reference-kotlin]: http://kotlinlang.org/docs/reference/ "Reference - Kotlin Programming Language"
