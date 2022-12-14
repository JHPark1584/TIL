import * as THREE from 'three';
import Stats from 'stats.js';
import dat from 'dat.gui';

// ----- 주제: AxesHelper, GridHelper

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

	// Scene
	const scene = new THREE.Scene();

	// Camera
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.z = 5;
	camera.position.y = 1;

	scene.add(camera);
	
	// Light
	const ambientLight = new THREE.AmbientLight('white', 0.5);
	scene.add(ambientLight);
	const directionallight = new THREE.DirectionalLight(0xffffff, 1);
	directionallight.position.x = 1;
	directionallight.position.z = 2;
	scene.add(directionallight);
	

	// Mesh
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshStandardMaterial({
		color: 'seagreen'
	});
	const mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 2;
	scene.add(mesh);

    // Stats
    const stats = new Stats();
    document.body.append(stats.domElement);

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

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const time = clock.getElapsedTime();

        stats.update(); // 출력되는 정보를 업데이트
		mesh.rotation.y = time;

        camera.lookAt(mesh.position);

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}

	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	window.addEventListener('resize', setSize);

	draw();
}
