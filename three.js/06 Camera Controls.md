# 06 Camera Controls



## :one: [OrbitControls](https://threejs.org/docs/index.html?q=orbit#examples/en/controls/OrbitControls)

.

### :control_knobs: 활성화

```js
const controls = new OrbitControls(camera, renderer.domElement);
```



### :control_knobs: damping 활성화 (부드러운 카메라 시점 변환)

```js
controls.enableDamping = true;

// draw 함수
function draw() {
    controls.update(); // update가 일어나야 적용됨
}
```



### :control_knobs: enableZoom

> 기본 값은 true. false시 줌인, 줌아웃이 해제된다.



### :control_knobs: maxDistance, minDistance

> 줌인, 줌 아웃 범위 설정



### :control_knobs: minPolarAngle, maxPolarAngle

> 위 아래 방향 제한



### :control_knobs: target.set()

> 회전 중심점 이동
>
> * `controls.target.set(2, 2, 2);`



### :control_knobs: autoRotate

> true 시 활성화, autoRotateSpeed로 회전 속도 설정



## :two: [TrackballControls](https://threejs.org/docs/index.html?q=track#examples/en/controls/TrackballControls)

> 트랙볼로 컨트롤 하는 느낌



## :three: [FlyControls](https://threejs.org/docs/index.html?q=fly#examples/en/controls/FlyControls)

> wasd 이동,
>
> 좌클릭, 우클릭 으로 전후 이동
>
> r,f 로 상하 이동
>
> q,e로 각도 변화

`controls.rollSpeed`

* 회전 속도

`controls.movementSpeed`

* 이동 속도

`controls.dragToLook = True`

* 마우스 이동이 아닌 드래그로 방향전환

## `중요`

```js
controls.update(delta); 
```

시간에 따른 갱신이 이루어져야 제대로 보인다.



## :four: [FirstPersonControls](https://threejs.org/docs/index.html?q=first#examples/en/controls/FirstPersonControls)

`controls.movementSpeed`

* 이동속도

`controls.activeLook = false;`

* 마우시 시점 고정. 움직이기만 가능

`controls.lookSpeed = 0.1;`

* 카메라 이동 속도

`controfls.autoForward = true;`

* 자동 이동



## :five: [PointerLockControls](https://threejs.org/docs/index.html?q=Pointer#examples/en/controls/PointerLockControls) 

```js
controls.domElement.addEventListener('click', () => {
    controls.lock();
});
controls.addEventListener('lock', () => {
    console.log('lock!');
});
controls.addEventListener('unlock', () => {
    console.log('unlock!');
})
```

> lock 으로 시점 이동 활성화/비활성화



## :six: [DragControls](https://threejs.org/docs/index.html?q=Drag#examples/en/controls/DragControls)

> drag로 옮기기.



### :control_knobs: 컨트롤 설정

```js
const controls = new DragControls(meshes ,camera, renderer.domElement);
```

* meshes라는 속성이 추가로 필요하다 ( 드래그 이동 대상 )



### :control_knobs: 드래그 대상 특정화 하기

```js
controls.addEventListener('dragstart', e => {
    console.log(e.object.name);
})
```

- 드래그 이벤트에 반응하여 콜백 실행.



### :seven: PointerLock에 wasd 움직임 추가하기



### :gear: 키 컨트롤

```js
export class KeyController {
    constructor() {
        // 생성자
        this.keys = [];

        window.addEventListener('keydown', e => {
            console.log(e.code + ' 누름');
            this.keys[e.code] = true;
        }) // 배열에 추가

        window.addEventListener('keyup', e => {
            console.log(e.code + ' 뗌');
            delete this.keys[e.code];
        }) // 배열에 삭제
    }
}
```



### :joystick: 키보드 컨트롤

```js
// 키보드 컨트롤
const keyController = new KeyController();

function walk() {
    if (keyController.keys['KeyW']) {
        controls.moveForward(0.02);
    }
    if (keyController.keys['KeyS']) {
        controls.moveForward(-0.02);
    }
    if (keyController.keys['KeyA']) {
        controls.moveRight(-0.02);
    }
    if (keyController.keys['KeyD']) {
        controls.moveRight(0.02);
    }
}
```



### `중요`

walk() 함수는 draw에 추가할것!

* 계속 갱신되어 보여져야 하기에...