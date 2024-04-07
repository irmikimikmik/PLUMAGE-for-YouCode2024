import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 30;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


let person, clothes;
const loader = new GLTFLoader();
loader.load('assets/jin.gltf', (gltf) => {
    person = gltf.scene;
    const texture = new THREE.TextureLoader().load('assets/jin_BaseColor.png')
    
    person.traverse((child) => {
        if (child.isMesh) {
            //child.material.map = texture;
            const material = new THREE.MeshBasicMaterial({ map: texture });
            child.material = material;
        }
    });
    scene.add(person);
});

//loader.load('assets/pants.glb', (gltf) => {
//    clothes = gltf.scene;
    // Adjust position and scale of clothes to fit the person
    // For simplicity, let's assume the clothes fit perfectly for now
//    clothes.traverse((child) => {
//        if (child.isMesh) {
//            // Example: Set color to red
//            const material = new THREE.MeshBasicMaterial({ color: 0xf0fff0 });
//            child.material = material;
//        }
//    });
//    scene.add(clothes);
//});

function animate() {
	requestAnimationFrame( animate );

	//person.rotation.x += 0.01;
	//person.rotation.y += 0.01;
    //clothes.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();