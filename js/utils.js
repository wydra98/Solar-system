
class Renderer {
  renderer;

  constructor(width, height) {
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor( 0x000000 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(width, height);
  }

  getDomElement() {
    this.renderer.domElement;
  }

}