# Today I Learned

### Git

- 원격 저장소 등록

```
$ git remote add origin https://github.com/JHPark1584/TIL.git
```

- 원격 저장소 정보 조회
```
$ git remote -v
```

- 원격 저장소 연결 삭제

```
$ git remote rm origin
```

### git push

```
# origin이라는 이름의 원격저장소의 master 브랜치에 push하기
$ git push origin master

# -u 옵션을 사용한 후에는 저장소 이름(origin), 브랜치 이름(master)을 생략 가능함
$ git push - u origin master
# 그 이후부터는
$ git push
```

>!!! 주의 !!!
> * 원격 저장소에서 수정작업을 하지 않는다.
>   * 로컬 저장소에서 변경을 하고 이를 원격 저장소에 반영하는 방식을 취한다.
> * 반드시 로컬 저장소에서 git add -> git commit -> git push 단계로 업로드한다.

----

### .gitignore

> 특정 파일 혹은 폴더에 대해 Git이 버전 관리를 하지 않도록 설정

#### .gitignore 에 작성하는 내용들
* 민감한 개인정보가 담긴 파일(전화번호, 각종 비밀번호, API KEY 등)
* 운영체제에서 사용되는 파일들
* IDE(통합개발환경) 혹은 Text 에디터등에서 활용하는 파일
    * pycharm -> .idea 폴더
* 개발언어/ 프레임워크에서 사용되는 파일
    * python 가상환경... 굳이 올릴필요가 없는것들!
#### 주의사항
* 반드시 파일 이름을 `.gitignore`로 작성
* `.gitignore` 위치는 `.git`과 동일한 폴더에 존재
* 제외하고 싶은 파일들을 `add`하기 전에 `.gitignore` 에 작성

## .gitignore 쉽게 작성하기
