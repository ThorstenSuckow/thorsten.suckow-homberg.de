import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/addons";
import { GUI } from 'lil-gui'


export default function ThreeScene() {
    const mountRef = useRef(null);



    useEffect(() => {
        // === Basic Scene Setup ===
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);


        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        camera.position.set(30, 10, 30);
        camera.lookAt(0, 0, 0);

        const axesHelper = new THREE.AxesHelper(100); // Länge jeder Achse in Einheiten
        axesHelper.position.y = 0.001; // 1 cm über dem Grid
        axesHelper.material.depthTest = false;
        axesHelper.renderOrder = 1;
        scene.add(axesHelper);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const size = 200;       // Größe in Einheiten
        const divisions = 40;   // Anzahl der Unterteilungen
        const gridHelper = new THREE.GridHelper(size, divisions, 0x888888, 0x444444);
        scene.add(gridHelper);


        const dummyCam = new THREE.PerspectiveCamera(
            50,  mountRef.current.clientWidth/ mountRef.current.clientHeight, 5, 10);
        dummyCam.position.set(0, 10, 10); // Objektiv vor dem Würfel
        dummyCam.lookAt(0, 0, 0);       // Blickrichtung
        dummyCam.updateMatrixWorld();

        const camHelper = new THREE.CameraHelper(dummyCam);
        scene.add(camHelper);



        /*
        const gui = new GUI({ container: mountRef.current })
        const cubeFolder = gui.addFolder('Cube')
        cubeFolder.open()
        const cameraFolder = gui.addFolder('Camera')
        cameraFolder.add(camera.position, 'x', 0, 20)
        cameraFolder.add(camera.position, 'y', 0, 20)
        cameraFolder.add(camera.position, 'z', 0, 20)
        cameraFolder.open()
        */


        // === Animation Loop ===
        const animate = function () {

            requestAnimationFrame(animate);
            controls.update();
            camHelper.update(); // wichtig, wenn Dummy-Kamera bewegt wird

            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop( animate );

        // === Cleanup on component unmount ===
        return () => {

            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div style={{  width: '100%', height: '500px' }} ref={mountRef}> </div>;
}