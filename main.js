document.querySelector('#ar-model').addEventListener('model-loaded', (e) => {
    const model = e.detail.model;
    model.traverse(node => {
        if (node.isMesh) {
            node.material.metalness = 0;
            node.material.roughness = 1;
            node.material.color.set('#FFF');
            
            if (node.material.map) node.material.map.encoding = THREE.sRGBEncoding;
            node.material.needsUpdate = true;
        }
    });
});