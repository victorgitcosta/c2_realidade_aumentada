document.querySelector('#ar-model').addEventListener('model-loaded', (e) => {
    const model = e.detail.model;
    model.traverse(node => {
        if (node.isMesh) {
            // Force the material to ignore complex math and just show the texture
            node.material.metalness = 0;
            node.material.roughness = 1;
            node.material.color.set('#FFF'); // Ensure base color is white
            
            // If the model is STILL black, it might be a 'Map' issue:
            if (node.material.map) node.material.map.encoding = THREE.sRGBEncoding;
            node.material.needsUpdate = true;
        }
    });
});