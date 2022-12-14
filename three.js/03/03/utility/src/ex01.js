import * as THREE from 'three';

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
	camera.position.z = 0;
	camera.position.y = 3;
	camera.position.x = 1;

	scene.add(camera);
	
	// Light
	const ambientLight = new THREE.AmbientLight('white', 0.5);
	scene.add(ambientLight);
	const directionallight = new THREE.DirectionalLight(0xffffff, 1);
	directionallight.position.x = 1;
	directionallight.position.z = 2;
	scene.add(directionallight);
	
	// AxesHelper
	const AxesHelper = new THREE.AxesHelper(3);
	scene.add(AxesHelper);

	// Gridhelper
	const gridHelper = new THREE.GridHelper(5);
	scene.add(gridHelper);

	// Mesh
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshStandardMaterial({
		color: 'seagreen'
	});
	const mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = 2;
	camera.lookAt(mesh.position);
	scene.add(mesh);

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const time = clock.getElapsedTime();

		mesh.rotation.y = time;

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
