# 03 Utility



## :one: 축, 그리드 헬퍼



### :book: AxesHelper

>  기준 축을 표시한다.

```js
	// AxesHelper
	const AxesHelper = new THREE.AxesHelper(3);
	scene.add(AxesHelper);
```



### :book: GridHelper

> 좌표 구분선을 표시한다.

```js
	// Gridhelper
	const gridHelper = new THREE.GridHelper(5);
	scene.add(gridHelper);
```



### :heavy_plus_sign: 카메라 바라보는 대상 설정

```js
camera.lookAt(mesh.position);
```

계속  추적해야 하는 경우 draw 안에 위치시킨다.

## :two: FPS 체크하기



### :book: Stats

> npm i stats.js

```js
import Stats from `stats.js`;

    // Stats
    const stats = new Stats();
    document.body.append(stats.domElement);

	function draw() {
        stats.update(); // fps를 업데이트
	}
```



## :three: GUI 컨트롤

> npm i dat.gui

```js
import dat from 'dat.gui';

// Dat GUI
    const gui = new dat.GUI();
    gui.add(mesh.position, 'y', -5, 5, 0.01).name('큐브 y'); // 조정 하고 싶은 오브젝트, 속성, 범위
    gui.add(camera.position, 'x', -10, 10, 0.01).name('카메라 X');
    gui
        .add(mesh.position, `z`)
        .min(-10)
        .max(3)
        .step(0.01)
        .name('메쉬의 z 위치');
```

