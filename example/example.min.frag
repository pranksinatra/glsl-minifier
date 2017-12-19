uniform highp vec2 resolution;
uniform sampler2D texture;
void main ()
{
  highp vec2 tmpvar_1;
  tmpvar_1 = (gl_FragCoord.xy / resolution);
  lowp vec4 tmpvar_2;
  tmpvar_2 = texture2D (texture, tmpvar_1);
  if ((tmpvar_2.x == 1000.0)) {
    discard;
  };
  lowp vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = vec3((1.0 - (sqrt(tmpvar_2.x) / 8.0)));
  gl_FragColor = tmpvar_3;
}

