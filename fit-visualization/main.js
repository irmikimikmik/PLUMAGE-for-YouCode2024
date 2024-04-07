import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


let scene, camera, renderer;
let person, clothes;

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('assets/person_model.glb', (gltf) => {
    person = gltf.scene;
    scene.add(person);
    });

    loader.load('assets/pants.glb', (gltf) => {
    clothes = gltf.scene;
    // Adjust position and scale of clothes to fit the person
    // For simplicity, let's assume the clothes fit perfectly for now
    scene.add(clothes);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    //if (person && clothes) {
    // Rotate the person and clothes
    //person.rotation.y += 0.01;
    //clothes.rotation.y += 0.01;
    //}
    renderer.setClearColor()
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}