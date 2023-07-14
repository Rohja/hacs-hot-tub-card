import { html, LitElement, css } from "lit";

export class HotTubIcon extends LitElement {
  static styles = css`
    /* svg {
        width: 90%;
        height: 90%;
        margin: auto;
      } */
  `;

  // internal reactive states
  static get properties() {
    return {
      lightsState: { type: String, attribute: "lights-state" },
      lightsColor: { type: String, attribute: "lights-color" },
      lightsBrightness: { type: String, attribute: "lights-brightness" },
    };
  }

  constructor() {
    // console.info("hot-tub-icon: contructor() called.");
    super();
    this.lightsState = "off";
    this.lightsColor = "#a87332";
    this.lightsBrightness = "255";
  }

  scaleBrightness() {
    let inMin = 1;
    let inMax = 255;
    let outMin = 50;
    let outMax = 100;
    return (
      ((this.lightsBrightness - inMin) * (outMax - outMin)) / (inMax - inMin) +
      outMin
    );
  }

  render() {
    return html`
      <svg
        viewBox="0 0 211.66666 211.66666"
        version="1.1"
        id="svg8"
        inkscape:version="1.1.2 (b8e25be8, 2022-02-05)"
        sodipodi:docname="drawing.svg"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
      >
        <defs id="defs2">
          <linearGradient inkscape:collect="always" id="linearGradient5291">
            <stop
              style="stop-color:${this.lightsColor};stop-opacity:1;"
              offset="0"
              id="stop5287"
            />
            <stop
              style="stop-color:${this.lightsColor};stop-opacity:0;"
              offset="1"
              id="stop5289"
            />
          </linearGradient>
          <linearGradient
            inkscape:collect="always"
            xlink:href="#linearGradient5291"
            id="linearGradient5293"
            x1="45.212593"
            y1="222.44049"
            x2="37.572643"
            y2="247.41682"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(1.541647,0,0,1.7126816,-44.55627,-154.45341)"
          />
          <linearGradient
            gradientTransform="matrix(-1.541647,0,0,1.7126816,210.24274,-156.35611)"
            inkscape:collect="always"
            xlink:href="#linearGradient5291"
            id="linearGradient5293-8"
            x1="45.212593"
            y1="222.44049"
            x2="37.572643"
            y2="247.41682"
            gradientUnits="userSpaceOnUse"
          />
          <linearGradient
            gradientTransform="matrix(1.541647,0,0,1.7126816,-15.347033,-202.17291)"
            inkscape:collect="always"
            xlink:href="#linearGradient5291"
            id="linearGradient5293-89"
            x1="42.967529"
            y1="216.31334"
            x2="45.243279"
            y2="222.34694"
            gradientUnits="userSpaceOnUse"
          />
          <linearGradient
            gradientTransform="matrix(-1.541647,0,0,1.7126816,179.71589,-202.79445)"
            inkscape:collect="always"
            xlink:href="#linearGradient5291"
            id="linearGradient5293-89-9"
            x1="42.967529"
            y1="216.31334"
            x2="45.243279"
            y2="222.34694"
            gradientUnits="userSpaceOnUse"
          />
          <filter
            inkscape:collect="always"
            style="color-interpolation-filters:sRGB"
            id="filter6262"
            x="-1.1253266"
            width="3.2506532"
            y="-0.81841932"
            height="2.6368386"
          >
            <feGaussianBlur
              inkscape:collect="always"
              stdDeviation="1.7766176"
              id="feGaussianBlur6264"
            />
          </filter>
          <filter
            inkscape:collect="always"
            style="color-interpolation-filters:sRGB"
            id="filter6266"
            x="-1.1253266"
            width="3.2506532"
            y="-0.81841932"
            height="2.6368386"
          >
            <feGaussianBlur
              inkscape:collect="always"
              stdDeviation="1.7766176"
              id="feGaussianBlur6268"
            />
          </filter>
          <filter
            inkscape:collect="always"
            style="color-interpolation-filters:sRGB"
            id="filter6270"
            x="-1.1253266"
            width="3.2506532"
            y="-0.81841932"
            height="2.6368386"
          >
            <feGaussianBlur
              inkscape:collect="always"
              stdDeviation="1.7766176"
              id="feGaussianBlur6272"
            />
          </filter>
          <filter
            inkscape:collect="always"
            style="color-interpolation-filters:sRGB"
            id="filter6274"
            x="-1.1253266"
            width="3.2506532"
            y="-0.81841932"
            height="2.6368386"
          >
            <feGaussianBlur
              inkscape:collect="always"
              stdDeviation="1.7766176"
              id="feGaussianBlur6276"
            />
          </filter>
          <filter
            inkscape:collect="always"
            style="color-interpolation-filters:sRGB"
            id="filter6278"
            x="-1.1253266"
            width="3.2506532"
            y="-0.81841932"
            height="2.6368386"
          >
            <feGaussianBlur
              inkscape:collect="always"
              stdDeviation="1.7766176"
              id="feGaussianBlur6280"
            />
          </filter>
        </defs>
        <sodipodi:namedview
          id="base"
          pagecolor="#ffffff"
          bordercolor="#666666"
          borderopacity="1.0"
          inkscape:pageopacity="0.0"
          inkscape:pageshadow="2"
          inkscape:zoom="0.67977951"
          inkscape:cx="261.84961"
          inkscape:cy="378.06377"
          inkscape:document-units="mm"
          inkscape:current-layer="layer1"
          showgrid="false"
          units="px"
          showguides="false"
          inkscape:window-width="1680"
          inkscape:window-height="942"
          inkscape:window-x="0"
          inkscape:window-y="25"
          inkscape:window-maximized="1"
          inkscape:pagecheckerboard="0"
        >
          <inkscape:grid
            type="xygrid"
            id="grid4532"
            spacingx="52.916666"
            spacingy="52.916666"
          />
        </sodipodi:namedview>
        <metadata id="metadata5">
          <rdf:RDF>
            <cc:Work rdf:about="">
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <g
          inkscape:label="Layer 1"
          inkscape:groupmode="layer"
          id="layer1"
          transform="translate(0,-85.333337)"
          style="display:inline"
        >
          <g
            id="g1556"
            transform="matrix(0.97622584,0,0,0.95813842,25.528231,-16.478729)"
          >
            <path
              style="opacity:${this.scaleBrightness()}%;fill:url(#linearGradient5293-8);fill-opacity:1;stroke:none;stroke-width:0.429925px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
              d="m 169.81598,260.85711 -14.46442,-42.73233 -27.82697,13.3753 -1.01961,50.22927 z"
              id="light_ext_right"
              display="${this.lightsState === "on" ? "block" : "none"}"
              inkscape:connector-curvature="0"
              sodipodi:nodetypes="ccccc"
              inkscape:label="light_ext_right"
            />
            <path
              style="opacity:${this.scaleBrightness()}%;fill:url(#linearGradient5293);fill-opacity:1;stroke:none;stroke-width:0.429925px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
              d="m -4.1295141,262.75981 14.4644171,-42.73233 27.826981,13.37531 1.019605,50.22927 z"
              id="light_ext_left"
              display="${this.lightsState === "on" ? "block" : "none"}"
              inkscape:connector-curvature="0"
              sodipodi:nodetypes="ccccc"
              inkscape:label="light_ext_left"
            />
            <path
              style="opacity:${this.scaleBrightness()}%;fill:url(#linearGradient5293-89-9);fill-opacity:1;stroke:none;stroke-width:0.429925px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
              d="m 124.99111,180.73861 -0.16639,-9.05219 -22.93409,-7.70703 -3.237071,8.07754 z"
              id="light_int_right"
              display="${this.lightsState === "on" ? "block" : "none"}"
              inkscape:connector-curvature="0"
              sodipodi:nodetypes="ccccc"
              inkscape:label="light_int_right"
            />
            <path
              style="opacity:${this.scaleBrightness()}%;fill:url(#linearGradient5293-89);fill-opacity:1;stroke:none;stroke-width:0.429925px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
              d="m 39.377758,181.36016 0.166384,-9.05219 22.934097,-7.70703 3.237064,8.07754 z"
              id="light_int_left"
              display="${this.lightsState === "on" ? "block" : "none"}"
              inkscape:connector-curvature="0"
              sodipodi:nodetypes="ccccc"
              inkscape:label="light_int_left"
            />
            <ellipse
              ry="2.9104166"
              rx="2.1166666"
              cy="203.86667"
              cx="61.780209"
              id="light_led_5"
              display="${this.lightsState === "on" ? "block" : "none"}"
              style="opacity:${this.scaleBrightness()}%;fill:${this
                .lightsColor};fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;filter:url(#filter6274)"
              inkscape:label="light_led_5"
              transform="matrix(1.541647,0,0,1.7126816,-44.55627,-154.45341)"
            />
            <ellipse
              ry="2.9104166"
              rx="2.1166666"
              cy="203.86667"
              cx="73.289589"
              id="light_led_4"
              display="${this.lightsState === "on" ? "block" : "none"}"
              style="opacity:${this.scaleBrightness()}%;fill:${this
                .lightsColor};fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;filter:url(#filter6270)"
              inkscape:label="light_led_4"
              transform="matrix(1.541647,0,0,1.7126816,-44.55627,-154.45341)"
            />
            <ellipse
              ry="2.9104166"
              rx="2.1166666"
              cy="202.27917"
              cx="91.148956"
              id="light_led_3"
              display="${this.lightsState === "on" ? "block" : "none"}"
              style="opacity:${this.scaleBrightness()}%;fill:${this
                .lightsColor};fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;filter:url(#filter6278)"
              inkscape:label="light_led_3"
              transform="matrix(1.541647,0,0,1.7126816,-44.55627,-154.45341)"
            />
            <ellipse
              ry="2.9104166"
              rx="2.1166666"
              cy="208.2323"
              cx="101.4677"
              id="light_led_2"
              display="${this.lightsState === "on" ? "block" : "none"}"
              style="opacity:${this.scaleBrightness()}%;fill:${this
                .lightsColor};fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;filter:url(#filter6266)"
              inkscape:label="light_led_2"
              transform="matrix(1.541647,0,0,1.7126816,-44.55627,-154.45341)"
            />
            <ellipse
              ry="2.9104166"
              rx="2.1166666"
              cy="213.52396"
              cx="82.417709"
              id="light_led_1"
              display="${this.lightsState === "on" ? "block" : "none"}"
              style="opacity:${this.scaleBrightness()}%;fill:${this
                .lightsColor};fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;filter:url(#filter6262)"
              inkscape:label="light_led_1"
              transform="matrix(1.541647,0,0,1.7126816,-44.55627,-154.45341)"
            />
            <path
              id="spa"
              style="fill:none;stroke:#000000;stroke-width:3.2742;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
              d="m 10.334903,220.02748 3.405606,-5.86146 24.097955,12.38654 0.32342,6.85023 m -26.802375,-13.54358 26.802375,13.54358 m 116.165076,-15.44628 -26.80239,13.54357 m 27.82699,-13.3753 -3.4056,-5.86147 -24.09796,12.38654 -0.32343,6.85023 m -65.046331,-66.89914 -22.934097,7.70703 m 62.346468,-8.32858 22.93411,7.70703 m -15.58232,36.46962 c -5.93847,-9.62701 6.73323,-17.10244 6.92033,-3.63314 m -61.677321,-9.88111 c 3e-6,3.06321 -1.76662,5.54645 -3.945861,5.54645 -2.179242,0 -3.945866,-2.48324 -3.945863,-5.54645 1.1e-5,-3.0632 1.76663,-5.54642 3.945863,-5.54642 2.179232,0 3.94585,2.48322 3.945861,5.54642 z m 45.522701,-2.32038 c 0,3.0632 -1.766618,5.54642 -3.94585,5.54644 -2.179225,-2e-5 -3.945829,-2.48324 -3.945832,-5.54644 3e-6,-3.0632 1.766607,-5.54641 3.945832,-5.54643 2.179232,2e-5 3.94585,2.48323 3.94585,5.54643 z m -27.599923,2.32038 c 3e-6,3.06321 -1.76662,5.54645 -3.945861,5.54645 -2.179242,0 -3.945866,-2.48324 -3.945863,-5.54645 1.1e-5,-3.0632 1.766631,-5.54642 3.945863,-5.54642 2.179232,0 3.94585,2.48322 3.945861,5.54642 z m 13.913745,16.57429 c -3e-6,3.06321 -1.766624,5.54643 -3.945861,5.54643 -2.179237,0 -3.945861,-2.48322 -3.945864,-5.54643 -3e-6,-3.06322 1.766621,-5.54646 3.945864,-5.54646 2.179241,0 3.945864,2.48324 3.945861,5.54646 z m 9.663598,-60.487 -0.08336,22.1504 c -1.799253,11.988 -21.935788,16.98194 -27.68118,0.82036 l -0.166801,-23.08795 m 108.416441,38.8919 v 67.95455 m -75.35619,-32.04496 -0.10816,67.51397 M 63.204027,225.24679 v 67.95458 M -10.775251,189.33804 v 67.95455 m 141.613521,-94.30765 -0.0589,21.87803 c -0.90686,4.15406 -1.53454,7.31024 0.17687,11.68488 m -96.903825,-33.91314 -0.09944,21.96453 c 1.823417,6.39512 0.554248,9.46604 -0.166748,13.12616 M 18.9451,190.22475 c 29.349179,-10.23881 56.459029,-19.65537 63.145965,-20.1569 12.989114,1.57749 35.052265,10.10541 63.753965,19.92247 M 4.637,183.449 67.805979,214.241 c 0,0 12.795921,8.15104 26.979764,1.04374 13.366057,-6.69753 63.674677,-30.87828 63.674677,-30.87828 10.8575,-4.83494 12.8835,-8.50341 -0.55689,-12.26429 0,0 -62.463894,-21.52889 -66.583068,-22.70208 -4.119193,-1.17317 -7.425628,-4.0881 -21.039278,0.78285 -13.61367,4.87096 -64.0460511,21.91923 -64.0460511,21.91923 -11.4622503,3.55275 -11.9454364,7.48755 -1.598156,11.30683 z m -28.812173,-7.81366 c 0,0 -0.375821,65.016 -0.333507,67.58639 0,0 -0.191738,7.32832 3.786507,9.48959 3.978246,2.16123 73.615857,35.56524 84.003677,40.81329 10.387821,5.24803 23.112134,7.82812 38.275976,0.0284 15.16386,-7.79971 80.73289,-39.1293 83.80835,-40.51025 2.29452,-1.61888 3.57479,-4.66349 3.66856,-9.37582 v -67.45388 m -207.525612,9.55812 c 9.0124548,4.1868 81.459449,39.14409 81.459449,39.14409 0,0 17.241168,10.98271 36.352385,1.40637 18.009418,-9.02424 81.526818,-39.18443 85.795068,-41.60523 4.26822,-2.42078 5.92662,-14.23843 -0.7504,-16.5249 -30.38649,-10.40546 -84.16361,-29.00791 -89.713765,-30.58865 -5.550163,-1.58073 -10.005238,-5.50829 -28.348204,1.05479 -18.342965,6.5631 -82.134308,28.29659 -86.295321,29.53386 -4.161012,1.2373 -7.511665,13.39288 1.500788,17.57967 z"
              inkscape:label="spa"
            />
          </g>
        </g>
      </svg>
    `;
  }
}
