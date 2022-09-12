import * as THREE from 'three';

export default function example() {
    
    // Renderer
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialiazs: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(window.devicePixelRatio); // 실제 픽셀, 기기 픽셀 표현 비
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 픽셀 비율 함수

    // Scene
    const scene = new THREE.Scene();

    // Camera
    // const camera  = new THREE.PerspectiveCamera(
    //     75, // FOV
    //     window.innerWidth / window.innerHeight, // 종횡비 aspect
    //     0.1, // near
    //     1000 // far
    // )
    // camera.position.x = 1;
    // camera.position.y = 2;
    // camera.position.z = 5;
    // scene.add(camera) // scene에 카메라 추가

    const camera = new THREE.OrthographicCamera(
        -(window.innerWidth / window.innerHeight), // left
        window.innerWidth / window.innerHeight, // right
        1, // top
        -1, // bottom
        0.1, // near
        1000, // far
    )

    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);
    // camera.zoom = 0.5;
    // camera.updateProjectionMatrix
    scene.add(camera)

    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ // 빛에 영향을 안받는 제질
        color: 0x285078
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 그리기
    renderer.render(scene, camera);

    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix(); // 변화가 일어나면 재랜더
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener('resize', setSize); // 사이즈가 변하면 setSize 실행
}