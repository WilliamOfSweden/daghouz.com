import glsl from 'babel-plugin-glsl/macro'

export const webGlTwistFragmentShader = glsl`
  varying vec2 vUv;
  varying float vDistort;
  
  uniform float uTime;
  uniform float uHue;
  uniform float uAlpha;
  
  vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }   
  
  void main() {
    float distort = vDistort * 2.0;
    vec3 brightness = vec3(0.05, 0.5, 0.5);
    vec3 contrast = vec3(0.5, 0.5, 0.5);
    vec3 oscilation = vec3(0.7, 1.0, 0.7);
    vec3 phase = vec3(0.2, 0.1, 0.2);
    vec3 color = cosPalette(uHue + distort, brightness, contrast, oscilation, phase);
    gl_FragColor = vec4(color, uAlpha);
  }
`
