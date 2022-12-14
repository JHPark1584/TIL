# 05 Geometry(모양)



## :one: OrbitControl

> 확대, 카메라 이동, 등 기본적인 컨트롤

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // 줌인 줌 아웃 기본 컨트롤

// Controls
const controls = new OrbitControls(camera, renderer.domElement); // 카메라, 렌더러 돔 엘리먼트(캔버스)
```



### :book: [BoxGeometry](https://threejs.org/docs/index.html?q=Box#api/en/geometries/BoxGeometry)

> THREE.BoxGeometry(1,1,1, 16, 16, 16);
>
> * 4~6번째 인자는 mesh를 몇칸으로 나누는지 결정한다.



### :book: [CircleGeometry](https://threejs.org/docs/index.html?q=Circle#api/en/geometries/CircleGeometry)





### :heavy_plus_sign: Mesh material 추가 속성

> wireframe: true
>
> * 와이어 형태의 3d 모델이 보인다.
>
> side: THREE.DoubleSide
>
> * 양면 다 보인다.
>
> flatShading: true,
>
> * mesh마다 각이져보이게 해줌



## :two: geometry position

> Float32Array: 특정 형식만 취급하는 array

`geometry.attributes.position.array)` 

* geometry를 구성하는 점들의 좌표값 배열

`geometry.attributes.position.needsUpdate = true;`

* draw 메소드에서 위치값 변화 여부를 true 설정해야 변화가 일어남