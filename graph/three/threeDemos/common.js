

function common(){
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer();
  // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  const planeGeometry = new THREE.PlaneGeometry(60, 30);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true; // 允许平面接收阴影;
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)

  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  scene.add(plane);

  return {
    scene,
    renderer,
    plane,
    camera,
  }
}









