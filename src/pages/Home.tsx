import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Fixed sRGBEncoding

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xfcff00, 1, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Load 3D astronaut model
    const loader = new GLTFLoader();
    loader.load(
      "/assets/source/sample.glb",
      (gltf) => {
        const astronaut = gltf.scene;
        astronaut.scale.set(0.5, 0.5, 0.5);
        astronaut.position.set(0, -1, 0);
        astronaut.rotation.y = Math.PI / 4;

        astronaut.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x333333,
              emissive: 0x111111,
              metalness: 0.5,
              roughness: 0.2,
            });
          }
        });

        scene.add(astronaut);

        // Animation loop update
        const animate = () => {
          requestAnimationFrame(animate);

          targetX = mouseX * 0.001;
          targetY = mouseY * 0.001;

          // Smooth rotation of the astronaut
          if (astronaut) {
            astronaut.rotation.y += 0.005;
            astronaut.position.y = Math.sin(Date.now() * 0.001) * 0.1;
          }

          renderer.render(scene, camera);
        };

        animate();
        setIsLoading(false);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error("Error loading model:", error);
        setIsLoading(false);
      }
    );

    // Handle mouse movement
    let mouseX = 0,
      mouseY = 0;
    let targetX = 0,
      targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          }
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas for 3D rendering */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="text-white">Loading 3D model...</div>
        </div>
      )}

      {/* Brand logo */}
      <div className="absolute top-8 left-8 z-30">
        <h2 className="text-white text-xl font-bold">spotdly</h2>
      </div>

      {/* Circular text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative w-72 h-72">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
            <path
              id="textPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />
            <text>
              <textPath xlinkHref="#textPath" className="text-xs fill-white opacity-70">
                advanced digital experiences made by creative humans •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        <div className="text-center mt-32">
          <h1 className="text-4xl md:text-6xl font-bold space-y-2">
            <div className="text-yellow-300">universal</div>
            <div className="text-yellow-300">interactive</div>
            <div className="text-yellow-300">
              creative <span className="text-white text-2xl md:text-4xl">studio</span>
            </div>
          </h1>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 w-full z-10">
        <svg className="w-full h-24" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none">
          <path
            d="M0,22 C240,56 480,8 720,22 C960,36 1200,56 1440,22 L1440,74 L0,74 Z"
            className="fill-gray-900"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,22 C240,56 480,8 720,22 C960,36 1200,56 1440,22 L1440,74 L0,74 Z;
                M0,32 C240,16 480,56 720,42 C960,28 1200,8 1440,32 L1440,74 L0,74 Z;
                M0,22 C240,56 480,8 720,22 C960,36 1200,56 1440,22 L1440,74 L0,74 Z
              "
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
