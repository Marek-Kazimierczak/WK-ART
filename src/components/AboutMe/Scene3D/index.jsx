import * as React from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import Scene from "./Scene"; // import the component above linking to file just created.

// giltch effect
var rgbGlitchFX = `varying vec2 vUV;
uniform sampler2D textureSampler;
uniform vec2 screenSize;

uniform sampler2D noiseRef0;
uniform sampler2D noiseRef1;

uniform float time; 

#define AMPLITUDE 0.04
#define SPEED 1.0

vec4 rgbShift( in vec2 p , in vec4 shift) {
    shift *= 2.0*shift.w - 1.0;
    vec2 rs = vec2(shift.x,-shift.y);
    vec2 gs = vec2(shift.y,-shift.z);
    vec2 bs = vec2(shift.z,-shift.x);    
    float r = texture2D(textureSampler, p+rs, 0.0).x;
    float g = texture2D(textureSampler, p+gs, 0.0).y;
    float b = texture2D(textureSampler, p+bs, 0.0).z;
    return vec4(r,g,b,1.0);
}
vec4 noise( in vec2 p ) {
    return texture2D(noiseRef0, p, 0.0);
}

vec4 vec4pow( in vec4 v, in float p ) {
    return vec4(pow(v.x,p),pow(v.y,p),pow(v.z,p),v.w); 
}
void main(void){ 
    vec2 p = vUV;
    vec4 c = vec4(0.0,0.0,0.0,1.0);
    vec4 shift = vec4pow(noise(vec2(SPEED*time,1.0*SPEED*time/5.0 )),15.0)
        		*vec4(AMPLITUDE,AMPLITUDE,AMPLITUDE,1.0);
    c += rgbShift(p, shift);
   gl_FragColor = c;
}
`;

const Scene3D = () => {
  const onSceneMount = e => {
    const { canvas, scene, engine } = e;

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // Parameters: alpha, beta, radius, target position, scene
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0,
      5,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );

    // Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new BABYLON.Vector3(0, 0, 30));

    // Camera movement limitation
    camera.lowerAlphaLimit = BABYLON.Tools.ToRadians(80);
    camera.upperAlphaLimit = BABYLON.Tools.ToRadians(100);
    camera.lowerBetaLimit = BABYLON.Tools.ToRadians(80);
    camera.upperBetaLimit = BABYLON.Tools.ToRadians(100);
    camera.lowerRadiusLimit = 23;
    camera.upperRadiusLimit = 27;

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // Camera sensibility settings
    camera.angularSensibilityX = 30000.0;
    camera.angularSensibilityY = 30000.0;
    camera.pinchPrecision = 100.0;

    /**
     * pinchDeltaPercentage will be used instead of pinchPrecision if different from 0.
     * It defines the percentage of current camera.radius to use as delta when pinch zoom is used.
     */
    camera.pinchDeltaPercentage = 100;
    camera.panningSensibility = 10000.0;
    camera.multiTouchPanning = true;
    camera.multiTouchPanAndZoom = true;
    camera._isPanClick = false;
    camera.pinchInwards = true;
    camera.hasSwiped = false;

    //Adding a light to glitch shader
    var lightOmni = new BABYLON.PointLight(
      "Omni",
      new BABYLON.Vector3(20, 100, 100),
      scene
    );

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.DirectionalLight(
      "light",
      new BABYLON.Vector3(10, -10, -18),
      scene
    );

    light.position = new BABYLON.Vector3(2, 10, 25);
    light.intensity = 18;

    var lightSphere3 = BABYLON.Mesh.CreateSphere("sphere3", 10, 2, scene);
    lightSphere3.position = light.position;
    lightSphere3.material = new BABYLON.StandardMaterial("light-main", scene);
    lightSphere3.material.emissiveColor = new BABYLON.Color3(1, 1, 0);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 4;

    // Initiate assets manager and import object + material setup
    var assetsManager = new BABYLON.AssetsManager(scene);
    var meshTask = assetsManager.addMeshTask(
      "obj laod task",
      "",
      "/assets/scene/",
      "w_obj.obj"
    );

    meshTask.onSuccess = function(task) {
      var mesh = task.loadedMeshes[1];

      mesh.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0));

      mesh.position.y = -9;
      mesh.position.z = 15;
      mesh.position.x = -1;

      camera.beta = BABYLON.Tools.ToRadians(90);

      var materialPBR = new BABYLON.PBRMaterial("base", scene);

      materialPBR.metallic = 0;
      materialPBR.roughness = 0.8;
      materialPBR.albedoTexture = new BABYLON.Texture(
        "/assets/scene/lambert2_Base_Color.png",
        scene
      );

      materialPBR.metallicTexture = new BABYLON.Texture(
        "/assets/scene/lambert2_occlusionRoughnessMetallic.png",
        scene
      );
      materialPBR.ambientTexture = new BABYLON.Texture(
        "/assets/scene/lambert2_Mixed_AO.png",
        scene
      );
      materialPBR.bumpTexture = new BABYLON.Texture(
        "/assets/scene/w_nm.jpg",
        scene
      );

      materialPBR.useRoughnessFromMetallicTextureAlpha = false;
      materialPBR.useRoughnessFromMetallicTextureGreen = true;
      materialPBR.useMetallnessFromMetallicTextureBlue = true;

      mesh.material = materialPBR;
    };

    meshTask.onError = function(task) {
      console.log(
        "task failed",
        task.errorObject.message,
        task.errorObject.exception
      );
    };

    assetsManager.load();

    //BABYLON.JS GLITCH POST EFFECT
    BABYLON.Effect.ShadersStore["rgbGlitchEffectFragmentShader"] = rgbGlitchFX;

    var postEffect = new BABYLON.PostProcess(
      "rgbGlitchEffect",
      "rgbGlitchEffect",
      ["time", "screenSize"],
      ["noiseRef0", "noiseRef1"],
      1,
      camera
    );

    var noiseTexture0 = new BABYLON.Texture("./assets/grass.jpg", scene);
    var noiseTexture1 = new BABYLON.Texture("./assets/ground.jpg", scene);

    postEffect.onApply = function(effect) {
      effect.setVector2(
        "screenSize",
        new BABYLON.Vector2(postEffect.width, postEffect.height)
      );
      effect.setFloat("time", time);
      effect.setTexture("noiseRef0", noiseTexture0);
      effect.setTexture("noiseRef1", noiseTexture1);
    };

    // ADD EXTRA LIGHTS =================================================================
    // light1
    const light1 = new BABYLON.DirectionalLight(
      "dir01",
      new BABYLON.Vector3(-1, -2, -1),
      scene
    );

    light1.intensity = 4;

    const lightSphere = BABYLON.Mesh.CreateSphere("sphere", 10, 2, scene);
    lightSphere.position = light.position;
    lightSphere.material = new BABYLON.StandardMaterial("light", scene);
    lightSphere.material.emissiveColor = new BABYLON.Color3(1, 1, 0);

    // light2
    const light2 = new BABYLON.SpotLight(
      "spot02",
      new BABYLON.Vector3(10, 50, 10),
      new BABYLON.Vector3(1, 0, 0),
      Math.PI / 3,
      16,
      scene
    );

    light2.intensity = 2;

    const lightSphere2 = BABYLON.Mesh.CreateSphere("sphere", 10, 2, scene);
    lightSphere2.position = light2.position;
    lightSphere2.material = new BABYLON.StandardMaterial("light", scene);
    lightSphere2.material.emissiveColor = new BABYLON.Color3(1, 1, 0);

    // SHADOW =================================================================
    if (typeof meshTask.loadedMeshes !== "undefined") {
      const object = meshTask.loadedMeshes[1];

      const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
      shadowGenerator.addShadowCaster(object);
      shadowGenerator.useExponentialShadowMap = true;

      const shadowGenerator2 = new BABYLON.ShadowGenerator(1024, light2);
      shadowGenerator2.addShadowCaster(object);
      shadowGenerator2.usePoissonSampling = true;
      object.receiveShadows = true;
    }

    // RENDER =================================================================
    let time = 0;
    let rate = 0.01;
    engine.runRenderLoop(() => {
      if (scene) {
        lightOmni.position = camera.position;
        time += scene.getAnimationRatio() * rate;

        if (typeof meshTask.loadedMeshes !== "undefined") {
          const object = meshTask.loadedMeshes[1];
          object.rotation.y -= rate / 4;
          object.rotation.y < -0.5 && (rate = -0.01);
          object.rotation.y > 0.5 && (rate = 0.01);
        }
        try {
          scene.render();
        } catch (error) {
          console.log("RENDER FAILED!");
        }
      }
    });
  };

  return <Scene onSceneMount={onSceneMount} />;
};

export default Scene3D;
