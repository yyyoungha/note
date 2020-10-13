# Python

## Contents

- [Input](#Input)
- [Output](#Output)

## Input

사용자 입력을 받기 위해 [input()][input] 함수를 사용한다. 맨 마지막에 개행문자를 제거한 문자열을 돌려준다. 화면에 출력될 문자열이 함수 인자로 올 수 있다.

```python
# 1 str
string = input('input a string : ')
```

기본적으로 [input()][input] 은 입력되는 모든 것을 문자열로 취급한다. 숫자가 필요하다면 명시적으로 변환해야 한다.

```python
# 1 int
integer = int(input())
```

구분자를 공백 문자로 하여 여러개를 입력받는 경우 split() 함수를 사용한다. 형 변환시에는 map() 함수를 사용한다.

```python
# str, str
x, y = input().split()
# int, int, int
a, b, c = map(int, input().split())
# list(int)
a = list(map(int, input().split()))
```

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

한 줄에 여러 개의 입력이 있고, 이것이 여러 줄에서 반복된다면 한 줄에 여러 입력을 받기 위한 split(), map() 함수와 여러 줄에서 입력을 받는 list comprehension을 함께 사용한다.

```python
SIZE = 10
a = [list(map(int, input().split())) for _ in range(SIZE))]
```

sys 라이브러리의 stdin 객체의 readline() 함수를 사용하면 input() 함수보다 더 빠른 시간에 입력이 가능하다. input() 함수와는 다르게 개행문자도 저장되므로 rstrip()을 사용하는 것을 고려해야 한다.

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

EOF까지 입력을 받고 싶다면 sys.stdin에 대하여 for loop 을 사용하거나 try-except 문을 사용할 수 있다.

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

출력을 할 때에는 print() 함수를 사용한다.

```python
print("Hello World!")
```

print() 함수는 기본적으로 출력 후 끝에 줄 바꿈 문자를 추가한다. end 속성에 값을 지정하여 맨 끝에 올 문자를 바꿀 수 있다.

```python
print("Hello World", end="!\n")
```

print() 함수 내에 문자열 변수를 연결하여 출력하는 방법에는 여러가지 방법이 있다. 네번째 f-string은 Python 3.6 부터 지원한다.

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

소수를 출력할 때, 소수점 아래 k번째 자리까지 출력하고 싶은 경우 %-formatting 을 활용한다.

```python
print("Mathematical constant PI : %.3f" % 3.1415926535897931)
```

[input]: https://docs.python.org/3/library/functions.html#input "open python official docs"
