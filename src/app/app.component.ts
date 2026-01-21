import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('threeCanvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private animationId!: number;
  private isBrowser: boolean;
  
  // Mouse tracking
  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;

  // Terminal typing animation states
  typedWhoami = '';
  typedCat = '';
  typedLs = '';
  showWhoamiResp = false;
  showCatResp = false;
  showLsResp = false;
  isComplete = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (!this.isBrowser || !this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.initThree();
      this.animate();
    }
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      if (this.renderer) {
        this.renderer.dispose();
      }
    }
  }

  private initThree() {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    this.camera.position.z = 50;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvasRef.nativeElement, 
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Create particle system
    this.createParticleField();
  }

  private createParticleField() {
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Random positions in a sphere
      const radius = Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Purple to pink gradient colors
      const t = Math.random();
      colors[i] = 0.66 + t * 0.26;     // R: purple(168/255) to pink(236/255)
      colors[i + 1] = 0.33 + t * 0.25; // G: purple(85/255) to pink(72/255)
      colors[i + 2] = 0.97 - t * 0.37; // B: purple(247/255) to pink(153/255)
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }

  private animate() {
    if (!this.isBrowser) return;
    
    this.animationId = requestAnimationFrame(() => this.animate());

    // Smooth mouse follow
    this.targetX += (this.mouseX - this.targetX) * 0.05;
    this.targetY += (this.mouseY - this.targetY) * 0.05;

    // Rotate particle field based on mouse position
    this.particles.rotation.y = this.targetX * 0.5;
    this.particles.rotation.x = this.targetY * 0.5;

    // Add continuous slow rotation
    this.particles.rotation.z += 0.001;

    // Wave effect on particles
    const positionAttr = this.particles.geometry.getAttribute('position');
    const positions = positionAttr.array as Float32Array;
    const time = Date.now() * 0.001;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(x * x + y * y);
      
      positions[i + 2] += Math.sin(time + distance * 0.1) * 0.05;
    }

    positionAttr.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

  private async startTypingAnimation() {
    await this.typeText('whoami', 'typedWhoami', 80);
    await this.delay(300);
    this.showWhoamiResp = true;
    await this.delay(800);
    
    await this.typeText('cat skills.yaml', 'typedCat', 60);
    await this.delay(300);
    this.showCatResp = true;
    await this.delay(800);
    
    await this.typeText('ls active_projects/', 'typedLs', 60);
    await this.delay(300);
    this.showLsResp = true;
    await this.delay(500);
    this.isComplete = true;
  }

  private typeText(text: string, property: keyof AppComponent, speed: number): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          (this as any)[property] += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}