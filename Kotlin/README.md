# Kotlin

## Contents

- [Install](##Install)
- [Operators](##Operators)

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

[Kotlin 공식 문서][reference-kotlin]를 자주 확인하는 습관을 들이자.

## Operators

### Number

Kotlin에서 모든 숫자 타입은 `Number` 라는 supertype을 가진다.

```kotlin
// use primitive 'int' as an object
1.toLong()

// store 1 in a variable of type Number
var boxed: Number = 1
```

묵시적 형 변환은 프로그램에서 오류를 일으키는 일반적인 원인이다. 따라서 Kotlin에서는 `Number` 타입 간 묵시적 형 변환이 이루어지지 않는다.

```kotlin
val a : Short = 1
val b : Int = a
// error: type mismatch: inferred type is Short but Int was expected
```

그러므로 형 변환이 필요할 때에는 반드시 아래와 같이 명시적으로 해 주어야 한다.

```kotlin
val a : Short = 1
val b : Int = a.toInt()      // OK
```

Kotlin에서는 숫자에 \_를 사용하는 것을 허용한다. 그러므로 긴 상수들을 다음과 같이 표현할 수 있다.

```kotlin
val oneMillion = 1_000_000
val socialSecurityNumber = 999_99_9999L
val hexBytes = 0xFF_EC_DE_5E
val bytes = 0b11010010_01101001_10010100_10010010
```

### changeable and unchangeable

Kotlin에는 changeable과 unchangeable 두가지 타입의 변수가 있다. `val` 변수는 한 번 할당 가능한 변수이다.

```kotlin
val aquarium = 1
aquarium = 2
// error: val cannot be reassigned
```

`var` 변수는 값을 변경시킬 수 있다.

```kotlin
var fish = 2
fish = 58           // OK
```

위 코드에서 타입이 명시되어 있지 않음에 주목하자. Kotlin에서 타입은 컴파일러가 문맥으로부터 추론해낼 수 있다. Kotlin에서 타입을 추론하기는 하지만 컴파일 시에 특정한 타입으로 고정되고, 이후에 변경할 수 없다.

### Nullability

NPE(Null Pointer Exception)은 `null`을 만든 아버지 Tony Hoare 조차 billion-dollar mistake 라고 이야기한 적이 있을 만큼 골치아픈 오류이다.

Kotlin에서 변수의 타입을 명시적으로 지정할 경우, 기본적으로 그 변수의 값은 `null`이 될 수 없다.

```kotlin
var rocks : Int = null
// error: null can not be a value of a non-null type Int
```

변수의 값이 `null`이 될 수 있음을 나타내기 위해서 변수의 타입 뒤에 `?` 연산자를 붙여 나타낸다.

```kotlin
var marbles : Int? = null       // OK
```

`List`와 같은 자료구조를 사용할 때에는 다음과 같이 `List` 자체가 `null`이 될 수 있음과 `List`에 포함된 원소가 `null`이 될 수 있음을 구분하여 표현한다.

```kotlin
// element can be null
var lotsOfFish : List<String?> = listOf(null, null)

// list can be null
var everMoreFish : List<String>? = null

// both list and element can be null
var definitelyFish : List<String?>? = null
```

`!!` (not null assertion a.k.a. [Double bang][exclamation-mark-in-computing]) 연산자를 사용하면 컴파일 시간에 에러를 발생시키지 않고 NPE를 발생시키도록 할 수 있지만, 일반적으로 double bang 연산자를 사용하는 것은 좋지 않은 방법이다.

```kotlin
val a : Int? = null
a.toLong()
// error: only safe (?.) or non-null asserted (!!.) calls are allowed on a nullable receiver of type Int?

val a : Int? = null
a!!.toLong()
// kotlin.KotlinNullPointerException
```

Kotlin에서는 `?` 연산자를 활용해 멋진 null testing을 할 수 있다. 이는 `if-else` 문을 사용해야하는 부담을 덜어준다.

예를 들어, 메소드에 접근함과 동시에 주어진 객체 혹은 변수가 `null` 인지 확인할 수 있다. 아래 예제에서 변수 `fishFoodTreats`의 값이 `null`이 아니라면 `dec()` 함수를 수행한 값을 반환하고, `null`이라면 `dec()` 함수는 호출되지 않고 `?:` 연산자 뒤에 있는 값 0을 반환한다.

```kotlin
fun test(): Int {
     var fishFoodTreats = 5
     return fishFoodTreats?.dec() ?: 0
 }
```

`?:` 연산자는 [Elvis operator][elvis-operator]라고 부른다.

[reference-kotlin]: http://kotlinlang.org/docs/reference/ "Reference - Kotlin Programming Language"
[exclamation-mark-in-computing]: https://en.wikipedia.org/wiki/Exclamation_mark#Computers "Exclamation mark - Wikipedia"
[elvis-operator]: https://en.wikipedia.org/wiki/Elvis_operator "Elvis operator - Wikipedia"
