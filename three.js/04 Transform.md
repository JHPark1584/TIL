# 04 Transform



## :one: 위치 이동

>  위치 이동은 `.position.set` or `.position.x`, `.y`, `.z` 로 이루어진다.

```js
mesh.position.set(-1, 2, -5); // 위치 조정은 position
mesh.position.x = -1;
mesh.position.y = 2;
mesh.position.z = -5;
```



### :package:[Vector3](https://threejs.org/docs/index.html?q=vector3#api/en/math/Vector3) 

>  3차원 공간에서의 점

### :heavy_plus_sign: 참고 사항

> mesh의 원점과의 거리
>
> `console.log(mesh.position.length());`
>
> 특정 벡터 위치와의 거리
>
> `console.log( mesh.position.distanceTo(new THREE.Vector3(1, 2, 0)));`
>
> 카메라 위치와의 거리
>
> `console.log( mesh.position.distanceTo(camera.position) );`



## :two: 크기 조정

> 크기 조정은 `.scale.set` or `.scale.x`, `.y`, `.z` 로 이루어진다.



## :three: 회전

> 회전 조정은 `.rotation.x` 와 같이 이루어진다.
>
> 절대좌표 x,y,z 축 기준으로 이루어진다.



```js
// 45도 회전 시키기
mesh.rotation.x = THREE.MathUtils.degToRad(45);
mesh.rotation.x = Math.PI / 4;
```



### :book: 상대 좌표 축 분리시키기

> `mesh.rotation.reorder('YXZ');`



## :four: 그룹 만들기

> 세트로 묶어서 관리하기

세트로 묶은 대상은 같이 이동,회전하게 된다.

### :book: 그룹 생성

> `const group1 = new THREE.Group();`



### :book: 그룹 추가

> `group2.add(box2, group3);` 쉼표를 통해 여러개 동시에 추가 가능



### :heavy_plus_sign: 클론 생성

> `const box2 = box1.clone();` // box1의 클론