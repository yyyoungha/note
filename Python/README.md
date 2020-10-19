# Python

## Contents

- [Input](##Input)
- [Output](##Output)
- [Type](##Type)

## Input

### basics

사용자 입력을 받기 위해 [`input()`][input] 함수를 사용한다. 맨 마지막에 개행문자를 제거한 문자열을 돌려준다. 화면에 출력될 문자열이 함수 인자로 올 수 있다.

```python
# 1 str
string = input('input a string : ')
```

기본적으로 [`input()`][input] 은 입력되는 모든 것을 문자열로 취급한다. 숫자가 필요하다면 명시적으로 변환해야 한다.

```python
# 1 int
integer = int(input())
```

### taking multiple inputs

구분자를 공백 문자로 하여 여러개를 입력받는 경우 `split()` 함수를 사용한다. 형 변환시에는 `map()` 함수를 사용한다.

```python
# str, str
x, y = input().split()

# int, int, int
a, b, c = map(int, input().split())

# list(int)
a = list(map(int, input().split()))
```

### list comprehension

구분자를 개행 문자로 하여, 즉 한 줄에 하나씩 여러 줄에 걸쳐 입력받는 경우에는 반복문을 사용할 수도 있지만 list comprehension을 사용하면 더 간단하다.

```python
SIZE = 10

# usage 1: while loop
a = []
i = 0
while (i < SIZE):
    a.append(int(input()))
    i += 1

# usage 2: for loop
a = []
for i in range(SIZE):
    a.append(int(input()))

# usage 3: list comprehension
a = [int(input()) for _ in range(SIZE)]
```

한 줄에 여러 개의 입력이 있고, 이것이 여러 줄에서 반복된다면 한 줄에 여러 입력을 받기 위한 `split()`, `map()` 함수와 여러 줄에서 입력을 받는 list comprehension을 함께 사용한다.

```python
a = [list(map(int, input().split())) for _ in range(SIZE))]
```

### faster way to get input (for Competitive Programming)

`sys` 라이브러리의 `stdin` 객체의 `readline()` 함수를 사용하면 [`input()`][input] 함수보다 더 빠른 시간에 입력이 가능하다. [`input()`][input] 함수와는 다르게 개행문자도 저장되므로 `rstrip()`을 사용하는 것을 고려해야 한다.

```python
# usage 1: basic
import sys
first = sys.stdin.readline()

# usage 2: abbreviation and rstrip
import sys
readline = sys.stdin.readline
second = readline().rstrip()

# usage 3: define function
import sys
def readline():
	return sys.stdin.readline()[:-1]
third = readline()
```

### get input untill EOF

EOF까지 입력을 받고 싶다면 `sys.stdin`에 대하여 for loop 을 사용하거나 try-except 문을 사용할 수 있다.

```python
# usage 1: for loop in sys.stdin
import sys
for line in sys.stdin:
a, b = line.split()

# usage 2: try-except
while True:
    try:
        a, b = map(int, input().split())
    except:
        break
```

## Output

### basics

출력을 할 때에는 `print()` 함수를 사용한다.

```python
print("Hello World!")
```

`print()` 함수는 기본적으로 출력 후 끝에 줄 바꿈 문자를 추가한다. end 속성에 값을 지정하여 맨 끝에 올 문자를 바꿀 수 있다.

```python
print("Hello World", end="!\n")
```

### concatenate string

`print()` 함수 내에 문자열 변수를 연결하여 출력하는 방법에는 여러가지 방법이 있다. 네번째 f-strings는 Python 3.6 부터 지원한다.

```python
first = "Adversity"
second = "loss"

# usage 1: string concatenation
print(first + " and " + second + " make a man wise.")

# usage 2: %-formatting
print("%s and %s make a man wise." % (first, second))

# usage 3: str.format()
print("{} and {} make a man wise.".format(first, second))

# usage 4: f-string
print(f"{first} and {second} make a man wise.")
```

### floating point formatting

소수를 출력할 때, 소수점 아래 k번째 자리까지 출력하고 싶은 경우 %-formatting 을 활용한다.

```python
print("Mathematical constant PI : %.3f" % 3.1415926535897931)
```

반올림을 할 때 [`round()`][round] 함수를 쓸 수 있다. 주의해야 할 것은 python 3에서 [`round()`][round] 함수는 [Banker's rounding][bankers-rounding] 방식을 사용한다는 것이다.

```python
# same output: 4
round(3.5)
round(4.5)
```

## Type

### number

숫자간 진법 변환은 아래와 같이 수행한다. 첫번째 인자로 진법에 관계 없이 숫자형을 입력받은 뒤, 해당 진법으로 변환된 문자열을 반환한다. `format()` 함수의 두번째 인자로 #을 제거할 경우, 결과로 값만 반환한다.

```python
a = 10

# int to str (binary, octal, hexadecimal)
bin(a)              # '0b1010'
format(a, '#b')     # '0b1010'
format(a, 'b')      # '1010'

oct(a)              # '0o12'
format(a, '#o')     # '0o12'
format(a, 'o')      # '12'

hex(a)              # '0xa'
format(a, '#x')     # '0xa'
format(a, 'x')      # 'a'

# str to int (decimal)
int('10')           # 10
int('0b1010', 2)    # 10
int('0o12', 8)      # 10
int('0xa', 16)      # 10
```

### string

문자열 처리에 자주 쓰이는 함수들을 알아두면 각각의 기능을 직접 구현하지 않아도 되므로 개발 시간을 크게 단축시킬 수 있다. 아래 함수는 모두 인자로 부분 문자열 sub을 전달하고, 탐색할 범위 [start, end)를 지정할 수 있다.

- `count()`  
  부분 문자열 sub 이 중첩되지 않고 몇번 나타나는지를 반환한다.

- `find()`  
  부분 문자열 sub 이 등장하는 가장 _처음_ index를 반환한다. 만약 존재하지 않는다면 -1을 반환한다.

- `rfind()`  
  부분 문자열 sub 이 등장하는 가장 _마지막_ index를 반환한다. 만약 존재하지 않는다면 -1을 반환한다.

- `index()`  
  `find()`와 동일하나, 존재하지 않는다면 -1 대신 [`ValueError`][value-error] 예외를 발생시킨다.

- `rindex()`  
  `rfind()`와 동일하나, 존재하지 않는다면 -1 대신 [`ValueError`][value-error] 예외를 발생시킨다.

```python
# count
a = 'I love python programming'

a.count('o')                # 3
a.count('o', 5)             # 2
a.count('python', 10, 15)   # 0

a = 'aaaaa'

a.count('aa')       # 2

# find, rfind
a = 'I was lost, I was trying to find the answer'
a.find('I was')     # 0
a.rfind('I was')    # 12

a.find('yeah')      # -1
a.rfind('yeah')     # -1

a.index('I was')    # 0
a.rindex('I was')   # 12

a.index('yeah')     # ValueError
a.rindex('yeah')    # ValueError
```

다음 함수는 문자열이 어떤 문자로 구성되어 있는지 확인한다. 공백은 알파벳이나 숫자로 취급하지 않는다. 특히 `isdecimal()`, `isdigit()`, `isnumeric()`은 의미가 헷갈릴 수 있다. 뒤에 있을수록 더 넓은 범위를 포함한다.

- `isdecimal()`
- `isdigit()`
- `isnumeric()`  
  `isdecimal()` 함수는 모든 문자가 십진수 문자(0-9) 이고, 적어도 하나의 문자가 존재하는 경우 `True`, 그렇지 않으면 `False` 를 반환한다. `isdigit()` 함수와 `isnumeric()`은 이보다 더 넒은 범위를 포함한다.

- `isalpha()`  
  모든 문자가 알파벳이고, 적어도 하나의 문자가 존재하는 경우 `True`, 그렇지 않으면 `False` 를 반환한다.

- `isalnum()`  
  `isalpha()`, `isdecimal()`, `isdigit()`, `isnumeric()` 중 하나라도 `True`를 반환하면 `True`, 그렇지 않으면 `False` 를 반환한다.

```python
# isdecimal(), isdigit(), isnumeric()
a = '10'
b = '3²'
c = '½'

a.isdecimal()   # True
a.isdigit()     # True
a.isnumeric()   # True

b.isdecimal()   # False
b.isdigit()     # True
b.isnumeric()   # True

c.isdecimal()   # False
c.isdigit()     # False
c.isnumeric()   # True
```

[input]: https://docs.python.org/3/library/functions.html#input "input(): Built-in Functions — Python 3.9.0 documentation"
[round]: https://docs.python.org/3/library/functions.html?highlight=round#round "round(): Built-in Functions — Python 3.9.0 documentation"
[bankers-rounding]: https://en.wikipedia.org/wiki/Rounding "Banker's rounding - wikipedia"
[value-error]: https://docs.python.org/3/library/exceptions.html#ValueError "ValueError: Built-in Exceptions — Python 3.9.0 documentation"
