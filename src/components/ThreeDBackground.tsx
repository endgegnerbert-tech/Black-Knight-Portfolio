"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // 1. SCENE - Die "Welt" wo alles existiert
    const scene = new THREE.Scene();

    // 2. CAMERA - Dein "Auge" in die 3D-Welt
    // Parameter: FOV (75°), Aspect Ratio, Near Clipping, Far Clipping
    const camera = new THREE.PerspectiveCamera(
      75, // Field of View
      window.innerWidth / window.innerHeight, // Seitenverhältnis
      0.1, // Alles näher als 0.1 ist unsichtbar
      1000 // Alles weiter als 1000 ist unsichtbar
    );

    // 3. RENDERER - Zeichnet alles auf den Bildschirm
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Transparenter Hintergrund
      antialias: true, // Glattere Kanten
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 4. OBJEKTE ERSTELLEN - Hier fängt der Spaß an!

    // Ein einfacher Würfel zum Start:
    const geometry = new THREE.BoxGeometry(2, 2, 2); // Breite, Höhe, Tiefe - GRÖSSER!
    const material = new THREE.MeshBasicMaterial({
      color: 0x60a5fa, // ROT zum Testen
      wireframe: true, // Nur die Linien zeigen
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Kamera zurück bewegen, damit wir was sehen
    camera.position.z = 5; // Weiter zurück

    // 5. ANIMATION LOOP - Lässt alles leben
    const animate = () => {
      requestAnimationFrame(animate); // 60fps Loop

      // HIER EXPERIMENTIEREN: Rotation ändern
      cube.rotation.x += 0.01; // X-Achse drehen
      cube.rotation.y += 0.01; // Y-Achse drehen

      renderer.render(scene, camera); // Zeichnen!
    };

    animate();

    // Responsive: Bei Resize anpassen
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup beim Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 z-0 w-full h-full pointer-events-none"
    />
  );
}
