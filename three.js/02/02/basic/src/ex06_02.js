import * as THREE from 'three';

export default function example() {
    
    // Renderer
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialiazs: true,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(window.devicePixelRatio); // 실제 픽셀, 기기 픽셀 표현 비
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 픽셀 비율 함수
    // renderer.setClearAlpha(0.5); // 불투명도. 0: 투명 1: 불투명
    // renderer.setClearColor(0xffff00); // 색상 지정

    // Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color('yellow')

    // Camera
    const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 종횡비(aspect)
		0.1, // near
		1000 // far
	);

    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;
    scene.add(camera)

    const light = new THREE.DirectionalLight(0xffffff, 1); // 라이트 색상, 밝기. 태양빛
    light.position.x = 1;
    light.position.z = 2;
    scene.add(light); // 라이트 추가

    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ // 기본 제질
        color: 0x285078
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 그리기
    let oldTime = Date.now();

    function draw() {
        const newTime = Date.now();
        const deltaTime = newTime - oldTime;
        oldTime = newTime;
        // mesh.rotation.y += 0.1; // y축 기준 0.1 회전 라디안 값
        // mesh.rotation.y += 5 * delta; // 1도 씩 돌리기 화면 주사율에 따라 다름
        // mesh.position.y += 0.5 * delta;
        mesh.rotation.y += deltaTime * 0.005;
        mesh.position.y += deltaTime * 0.001;
        if (mesh.position.y > 3) {
            mesh.position.y = 0;
        }
        renderer.render(scene, camera); // 랜더링

        // requestAnimationFrame(draw); // 다시 그리기
        renderer.setAnimationLoop(draw);
    }
    renderer.render(scene, camera);

    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix(); // 변화가 일어나면 재랜더
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener('resize', setSize); // 사이즈가 변하면 setSize 실행
    draw();
}