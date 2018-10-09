import React from 'react'
import PropTypes from 'prop-types'
import Svg, {
  Circle,
  G,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Defs,
  ClipPath
} from 'react-native-svg'

const StudiecentrumFirstFloor = ({ parseSvg }) => {
  let svgData = (
    <Svg height="100%" width="100%" viewBox="0 0 800 600">
      <Defs>
        <ClipPath id="clip-path">
          <Path d="M703.6 477.66v118h-590v-179h123v61zm-291-223h-37v92h37z" fill="none" />
        </ClipPath>
      </Defs>
      <G id="Layer_1" data-name="Layer 1">
        <G id="Layer_52" data-name="Layer 52">
          <G id="background">
            <Rect height="1024" width="1024" fill="#acd6ea" x="-86.4" y="-211.34" />
          </G>
        </G>
        <G id="Layer_51" data-name="Layer 51">
          <G id="innerväggar">
            <Rect
              height="144"
              style={{ isolation: 'isolate' }}
              width="3"
              fill="#e3e3e3"
              opacity="0.5"
              x="203.6"
              y="123.66"
            />
            <Rect
              height="83"
              style={{ isolation: 'isolate' }}
              width="3"
              fill="#e3e3e3"
              opacity="0.5"
              x="204.1"
              y="334.16"
            />
            <Rect
              height="144"
              width="3"
              fill="none"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
              x="203.6"
              y="123.66"
            />
            <Rect
              height="81"
              width="3"
              fill="none"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.8"
              x="204.1"
              y="334.16"
            />
          </G>
        </G>
        <G id="Layer_50" data-name="Layer 50">
          <G id="Garderob">
            <Polygon
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.2"
              points="260.11 425.66 260.11 417.16 238.1 417.16 238.1 476.16 257.61 476.16 257.61 476.66 346.61 476.66 346.61 425.66 260.11 425.66"
            />
            <Path
              d="M300.6,463.58h-9.75a5.39,5.39,0,0,1-.8-.06,2.11,2.11,0,0,1-1.86-2,5.07,5.07,0,0,1,0-.55V441.48a3.82,3.82,0,0,1,0-.68,2.27,2.27,0,0,1,2.31-2h19.66a4.21,4.21,0,0,1,.79.06,2.17,2.17,0,0,1,2,2.11V461a4.15,4.15,0,0,1-.14,1.1,2.07,2.07,0,0,1-2,1.49,4.61,4.61,0,0,1-.53,0Z"
              fill="#e3e3e3"
            />
            <Path
              d="M310.2,453.91c-.42-.14-.85-.26-1.27-.39l-7.62-2.41a.33.33,0,0,1-.28-.36.34.34,0,0,1,.27-.37,2.24,2.24,0,0,0,.32-4.1,2.13,2.13,0,0,0-2.44.23,2.1,2.1,0,0,0-.84,1.73.44.44,0,0,0,.4.48h0a.46.46,0,0,0,.45-.44,2.1,2.1,0,0,1,.09-.42,1.32,1.32,0,0,1,1.57-.9,1.34,1.34,0,0,1-.21,2.64c-.45,0-.55.15-.56.6v.58a.28.28,0,0,1-.22.32c-.43.12-.85.26-1.27.4L291,453.93a1.17,1.17,0,0,0-.82,1.32,1.22,1.22,0,0,0,1.32,1.08h18.38a1.22,1.22,0,0,0,1.19-1A1.2,1.2,0,0,0,310.2,453.91Zm-.52,1.35H291.6a.23.23,0,0,1-.14,0h0a.19.19,0,0,1,0-.33h0c2.45-.79,4.91-1.56,7.36-2.34l1.63-.52a.51.51,0,0,1,.3,0l9,2.84h0a.2.2,0,0,1-.07.35Z"
              fill="#002b64"
            />
            <Line
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
              x1="347.6"
              x2="347.6"
              y1="425.16"
              y2="477.66"
            />
            <Line
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
              x1="260.6"
              x2="237.1"
              y1="417.16"
              y2="417.16"
            />
          </G>
        </G>
        <G id="Layer_49" data-name="Layer 49">
          <G id="wc">
            <Rect
              height="119"
              style={{ isolation: 'isolate' }}
              width="418"
              fill="none"
              opacity="0.5"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
              x="285.6"
              y="5.66"
            />
            <Rect
              height="54"
              width="84"
              fill="none"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
              x="262.6"
              y="176.66"
            />
            <Rect
              height="54"
              width="86"
              fill="none"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
              x="261.6"
              y="370.66"
            />
            <G opacity="0.2">
              <Rect height="54" width="84" fill="#e3e3e3" x="262.6" y="176.66" />
              <Rect height="54" width="86" fill="#e3e3e3" x="261.6" y="370.66" />
            </G>
            <Path
              d="M304.6,216.08h-9.75a5.29,5.29,0,0,1-.8-.06,2.11,2.11,0,0,1-1.86-2,5.07,5.07,0,0,1,0-.55V194a3.82,3.82,0,0,1,0-.68,2.27,2.27,0,0,1,2.31-2h19.66a4.21,4.21,0,0,1,.79.06,2.17,2.17,0,0,1,2,2.11v20.06a4.15,4.15,0,0,1-.14,1.1,2.07,2.07,0,0,1-2,1.49,4.61,4.61,0,0,1-.53,0Z"
              fill="#e3e3e3"
            />
            <Path
              d="M303.72,197.75h3.11l-2,11.82h-3.54l-1-7.95h0l-.94,7.95h-3.61l-1.93-11.82H297l.78,8.38h0l1-8.38h2.91l1.18,8.38h0Z"
              fill="#002b64"
            />
            <Path
              d="M312.1,201.16v-.45a1.85,1.85,0,0,0-.08-.47,1,1,0,0,0-.2-.38.53.53,0,0,0-.39-.15.77.77,0,0,0-.51.14,1.08,1.08,0,0,0-.26.57,6.82,6.82,0,0,0-.11,1.2v4.08a7.68,7.68,0,0,0,.11,1.2,1,1,0,0,0,.28.54.78.78,0,0,0,.48.13.59.59,0,0,0,.57-.44,5,5,0,0,0,.17-1.56v-.91h3.21v.75a7.28,7.28,0,0,1-.21,1.84,3.56,3.56,0,0,1-.7,1.37,3,3,0,0,1-1.24.85,5.28,5.28,0,0,1-1.85.29,5.62,5.62,0,0,1-2.46-.43,2.76,2.76,0,0,1-1.27-1.23,5.11,5.11,0,0,1-.46-1.92c0-.76-.06-1.61-.06-2.56s0-1.75.06-2.51a5.17,5.17,0,0,1,.46-1.93,2.8,2.8,0,0,1,1.27-1.25,5.45,5.45,0,0,1,2.46-.45,5.72,5.72,0,0,1,2.1.32,2.87,2.87,0,0,1,1.19.86,2.61,2.61,0,0,1,.53,1.2,7.64,7.64,0,0,1,.12,1.36v.86H312.1Z"
              fill="#002b64"
            />
            <Path
              d="M304.6,410.08h-9.75a5.29,5.29,0,0,1-.8-.06,2.11,2.11,0,0,1-1.86-2,5.07,5.07,0,0,1,0-.55V388a3.82,3.82,0,0,1,0-.68,2.27,2.27,0,0,1,2.31-2h19.66a4.21,4.21,0,0,1,.79.06,2.17,2.17,0,0,1,2,2.11v20.06a4.15,4.15,0,0,1-.14,1.1,2.07,2.07,0,0,1-2,1.49,4.61,4.61,0,0,1-.53,0Z"
              fill="#e3e3e3"
            />
            <Path
              d="M303.72,391.75h3.11l-2,11.82h-3.54l-1-8h0l-.94,8h-3.61l-1.93-11.82H297l.78,8.38h0l1-8.38h2.91l1.18,8.38h0Z"
              fill="#002b64"
            />
            <Path
              d="M312.1,395.16v-.45a1.85,1.85,0,0,0-.08-.47,1,1,0,0,0-.2-.38.53.53,0,0,0-.39-.15.77.77,0,0,0-.51.14,1.08,1.08,0,0,0-.26.57,6.82,6.82,0,0,0-.11,1.2v4.08a7.68,7.68,0,0,0,.11,1.2,1,1,0,0,0,.28.54.78.78,0,0,0,.48.13.59.59,0,0,0,.57-.44,5,5,0,0,0,.17-1.56v-.91h3.21v.75a7.28,7.28,0,0,1-.21,1.84,3.56,3.56,0,0,1-.7,1.37,3,3,0,0,1-1.24.85,5.28,5.28,0,0,1-1.85.29,5.62,5.62,0,0,1-2.46-.43,2.76,2.76,0,0,1-1.27-1.23,5.11,5.11,0,0,1-.46-1.92c0-.76-.06-1.61-.06-2.56s0-1.75.06-2.51a5.17,5.17,0,0,1,.46-1.93,2.8,2.8,0,0,1,1.27-1.25,5.45,5.45,0,0,1,2.46-.45,5.72,5.72,0,0,1,2.1.32,2.87,2.87,0,0,1,1.19.86,2.61,2.61,0,0,1,.53,1.2,7.64,7.64,0,0,1,.12,1.36v.86H312.1Z"
              fill="#002b64"
            />
          </G>
        </G>
        <G id="Layer_48" data-name="Layer 48">
          <G id="Onyttjade_ytor" data-name="Onyttjade ytor">
            <Path
              style={{ isolation: 'isolate' }}
              d="M703.6,477.66v118h-590v-179h123v61Zm-291-223h-37v92h37Z"
              fill="#002b64"
              opacity="0.3"
            />
            <G clipPath="url(#clip-path)">
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="390.61"
                y2="-1135.14"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="406.15"
                y2="-1119.6"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="421.69"
                y2="-1104.06"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="437.23"
                y2="-1088.52"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="452.77"
                y2="-1072.98"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="468.31"
                y2="-1057.44"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="483.85"
                y2="-1041.91"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="499.39"
                y2="-1026.37"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="514.93"
                y2="-1010.83"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="530.47"
                y2="-995.29"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="546"
                y2="-979.75"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="561.54"
                y2="-964.21"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="577.08"
                y2="-948.67"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="592.62"
                y2="-933.13"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="608.16"
                y2="-917.59"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="623.7"
                y2="-902.05"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="639.24"
                y2="-886.51"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="654.78"
                y2="-870.97"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="670.32"
                y2="-855.44"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="685.86"
                y2="-839.9"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="701.4"
                y2="-824.36"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="716.94"
                y2="-808.82"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="732.48"
                y2="-793.28"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="748.01"
                y2="-777.74"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="763.55"
                y2="-762.2"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="779.09"
                y2="-746.66"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="794.63"
                y2="-731.12"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="810.17"
                y2="-715.58"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="825.71"
                y2="-700.04"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="841.25"
                y2="-684.5"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="856.79"
                y2="-668.97"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="872.33"
                y2="-653.43"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="887.87"
                y2="-637.89"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="903.41"
                y2="-622.35"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="918.95"
                y2="-606.81"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="934.48"
                y2="-591.27"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="950.02"
                y2="-575.73"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="965.56"
                y2="-560.19"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="981.1"
                y2="-544.65"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="996.64"
                y2="-529.11"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1012.18"
                y2="-513.57"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1027.72"
                y2="-498.03"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1043.26"
                y2="-482.49"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1058.8"
                y2="-466.96"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1074.34"
                y2="-451.42"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1089.88"
                y2="-435.88"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1105.42"
                y2="-420.34"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1120.95"
                y2="-404.8"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1136.49"
                y2="-389.26"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1152.03"
                y2="-373.72"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1167.57"
                y2="-358.18"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1183.11"
                y2="-342.64"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1198.65"
                y2="-327.1"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1214.19"
                y2="-311.56"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1229.73"
                y2="-296.02"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1245.27"
                y2="-280.49"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1260.81"
                y2="-264.95"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1276.35"
                y2="-249.41"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1291.89"
                y2="-233.87"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1307.42"
                y2="-218.33"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1322.96"
                y2="-202.79"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1338.5"
                y2="-187.25"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1354.04"
                y2="-171.71"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1369.58"
                y2="-156.17"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1385.12"
                y2="-140.63"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1400.66"
                y2="-125.09"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1416.2"
                y2="-109.55"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1431.74"
                y2="-94.02"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1447.28"
                y2="-78.48"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1462.82"
                y2="-62.94"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1478.36"
                y2="-47.4"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1493.9"
                y2="-31.86"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1509.43"
                y2="-16.32"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1524.97"
                y2="-0.78"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1540.51"
                y2="14.76"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1556.05"
                y2="30.3"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1571.59"
                y2="45.84"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1587.13"
                y2="61.38"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1602.67"
                y2="76.92"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1618.21"
                y2="92.45"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1633.75"
                y2="107.99"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1649.29"
                y2="123.53"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1664.83"
                y2="139.07"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1680.37"
                y2="154.61"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1695.9"
                y2="170.15"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1711.44"
                y2="185.69"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1726.98"
                y2="201.23"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1742.52"
                y2="216.77"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1758.06"
                y2="232.31"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1773.6"
                y2="247.85"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                x1="-362.88"
                x2="1162.88"
                y1="1789.14"
                y2="263.39"
              />
            </G>
            <Polygon
              fill="none"
              points="236.6 477.66 236.6 416.66 113.61 416.66 113.61 595.66 236.6 595.66 703.61 595.66 703.61 477.66 236.6 477.66"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
            />
            <Rect
              height="92"
              width="37"
              fill="none"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
              x="375.6"
              y="254.66"
            />
          </G>
        </G>
        <G id="Layer_47" data-name="Layer 47">
          <G id="trappa">
            <Circle
              x="300.6"
              y="300.66"
              fill="none"
              r="26"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
            />
            <Circle
              style={{ isolation: 'isolate' }}
              x="300.6"
              y="300.66"
              fill="#e3e3e3"
              opacity="0.2"
              r="26"
            />
            <Path
              d="M300.6,313.08h-9.75a5.39,5.39,0,0,1-.8-.06,2.11,2.11,0,0,1-1.86-2,5.07,5.07,0,0,1,0-.55V291a3.82,3.82,0,0,1,0-.68,2.27,2.27,0,0,1,2.31-2h19.66a4.21,4.21,0,0,1,.79.06,2.17,2.17,0,0,1,2,2.11v20.06a4.15,4.15,0,0,1-.14,1.1,2.07,2.07,0,0,1-2,1.49,4.61,4.61,0,0,1-.53,0Z"
              fill="#e3e3e3"
            />
            <Path
              d="M305.15,296H302c-.23,0-.31,0-.31.29v3.2h-3.5v3.55h-3.43v3.53h-3.46v1.77h5.19v-3.53H300v-3.51h3.47v-3.51h3.47v-3.49h3.41v-1.74h-5.16Z"
              fill="#002b64"
            />
          </G>
        </G>
        <G id="Layer_46" data-name="Layer 46">
          <G id="Layer_11" opacity="0.3" data-name="Layer 11">
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="374.71" y="88.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="418.71" y="88.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="462.71" y="88.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="542.71" y="88.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="586.71" y="88.06" />
            <Rect height="43.78" width="29.2" fill="#e3e3e3" x="667" y="75.77" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="560.71" y="19.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="604.71" y="19.06" />
            <Rect height="29.2" width="43.5" fill="#e3e3e3" x="373.1" y="19.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="460.71" y="19.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="416.71" y="19.06" />
            <Rect height="29.2" width="43.78" fill="#e3e3e3" x="329.71" y="19.06" />
            <Rect
              height="43.78"
              width="29.2"
              fill="#e3e3e3"
              transform="translate(1.65 196.55) rotate(-34.99)"
              x="298.01"
              y="73.77"
            />
            <Polyline
              fill="#e3e3e3"
              points="227.76 13.07 183.88 13.07 183.88 42.28 227.76 42.28 227.76 13.07"
            />
            <Polyline
              fill="#e3e3e3"
              points="241.44 20.53 241.44 42.44 263.35 42.44 263.35 20.53 241.44 20.53"
            />
            <Polyline
              fill="#e3e3e3"
              points="119.44 42.53 119.44 64.44 141.34 64.44 141.34 42.53 119.44 42.53"
            />
            <Polyline
              fill="#e3e3e3"
              points="119.17 138.63 136.68 138.63 136.68 167.92 119.17 167.92 136.68 167.92 136.68 197.13 119.17 197.13 119.17 226.42 136.68 226.42 136.68 197.13 119.17 197.13 119.17 167.92 119.17 138.63"
            />
            <Rect height="43.78" width="29.2" fill="#e3e3e3" x="162.01" y="129.77" />
            <Rect height="29.2" width="59.39" fill="#e3e3e3" x="188.71" y="88.06" />
            <Rect height="43.78" width="29.2" fill="#e3e3e3" x="162.01" y="173.77" />
            <Rect height="43.78" width="29.2" fill="#e3e3e3" x="162.01" y="217.77" />
          </G>
        </G>
        <G id="Layer_45" data-name="Layer 45">
          <G id="Infodisk">
            <G id="Utställare">
              <G opacity="0.3">
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="378.71" y="139.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="480.71" y="139.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="524.71" y="139.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="568.71" y="139.06" />
                <Rect height="29.2" width="58.39" fill="#e3e3e3" x="422.71" y="139.06" />
              </G>
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="378.71"
                y="139.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="480.71"
                y="139.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="524.71"
                y="139.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="568.71"
                y="139.06"
              />
              <Rect
                height="29.2"
                width="58.39"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="422.71"
                y="139.06"
              />
              <G opacity="0.3">
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="441.01" y="231.77" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="480.71" y="360.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="524.71" y="360.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="394.71" y="432.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="438.71" y="432.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="482.71" y="432.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="526.71" y="432.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="570.71" y="432.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="480.71" y="207.06" />
                <Rect height="29.2" width="43.78" fill="#e3e3e3" x="524.71" y="207.06" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="659" y="170.77" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="659" y="214.77" />
                <Rect height="87.39" width="29.2" fill="#e3e3e3" x="659" y="258.77" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="581" y="247.77" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="659" y="389.77" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="659" y="345.77" />
                <Rect height="58.39" width="29.2" fill="#e3e3e3" x="581" y="291.77" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="441.01" y="275.77" />
                <Rect height="43.78" width="29.2" fill="#e3e3e3" x="441.01" y="319.77" />
              </G>
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="441.01"
                y="231.77"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="480.71"
                y="360.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="524.71"
                y="360.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="394.71"
                y="432.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="438.71"
                y="432.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="482.71"
                y="432.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="526.71"
                y="432.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="570.71"
                y="432.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="480.71"
                y="207.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="524.71"
                y="207.06"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="659"
                y="170.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="659"
                y="214.77"
              />
              <Rect
                height="87.39"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="659"
                y="258.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="581"
                y="247.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="659"
                y="389.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="659"
                y="345.77"
              />
              <Rect
                height="58.39"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="581"
                y="291.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="441.01"
                y="275.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="441.01"
                y="319.77"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="374.71"
                y="88.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="418.71"
                y="88.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="462.71"
                y="88.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="542.71"
                y="88.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="586.71"
                y="88.06"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="667"
                y="75.77"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="560.71"
                y="19.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="604.71"
                y="19.06"
              />
              <Rect
                height="29.2"
                width="43.5"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="373.1"
                y="19.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="460.71"
                y="19.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="416.71"
                y="19.06"
              />
              <Rect
                height="29.2"
                width="43.78"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="329.71"
                y="19.06"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                transform="translate(1.65 196.55) rotate(-34.99)"
                x="298.01"
                y="73.77"
              />
              <Polyline
                fill="none"
                points="227.76 13.07 183.88 13.07 183.88 42.28 227.76 42.28 227.76 13.07"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
              />
              <Polyline
                fill="none"
                points="241.44 20.53 241.44 42.44 263.35 42.44 263.35 20.53 241.44 20.53"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
              />
              <Polyline
                fill="none"
                points="119.44 42.53 119.44 64.44 141.34 64.44 141.34 42.53 119.44 42.53"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
              />
              <Polyline
                fill="none"
                points="119.17 138.63 136.68 138.63 136.68 167.92 119.17 167.92 136.68 167.92 136.68 197.13 119.17 197.13 119.17 226.42 136.68 226.42 136.68 197.13 119.17 197.13 119.17 167.92 119.17 138.63"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="162.01"
                y="129.77"
              />
              <Rect
                height="29.2"
                width="59.39"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.65"
                x="188.71"
                y="88.06"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="162.01"
                y="173.77"
              />
              <Rect
                height="43.78"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.42"
                x="162.01"
                y="217.77"
              />
            </G>
            <G id="info">
              <Rect
                height="72.39"
                style={{ isolation: 'isolate' }}
                width="29.2"
                fill="#e3e3e3"
                opacity="0.3"
                x="343"
                y="262.77"
              />
              <Rect
                height="72.39"
                width="29.2"
                fill="none"
                stroke="#002b64"
                strokeLinecap="round"
                strokeWidth="1.82"
                x="343"
                y="262.77"
              />
            </G>
            <Path
              d="M357.75,312.59h-9.39a4.85,4.85,0,0,1-.76,0,2,2,0,0,1-1.8-1.94,4.58,4.58,0,0,1,0-.53V291.3a3.67,3.67,0,0,1,0-.66,2.17,2.17,0,0,1,2.22-2H367a4.87,4.87,0,0,1,.76.06,2.1,2.1,0,0,1,1.91,2V310a3.81,3.81,0,0,1-.14,1.06,2,2,0,0,1-1.93,1.44h-.51Z"
              fill="#e3e3e3"
            />
            <Path
              d="M355.37,306.44v-.6l1-.14a.52.52,0,0,0,.31-.19,1.1,1.1,0,0,0,.09-.56v-4.07a3,3,0,0,0-.06-.59.79.79,0,0,0-.37-.24,3.53,3.53,0,0,0-.93-.15v-.51a4.45,4.45,0,0,0,1.66-.4,3.7,3.7,0,0,0,1.06-.78h.62v3l-.06,3.76a5,5,0,0,0,0,.7,7.16,7.16,0,0,0,.93.2,1.61,1.61,0,0,1,.39.09v.51h-.79c-.62,0-1.46,0-2.5,0h-.88C355.55,306.42,355.47,306.44,355.37,306.44Zm1.28-11a1.1,1.1,0,0,1,1.07-1.13h.08a1.29,1.29,0,0,1,.91.33,1,1,0,0,1,.35.76,1.44,1.44,0,0,1-.14.63,1.16,1.16,0,0,1-1.89.31,1.23,1.23,0,0,1-.38-.88Z"
              fill="#002b64"
            />
            <Circle
              x="357.72"
              y="300.62"
              fill="none"
              r="9.42"
              stroke="#002b64"
              strokeWidth="1.48"
            />
          </G>
        </G>
        <G id="Layer_44" data-name="Layer 44">
          <G id="Layer_2" data-name="Layer 2">
            <Path
              d="M113.6,5.66V286.82a26,26,0,0,0-41.33-3.48H38.6V318H72.27a26,26,0,0,0,41.33-3.48V595.66h590V5.66Z"
              fill="none"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="6.14"
            />
            <Path
              d="M92.6,315.66H80.85a6.2,6.2,0,0,1-1-.07,2.54,2.54,0,0,1-2.25-2.42,5,5,0,0,1,0-.67V289a5.9,5.9,0,0,1,.06-.83,2.73,2.73,0,0,1,2.79-2.47h23.76a6.2,6.2,0,0,1,1,.07,2.62,2.62,0,0,1,2.39,2.54,9.93,9.93,0,0,1,0,1.09v23.15a5,5,0,0,1-.17,1.33,2.49,2.49,0,0,1-2.44,1.82H92.6Z"
              fill="#e3e3e3"
            />
            <Path
              d="M96.68,300.47V297.8a.43.43,0,0,0-.43-.43H81.93a.43.43,0,0,1-.43-.43v-2.28a.43.43,0,0,1,.43-.43H96.25a.43.43,0,0,0,.43-.43v-2.67a.43.43,0,0,1,.64-.37l8.06,4.65a.43.43,0,0,1,0,.74l-8.06,4.65a.43.43,0,0,1-.64-.33Z"
              fill="#002b64"
            />
            <Path
              d="M88.52,300.85v2.67a.43.43,0,0,0,.43.43h14.32a.43.43,0,0,1,.43.43v2.28a.43.43,0,0,1-.43.43H89a.43.43,0,0,0-.43.43v2.67a.43.43,0,0,1-.64.37l-8.06-4.65a.43.43,0,0,1,0-.74l8.06-4.65a.43.43,0,0,1,.64.33Z"
              fill="#002b64"
            />
          </G>
        </G>
      </G>
      <G id="_62" data-name="62">
        <G id="_62-2" data-name=" 62">
          <Circle x="312.6" y="95.66" fill="#e3e3e3" r="10" />
          <Path
            d="M310.75,93.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44,6.33,6.33,0,0,1,.17-1.42,4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.59,1.59,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.19,1.19,0,0,0-.37-.33A1.08,1.08,0,0,0,309.6,95.31Z"
            fill="#002b64"
          />
          <Path
            d="M313,94.56a3.53,3.53,0,0,1,.15-1.23,3,3,0,0,1,.53-1,2.43,2.43,0,0,1,.91-.67,3.17,3.17,0,0,1,1.23-.23,3.1,3.1,0,0,1,1,.16,2.49,2.49,0,0,1,.84.48,2.29,2.29,0,0,1,.58.75,2.42,2.42,0,0,1,.21,1,2.65,2.65,0,0,1-.11.77,2.1,2.1,0,0,1-.3.62,2.64,2.64,0,0,1-.43.51,5.52,5.52,0,0,1-.53.43l-.59.39-.6.4c-.19.14-.38.29-.56.45a2.71,2.71,0,0,0-.48.53h3.64v1.34h-5.65A3.13,3.13,0,0,1,313,98.1a3.18,3.18,0,0,1,.53-.89,4.43,4.43,0,0,1,.77-.72l.94-.67.54-.36a3,3,0,0,0,.52-.4,2.15,2.15,0,0,0,.4-.5,1.17,1.17,0,0,0,.16-.62,1.15,1.15,0,0,0-.33-.87,1.13,1.13,0,0,0-.83-.32,1,1,0,0,0-.58.16,1.25,1.25,0,0,0-.37.42,1.77,1.77,0,0,0-.21.57,3.34,3.34,0,0,0-.06.62Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_63" data-name="63">
        <G id="_63-2" data-name=" 63">
          <Circle x="351.6" y="33.66" fill="#e3e3e3" r="10" />
          <Path
            d="M349.75,31.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44,6.33,6.33,0,0,1,.17-1.42,4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.37,1.37,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.31,1.31,0,0,0-.37-.33A1.08,1.08,0,0,0,348.6,33.31Z"
            fill="#002b64"
          />
          <Path
            d="M354.11,32.71a2.44,2.44,0,0,0,.54,0,1.52,1.52,0,0,0,.53-.12,1,1,0,0,0,.41-.3.88.88,0,0,0,.16-.53.91.91,0,0,0-.33-.76,1.18,1.18,0,0,0-.76-.27,1.07,1.07,0,0,0-.9.4,1.49,1.49,0,0,0-.29,1H352a3.29,3.29,0,0,1,.22-1.08,2.57,2.57,0,0,1,.54-.85,2.48,2.48,0,0,1,.86-.54,2.85,2.85,0,0,1,1.08-.19,3,3,0,0,1,.92.14,2.39,2.39,0,0,1,.83.41,2,2,0,0,1,.6.67,1.81,1.81,0,0,1,.23.91,1.84,1.84,0,0,1-.27,1,1.32,1.32,0,0,1-.81.58h0a1.62,1.62,0,0,1,1,.62,1.76,1.76,0,0,1,.37,1.13,2.31,2.31,0,0,1-.24,1.07,2.49,2.49,0,0,1-.63.8,3.19,3.19,0,0,1-.91.49,3.64,3.64,0,0,1-2.26,0A2.38,2.38,0,0,1,352,35.85a3,3,0,0,1-.22-1.19h1.48a2.21,2.21,0,0,0,.1.59,1.37,1.37,0,0,0,.25.48,1.14,1.14,0,0,0,.42.33,1.32,1.32,0,0,0,.59.12,1.29,1.29,0,0,0,.89-.33,1.31,1.31,0,0,0,.19-1.55.93.93,0,0,0-.44-.34,1.7,1.7,0,0,0-.57-.12h-.6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_65" data-name="65">
        <G id="_64" data-name=" 64">
          <Circle x="438.6" y="33.66" fill="#e3e3e3" r="10" />
          <Path
            d="M436.75,31.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44,6.33,6.33,0,0,1,.17-1.42,4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.59,1.59,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.19,1.19,0,0,0-.37-.33A1.08,1.08,0,0,0,435.6,33.31Z"
            fill="#002b64"
          />
          <Path
            d="M444.1,30.89h-3.18l-.32,1.77h0a1.87,1.87,0,0,1,.68-.46,2.31,2.31,0,0,1,.82-.13,2.46,2.46,0,0,1,1,.2,2.23,2.23,0,0,1,.75.57,2.47,2.47,0,0,1,.46.83,3.34,3.34,0,0,1,.16,1,2.72,2.72,0,0,1-.23,1.11,2.8,2.8,0,0,1-.62.88,3,3,0,0,1-.91.59,2.9,2.9,0,0,1-1.1.2,3.74,3.74,0,0,1-1.07-.16,2.69,2.69,0,0,1-.91-.46,2.2,2.2,0,0,1-.63-.76,2.41,2.41,0,0,1-.25-1.07h1.56a1.29,1.29,0,0,0,.4.84,1.24,1.24,0,0,0,.86.32,1.28,1.28,0,0,0,.56-.12,1.2,1.2,0,0,0,.41-.33,1.42,1.42,0,0,0,.27-.48,1.7,1.7,0,0,0,0-1.12,1.33,1.33,0,0,0-.21-.45,1.21,1.21,0,0,0-.42-.31,1.55,1.55,0,0,0-1.24,0,1.66,1.66,0,0,0-.49.47H439l.76-4.26h4.3Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_66" data-name="66">
        <G id="_66-2" data-name=" 66">
          <Circle x="482.6" y="33.66" fill="#e3e3e3" r="10" />
          <Path
            d="M480.75,31.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44,6.33,6.33,0,0,1,.17-1.42,4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.59,1.59,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.19,1.19,0,0,0-.37-.33A1.08,1.08,0,0,0,479.6,33.31Z"
            fill="#002b64"
          />
          <Path
            d="M486.87,31.58a1.36,1.36,0,0,0-.35-.67.94.94,0,0,0-.69-.29,1,1,0,0,0-.7.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.8,1.8,0,0,1,.75-.66,2.4,2.4,0,0,1,1-.2,2.25,2.25,0,0,1,1,.22,2.43,2.43,0,0,1,.8.57,2.16,2.16,0,0,1,.45.81,2.83,2.83,0,0,1,.14.91,2.89,2.89,0,0,1-.74,2,2.73,2.73,0,0,1-.85.6,2.8,2.8,0,0,1-1.1.22,2.75,2.75,0,0,1-1.45-.35,2.7,2.7,0,0,1-.9-.91,3.83,3.83,0,0,1-.48-1.29,7.64,7.64,0,0,1-.13-1.44A6.33,6.33,0,0,1,483,32a4.27,4.27,0,0,1,.52-1.3,3.12,3.12,0,0,1,.94-.94,2.87,2.87,0,0,1,3.08.19,2.32,2.32,0,0,1,.81,1.58Zm-1.12,1.73a1.28,1.28,0,0,0-.55.11,1.12,1.12,0,0,0-.39.32,1.37,1.37,0,0,0-.23.45,2,2,0,0,0-.08.55,1.58,1.58,0,0,0,.09.52,1.26,1.26,0,0,0,.24.46,1,1,0,0,0,.39.33,1.12,1.12,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.14,1.14,0,0,0,.37-.32,1.39,1.39,0,0,0,.24-.45,1.81,1.81,0,0,0,.07-.52,1.88,1.88,0,0,0-.07-.53,1.82,1.82,0,0,0-.21-.47,1.31,1.31,0,0,0-.37-.33A1.11,1.11,0,0,0,485.75,33.31Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_67" data-name="67">
        <G id="_67-2" data-name=" 67">
          <Circle x="582.6" y="33.66" fill="#e3e3e3" r="10" />
          <Path
            d="M580.76,31.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44A6.33,6.33,0,0,1,576.9,32a4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.59,1.59,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.19,1.19,0,0,0-.37-.33A1.08,1.08,0,0,0,579.6,33.31Z"
            fill="#002b64"
          />
          <Path
            d="M588.29,30.94a5.79,5.79,0,0,0-1.08,1.3,9.49,9.49,0,0,0-.78,1.64,11.25,11.25,0,0,0-.49,1.76,9.17,9.17,0,0,0-.17,1.66H584.1a10.28,10.28,0,0,1,.8-3.31A11.9,11.9,0,0,1,586.68,31H583V29.6h5.26Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_64-2" data-name="64">
        <G id="_64-2-2" data-name=" 64-2">
          <Circle x="394.6" y="33.66" fill="#e3e3e3" r="10" />
          <Path
            d="M392.75,31.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44,6.33,6.33,0,0,1,.17-1.42,4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.37,1.37,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.31,1.31,0,0,0-.37-.33A1.08,1.08,0,0,0,391.6,33.31Z"
            fill="#002b64"
          />
          <Path
            d="M398,35.52h-3.25V34.09l3.34-4.49h1.4v4.63h1v1.29h-1V37.3H398Zm0-4h0l-2,2.67h2Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_68" data-name="68">
        <G id="_68-2" data-name=" 68">
          <Circle x="626.6" y="33.66" fill="#e3e3e3" r="10" />
          <Path
            d="M624.76,31.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44A6.33,6.33,0,0,1,620.9,32a4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.59,1.59,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.19,1.19,0,0,0-.37-.33A1.08,1.08,0,0,0,623.6,33.31Z"
            fill="#002b64"
          />
          <Path
            d="M627.07,31.55a1.78,1.78,0,0,1,.23-.91,2.12,2.12,0,0,1,.6-.66,2.77,2.77,0,0,1,.83-.4,3.33,3.33,0,0,1,.94-.13,2.94,2.94,0,0,1,1.21.22,2.48,2.48,0,0,1,.8.53,2,2,0,0,1,.43.68,1.82,1.82,0,0,1,.13.64,1.77,1.77,0,0,1-.28,1,1.57,1.57,0,0,1-.84.61h0a1.82,1.82,0,0,1,1.07.66,2,2,0,0,1,.37,1.23,2.16,2.16,0,0,1-.25,1.06,2.37,2.37,0,0,1-.65.76,2.92,2.92,0,0,1-.92.45,3.89,3.89,0,0,1-2.14,0,2.8,2.8,0,0,1-.94-.44,2.28,2.28,0,0,1-.66-.75,2.25,2.25,0,0,1-.25-1.07,2,2,0,0,1,.39-1.24,1.82,1.82,0,0,1,1.07-.66h0a1.38,1.38,0,0,1-.85-.58A1.78,1.78,0,0,1,627.07,31.55ZM628.32,35a1.19,1.19,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.1,1.1,0,0,0,.43.26,1.32,1.32,0,0,0,.53.1,1.3,1.3,0,0,0,.52-.1,1.14,1.14,0,0,0,.42-.26,1.2,1.2,0,0,0,.28-.41A1.32,1.32,0,0,0,631,35a1,1,0,0,0-.11-.5,1.08,1.08,0,0,0-.28-.39,1.27,1.27,0,0,0-.42-.25,1.44,1.44,0,0,0-.51-.09,1.52,1.52,0,0,0-1,.31A1.1,1.1,0,0,0,628.32,35Zm.17-3.28a1,1,0,0,0,.35.76,1.5,1.5,0,0,0,.38.19,1.74,1.74,0,0,0,.45.06,1.33,1.33,0,0,0,.82-.25.92.92,0,0,0,.33-.76,1.47,1.47,0,0,0,0-.33,1,1,0,0,0-.17-.35,1.11,1.11,0,0,0-.35-.28,1.41,1.41,0,0,0-.59-.11,1.34,1.34,0,0,0-.83.28,1,1,0,0,0-.39.76Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_69" data-name="69">
        <G id="_69-2" data-name=" 69">
          <Circle x="681.6" y="97.66" fill="#e3e3e3" r="10" />
          <Path
            d="M679.76,95.58a1.36,1.36,0,0,0-.35-.67.91.91,0,0,0-.68-.29,1.06,1.06,0,0,0-.71.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.84,1.84,0,0,1,.74-.66,2.4,2.4,0,0,1,1-.2,2.4,2.4,0,0,1,2.26,1.6,3.14,3.14,0,0,1,.14.91,3,3,0,0,1-.2,1.1,2.83,2.83,0,0,1-.55.9,2.61,2.61,0,0,1-.85.6,2.77,2.77,0,0,1-1.1.22,2.56,2.56,0,0,1-2.35-1.26,3.62,3.62,0,0,1-.47-1.29,7.64,7.64,0,0,1-.14-1.44A6.33,6.33,0,0,1,675.9,96a4.28,4.28,0,0,1,.53-1.3,3,3,0,0,1,.93-.94,2.87,2.87,0,0,1,3.08.19,2.33,2.33,0,0,1,.82,1.58Zm-1.15,1.73a1.31,1.31,0,0,0-.55.11,1.34,1.34,0,0,0-.39.32,1.59,1.59,0,0,0-.23.45,2,2,0,0,0-.07.55,1.57,1.57,0,0,0,.08.52,1.26,1.26,0,0,0,.24.46,1.23,1.23,0,0,0,.39.33,1.15,1.15,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.18,1.18,0,0,0,.38-.32,1.37,1.37,0,0,0,.23-.45,1.82,1.82,0,0,0,.08-.52,1.89,1.89,0,0,0-.08-.53,1.33,1.33,0,0,0-.21-.47,1.19,1.19,0,0,0-.37-.33A1.08,1.08,0,0,0,678.6,97.31Z"
            fill="#002b64"
          />
          <Path
            d="M683.45,99.32a1.32,1.32,0,0,0,.35.67.91.91,0,0,0,.68.29,1,1,0,0,0,.71-.25,1.9,1.9,0,0,0,.44-.6,3.27,3.27,0,0,0,.23-.77,6.27,6.27,0,0,1,.1-.72h0a1.84,1.84,0,0,1-.74.66,2.25,2.25,0,0,1-1,.2,2.35,2.35,0,0,1-1-.21,2.39,2.39,0,0,1-.8-.58,2.29,2.29,0,0,1-.46-.8,3.21,3.21,0,0,1-.14-.92,3.07,3.07,0,0,1,.19-1.1,2.78,2.78,0,0,1,.55-.89,2.47,2.47,0,0,1,.86-.6,2.6,2.6,0,0,1,1.1-.22,2.51,2.51,0,0,1,2.35,1.26,3.5,3.5,0,0,1,.47,1.28,7.79,7.79,0,0,1,.13,1.44,6.31,6.31,0,0,1-.16,1.42,4.18,4.18,0,0,1-.53,1.3,2.88,2.88,0,0,1-.93.94,2.81,2.81,0,0,1-3.08-.19,2.33,2.33,0,0,1-.82-1.58Zm1.15-1.73a1.16,1.16,0,0,0,.54-.11,1.1,1.1,0,0,0,.39-.31,1.55,1.55,0,0,0,.24-.46,1.93,1.93,0,0,0,.07-.55,1.6,1.6,0,0,0-.32-1,1.2,1.2,0,0,0-.39-.32,1.15,1.15,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.23,1.23,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.08.51,2.42,2.42,0,0,0,.07.54,1.5,1.5,0,0,0,.22.46,1.19,1.19,0,0,0,.37.33A1.08,1.08,0,0,0,684.6,97.59Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_70" data-name="70">
        <G id="_70-2" data-name=" 70">
          <Circle x="608.6" y="102.66" fill="#e3e3e3" r="10" />
          <Path
            d="M608.17,99.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.22,11.22,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H604a10.57,10.57,0,0,1,.81-3.31A11.86,11.86,0,0,1,606.6,100H603V98.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M608.83,102.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.1,2.1,0,0,1,.93-.65,2.85,2.85,0,0,1,1.09-.2,2.89,2.89,0,0,1,1.09.2,2.19,2.19,0,0,1,.9.66,3.25,3.25,0,0,1,.62,1.22,6.81,6.81,0,0,1,.22,1.89,6.94,6.94,0,0,1-.22,1.92,3.48,3.48,0,0,1-.62,1.25,2.22,2.22,0,0,1-.9.67,3.1,3.1,0,0,1-1.09.2,3.06,3.06,0,0,1-1.09-.2,2.13,2.13,0,0,1-.89-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,608.83,102.42Zm1.56,0v.8a5.28,5.28,0,0,0,.14.9,1.91,1.91,0,0,0,.37.74.88.88,0,0,0,.73.31.89.89,0,0,0,.73-.31,1.68,1.68,0,0,0,.38-.74,3.84,3.84,0,0,0,.14-.9v-1.28a2.32,2.32,0,0,0,0-.58,4.09,4.09,0,0,0-.11-.59,1.83,1.83,0,0,0-.21-.52,1.27,1.27,0,0,0-.36-.37,1,1,0,0,0-.54-.15.92.92,0,0,0-.53.15,1.06,1.06,0,0,0-.36.37,2.18,2.18,0,0,0-.21.52,4.09,4.09,0,0,0-.11.59,3.87,3.87,0,0,0,0,.58C610.39,102.13,610.39,102.29,610.39,102.42Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_71" data-name="71">
        <G id="_71-2" data-name=" 71">
          <Circle x="564.6" y="102.66" fill="#e3e3e3" r="10" />
          <Path
            d="M564.17,99.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.22,11.22,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H560a10.57,10.57,0,0,1,.81-3.31A11.86,11.86,0,0,1,562.6,100H559V98.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M568.91,106.3h-1.56v-5h-1.94v-1.17a3.42,3.42,0,0,0,.79-.06,2.27,2.27,0,0,0,.69-.25,1.66,1.66,0,0,0,.51-.48,2,2,0,0,0,.27-.74h1.24Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_72" data-name="72">
        <G id="_72-2" data-name=" 72">
          <Circle x="484.6" y="102.66" fill="#e3e3e3" r="10" />
          <Path
            d="M484.17,99.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.21,11.21,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H480a10.57,10.57,0,0,1,.81-3.31A11.86,11.86,0,0,1,482.6,100H479V98.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M485,101.56a3.53,3.53,0,0,1,.15-1.23,3,3,0,0,1,.53-1,2.43,2.43,0,0,1,.91-.67,3.17,3.17,0,0,1,1.23-.23,3.1,3.1,0,0,1,1,.16,2.49,2.49,0,0,1,.84.48,2.29,2.29,0,0,1,.58.75,2.42,2.42,0,0,1,.21,1,2.65,2.65,0,0,1-.11.77,2.1,2.1,0,0,1-.3.62,2.64,2.64,0,0,1-.43.51,5.52,5.52,0,0,1-.53.43l-.59.39-.6.4c-.19.14-.38.29-.56.45a2.71,2.71,0,0,0-.48.53h3.64v1.34h-5.65a3.13,3.13,0,0,1,.19-1.16,3.18,3.18,0,0,1,.53-.89,4.43,4.43,0,0,1,.77-.72l.94-.67.54-.36a3,3,0,0,0,.52-.4,2.15,2.15,0,0,0,.4-.5,1.17,1.17,0,0,0,.16-.62,1.15,1.15,0,0,0-.33-.87,1.13,1.13,0,0,0-.83-.32,1,1,0,0,0-.58.16,1.25,1.25,0,0,0-.37.42,1.77,1.77,0,0,0-.21.57,3.34,3.34,0,0,0-.06.62Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_73" data-name="73">
        <G id="_73-2" data-name=" 73">
          <Circle x="440.6" y="102.66" fill="#e3e3e3" r="10" />
          <Path
            d="M440.17,99.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.21,11.21,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H436a10.57,10.57,0,0,1,.81-3.31A11.86,11.86,0,0,1,438.6,100H435V98.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M443.11,101.71a2.44,2.44,0,0,0,.54,0,1.52,1.52,0,0,0,.53-.12,1,1,0,0,0,.41-.3.88.88,0,0,0,.16-.53.91.91,0,0,0-.33-.76,1.18,1.18,0,0,0-.76-.27,1.07,1.07,0,0,0-.9.4,1.49,1.49,0,0,0-.29,1H441a3.29,3.29,0,0,1,.22-1.08,2.57,2.57,0,0,1,.54-.85,2.48,2.48,0,0,1,.86-.54,2.85,2.85,0,0,1,1.08-.19,3,3,0,0,1,.92.14,2.39,2.39,0,0,1,.83.41,2,2,0,0,1,.6.67,1.81,1.81,0,0,1,.23.91,1.84,1.84,0,0,1-.27,1,1.32,1.32,0,0,1-.81.58h0a1.62,1.62,0,0,1,1,.62,1.76,1.76,0,0,1,.37,1.13,2.31,2.31,0,0,1-.24,1.07,2.49,2.49,0,0,1-.63.8,3.06,3.06,0,0,1-.91.49,3.59,3.59,0,0,1-1.08.17,3.65,3.65,0,0,1-1.18-.19,2.38,2.38,0,0,1-1.49-1.44,3,3,0,0,1-.19-1.18h1.48a2.21,2.21,0,0,0,.1.59,1.24,1.24,0,0,0,.26.48,1,1,0,0,0,.41.33,1.32,1.32,0,0,0,.59.12,1.29,1.29,0,0,0,.89-.33,1.31,1.31,0,0,0,.19-1.55.93.93,0,0,0-.44-.34,1.7,1.7,0,0,0-.57-.12h-.6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_74" data-name="74">
        <G id="_74-2" data-name=" 74">
          <Circle x="396.6" y="102.66" fill="#e3e3e3" r="10" />
          <Path
            d="M396.17,99.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.21,11.21,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H392a10.57,10.57,0,0,1,.81-3.31A11.86,11.86,0,0,1,394.6,100H391V98.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M400,104.52h-3.25v-1.43l3.34-4.49h1.4v4.63h1v1.29h-1v1.78H400Zm0-4h0l-2,2.67h2Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_75" data-name="75">
        <G id="_75-2" data-name=" 75">
          <Circle x="400.6" y="153.66" fill="#e3e3e3" r="10" />
          <Path
            d="M400.17,150.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.21,11.21,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H396a10.57,10.57,0,0,1,.81-3.31,11.86,11.86,0,0,1,1.77-2.94h-3.65V149.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M406.1,150.89h-3.18l-.32,1.77h0a2,2,0,0,1,.69-.46,2.31,2.31,0,0,1,.82-.13,2.46,2.46,0,0,1,1,.2,2.23,2.23,0,0,1,.75.57,2.47,2.47,0,0,1,.46.83,3.34,3.34,0,0,1,.16,1,2.72,2.72,0,0,1-.23,1.11,2.67,2.67,0,0,1-.63.88,2.87,2.87,0,0,1-.9.59,2.9,2.9,0,0,1-1.1.2,3.86,3.86,0,0,1-1.08-.16,2.74,2.74,0,0,1-.9-.46,2.34,2.34,0,0,1-.64-.76,2.41,2.41,0,0,1-.24-1.07h1.56a1.29,1.29,0,0,0,.4.84,1.24,1.24,0,0,0,.86.32,1.2,1.2,0,0,0,.55-.12,1.14,1.14,0,0,0,.42-.33,1.42,1.42,0,0,0,.27-.48,1.7,1.7,0,0,0,0-1.12,1.33,1.33,0,0,0-.22-.45,1.21,1.21,0,0,0-.42-.31,1.55,1.55,0,0,0-1.24,0,1.66,1.66,0,0,0-.49.47H401l.76-4.26h4.3Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_76" data-name="76">
        <G id="_76-2" data-name=" 76">
          <Circle x="450.6" y="153.66" fill="#e3e3e3" r="10" />
          <Path
            d="M450.17,150.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.21,11.21,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H446a10.57,10.57,0,0,1,.81-3.31,11.86,11.86,0,0,1,1.77-2.94h-3.65V149.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M454.87,151.58a1.36,1.36,0,0,0-.35-.67.94.94,0,0,0-.69-.29,1,1,0,0,0-.7.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.8,1.8,0,0,1,.75-.66,2.4,2.4,0,0,1,1-.2,2.25,2.25,0,0,1,1,.22,2.43,2.43,0,0,1,.8.57,2.16,2.16,0,0,1,.45.81,2.83,2.83,0,0,1,.14.91,2.89,2.89,0,0,1-.74,2,2.73,2.73,0,0,1-.85.6,2.8,2.8,0,0,1-1.1.22,2.75,2.75,0,0,1-1.45-.35,2.7,2.7,0,0,1-.9-.91,3.83,3.83,0,0,1-.48-1.29,7.64,7.64,0,0,1-.13-1.44A6.33,6.33,0,0,1,451,152a4.27,4.27,0,0,1,.52-1.3,3.12,3.12,0,0,1,.94-.94,2.87,2.87,0,0,1,3.08.19,2.32,2.32,0,0,1,.81,1.58Zm-1.12,1.73a1.28,1.28,0,0,0-.55.11,1.12,1.12,0,0,0-.39.32,1.37,1.37,0,0,0-.23.45,2,2,0,0,0-.08.55,1.58,1.58,0,0,0,.09.52,1.26,1.26,0,0,0,.24.46,1,1,0,0,0,.39.33,1.12,1.12,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.14,1.14,0,0,0,.37-.32,1.39,1.39,0,0,0,.24-.45,1.81,1.81,0,0,0,.07-.52,1.88,1.88,0,0,0-.07-.53,1.82,1.82,0,0,0-.21-.47,1.31,1.31,0,0,0-.37-.33A1.11,1.11,0,0,0,453.75,153.31Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_77" data-name="77">
        <G id="_77-2" data-name=" 77">
          <Circle x="502.6" y="153.66" fill="#e3e3e3" r="10" />
          <Path
            d="M502.17,150.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.21,11.21,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H498a10.57,10.57,0,0,1,.81-3.31,11.86,11.86,0,0,1,1.77-2.94h-3.65V149.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M508.29,150.94a5.79,5.79,0,0,0-1.08,1.3,9.49,9.49,0,0,0-.78,1.64,11.25,11.25,0,0,0-.49,1.76,9.17,9.17,0,0,0-.17,1.66H504.1a10.28,10.28,0,0,1,.8-3.31,11.9,11.9,0,0,1,1.78-2.94H503V149.6h5.26Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_78" data-name="78">
        <G id="_78-2" data-name=" 78">
          <Circle x="546.6" y="153.66" fill="#e3e3e3" r="10" />
          <Path
            d="M546.17,150.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.22,11.22,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H542a10.57,10.57,0,0,1,.81-3.31,11.86,11.86,0,0,1,1.77-2.94h-3.65V149.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M547.07,151.55a1.78,1.78,0,0,1,.23-.91,2.12,2.12,0,0,1,.6-.66,2.77,2.77,0,0,1,.83-.4,3.33,3.33,0,0,1,.94-.13,2.94,2.94,0,0,1,1.21.22,2.48,2.48,0,0,1,.8.53,2,2,0,0,1,.43.68,1.82,1.82,0,0,1,.13.64,1.77,1.77,0,0,1-.28,1,1.57,1.57,0,0,1-.84.61h0a1.82,1.82,0,0,1,1.07.66,2,2,0,0,1,.37,1.23,2.16,2.16,0,0,1-.25,1.06,2.37,2.37,0,0,1-.65.76,2.92,2.92,0,0,1-.92.45,3.89,3.89,0,0,1-2.14,0,2.8,2.8,0,0,1-.94-.44,2.28,2.28,0,0,1-.66-.75,2.25,2.25,0,0,1-.25-1.07,2,2,0,0,1,.39-1.24,1.82,1.82,0,0,1,1.07-.66h0a1.38,1.38,0,0,1-.85-.58A1.78,1.78,0,0,1,547.07,151.55Zm1.25,3.42a1.19,1.19,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.1,1.1,0,0,0,.43.26,1.32,1.32,0,0,0,.53.1,1.3,1.3,0,0,0,.52-.1,1.14,1.14,0,0,0,.42-.26,1.2,1.2,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1,1,0,0,0-.11-.5,1.08,1.08,0,0,0-.28-.39,1.27,1.27,0,0,0-.42-.25,1.44,1.44,0,0,0-.51-.09,1.52,1.52,0,0,0-1,.31A1.1,1.1,0,0,0,548.32,155Zm.17-3.28a1,1,0,0,0,.35.76,1.5,1.5,0,0,0,.38.19,1.74,1.74,0,0,0,.45.06,1.33,1.33,0,0,0,.82-.25.92.92,0,0,0,.33-.76,1.47,1.47,0,0,0,0-.33,1,1,0,0,0-.17-.35,1.11,1.11,0,0,0-.35-.28,1.41,1.41,0,0,0-.59-.11,1.34,1.34,0,0,0-.83.28,1,1,0,0,0-.39.76Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_79" data-name="79">
        <G id="_79-2" data-name=" 79">
          <Circle x="590.6" y="153.66" fill="#e3e3e3" r="10" />
          <Path
            d="M590.17,150.94a5.76,5.76,0,0,0-1.07,1.3,9.53,9.53,0,0,0-.79,1.64,11.22,11.22,0,0,0-.48,1.76,10.24,10.24,0,0,0-.18,1.66H586a10.57,10.57,0,0,1,.81-3.31,11.86,11.86,0,0,1,1.77-2.94h-3.65V149.6h5.26Z"
            fill="#002b64"
          />
          <Path
            d="M592.45,155.32a1.32,1.32,0,0,0,.35.67.91.91,0,0,0,.68.29,1,1,0,0,0,.71-.25,1.9,1.9,0,0,0,.44-.6,3.27,3.27,0,0,0,.23-.77,6.27,6.27,0,0,1,.1-.72h0a1.84,1.84,0,0,1-.74.66,2.25,2.25,0,0,1-1,.2,2.35,2.35,0,0,1-1-.21,2.39,2.39,0,0,1-.8-.58,2.29,2.29,0,0,1-.46-.8,3.21,3.21,0,0,1-.14-.92,3.07,3.07,0,0,1,.19-1.1,2.78,2.78,0,0,1,.55-.89,2.47,2.47,0,0,1,.86-.6,2.6,2.6,0,0,1,1.1-.22,2.51,2.51,0,0,1,2.35,1.26,3.5,3.5,0,0,1,.47,1.28,7.79,7.79,0,0,1,.13,1.44,6.31,6.31,0,0,1-.16,1.42,4.18,4.18,0,0,1-.53,1.3,2.88,2.88,0,0,1-.93.94,2.81,2.81,0,0,1-3.08-.19,2.33,2.33,0,0,1-.82-1.58Zm1.12-1.73a1.16,1.16,0,0,0,.54-.11,1.1,1.1,0,0,0,.39-.31,1.55,1.55,0,0,0,.24-.46,1.93,1.93,0,0,0,.07-.55,1.6,1.6,0,0,0-.32-1,1.2,1.2,0,0,0-.39-.32,1.15,1.15,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.23,1.23,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.08.51,2.42,2.42,0,0,0,.07.54,1.5,1.5,0,0,0,.22.46,1.19,1.19,0,0,0,.37.33,1.08,1.08,0,0,0,.55.14Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_80" data-name="80">
        <G id="_80-2" data-name=" 80">
          <Circle x="673.6" y="192.66" fill="#e3e3e3" r="10" />
          <Path
            d="M668,190.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.82,3.82,0,0,1-1.06.15,3.91,3.91,0,0,1-1.08-.15,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,668,190.55ZM669.2,194a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.1,1.1,0,0,0,.43.26,1.32,1.32,0,0,0,.53.1,1.27,1.27,0,0,0,.52-.1,1.14,1.14,0,0,0,.42-.26,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31A1.08,1.08,0,0,0,669.2,194Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M673.83,192.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.1,2.1,0,0,1,.93-.65,2.85,2.85,0,0,1,1.09-.2,2.89,2.89,0,0,1,1.09.2,2.19,2.19,0,0,1,.9.66,3.25,3.25,0,0,1,.62,1.22,6.81,6.81,0,0,1,.22,1.89,6.94,6.94,0,0,1-.22,1.92,3.48,3.48,0,0,1-.62,1.25,2.22,2.22,0,0,1-.9.67,3.1,3.1,0,0,1-1.09.2,3.06,3.06,0,0,1-1.09-.2,2.13,2.13,0,0,1-.89-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,673.83,192.42Zm1.56,0v.8a5.28,5.28,0,0,0,.14.9,1.91,1.91,0,0,0,.37.74.88.88,0,0,0,.73.31.89.89,0,0,0,.73-.31,1.68,1.68,0,0,0,.38-.74,3.84,3.84,0,0,0,.14-.9v-1.28a2.32,2.32,0,0,0,0-.58,4.09,4.09,0,0,0-.11-.59,1.83,1.83,0,0,0-.21-.52,1.27,1.27,0,0,0-.36-.37,1,1,0,0,0-.54-.15.92.92,0,0,0-.53.15,1.06,1.06,0,0,0-.36.37,2.18,2.18,0,0,0-.21.52,4.09,4.09,0,0,0-.11.59,3.87,3.87,0,0,0,0,.58C675.39,192.13,675.39,192.29,675.39,192.42Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_81" data-name="81">
        <G id="_81-2" data-name=" 81">
          <Circle x="673.6" y="236.66" fill="#e3e3e3" r="10" />
          <Path
            d="M668,234.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.82,3.82,0,0,1-1.06.15,3.91,3.91,0,0,1-1.08-.15,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,668,234.55ZM669.2,238a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.1,1.1,0,0,0,.43.26,1.32,1.32,0,0,0,.53.1,1.27,1.27,0,0,0,.52-.1,1.14,1.14,0,0,0,.42-.26,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31A1.08,1.08,0,0,0,669.2,238Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M677.91,240.3h-1.56v-5h-1.94v-1.18a3.42,3.42,0,0,0,.79-.06,2.27,2.27,0,0,0,.69-.25,1.66,1.66,0,0,0,.51-.48,2,2,0,0,0,.27-.74h1.24Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_82" data-name="82">
        <G id="_82-2" data-name=" 82">
          <Circle x="673.6" y="300.66" fill="#e3e3e3" r="10" />
          <Path
            d="M668,298.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,668,298.55ZM669.2,302a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.1,1.1,0,0,0,.43.26,1.32,1.32,0,0,0,.53.1,1.27,1.27,0,0,0,.52-.1,1.14,1.14,0,0,0,.42-.26,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M674,299.56a3.53,3.53,0,0,1,.15-1.23,3,3,0,0,1,.53-1,2.43,2.43,0,0,1,.91-.67,3.17,3.17,0,0,1,1.23-.23,3.1,3.1,0,0,1,1,.16,2.49,2.49,0,0,1,.84.48,2.29,2.29,0,0,1,.58.75,2.42,2.42,0,0,1,.21,1,2.65,2.65,0,0,1-.11.77,2.1,2.1,0,0,1-.3.62,2.64,2.64,0,0,1-.43.51,5.53,5.53,0,0,1-.53.43l-.59.39-.6.4c-.19.14-.38.29-.56.45a2.71,2.71,0,0,0-.48.53h3.64v1.34h-5.65a3.13,3.13,0,0,1,.19-1.16,3.18,3.18,0,0,1,.53-.89,4.43,4.43,0,0,1,.77-.72l.94-.67.54-.36a3,3,0,0,0,.52-.4,2.15,2.15,0,0,0,.4-.5,1.17,1.17,0,0,0,.16-.62,1.15,1.15,0,0,0-.33-.87,1.13,1.13,0,0,0-.83-.32,1,1,0,0,0-.58.16,1.25,1.25,0,0,0-.37.42,1.77,1.77,0,0,0-.21.57,3.34,3.34,0,0,0-.06.62Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_83" data-name="83">
        <G id="_83-2" data-name=" 83">
          <Circle x="673.6" y="367.66" fill="#e3e3e3" r="10" />
          <Path
            d="M668,365.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,668,365.55ZM669.2,369a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M676.11,366.71a2.44,2.44,0,0,0,.54,0,1.52,1.52,0,0,0,.53-.12,1,1,0,0,0,.41-.3.88.88,0,0,0,.16-.53.91.91,0,0,0-.33-.76,1.18,1.18,0,0,0-.76-.27,1.09,1.09,0,0,0-.9.39,1.53,1.53,0,0,0-.29,1H674a3.29,3.29,0,0,1,.22-1.08,2.57,2.57,0,0,1,.54-.85,2.48,2.48,0,0,1,.86-.53,2.85,2.85,0,0,1,1.08-.19,3,3,0,0,1,.92.14,2.39,2.39,0,0,1,.83.41,2,2,0,0,1,.6.67,1.81,1.81,0,0,1,.23.91,1.84,1.84,0,0,1-.27,1,1.32,1.32,0,0,1-.81.58h0a1.62,1.62,0,0,1,1,.62,1.76,1.76,0,0,1,.37,1.13,2.31,2.31,0,0,1-.24,1.07,2.49,2.49,0,0,1-.63.8,3.06,3.06,0,0,1-.91.49,3.58,3.58,0,0,1-1.08.16,3.65,3.65,0,0,1-1.18-.18,2.38,2.38,0,0,1-1.49-1.44,3,3,0,0,1-.19-1.18h1.48a2.21,2.21,0,0,0,.1.59,1.24,1.24,0,0,0,.26.48,1,1,0,0,0,.41.33,1.32,1.32,0,0,0,.59.12,1.29,1.29,0,0,0,.89-.33,1.31,1.31,0,0,0,.19-1.55.93.93,0,0,0-.44-.34,1.7,1.7,0,0,0-.57-.12h-.6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_84" data-name="84">
        <G id="_84-2" data-name=" 84">
          <Circle x="673.6" y="411.66" fill="#e3e3e3" r="10" />
          <Path
            d="M668,409.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,668,409.55ZM669.2,413a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M677,413.52h-3.25v-1.43l3.34-4.49h1.4v4.63h1v1.29h-1v1.78H677Zm0-4h0l-2,2.67h2Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_85" data-name="85">
        <G id="_85-2" data-name=" 85">
          <Circle x="592.6" y="446.66" fill="#e3e3e3" r="10" />
          <Path
            d="M587,444.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,587,444.55ZM588.2,448a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M598.1,443.89h-3.18l-.32,1.77h0a1.87,1.87,0,0,1,.68-.46,2.58,2.58,0,0,1,1.83.08,2.08,2.08,0,0,1,.75.56,2.47,2.47,0,0,1,.46.83,3.34,3.34,0,0,1,.16,1,2.72,2.72,0,0,1-.23,1.11,2.8,2.8,0,0,1-.62.88,3,3,0,0,1-.91.59,2.72,2.72,0,0,1-1.1.19,3.74,3.74,0,0,1-1.07-.15,2.69,2.69,0,0,1-.91-.46,2.2,2.2,0,0,1-.63-.76,2.41,2.41,0,0,1-.25-1.07h1.56a1.29,1.29,0,0,0,.4.84,1.24,1.24,0,0,0,.86.32,1.28,1.28,0,0,0,.56-.12,1.2,1.2,0,0,0,.41-.33,1.42,1.42,0,0,0,.27-.48,1.7,1.7,0,0,0,0-1.12,1.33,1.33,0,0,0-.22-.45,1.21,1.21,0,0,0-.42-.31,1.55,1.55,0,0,0-1.24,0,1.66,1.66,0,0,0-.49.47H593l.76-4.26h4.3Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_86" data-name="86">
        <G id="_86-2" data-name=" 86">
          <Circle x="548.6" y="446.66" fill="#e3e3e3" r="10" />
          <Path
            d="M543,444.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,543,444.55ZM544.2,448a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M552.88,444.58a1.36,1.36,0,0,0-.35-.67.94.94,0,0,0-.69-.29,1,1,0,0,0-.7.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.8,1.8,0,0,1,.75-.66,2.4,2.4,0,0,1,1-.2,2.25,2.25,0,0,1,1,.22,2.43,2.43,0,0,1,.8.57,2.16,2.16,0,0,1,.45.81,2.83,2.83,0,0,1,.14.91,2.89,2.89,0,0,1-.74,2,2.73,2.73,0,0,1-.85.6,2.8,2.8,0,0,1-1.1.21,2.76,2.76,0,0,1-1.45-.34,2.7,2.7,0,0,1-.9-.91,3.83,3.83,0,0,1-.48-1.29,7.64,7.64,0,0,1-.13-1.44A6.33,6.33,0,0,1,549,445a4.27,4.27,0,0,1,.52-1.3,3.12,3.12,0,0,1,.94-.94,2.87,2.87,0,0,1,3.08.19,2.32,2.32,0,0,1,.81,1.58Zm-1.12,1.73a1.28,1.28,0,0,0-.55.11,1.12,1.12,0,0,0-.39.32,1.37,1.37,0,0,0-.23.45,2,2,0,0,0-.08.55,1.58,1.58,0,0,0,.09.52,1.26,1.26,0,0,0,.24.46,1,1,0,0,0,.39.33,1.12,1.12,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.14,1.14,0,0,0,.37-.32,1.39,1.39,0,0,0,.24-.45,1.81,1.81,0,0,0,.07-.52,1.88,1.88,0,0,0-.07-.53,1.5,1.5,0,0,0-.21-.46,1.06,1.06,0,0,0-.37-.33,1,1,0,0,0-.52-.13Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_87" data-name="87">
        <G id="_87-2" data-name=" 87">
          <Circle x="504.6" y="446.66" fill="#e3e3e3" r="10" />
          <Path
            d="M499,444.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,499,444.55ZM500.2,448a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M510.29,443.94a5.79,5.79,0,0,0-1.08,1.3,9.49,9.49,0,0,0-.78,1.64,11.25,11.25,0,0,0-.49,1.76,9.17,9.17,0,0,0-.17,1.66H506.1a10.28,10.28,0,0,1,.8-3.31,11.9,11.9,0,0,1,1.78-2.94H505V442.6h5.26Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_88" data-name="88">
        <G id="_88-2" data-name=" 88">
          <Circle x="460.6" y="446.66" fill="#e3e3e3" r="10" />
          <Path
            d="M455,444.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.66,2.66,0,0,1-.93-.44,2.07,2.07,0,0,1-.66-.75,2.14,2.14,0,0,1-.25-1.07,2,2,0,0,1,.38-1.24,1.89,1.89,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,455,444.55ZM456.2,448a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1,1,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.29,1.29,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M461.07,444.55a1.78,1.78,0,0,1,.23-.91,2.12,2.12,0,0,1,.6-.66,2.77,2.77,0,0,1,.83-.4,3.33,3.33,0,0,1,.94-.13,2.94,2.94,0,0,1,1.21.22,2.48,2.48,0,0,1,.8.53,2,2,0,0,1,.43.68,1.82,1.82,0,0,1,.13.64,1.77,1.77,0,0,1-.28,1,1.57,1.57,0,0,1-.84.61h0a1.82,1.82,0,0,1,1.07.66,2,2,0,0,1,.37,1.23,2.16,2.16,0,0,1-.25,1.06,2.37,2.37,0,0,1-.65.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.86,3.86,0,0,1-1.08-.14,2.8,2.8,0,0,1-.94-.44,2.28,2.28,0,0,1-.66-.75,2.25,2.25,0,0,1-.25-1.07,2,2,0,0,1,.39-1.24,1.82,1.82,0,0,1,1.07-.66h0a1.38,1.38,0,0,1-.85-.58A1.78,1.78,0,0,1,461.07,444.55Zm1.25,3.42a1.19,1.19,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.58,1.58,0,0,0,1,0,1.32,1.32,0,0,0,.42-.27,1.2,1.2,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1,1,0,0,0-.11-.5,1.08,1.08,0,0,0-.28-.39,1.27,1.27,0,0,0-.42-.25,1.44,1.44,0,0,0-.51-.09,1.52,1.52,0,0,0-1,.31,1.1,1.1,0,0,0-.36.91Zm.17-3.28a1,1,0,0,0,.35.76,1.5,1.5,0,0,0,.38.19,1.74,1.74,0,0,0,.45.06,1.33,1.33,0,0,0,.82-.25.92.92,0,0,0,.33-.76,1.47,1.47,0,0,0,0-.33,1,1,0,0,0-.17-.35,1.11,1.11,0,0,0-.35-.28,1.41,1.41,0,0,0-.59-.11,1.34,1.34,0,0,0-.83.28,1,1,0,0,0-.39.76Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_89" data-name="89">
        <G id="_89-2" data-name=" 89">
          <Circle x="416.6" y="446.66" fill="#e3e3e3" r="10" />
          <Path
            d="M411,444.55a1.69,1.69,0,0,1,.23-.91,1.9,1.9,0,0,1,.6-.66,2.56,2.56,0,0,1,.83-.4,3.31,3.31,0,0,1,.93-.13,2.91,2.91,0,0,1,1.21.22,2.38,2.38,0,0,1,.8.53,2.11,2.11,0,0,1,.57,1.32,1.78,1.78,0,0,1-.29,1,1.57,1.57,0,0,1-.84.61h0a1.79,1.79,0,0,1,1.07.66,2,2,0,0,1,.38,1.23,2.27,2.27,0,0,1-.25,1.06,2.54,2.54,0,0,1-.66.76,2.92,2.92,0,0,1-.92.45,3.81,3.81,0,0,1-1.06.14,3.9,3.9,0,0,1-1.08-.14,2.8,2.8,0,0,1-.94-.44,2.28,2.28,0,0,1-.66-.75,2.25,2.25,0,0,1-.24-1.07,2,2,0,0,1,.38-1.24,1.86,1.86,0,0,1,1.07-.66h0a1.41,1.41,0,0,1-.85-.58A1.77,1.77,0,0,1,411,444.55ZM412.2,448a1.33,1.33,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.26,1.26,0,0,0,.43.27,1.51,1.51,0,0,0,.53.09,1.46,1.46,0,0,0,.52-.09,1.32,1.32,0,0,0,.42-.27,1.07,1.07,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1.18,1.18,0,0,0-.1-.5,1.24,1.24,0,0,0-.29-.39,1.27,1.27,0,0,0-.42-.25,1.36,1.36,0,0,0-.51-.09,1.48,1.48,0,0,0-1,.31,1.08,1.08,0,0,0-.36.91Zm.18-3.28a1,1,0,0,0,.09.44.9.9,0,0,0,.26.32,1.35,1.35,0,0,0,.38.19,1.61,1.61,0,0,0,.44.06,1.31,1.31,0,0,0,.82-.25.9.9,0,0,0,.34-.76,1.56,1.56,0,0,0,0-.33.88.88,0,0,0-.17-.35,1,1,0,0,0-.35-.28,1.41,1.41,0,0,0-.54-.07,1.31,1.31,0,0,0-.82.28.93.93,0,0,0-.4.72Z"
            fill="#002b64"
          />
          <Path
            d="M418.45,448.32a1.32,1.32,0,0,0,.35.67.91.91,0,0,0,.68.29,1,1,0,0,0,.71-.25,1.9,1.9,0,0,0,.44-.6,3.27,3.27,0,0,0,.23-.77c0-.27.08-.51.1-.72h0a1.84,1.84,0,0,1-.74.66,2.4,2.4,0,0,1-1,.2,2.35,2.35,0,0,1-1-.21,2.54,2.54,0,0,1-.81-.58,2.43,2.43,0,0,1-.45-.8,3.21,3.21,0,0,1-.14-.92,3.07,3.07,0,0,1,.19-1.1,2.62,2.62,0,0,1,.55-.89,2.47,2.47,0,0,1,.86-.6,2.6,2.6,0,0,1,1.1-.22,2.51,2.51,0,0,1,2.35,1.26,3.69,3.69,0,0,1,.47,1.28,7.71,7.71,0,0,1,.13,1.44,6.31,6.31,0,0,1-.16,1.42,4.18,4.18,0,0,1-.53,1.3,2.71,2.71,0,0,1-4,.75,2.33,2.33,0,0,1-.82-1.58Zm1.12-1.73a1.16,1.16,0,0,0,.54-.11,1.1,1.1,0,0,0,.39-.31,1.55,1.55,0,0,0,.24-.46,1.93,1.93,0,0,0,.07-.55,1.6,1.6,0,0,0-.32-1,1.2,1.2,0,0,0-.39-.32,1.15,1.15,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.23,1.23,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.08.51,2.42,2.42,0,0,0,.07.54,1.5,1.5,0,0,0,.22.46,1.19,1.19,0,0,0,.37.33,1.08,1.08,0,0,0,.55.14Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_90" data-name="90">
        <G id="_90-2" data-name=" 90">
          <Circle x="502.6" y="221.66" fill="#e3e3e3" r="10" />
          <Path
            d="M498.33,223.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.41.09-.72h0a1.86,1.86,0,0,1-.75.66,2.25,2.25,0,0,1-1,.2,2.39,2.39,0,0,1-1-.21,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.76,8.76,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.81,2.81,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33,1.11,1.11,0,0,0,.53.1Z"
            fill="#002b64"
          />
          <Path
            d="M502.83,221.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.1,2.1,0,0,1,.93-.65,2.85,2.85,0,0,1,1.09-.2,2.89,2.89,0,0,1,1.09.2,2.19,2.19,0,0,1,.9.66,3.25,3.25,0,0,1,.62,1.22,6.81,6.81,0,0,1,.22,1.89,6.94,6.94,0,0,1-.22,1.92,3.48,3.48,0,0,1-.62,1.25,2.22,2.22,0,0,1-.9.67,3.1,3.1,0,0,1-1.09.2,3.06,3.06,0,0,1-1.09-.2,2.13,2.13,0,0,1-.89-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,502.83,221.42Zm1.56,0v.8a5.28,5.28,0,0,0,.14.9,1.91,1.91,0,0,0,.37.74.88.88,0,0,0,.73.31.89.89,0,0,0,.73-.31,1.68,1.68,0,0,0,.38-.74,3.84,3.84,0,0,0,.14-.9v-1.28a2.32,2.32,0,0,0,0-.58,4.08,4.08,0,0,0-.11-.59,1.83,1.83,0,0,0-.21-.52,1.27,1.27,0,0,0-.36-.37,1,1,0,0,0-.54-.15.92.92,0,0,0-.53.15,1.06,1.06,0,0,0-.36.37,2.18,2.18,0,0,0-.21.52,4.08,4.08,0,0,0-.11.59,3.86,3.86,0,0,0,0,.58C504.39,221.13,504.39,221.29,504.39,221.42Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_91" data-name="91">
        <G id="_91-2" data-name=" 91">
          <Circle x="546.6" y="221.66" fill="#e3e3e3" r="10" />
          <Path
            d="M542.33,223.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.41.09-.72h0a1.86,1.86,0,0,1-.75.66,2.25,2.25,0,0,1-1,.2,2.39,2.39,0,0,1-1-.21,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.76,8.76,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.81,2.81,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33,1.11,1.11,0,0,0,.53.1Z"
            fill="#002b64"
          />
          <Path
            d="M550.91,225.3h-1.56v-5h-1.94v-1.18a3.42,3.42,0,0,0,.79-.06,2.27,2.27,0,0,0,.69-.25,1.66,1.66,0,0,0,.51-.48,2,2,0,0,0,.27-.74h1.24Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_92" data-name="92">
        <G id="_92-2" data-name=" 92">
          <Circle x="595.6" y="269.66" fill="#e3e3e3" r="10" />
          <Path
            d="M591.33,271.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.4.09-.72h0a1.86,1.86,0,0,1-.75.66,2.25,2.25,0,0,1-1,.2,2.39,2.39,0,0,1-1-.21,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.76,8.76,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.81,2.81,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33A1.11,1.11,0,0,0,592.45,269.59Z"
            fill="#002b64"
          />
          <Path
            d="M596,268.56a3.53,3.53,0,0,1,.15-1.23,3,3,0,0,1,.53-1,2.43,2.43,0,0,1,.91-.67,3.17,3.17,0,0,1,1.23-.23,3.1,3.1,0,0,1,1,.16,2.49,2.49,0,0,1,.84.48,2.29,2.29,0,0,1,.58.75,2.42,2.42,0,0,1,.21,1,2.65,2.65,0,0,1-.11.77,2.1,2.1,0,0,1-.3.62,2.64,2.64,0,0,1-.43.51,5.53,5.53,0,0,1-.53.43l-.59.39-.6.4c-.19.14-.38.29-.56.45a2.71,2.71,0,0,0-.48.53h3.64v1.34h-5.65a3.13,3.13,0,0,1,.19-1.16,3.18,3.18,0,0,1,.53-.89,4.43,4.43,0,0,1,.77-.72l.94-.67.54-.36a3,3,0,0,0,.52-.4,2.15,2.15,0,0,0,.4-.5,1.17,1.17,0,0,0,.16-.62,1.15,1.15,0,0,0-.33-.87,1.13,1.13,0,0,0-.83-.32,1,1,0,0,0-.58.16,1.25,1.25,0,0,0-.37.42,1.77,1.77,0,0,0-.21.57,3.34,3.34,0,0,0-.06.62Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_93" data-name="93">
        <G id="_93-2" data-name=" 93">
          <Circle x="595.6" y="320.66" fill="#e3e3e3" r="10" />
          <Path
            d="M591.33,322.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.4.09-.72h0a1.86,1.86,0,0,1-.75.66,2.44,2.44,0,0,1-2,0,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.66,8.66,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.87,2.87,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33A1.11,1.11,0,0,0,592.45,320.59Z"
            fill="#002b64"
          />
          <Path
            d="M598.11,319.71a2.44,2.44,0,0,0,.54,0,1.52,1.52,0,0,0,.53-.12,1,1,0,0,0,.41-.3.88.88,0,0,0,.16-.53.91.91,0,0,0-.33-.76,1.18,1.18,0,0,0-.76-.27,1.09,1.09,0,0,0-.9.39,1.53,1.53,0,0,0-.29,1H596a3.29,3.29,0,0,1,.22-1.08,2.57,2.57,0,0,1,.54-.85,2.48,2.48,0,0,1,.86-.53,2.85,2.85,0,0,1,1.08-.19,3,3,0,0,1,.92.14,2.39,2.39,0,0,1,.83.41,2,2,0,0,1,.6.67,1.81,1.81,0,0,1,.23.91,1.84,1.84,0,0,1-.27,1,1.32,1.32,0,0,1-.81.58h0a1.62,1.62,0,0,1,1,.62,1.76,1.76,0,0,1,.37,1.13,2.31,2.31,0,0,1-.24,1.07,2.49,2.49,0,0,1-.63.8,3.06,3.06,0,0,1-.91.49,3.58,3.58,0,0,1-1.08.16,3.65,3.65,0,0,1-1.18-.18,2.38,2.38,0,0,1-1.49-1.44,3,3,0,0,1-.19-1.18h1.48a2.21,2.21,0,0,0,.1.59,1.24,1.24,0,0,0,.26.48,1,1,0,0,0,.41.33,1.32,1.32,0,0,0,.59.12,1.29,1.29,0,0,0,.89-.33,1.31,1.31,0,0,0,.19-1.55.93.93,0,0,0-.44-.34,1.7,1.7,0,0,0-.57-.12h-.6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_94" data-name="94">
        <G id="_94-2" data-name=" 94">
          <Circle x="546.6" y="374.66" fill="#e3e3e3" r="10" />
          <Path
            d="M542.33,376.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.4.09-.72h0a1.86,1.86,0,0,1-.75.66,2.44,2.44,0,0,1-2,0,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.66,8.66,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.87,2.87,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33A1.11,1.11,0,0,0,543.45,374.59Z"
            fill="#002b64"
          />
          <Path
            d="M550,376.52h-3.25v-1.43l3.34-4.49h1.4v4.63h1v1.29h-1v1.78H550Zm0-4h0l-2,2.67h2Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_95" data-name="95">
        <G id="_95-2" data-name=" 95">
          <Circle x="502.6" y="374.66" fill="#e3e3e3" r="10" />
          <Path
            d="M498.33,376.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.4.09-.72h0a1.86,1.86,0,0,1-.75.66,2.44,2.44,0,0,1-2,0,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.66,8.66,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.87,2.87,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33A1.11,1.11,0,0,0,499.45,374.59Z"
            fill="#002b64"
          />
          <Path
            d="M508.1,371.89h-3.18l-.32,1.77h0a1.87,1.87,0,0,1,.68-.46,2.58,2.58,0,0,1,1.83.08,2.08,2.08,0,0,1,.75.56,2.47,2.47,0,0,1,.46.83,3.34,3.34,0,0,1,.16,1,2.72,2.72,0,0,1-.23,1.11,2.8,2.8,0,0,1-.62.88,3,3,0,0,1-.91.59,2.72,2.72,0,0,1-1.1.19,3.74,3.74,0,0,1-1.07-.15,2.69,2.69,0,0,1-.91-.46,2.2,2.2,0,0,1-.63-.76,2.41,2.41,0,0,1-.25-1.07h1.56a1.29,1.29,0,0,0,.4.84,1.24,1.24,0,0,0,.86.32,1.28,1.28,0,0,0,.56-.12,1.2,1.2,0,0,0,.41-.33,1.42,1.42,0,0,0,.27-.48,1.7,1.7,0,0,0,0-1.12,1.33,1.33,0,0,0-.22-.45,1.21,1.21,0,0,0-.42-.31,1.55,1.55,0,0,0-1.24,0,1.66,1.66,0,0,0-.49.47H503l.76-4.26h4.3Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_96" data-name="96">
        <G id="_96-2" data-name=" 96">
          <Circle x="455.6" y="342.66" fill="#e3e3e3" r="10" />
          <Path
            d="M451.33,344.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.4.09-.72h0a1.86,1.86,0,0,1-.75.66,2.44,2.44,0,0,1-2,0,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.66,8.66,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.87,2.87,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33A1.11,1.11,0,0,0,452.45,342.59Z"
            fill="#002b64"
          />
          <Path
            d="M459.87,340.58a1.36,1.36,0,0,0-.35-.67.94.94,0,0,0-.69-.29,1,1,0,0,0-.7.25,2,2,0,0,0-.44.61,3.21,3.21,0,0,0-.24.76,5.56,5.56,0,0,0-.09.73h0a1.8,1.8,0,0,1,.75-.66,2.4,2.4,0,0,1,1-.2,2.25,2.25,0,0,1,1,.22,2.43,2.43,0,0,1,.8.57,2.16,2.16,0,0,1,.45.81,2.83,2.83,0,0,1,.14.91,2.89,2.89,0,0,1-.74,2,2.73,2.73,0,0,1-.85.6,2.8,2.8,0,0,1-1.1.21,2.76,2.76,0,0,1-1.45-.34,2.7,2.7,0,0,1-.9-.91,3.83,3.83,0,0,1-.48-1.29,7.64,7.64,0,0,1-.13-1.44A6.33,6.33,0,0,1,456,341a4.27,4.27,0,0,1,.52-1.3,3.12,3.12,0,0,1,.94-.94,2.87,2.87,0,0,1,3.08.19,2.32,2.32,0,0,1,.81,1.58Zm-1.12,1.73a1.28,1.28,0,0,0-.55.11,1.12,1.12,0,0,0-.39.32,1.37,1.37,0,0,0-.23.45,2,2,0,0,0-.08.55,1.58,1.58,0,0,0,.09.52,1.26,1.26,0,0,0,.24.46,1,1,0,0,0,.39.33,1.12,1.12,0,0,0,.53.12,1,1,0,0,0,.49-.12,1.14,1.14,0,0,0,.37-.32,1.39,1.39,0,0,0,.24-.45,1.81,1.81,0,0,0,.07-.52,1.88,1.88,0,0,0-.07-.53,1.5,1.5,0,0,0-.21-.46,1.06,1.06,0,0,0-.37-.33,1,1,0,0,0-.52-.13Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_97" data-name="97">
        <G id="_97-2" data-name=" 97">
          <Circle x="455.6" y="297.66" fill="#e3e3e3" r="10" />
          <Path
            d="M451.33,299.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.4.09-.72h0a1.86,1.86,0,0,1-.75.66,2.25,2.25,0,0,1-1,.2,2.39,2.39,0,0,1-1-.21,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.76,8.76,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.81,2.81,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33A1.11,1.11,0,0,0,452.45,297.59Z"
            fill="#002b64"
          />
          <Path
            d="M461.29,294.94a5.79,5.79,0,0,0-1.08,1.3,9.49,9.49,0,0,0-.78,1.64,11.25,11.25,0,0,0-.49,1.76,9.17,9.17,0,0,0-.17,1.66H457.1a10.28,10.28,0,0,1,.8-3.31,11.9,11.9,0,0,1,1.78-2.94H456V293.6h5.26Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_98" data-name="98">
        <G id="_98-2" data-name=" 98">
          <Circle x="455.6" y="254.66" fill="#e3e3e3" r="10" />
          <Path
            d="M451.33,256.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.41.09-.72h0a1.86,1.86,0,0,1-.75.66,2.25,2.25,0,0,1-1,.2,2.39,2.39,0,0,1-1-.21,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.76,8.76,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.81,2.81,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33,1.11,1.11,0,0,0,.53.1Z"
            fill="#002b64"
          />
          <Path
            d="M456.07,252.55a1.78,1.78,0,0,1,.23-.91,2.12,2.12,0,0,1,.6-.66,2.77,2.77,0,0,1,.83-.4,3.33,3.33,0,0,1,.94-.13,2.94,2.94,0,0,1,1.21.22,2.48,2.48,0,0,1,.8.53,2,2,0,0,1,.43.68,1.82,1.82,0,0,1,.13.64,1.77,1.77,0,0,1-.28,1,1.57,1.57,0,0,1-.84.61h0a1.82,1.82,0,0,1,1.07.66,2,2,0,0,1,.37,1.23,2.16,2.16,0,0,1-.25,1.06,2.37,2.37,0,0,1-.65.76,2.92,2.92,0,0,1-.92.45,3.89,3.89,0,0,1-2.14,0,2.8,2.8,0,0,1-.94-.44,2.28,2.28,0,0,1-.66-.75,2.25,2.25,0,0,1-.25-1.07,2,2,0,0,1,.39-1.24,1.82,1.82,0,0,1,1.07-.66h0a1.38,1.38,0,0,1-.85-.58A1.78,1.78,0,0,1,456.07,252.55Zm1.25,3.42a1.19,1.19,0,0,0,.11.54,1.22,1.22,0,0,0,.29.41,1.1,1.1,0,0,0,.43.26,1.32,1.32,0,0,0,.53.1,1.3,1.3,0,0,0,.52-.1,1.14,1.14,0,0,0,.42-.26,1.2,1.2,0,0,0,.28-.41,1.32,1.32,0,0,0,.1-.53,1,1,0,0,0-.11-.5,1.08,1.08,0,0,0-.28-.39,1.27,1.27,0,0,0-.42-.25,1.44,1.44,0,0,0-.51-.09,1.52,1.52,0,0,0-1,.31A1.1,1.1,0,0,0,457.32,256Zm.17-3.28a1,1,0,0,0,.35.76,1.5,1.5,0,0,0,.38.19,1.74,1.74,0,0,0,.45.06,1.33,1.33,0,0,0,.82-.25.92.92,0,0,0,.33-.76,1.47,1.47,0,0,0,0-.33,1,1,0,0,0-.17-.35,1.11,1.11,0,0,0-.35-.28,1.41,1.41,0,0,0-.59-.11,1.34,1.34,0,0,0-.83.28,1,1,0,0,0-.39.76Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_99" data-name="99">
        <G id="_99-2" data-name=" 99">
          <Circle x="205.6" y="27.66" fill="#e3e3e3" r="10" />
          <Path
            d="M201.33,29.32a1.32,1.32,0,0,0,.35.67.93.93,0,0,0,.69.29,1,1,0,0,0,.7-.25,1.9,1.9,0,0,0,.44-.6,3.29,3.29,0,0,0,.24-.77q.06-.41.09-.72h0a1.86,1.86,0,0,1-.75.66,2.25,2.25,0,0,1-1,.2,2.39,2.39,0,0,1-1-.21,2.61,2.61,0,0,1-.8-.58,2.12,2.12,0,0,1-.45-.8,2.91,2.91,0,0,1-.15-.92,3.07,3.07,0,0,1,.2-1.1,2.62,2.62,0,0,1,.55-.89,2.43,2.43,0,0,1,.85-.6,2.64,2.64,0,0,1,1.1-.22,2.74,2.74,0,0,1,1.44.34,2.67,2.67,0,0,1,.91.92,3.7,3.7,0,0,1,.48,1.28,8.76,8.76,0,0,1,.13,1.44,6.33,6.33,0,0,1-.17,1.42,4.17,4.17,0,0,1-.52,1.3,3,3,0,0,1-.94.94,2.81,2.81,0,0,1-3.08-.19,2.32,2.32,0,0,1-.81-1.58Zm1.12-1.73a1.2,1.2,0,0,0,.55-.11,1.1,1.1,0,0,0,.39-.31,1.53,1.53,0,0,0,.23-.46,1.92,1.92,0,0,0,.08-.55,1.58,1.58,0,0,0-.1-.5,1.35,1.35,0,0,0-.24-.46,1,1,0,0,0-.39-.32,1.12,1.12,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.36,1.36,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.07.51,2,2,0,0,0,.07.54,1.75,1.75,0,0,0,.21.46,1.31,1.31,0,0,0,.37.33,1.11,1.11,0,0,0,.53.1Z"
            fill="#002b64"
          />
          <Path
            d="M207.45,29.32a1.32,1.32,0,0,0,.35.67.91.91,0,0,0,.68.29,1,1,0,0,0,.71-.25,1.9,1.9,0,0,0,.44-.6,3.27,3.27,0,0,0,.23-.77c.05-.27.08-.51.1-.72h0a1.84,1.84,0,0,1-.74.66,2.25,2.25,0,0,1-1,.2,2.35,2.35,0,0,1-1-.21,2.39,2.39,0,0,1-.8-.58,2.29,2.29,0,0,1-.46-.8,3.21,3.21,0,0,1-.14-.92,3.07,3.07,0,0,1,.19-1.1,2.78,2.78,0,0,1,.55-.89,2.47,2.47,0,0,1,.86-.6,2.6,2.6,0,0,1,1.1-.22,2.51,2.51,0,0,1,2.35,1.26,3.5,3.5,0,0,1,.47,1.28,7.79,7.79,0,0,1,.13,1.44,6.31,6.31,0,0,1-.16,1.42,4.18,4.18,0,0,1-.53,1.3,2.88,2.88,0,0,1-.93.94,2.81,2.81,0,0,1-3.08-.19,2.33,2.33,0,0,1-.82-1.58Zm1.15-1.73a1.16,1.16,0,0,0,.54-.11,1.1,1.1,0,0,0,.39-.31,1.55,1.55,0,0,0,.24-.46,1.93,1.93,0,0,0,.07-.55,1.6,1.6,0,0,0-.32-1,1.2,1.2,0,0,0-.39-.32,1.15,1.15,0,0,0-.53-.13,1,1,0,0,0-.5.13,1.23,1.23,0,0,0-.37.31,1.53,1.53,0,0,0-.23.46,1.75,1.75,0,0,0-.08.51,2.42,2.42,0,0,0,.07.54,1.5,1.5,0,0,0,.22.46,1.19,1.19,0,0,0,.37.33A1.08,1.08,0,0,0,208.6,27.59Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_100" data-name="100">
        <G id="_100-2" data-name=" 100">
          <Circle x="218.41" y="102.66" fill="#e3e3e3" r="10" />
          <Path
            d="M213.54,106.3H212v-5h-1.93v-1.17a3.34,3.34,0,0,0,.78-.06,2.18,2.18,0,0,0,.69-.25,1.47,1.47,0,0,0,.51-.48,1.68,1.68,0,0,0,.27-.74h1.24Z"
            fill="#002b64"
          />
          <Path
            d="M215.6,102.42a6.81,6.81,0,0,1,.22-1.89,3.4,3.4,0,0,1,.61-1.22,2.19,2.19,0,0,1,.9-.66,3,3,0,0,1,2.17,0,2.16,2.16,0,0,1,.91.66,3.25,3.25,0,0,1,.62,1.22,6.81,6.81,0,0,1,.22,1.89,6.94,6.94,0,0,1-.22,1.92,3.48,3.48,0,0,1-.62,1.25,2.18,2.18,0,0,1-.91.67,3,3,0,0,1-2.17,0,2.22,2.22,0,0,1-.9-.67,3.65,3.65,0,0,1-.61-1.25A6.94,6.94,0,0,1,215.6,102.42Zm1.56,0v.8a4.45,4.45,0,0,0,.14.9,1.91,1.91,0,0,0,.37.74.87.87,0,0,0,.72.31.9.9,0,0,0,.74-.31,1.8,1.8,0,0,0,.38-.74,4.45,4.45,0,0,0,.14-.9v-1.86a4.08,4.08,0,0,0-.11-.59,2.18,2.18,0,0,0-.21-.52,1.19,1.19,0,0,0-.37-.37.91.91,0,0,0-.54-.15.89.89,0,0,0-.52.15,1.06,1.06,0,0,0-.36.37,2.71,2.71,0,0,0-.22.52c-.05.2-.08.39-.11.59a5.78,5.78,0,0,0,0,.58,1.29,1.29,0,0,0-.07.48Z"
            fill="#002b64"
          />
          <Path
            d="M221.69,102.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.19,2.19,0,0,1,.9-.66,2.8,2.8,0,0,1,1.08-.2,2.89,2.89,0,0,1,1.09.21,2.22,2.22,0,0,1,.91.66,3.24,3.24,0,0,1,.61,1.22,6.78,6.78,0,0,1,.23,1.89,6.9,6.9,0,0,1-.23,1.92,3.47,3.47,0,0,1-.61,1.25,2.25,2.25,0,0,1-.91.67,3.1,3.1,0,0,1-1.09.2,3,3,0,0,1-1.08-.2,2.22,2.22,0,0,1-.9-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,221.69,102.42Zm1.57,0v.8a3.84,3.84,0,0,0,.14.9,1.9,1.9,0,0,0,.36.74.89.89,0,0,0,.73.31.91.91,0,0,0,.74-.31,1.92,1.92,0,0,0,.38-.74,4.44,4.44,0,0,0,.13-.9v-1.86a3.06,3.06,0,0,0-.11-.59,1.85,1.85,0,0,0-.22-.52,1.06,1.06,0,0,0-.36-.37,1,1,0,0,0-.54-.15.94.94,0,0,0-.53.15,1.13,1.13,0,0,0-.35.37,1.85,1.85,0,0,0-.22.52,4.08,4.08,0,0,0-.11.59v.58Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_101" data-name="101">
        <G id="_101-2" data-name=" 101">
          <Circle x="176.6" y="151.66" fill="#e3e3e3" r="10" />
          <Path
            d="M171.74,155.3h-1.56v-5h-1.94v-1.18a3.46,3.46,0,0,0,.79-.06,2.12,2.12,0,0,0,.68-.25,1.59,1.59,0,0,0,.52-.48,1.8,1.8,0,0,0,.26-.74h1.25Z"
            fill="#002b64"
          />
          <Path
            d="M173.77,151.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.13,2.13,0,0,1,.9-.66,2.8,2.8,0,0,1,1.08-.2,2.89,2.89,0,0,1,1.09.2,2.22,2.22,0,0,1,.91.66,3.24,3.24,0,0,1,.61,1.22,6.78,6.78,0,0,1,.23,1.89,6.9,6.9,0,0,1-.23,1.92,3.47,3.47,0,0,1-.61,1.25,2.25,2.25,0,0,1-.91.67,3.1,3.1,0,0,1-1.09.2,3,3,0,0,1-1.08-.2,2.15,2.15,0,0,1-.9-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,173.77,151.42Zm1.57,0v.8a4.44,4.44,0,0,0,.13.9,1.91,1.91,0,0,0,.37.74.88.88,0,0,0,.73.31.92.92,0,0,0,.74-.31,1.92,1.92,0,0,0,.38-.74,4.44,4.44,0,0,0,.13-.9v-1.86a3.06,3.06,0,0,0-.11-.59,1.85,1.85,0,0,0-.22-.52,1.16,1.16,0,0,0-.36-.37,1,1,0,0,0-.54-.15.92.92,0,0,0-.53.15,1.16,1.16,0,0,0-.36.37,2.18,2.18,0,0,0-.21.52,4.08,4.08,0,0,0-.11.59v.58Z"
            fill="#002b64"
          />
          <Path
            d="M184,155.3h-1.56v-5h-1.94v-1.18a3.42,3.42,0,0,0,.79-.06,2.27,2.27,0,0,0,.69-.25,1.66,1.66,0,0,0,.51-.48,2,2,0,0,0,.27-.74H184Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_102" data-name="102">
        <G id="_102-2" data-name=" 102">
          <Circle x="176.6" y="195.66" fill="#e3e3e3" r="10" />
          <Path
            d="M171.74,199.3h-1.56v-5h-1.94v-1.18a3.46,3.46,0,0,0,.79-.06,2.12,2.12,0,0,0,.68-.25,1.59,1.59,0,0,0,.52-.48,1.8,1.8,0,0,0,.26-.74h1.25Z"
            fill="#002b64"
          />
          <Path
            d="M173.77,195.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.13,2.13,0,0,1,.9-.66,2.8,2.8,0,0,1,1.08-.2,2.89,2.89,0,0,1,1.09.2,2.22,2.22,0,0,1,.91.66,3.24,3.24,0,0,1,.61,1.22,6.78,6.78,0,0,1,.23,1.89,6.9,6.9,0,0,1-.23,1.92,3.47,3.47,0,0,1-.61,1.25,2.25,2.25,0,0,1-.91.67,3.1,3.1,0,0,1-1.09.2,3,3,0,0,1-1.08-.2,2.15,2.15,0,0,1-.9-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,173.77,195.42Zm1.57,0v.8a4.44,4.44,0,0,0,.13.9,1.91,1.91,0,0,0,.37.74.88.88,0,0,0,.73.31.92.92,0,0,0,.74-.31,1.92,1.92,0,0,0,.38-.74,4.44,4.44,0,0,0,.13-.9v-1.86a3.06,3.06,0,0,0-.11-.59,1.85,1.85,0,0,0-.22-.52,1.16,1.16,0,0,0-.36-.37,1,1,0,0,0-.54-.15.92.92,0,0,0-.53.15,1.16,1.16,0,0,0-.36.37,2.18,2.18,0,0,0-.21.52,4.08,4.08,0,0,0-.11.59v.58Z"
            fill="#002b64"
          />
          <Path
            d="M180.06,194.56a3.78,3.78,0,0,1,.16-1.23,3,3,0,0,1,.53-1,2.43,2.43,0,0,1,.85-.67,3.17,3.17,0,0,1,1.23-.23,3.1,3.1,0,0,1,1,.16,2.59,2.59,0,0,1,.84.48,2.14,2.14,0,0,1,.57.75,2.28,2.28,0,0,1,.22,1,2.65,2.65,0,0,1-.11.77,2.1,2.1,0,0,1-.3.62,2.64,2.64,0,0,1-.43.51,5.66,5.66,0,0,1-.54.43l-.58.39-.6.4c-.19.14-.38.29-.56.45a2.71,2.71,0,0,0-.48.53h3.64v1.34h-5.65a3,3,0,0,1,.71-2,4.5,4.5,0,0,1,.78-.72l.94-.67.54-.36a3.42,3.42,0,0,0,.52-.4,2.15,2.15,0,0,0,.4-.5,1.27,1.27,0,0,0,.16-.62,1.15,1.15,0,0,0-.33-.87,1.13,1.13,0,0,0-.83-.32,1,1,0,0,0-.58.16,1.4,1.4,0,0,0-.38.42,2,2,0,0,0-.2.57,3.34,3.34,0,0,0-.06.62Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="Layer_2-2" data-name="Layer 2">
        <G id="_103" data-name=" 103">
          <Circle x="176.6" y="240.66" fill="#e3e3e3" r="10" />
          <Path
            d="M171.74,244.3h-1.56v-5h-1.94v-1.18a3.46,3.46,0,0,0,.79-.06,2.12,2.12,0,0,0,.68-.25,1.59,1.59,0,0,0,.52-.48,1.8,1.8,0,0,0,.26-.74h1.25Z"
            fill="#002b64"
          />
          <Path
            d="M173.77,240.42a6.78,6.78,0,0,1,.23-1.89,3.24,3.24,0,0,1,.61-1.22,2.13,2.13,0,0,1,.9-.66,2.8,2.8,0,0,1,1.08-.2,2.89,2.89,0,0,1,1.09.2,2.22,2.22,0,0,1,.91.66,3.24,3.24,0,0,1,.61,1.22,6.78,6.78,0,0,1,.23,1.89,6.9,6.9,0,0,1-.23,1.92,3.47,3.47,0,0,1-.61,1.25,2.25,2.25,0,0,1-.91.67,3.1,3.1,0,0,1-1.09.2,3,3,0,0,1-1.08-.2,2.15,2.15,0,0,1-.9-.67,3.47,3.47,0,0,1-.61-1.25A6.9,6.9,0,0,1,173.77,240.42Zm1.57,0v.8a4.44,4.44,0,0,0,.13.9,1.91,1.91,0,0,0,.37.74.88.88,0,0,0,.73.31.92.92,0,0,0,.74-.31,1.92,1.92,0,0,0,.38-.74,4.44,4.44,0,0,0,.13-.9v-1.86a3.06,3.06,0,0,0-.11-.59,1.85,1.85,0,0,0-.22-.52,1.16,1.16,0,0,0-.36-.37,1,1,0,0,0-.54-.15.92.92,0,0,0-.53.15,1.16,1.16,0,0,0-.36.37,2.18,2.18,0,0,0-.21.52,4.08,4.08,0,0,0-.11.59v.58Z"
            fill="#002b64"
          />
          <Path
            d="M182.17,239.71a2.34,2.34,0,0,0,.53,0,1.58,1.58,0,0,0,.54-.12,1,1,0,0,0,.4-.3.82.82,0,0,0,.17-.53.94.94,0,0,0-.33-.76,1.18,1.18,0,0,0-.76-.27,1.07,1.07,0,0,0-.9.4,1.49,1.49,0,0,0-.29,1H180a3.29,3.29,0,0,1,.22-1.08,2.57,2.57,0,0,1,.54-.85,2.39,2.39,0,0,1,.8-.54,2.83,2.83,0,0,1,1.07-.19,3,3,0,0,1,.93.14,2.48,2.48,0,0,1,.83.41,2.28,2.28,0,0,1,.6.67,1.81,1.81,0,0,1,.23.91,1.84,1.84,0,0,1-.27,1,1.32,1.32,0,0,1-.81.58h0a1.62,1.62,0,0,1,1,.62,1.82,1.82,0,0,1,.37,1.13,2.31,2.31,0,0,1-.24,1.07,2.49,2.49,0,0,1-.63.8,3.11,3.11,0,0,1-.92.49,3.47,3.47,0,0,1-1.07.17,3.71,3.71,0,0,1-1.19-.19,2.57,2.57,0,0,1-.9-.55,2.37,2.37,0,0,1-.58-.89,3,3,0,0,1-.19-1.18h1.48a2.21,2.21,0,0,0,.1.59,1.37,1.37,0,0,0,.25.48,1.2,1.2,0,0,0,.41.33,1.38,1.38,0,0,0,.59.12,1.26,1.26,0,0,0,.89-.33,1.11,1.11,0,0,0,.37-.88,1.14,1.14,0,0,0-.17-.67,1,1,0,0,0-.44-.34,1.75,1.75,0,0,0-.57-.12h-.6Z"
            fill="#002b64"
          />
        </G>
      </G>
    </Svg>
  )
  svgData = parseSvg(svgData)
  return svgData
}

StudiecentrumFirstFloor.propTypes = {
  parseSvg: PropTypes.func.isRequired
}

export default StudiecentrumFirstFloor
