# Madras-check

## 파일 확장자 차단 

### 기능 구현
<details>
<summary>GIF</summary>

![](https://user-images.githubusercontent.com/66004962/105621911-ec035200-5e4f-11eb-9186-aa162b87369c.GIF)

</details> 

[배포링크](https://bit.ly/3qK2NhC)

### 필수 구현 내용

<details>
<summary>고정 확장자의 default는 unCheck</summary>

- 고정 확장자(fixed) 테이블에 check 필드를 만들고 기본 값을 0으로 설정했습니다.

</details>

<details>
<summary>고정 확장자를 Check or Uncheck를 할 경우 DB에 저장 (상태 유지)</summary>

- 체크 버튼 클릭시 해당되는 확장자의 id값을 보냈습니다.
- id값에 해당하는 확장자를 찾고 check 필드를 확인해서 0일때 1로, 1일때 0으로 업데이트 하도록 했습니다.

</details>

<details>
<summary>확장자 최대 입력 길이는 20자리</summary>

- 클라이언트에서 확장자 입력창의 input 옵션으로 최대길이(maxLength)를 설정해 주었습니다.

</details>

<details>
<summary>추가버튼 클릭시 db에 저장, 아래쪽 영역에 표시</summary>

- 입력받은 확장자 이름이 커스텀확장자(custom) 테이블에 존재하는지 확인
- 이미 있다면 400에러를 보내고 클라이언트에서 경고창을 표시했습니다.
- 없다면 데이터를 추가하고 클라이언트 화면에 바로 보이도록 했습니다.

</details>

<details>
<summary>커스텀 확장자는 최대 200개까지 추가 가능</summary>

- 확장자를 추가하기 전에 우선 커스텀확장자(custom) 테이블에서 받아온 데이터의 길이를 확인했습니다.
- 추가할 때의 길이가 200 보다 크다면 확장자를 추가할 수 없도록 경고창을 표시했습니다.

</details>

<details>
<summary>확장자 옆 X를 클릭시 DB에서 제거</summary>

- 해당 확장자의 id값을 받아서 커스텀확장자(custom) 테이블에서 제거했습니다.

</details>



### 추가 고려사항
- 확장자 추가를 할때 실수로 고정 확장자와도 겹치는 일이 생기지 않도록 했습니다.
- 확장자를 빈칸으로 추가하거나 200개를 초과했을때 경고 메시지를 띄어서 추가되지 못하도록 했습니다.
- 추가한 확장자가 칸을 넘어가면 스크롤 할 수 있도록 했습니다.

## [API 문서](https://app.gitbook.com/@jwkim775/s/madras-check/)

## DB diagram
![img](https://user-images.githubusercontent.com/66004962/105621933-19500000-5e50-11eb-9484-e6bb20557530.png)


## 기능 Flow
![img](https://user-images.githubusercontent.com/66004962/105621941-2cfb6680-5e50-11eb-9912-4ef2d612c388.png)

