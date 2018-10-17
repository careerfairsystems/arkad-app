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

const Karhuset = ({ parseSvg }) => {
  let svgData = (
    <Svg height="100%" width="100%" viewBox="0 0 800 600">
      <Defs>
        <ClipPath id="clip-path">
          <Path
            d="M306.39 587.39h-67.56v-83.6h67.56zm1045.5-767.23l-124.82 21.76-12.6-66.42-680.2 119.08V13.11h-458V300h174.01V186h56.11v57.26h345.26v-74.99h102.49V36.58l617.22-108.79z"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G id="Layer_1" data-name="Layer 1">
        <G id="Layer_36" data-name="Layer 36">
          <G id="bg">
            <Rect height="1172.61" width="1640.96" fill="#acd6ea" x="-232.39" y="-289.21" />
          </G>
        </G>
        <G id="Layer_35" data-name="Layer 35">
          <G id="garderob">
            <Line
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
              x1="250.28"
              x2="305.25"
              y1="299.96"
              y2="299.96"
            />
            <Rect
              height="112.79"
              style={{ isolation: 'isolate' }}
              width="54.97"
              fill="#e3e3e3"
              opacity="0.3"
              x="250.86"
              y="187.16"
            />
          </G>
        </G>
        <G id="Layer_34" data-name="Layer 34">
          <G id="innerväggar">
            <Polyline
              fill="none"
              points="327.58 450.54 331.59 450.54 331.59 487.19"
              stroke="#002b64"
              strokeWidth="2.83"
            />
            <Polyline
              fill="none"
              points="311.55 450.54 306.39 450.54 306.39 504.36"
              stroke="#002b64"
              strokeWidth="2.83"
            />
            <Line
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
              x1="306.39"
              x2="306.39"
              y1="400.16"
              y2="435.66"
            />
            <Line
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
              x1="306.39"
              x2="306.39"
              y1="244.42"
              y2="386.42"
            />
          </G>
        </G>
        <G id="Layer_33" data-name="Layer 33">
          <G id="onyttjade_ytor" data-name="onyttjade ytor">
            <Path
              style={{ isolation: 'isolate' }}
              d="M306.39,587.39H238.83V503.79h67.56Zm1045.5-767.23-124.82,21.76-12.6-66.42L534.27-105.42V13.11h-458V300H250.28V186h56.11v57.26H651.65V186h0V168.27H754.14V36.58L1371.36-72.21Z"
              fill="#002b64"
              opacity="0.3"
            />
            <G clipPath="url(#clip-path)">
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="374.29"
                y2="-1293.61"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="391.27"
                y2="-1276.61"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="408.25"
                y2="-1259.63"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="425.25"
                y2="-1242.65"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="442.23"
                y2="-1225.66"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="459.22"
                y2="-1208.67"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="476.21"
                y2="-1191.68"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="493.19"
                y2="-1174.7"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="510.18"
                y2="-1157.72"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="527.16"
                y2="-1140.72"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="544.16"
                y2="-1123.74"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="561.14"
                y2="-1106.75"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="578.12"
                y2="-1089.76"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="595.11"
                y2="-1072.78"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="612.1"
                y2="-1055.79"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="629.09"
                y2="-1038.81"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="646.07"
                y2="-1021.81"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="663.06"
                y2="-1004.83"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="680.05"
                y2="-987.85"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="697.03"
                y2="-970.85"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="714.02"
                y2="-953.87"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="731.01"
                y2="-936.88"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="747.99"
                y2="-919.9"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="764.98"
                y2="-902.91"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="781.96"
                y2="-885.92"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="798.96"
                y2="-868.94"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="815.94"
                y2="-851.94"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="832.92"
                y2="-834.96"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="849.92"
                y2="-817.98"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="866.9"
                y2="-800.99"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="883.89"
                y2="-784"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="900.87"
                y2="-767.01"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="917.86"
                y2="-750.03"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="934.85"
                y2="-733.05"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="951.83"
                y2="-716.05"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="968.83"
                y2="-699.07"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="985.81"
                y2="-682.08"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1002.79"
                y2="-665.09"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1019.78"
                y2="-648.11"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1036.77"
                y2="-631.12"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1053.76"
                y2="-614.14"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1070.74"
                y2="-597.14"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1087.72"
                y2="-580.16"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1104.72"
                y2="-563.18"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1121.7"
                y2="-546.19"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1138.69"
                y2="-529.2"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1155.68"
                y2="-512.21"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1172.66"
                y2="-495.23"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1189.65"
                y2="-478.24"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1206.63"
                y2="-461.25"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1223.63"
                y2="-444.27"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1240.61"
                y2="-427.28"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1257.59"
                y2="-410.29"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1274.59"
                y2="-393.31"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1291.57"
                y2="-376.32"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1308.56"
                y2="-359.34"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1325.54"
                y2="-342.34"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1342.53"
                y2="-325.36"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1359.52"
                y2="-308.38"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1376.5"
                y2="-291.38"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1393.5"
                y2="-274.4"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1410.48"
                y2="-257.41"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1427.46"
                y2="-240.43"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1444.45"
                y2="-223.44"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1461.44"
                y2="-206.45"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1478.43"
                y2="-189.47"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1495.41"
                y2="-172.47"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1512.39"
                y2="-155.49"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1529.39"
                y2="-138.51"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1546.37"
                y2="-121.52"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1563.36"
                y2="-104.53"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1580.35"
                y2="-87.54"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1597.33"
                y2="-70.56"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1614.32"
                y2="-53.58"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1631.3"
                y2="-36.58"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1648.3"
                y2="-19.6"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1665.28"
                y2="-2.61"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1682.26"
                y2="14.38"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1699.26"
                y2="31.36"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1716.24"
                y2="48.35"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1733.23"
                y2="65.33"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1750.21"
                y2="82.33"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1767.2"
                y2="99.31"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1784.19"
                y2="116.29"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1801.17"
                y2="133.29"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1818.17"
                y2="150.27"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1835.15"
                y2="167.26"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1852.13"
                y2="184.24"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1869.12"
                y2="201.23"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1886.11"
                y2="218.22"
              />
              <Line
                fill="none"
                stroke="#fff"
                strokeWidth="1.05"
                x1="-301.62"
                x2="1366.28"
                y1="1903.1"
                y2="235.2"
              />
            </G>
            <Path
              d="M306.39,587.39H238.83V503.79h67.56Zm1045.5-767.23-124.82,21.76-12.6-66.42L534.27-105.42V13.11h-458V300H250.28V186h56.11v57.26H651.65V186h0V168.27H754.14V36.58L1371.36-72.21Z"
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
            />
          </G>
        </G>
        <G id="Layer_32" data-name="Layer 32">
          <G id="Trappor">
            <Polygon
              style={{ isolation: 'isolate' }}
              fill="none"
              opacity="0.5"
              points="197.45 304.26 197.45 366.64 197.45 398.28 230.24 398.28 230.24 341.76 230.24 304.26 197.45 304.26"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="2.83"
            />
            <Rect
              height="94.01"
              style={{ isolation: 'isolate' }}
              width="32.8"
              fill="#e3e3e3"
              opacity="0.3"
              x="197.45"
              y="304.26"
            />
            <Path
              d="M213.88,364.38H203.57a4.12,4.12,0,0,1-.84-.07,2.22,2.22,0,0,1-2-2.11V341a5.08,5.08,0,0,1,0-.72,2.39,2.39,0,0,1,2.44-2.15H224a5.14,5.14,0,0,1,.84.07,2.29,2.29,0,0,1,2.1,2.23V361.6a4.48,4.48,0,0,1-.15,1.15,2.19,2.19,0,0,1-2.12,1.58h-10.8Z"
              fill="#e3e3e3"
            />
            <Path
              d="M218.65,346.34H215.3c-.24,0-.32.06-.32.31V350h-3.7v3.74h-3.62v3.72H204v1.88h5.47v-3.73h3.7v-3.7h3.66v-3.71h3.66v-3.69h3.6v-1.84h-5.44Z"
              fill="#002b64"
            />
          </G>
        </G>
        <G id="Layer_31" data-name="Layer 31">
          <G id="Ytterväggar">
            <Polygon
              fill="none"
              points="1351.89 -179.85 1227.07 -158.09 1214.48 -224.51 534.27 -105.42 534.27 12.53 76.22 12.53 76.22 587.38 651.08 587.38 651.08 168.27 754.14 168.27 754.14 36.58 1371.36 -72.21 1351.89 -179.85"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="5.67"
            />
          </G>
        </G>
        <G id="Layer_30" data-name="Layer 30">
          <G id="Utställare">
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="391.33 351.6 391.33 319.69 439.17 319.69 439.17 351.6 391.33 351.6"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="314.55 331.2 346.47 331.2 346.47 379.03 314.55 379.03 314.55 331.2"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="314.55 283.1 346.47 283.1 346.47 330.94 314.55 330.94 314.55 283.1"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="433.45 250.98 433.45 282.9 353.92 282.9 353.92 250.98 433.45 250.98"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="497.06 250.98 497.06 282.9 433.7 282.9 433.7 250.98 497.06 250.98"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="439.42 351.6 439.42 319.69 487.27 319.69 487.27 351.6 439.42 351.6"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="487.52 351.6 487.52 319.69 535.36 319.69 535.36 351.6 487.52 351.6"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="535.61 351.6 535.61 319.69 583.46 319.69 583.46 351.6 535.61 351.6"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="528.74 282.9 528.74 250.98 624.17 250.98 624.17 282.9 528.74 282.9"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="391.33 393.97 391.33 362.06 439.17 362.06 439.17 393.97 391.33 393.97"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="439.42 393.97 439.42 362.06 487.27 362.06 487.27 393.97 439.42 393.97"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="487.52 393.97 487.52 362.06 535.36 362.06 535.36 393.97 487.52 393.97"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="535.61 393.97 535.61 362.06 583.46 362.06 583.46 393.97 535.61 393.97"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="383.31 509.63 383.31 477.72 431.15 477.72 431.15 509.63 383.31 509.63"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="335.22 509.63 335.22 477.72 383.06 477.72 383.06 509.63 335.22 509.63"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="202.38 498.18 202.38 466.26 250.23 466.26 250.23 498.18 202.38 498.18"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="431.41 509.63 431.41 477.72 479.25 477.72 479.25 509.63 431.41 509.63"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="479.5 509.63 479.5 477.72 527.35 477.72 527.35 509.63 479.5 509.63"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="527.6 509.63 527.6 477.72 575.44 477.72 575.44 509.63 527.6 509.63"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="366.13 579.48 366.13 547.57 413.98 547.57 413.98 579.48 366.13 579.48"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="414.23 579.48 414.23 547.57 462.07 547.57 462.07 579.48 414.23 579.48"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="525.31 579.48 525.31 547.57 573.15 547.57 573.15 579.48 525.31 579.48"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="573.4 579.48 573.4 547.57 636.76 547.57 636.76 579.48 573.4 579.48"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="462.33 579.48 462.33 547.57 525.68 547.57 525.68 579.48 462.33 579.48"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="383.31 467.26 383.31 435.35 431.15 435.35 431.15 467.26 383.31 467.26"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="335.22 467.26 335.22 435.35 383.06 435.35 383.06 467.26 335.22 467.26"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="431.41 467.26 431.41 435.35 526.83 435.35 526.83 467.26 431.41 467.26"
            />
            <Polyline
              style={{ isolation: 'isolate' }}
              fill="#e3e3e3"
              opacity="0.3"
              points="527.6 467.26 527.6 435.35 575.44 435.35 575.44 467.26 527.6 467.26"
            />
            <Polyline
              fill="none"
              points="391.33 351.6 391.33 319.69 439.17 319.69 439.17 351.6 391.33 351.6"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="314.55 331.2 346.47 331.2 346.47 379.03 314.55 379.03 314.55 331.2"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="314.55 283.1 346.47 283.1 346.47 330.94 314.55 330.94 314.55 283.1"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="433.45 250.98 433.45 282.9 353.92 282.9 353.92 250.98 433.45 250.98"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="497.06 250.98 497.06 282.9 433.7 282.9 433.7 250.98 497.06 250.98"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="439.42 351.6 439.42 319.69 487.27 319.69 487.27 351.6 439.42 351.6"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="487.52 351.6 487.52 319.69 535.36 319.69 535.36 351.6 487.52 351.6"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="535.61 351.6 535.61 319.69 583.46 319.69 583.46 351.6 535.61 351.6"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="528.74 282.9 528.74 250.98 624.17 250.98 624.17 282.9 528.74 282.9"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="391.33 393.97 391.33 362.06 439.17 362.06 439.17 393.97 391.33 393.97"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="439.42 393.97 439.42 362.06 487.27 362.06 487.27 393.97 439.42 393.97"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="487.52 393.97 487.52 362.06 535.36 362.06 535.36 393.97 487.52 393.97"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="535.61 393.97 535.61 362.06 583.46 362.06 583.46 393.97 535.61 393.97"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="383.31 509.63 383.31 477.72 431.15 477.72 431.15 509.63 383.31 509.63"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="335.22 509.63 335.22 477.72 383.06 477.72 383.06 509.63 335.22 509.63"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="202.38 498.18 202.38 466.26 250.23 466.26 250.23 498.18 202.38 498.18"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="431.41 509.63 431.41 477.72 479.25 477.72 479.25 509.63 431.41 509.63"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="479.5 509.63 479.5 477.72 527.35 477.72 527.35 509.63 479.5 509.63"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="527.6 509.63 527.6 477.72 575.44 477.72 575.44 509.63 527.6 509.63"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="366.13 579.48 366.13 547.57 413.98 547.57 413.98 579.48 366.13 579.48"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="414.23 579.48 414.23 547.57 462.07 547.57 462.07 579.48 414.23 579.48"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="525.31 579.48 525.31 547.57 573.15 547.57 573.15 579.48 525.31 579.48"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="573.4 579.48 573.4 547.57 636.76 547.57 636.76 579.48 573.4 579.48"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="462.33 579.48 462.33 547.57 525.68 547.57 525.68 579.48 462.33 579.48"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="383.31 467.26 383.31 435.35 431.15 435.35 431.15 467.26 383.31 467.26"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="335.22 467.26 335.22 435.35 383.06 435.35 383.06 467.26 335.22 467.26"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="431.41 467.26 431.41 435.35 526.83 435.35 526.83 467.26 431.41 467.26"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Polyline
              fill="none"
              points="527.6 467.26 527.6 435.35 575.44 435.35 575.44 467.26 527.6 467.26"
              stroke="#002b64"
              strokeLinecap="round"
              strokeWidth="1.42"
            />
            <Path
              d="M226.48,495.72H216.17a5,5,0,0,1-.84-.06,2.21,2.21,0,0,1-2-2.12,5.05,5.05,0,0,1,0-.6V472.38a3.88,3.88,0,0,1,.06-.73,2.37,2.37,0,0,1,2.43-2.15h20.76a5,5,0,0,1,.84,0,2.29,2.29,0,0,1,2.1,2.29,8.67,8.67,0,0,1,0,1V493a4.48,4.48,0,0,1-.15,1.15,2.19,2.19,0,0,1-2.12,1.58h-10.8Z"
              fill="#e3e3e3"
            />
            <Path
              d="M223.86,489v-.66l1.15-.15a.62.62,0,0,0,.35-.21,1.34,1.34,0,0,0,.09-.61v-4.52a3.14,3.14,0,0,0-.07-.64.87.87,0,0,0-.4-.26,4.37,4.37,0,0,0-1-.16v-.56a5,5,0,0,0,1.83-.44,4.1,4.1,0,0,0,1.15-.86h.68v3.25l-.07,4.11V488a6.09,6.09,0,0,0,1,.23,2.29,2.29,0,0,1,.44.09v.56h-4.57Zm1.41-12.09a1.21,1.21,0,0,1,1.26-1.24,1.37,1.37,0,0,1,1,.37,1.15,1.15,0,0,1,.4.84,1.67,1.67,0,0,1-.16.69,1.15,1.15,0,0,1-.49.55,1.33,1.33,0,0,1-.69.21,1.21,1.21,0,0,1-.89-.41A1.36,1.36,0,0,1,225.27,476.88Z"
              fill="#002b64"
            />
            <Circle
              x="226.44"
              y="482.59"
              fill="none"
              r="10.33"
              stroke="#002b64"
              strokeWidth="1.42"
            />
          </G>
        </G>
        <G id="Layer_29" data-name="Layer 29">
          <G id="Toa">
            <Line
              fill="none"
              stroke="#002b64"
              strokeWidth="2.83"
              x1="79.09"
              x2="238.26"
              y1="503.79"
              y2="503.79"
            />
            <Rect
              height="80.16"
              style={{ isolation: 'isolate' }}
              width="158.03"
              fill="#e3e3e3"
              opacity="0.3"
              x="79.09"
              y="503.79"
            />
            <Path
              d="M158.1,557H147.79A5.12,5.12,0,0,1,147,557a2.22,2.22,0,0,1-2-2.12V533.71a5.14,5.14,0,0,1,0-.73,2.39,2.39,0,0,1,2.44-2.15h20.76a5.13,5.13,0,0,1,.84.06,2.29,2.29,0,0,1,2.1,2.23v21.17a4.48,4.48,0,0,1-.15,1.15,2.19,2.19,0,0,1-2.12,1.58H158.1Z"
              fill="#e3e3e3"
            />
            <Path
              d="M157.17,537.63h3.29l-2.06,12.48h-3.73l-1-8.39h0l-1,8.39h-3.81l-2-12.48h3.44l.81,8.84h0l1.15-8.84h3.07l1.24,8.84h0Z"
              fill="#002b64"
            />
            <Path
              d="M166,541.24v-.48a2.29,2.29,0,0,0-.08-.49,1,1,0,0,0-.22-.4.53.53,0,0,0-.41-.17.81.81,0,0,0-.54.16,1,1,0,0,0-.27.61,6.55,6.55,0,0,0-.11,1.26v4.35a7.51,7.51,0,0,0,.11,1.26,1,1,0,0,0,.29.58.88.88,0,0,0,.52.14.62.62,0,0,0,.6-.47,5.05,5.05,0,0,0,.18-1.65v-1h3.44v.79a7.66,7.66,0,0,1-.22,1.95,3.76,3.76,0,0,1-.74,1.44,3.06,3.06,0,0,1-1.31.89,5.49,5.49,0,0,1-2,.31,5.82,5.82,0,0,1-2.59-.46,2.81,2.81,0,0,1-1.34-1.28,5.13,5.13,0,0,1-.49-2c0-.8-.07-1.69-.07-2.7s0-1.84.07-2.65a5.19,5.19,0,0,1,.49-2,2.93,2.93,0,0,1,1.34-1.32,7.36,7.36,0,0,1,4.81-.13,3,3,0,0,1,1.26.89,2.9,2.9,0,0,1,.56,1.27,8.57,8.57,0,0,1,.11,1.44v.9H166Z"
              fill="#002b64"
            />
            <Path
              d="M278.34,256.68H268a5.13,5.13,0,0,1-.84-.06,2.22,2.22,0,0,1-2-2.12V233.36a5.14,5.14,0,0,1,0-.73,2.39,2.39,0,0,1,2.44-2.15h20.76a5.13,5.13,0,0,1,.84,0,2.29,2.29,0,0,1,2.1,2.29v21.17a4.48,4.48,0,0,1-.15,1.15,2.19,2.19,0,0,1-2.12,1.58H278.34Z"
              fill="#e3e3e3"
            />
            <Path
              d="M289.63,246.8c-.49-.17-1-.31-1.49-.47l-9-2.83a.45.45,0,0,1,0-.86,2.64,2.64,0,1,0-3.48-2.54.5.5,0,0,0,.44.56h.07a.53.53,0,0,0,.53-.52,1.89,1.89,0,0,1,.1-.49,1.56,1.56,0,0,1,1.86-1.05,1.58,1.58,0,0,1-.24,3.1c-.52,0-.64.17-.65.71v.68a.31.31,0,0,1-.24.36h0l-1.49.48-9,2.85a1.39,1.39,0,0,0-1,1.57,1.43,1.43,0,0,0,1.55,1.26h21.63a1.43,1.43,0,0,0,1.41-1.2A1.4,1.4,0,0,0,289.63,246.8Zm-.61,1.58h-21.3a.37.37,0,0,1-.16,0h0a.21.21,0,0,1,0-.38h0l8.66-2.75,1.92-.61a.62.62,0,0,1,.35,0L289,248h0a.23.23,0,0,1,0,.39Z"
              fill="#002b64"
            />
            <Path
              d="M102.65,455.65H92.35a5,5,0,0,1-.84-.06,2.21,2.21,0,0,1-2-2.12,5.05,5.05,0,0,1,0-.6V432.31a3.88,3.88,0,0,1,0-.73A2.38,2.38,0,0,1,92,429.43h20.76a5.27,5.27,0,0,1,.85.06,2.29,2.29,0,0,1,2.08,2.23,8.68,8.68,0,0,1,0,1v20.22a4.48,4.48,0,0,1-.15,1.15,2.19,2.19,0,0,1-2.12,1.58H102.6Z"
              fill="#e3e3e3"
            />
            <Path
              d="M106.19,442.36v-2.29a.38.38,0,0,0-.38-.38H93.3a.37.37,0,0,1-.37-.37h0v-2a.37.37,0,0,1,.37-.37h12.52a.38.38,0,0,0,.38-.38v-2.29a.38.38,0,0,1,.56-.33l7,4a.38.38,0,0,1,0,.65l-7,4.07a.38.38,0,0,1-.56-.31Z"
              fill="#002b64"
            />
            <Path
              d="M99.06,442.7V445a.38.38,0,0,0,.38.38H112a.37.37,0,0,1,.37.37h0v2a.37.37,0,0,1-.37.37H99.44a.38.38,0,0,0-.38.38v2.29a.38.38,0,0,1-.56.33l-7-4a.38.38,0,0,1,0-.65l7-4.07a.38.38,0,0,1,.56.31Z"
              fill="#002b64"
            />
            <Path
              d="M200.58,323.43V313.13a5.14,5.14,0,0,1,.07-.84,2.22,2.22,0,0,1,2.12-2H224a5,5,0,0,1,.72,0,2.4,2.4,0,0,1,2.16,2.44v20.76a5.13,5.13,0,0,1-.06.84,2.29,2.29,0,0,1-2.23,2.1H203.34a4.33,4.33,0,0,1-1.15-.15,2.16,2.16,0,0,1-1.58-2.12,4.7,4.7,0,0,1,0-.56Z"
              fill="#e3e3e3"
            />
            <Path
              d="M213.87,327h2.29a.37.37,0,0,0,.38-.35h0V314.11a.38.38,0,0,1,.38-.38h1.95a.38.38,0,0,1,.38.38v12.52a.37.37,0,0,0,.37.37h2.3a.38.38,0,0,1,.32.57l-4.07,7a.38.38,0,0,1-.65,0l-4.05-7a.38.38,0,0,1,.41-.57Z"
              fill="#002b64"
            />
            <Path
              d="M213.54,319.87h-2.29a.37.37,0,0,0-.38.35h0v12.52a.38.38,0,0,1-.38.38h-2a.38.38,0,0,1-.38-.38V320.24a.37.37,0,0,0-.37-.37h-2.3a.38.38,0,0,1-.32-.57l4.07-7a.38.38,0,0,1,.65,0l4.05,7a.38.38,0,0,1-.36.57Z"
              fill="#002b64"
            />
          </G>
        </G>
      </G>
      <G id="_165" data-name="165">
        <G id="_165-2" data-name=" 165">
          <Circle x="331.01" y="308.55" fill="#e3e3e3" r="11.45" />
          <Path
            d="M325.45,312.72h-1.79V307h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M332.4,306.17a1.56,1.56,0,0,0-.4-.77,1.05,1.05,0,0,0-.78-.33,1.21,1.21,0,0,0-.81.29,2.29,2.29,0,0,0-.5.7,3.68,3.68,0,0,0-.27.87,6.37,6.37,0,0,0-.1.84h0a2.21,2.21,0,0,1,.86-.76,2.75,2.75,0,0,1,1.15-.23,2.58,2.58,0,0,1,1.15.25,2.67,2.67,0,0,1,.92.65,2.47,2.47,0,0,1,.52.93,3.26,3.26,0,0,1,.17,1,3.44,3.44,0,0,1-.23,1.26,3.24,3.24,0,0,1-.63,1,3.13,3.13,0,0,1-1,.69,3.17,3.17,0,0,1-1.26.24,3.08,3.08,0,0,1-1.65-.39,3,3,0,0,1-1-1,4.39,4.39,0,0,1-.55-1.48,9.81,9.81,0,0,1-.15-1.65,7.25,7.25,0,0,1,.19-1.63,4.58,4.58,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.06-1.08,3.29,3.29,0,0,1,3.53.22,2.61,2.61,0,0,1,.93,1.81Zm-1.28,2a1.5,1.5,0,0,0-.63.13,1.4,1.4,0,0,0-.45.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,1.81,1.81,0,0,0,.1.6,1.44,1.44,0,0,0,.27.53,1.41,1.41,0,0,0,.45.38,1.28,1.28,0,0,0,.61.14,1.15,1.15,0,0,0,.56-.14,1.49,1.49,0,0,0,.44-.37,1.57,1.57,0,0,0,.26-.52,2.08,2.08,0,0,0,.09-.6,2.16,2.16,0,0,0-.09-.61,1.49,1.49,0,0,0-.24-.53,1.21,1.21,0,0,0-.42-.38,1.15,1.15,0,0,0-.6-.15Z"
            fill="#002b64"
          />
          <Path
            d="M340.82,305.38h-3.64l-.35,2h0a2.29,2.29,0,0,1,.78-.53,2.76,2.76,0,0,1,1-.15,2.65,2.65,0,0,1,1.15.24,2.29,2.29,0,0,1,.85.64,2.67,2.67,0,0,1,.54,1,3.82,3.82,0,0,1,.18,1.15A2.94,2.94,0,0,1,341,311a3,3,0,0,1-.71,1,3.29,3.29,0,0,1-1,.68,3.14,3.14,0,0,1-1.26.22,4.36,4.36,0,0,1-1.24-.17,3.14,3.14,0,0,1-1-.53,2.68,2.68,0,0,1-.73-.87,2.76,2.76,0,0,1-.27-1.23h1.79a1.41,1.41,0,0,0,1.44,1.33,1.37,1.37,0,0,0,.63-.14,1.53,1.53,0,0,0,.48-.38,1.63,1.63,0,0,0,.31-.55,2,2,0,0,0,.1-.64,2.4,2.4,0,0,0-.09-.64,1.52,1.52,0,0,0-.31-.53,1.43,1.43,0,0,0-1.15-.48,1.57,1.57,0,0,0-.78.17,1.78,1.78,0,0,0-.56.54H335l.87-4.88h4.92Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_164" data-name="164">
        <G id="_164-2" data-name=" 164">
          <Circle x="331.01" y="355.5" fill="#e3e3e3" r="11.45" />
          <Path
            d="M325.45,359.67h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M332.4,353.12a1.56,1.56,0,0,0-.4-.77,1.05,1.05,0,0,0-.78-.33,1.21,1.21,0,0,0-.81.29,2.29,2.29,0,0,0-.5.7,3.68,3.68,0,0,0-.27.87,6.37,6.37,0,0,0-.1.84h0a2.21,2.21,0,0,1,.86-.76,2.75,2.75,0,0,1,1.15-.23,2.58,2.58,0,0,1,1.15.25,2.67,2.67,0,0,1,.92.65,2.47,2.47,0,0,1,.52.93,3.26,3.26,0,0,1,.17,1,3.44,3.44,0,0,1-.23,1.26,3.24,3.24,0,0,1-.63,1,3.13,3.13,0,0,1-1,.69,3.17,3.17,0,0,1-1.26.24,3.08,3.08,0,0,1-1.65-.39,3,3,0,0,1-1-1,4.39,4.39,0,0,1-.55-1.48,9.81,9.81,0,0,1-.15-1.65,7.25,7.25,0,0,1,.19-1.63,4.58,4.58,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.06-1.08,3.29,3.29,0,0,1,3.53.22,2.61,2.61,0,0,1,.93,1.81Zm-1.28,2a1.5,1.5,0,0,0-.63.13,1.4,1.4,0,0,0-.45.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,1.81,1.81,0,0,0,.1.6,1.44,1.44,0,0,0,.27.53,1.41,1.41,0,0,0,.45.38,1.28,1.28,0,0,0,.61.14,1.15,1.15,0,0,0,.56-.14,1.49,1.49,0,0,0,.44-.37,1.57,1.57,0,0,0,.26-.52,2.08,2.08,0,0,0,.09-.6,2.16,2.16,0,0,0-.09-.61,1.49,1.49,0,0,0-.24-.53,1.21,1.21,0,0,0-.42-.38,1.15,1.15,0,0,0-.6-.15Z"
            fill="#002b64"
          />
          <Path
            d="M338.45,357.63h-3.73V356l3.84-5.14h1.63v5.3h1.15v1.48h-1.15v2h-1.69Zm0-4.58h0l-2.29,3.06h2.29Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_166" data-name="166">
        <G id="_166-2" data-name=" 166">
          <Circle x="392.85" y="267.32" fill="#e3e3e3" r="11.45" />
          <Path
            d="M387.29,271.49H385.5v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M394.24,264.94a1.56,1.56,0,0,0-.4-.77,1.05,1.05,0,0,0-.78-.33,1.21,1.21,0,0,0-.81.29,2.29,2.29,0,0,0-.5.7,3.68,3.68,0,0,0-.27.87,6.37,6.37,0,0,0-.1.84h0a2.21,2.21,0,0,1,.86-.76,2.75,2.75,0,0,1,1.15-.23,2.54,2.54,0,0,1,1.15.25,2.67,2.67,0,0,1,.92.65,2.47,2.47,0,0,1,.52.93,3.26,3.26,0,0,1,.17,1,3.44,3.44,0,0,1-.23,1.26,3.24,3.24,0,0,1-.63,1,3.13,3.13,0,0,1-1,.69,3.17,3.17,0,0,1-1.26.25,3.08,3.08,0,0,1-1.65-.4,3,3,0,0,1-1-1,4.39,4.39,0,0,1-.55-1.48,9.81,9.81,0,0,1-.15-1.65,7.25,7.25,0,0,1,.19-1.63,4.58,4.58,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.06-1.08,3.29,3.29,0,0,1,3.53.22,2.67,2.67,0,0,1,.94,1.81Zm-1.28,2a1.5,1.5,0,0,0-.63.13,1.4,1.4,0,0,0-.45.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,1.81,1.81,0,0,0,.1.6,1.44,1.44,0,0,0,.27.53,1.41,1.41,0,0,0,.45.38,1.28,1.28,0,0,0,.61.14,1.15,1.15,0,0,0,.56-.14,1.49,1.49,0,0,0,.44-.37,1.57,1.57,0,0,0,.26-.52,2.08,2.08,0,0,0,.09-.6,2.16,2.16,0,0,0-.09-.61,1.76,1.76,0,0,0-.24-.54,1.5,1.5,0,0,0-.42-.38,1.24,1.24,0,0,0-.6-.14Z"
            fill="#002b64"
          />
          <Path
            d="M401.24,264.94a1.58,1.58,0,0,0-.41-.77,1,1,0,0,0-.78-.33,1.15,1.15,0,0,0-.8.29,2.06,2.06,0,0,0-.5.7,3.68,3.68,0,0,0-.27.87,4.87,4.87,0,0,0-.1.84h0a2.06,2.06,0,0,1,.86-.76,2.67,2.67,0,0,1,1.15-.23,2.58,2.58,0,0,1,1.15.25,2.78,2.78,0,0,1,.92.65,2.84,2.84,0,0,1,.52.93,3.24,3.24,0,0,1,.16,1,3.31,3.31,0,0,1-.85,2.29,3.13,3.13,0,0,1-1,.69,3.21,3.21,0,0,1-1.26.25,2.94,2.94,0,0,1-2.7-1.44,4.58,4.58,0,0,1-.54-1.48,8.75,8.75,0,0,1-.15-1.65,7.23,7.23,0,0,1,.18-1.63,4.9,4.9,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.08-1.08,2.91,2.91,0,0,1,1.59-.41,3,3,0,0,1,1.94.63,2.7,2.7,0,0,1,.93,1.81Zm-1.29,2a1.55,1.55,0,0,0-.63.13,1.35,1.35,0,0,0-.44.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,2.15,2.15,0,0,0,.09.6,1.67,1.67,0,0,0,.29.53,1.15,1.15,0,0,0,.45.38,1.27,1.27,0,0,0,.6.14,1.15,1.15,0,0,0,.57-.14,1.31,1.31,0,0,0,.42-.37,1.37,1.37,0,0,0,.26-.52,1.75,1.75,0,0,0,.09-.6,2.15,2.15,0,0,0-.08-.61,1.79,1.79,0,0,0-.25-.54,1.32,1.32,0,0,0-.41-.38,1.28,1.28,0,0,0-.61-.14Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_167" data-name="167">
        <G id="_167-2" data-name=" 167">
          <Circle x="464.99" y="267.32" fill="#e3e3e3" r="11.45" />
          <Path
            d="M459.43,271.49h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M466.38,264.94a1.56,1.56,0,0,0-.4-.77,1.05,1.05,0,0,0-.78-.33,1.21,1.21,0,0,0-.81.29,2.29,2.29,0,0,0-.5.7,3.68,3.68,0,0,0-.27.87,6.37,6.37,0,0,0-.1.84h0a2.21,2.21,0,0,1,.86-.76,2.75,2.75,0,0,1,1.15-.23,2.54,2.54,0,0,1,1.15.25,2.67,2.67,0,0,1,.92.65,2.47,2.47,0,0,1,.52.93,3.26,3.26,0,0,1,.17,1,3.44,3.44,0,0,1-.23,1.26,3.24,3.24,0,0,1-.63,1,3.13,3.13,0,0,1-1,.69,3.17,3.17,0,0,1-1.26.25,3.08,3.08,0,0,1-1.65-.4,3,3,0,0,1-1-1,4.39,4.39,0,0,1-.55-1.48,9.81,9.81,0,0,1-.15-1.65,7.25,7.25,0,0,1,.19-1.63,4.58,4.58,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.06-1.08,3.29,3.29,0,0,1,3.53.22,2.67,2.67,0,0,1,.94,1.81Zm-1.28,2a1.5,1.5,0,0,0-.63.13,1.4,1.4,0,0,0-.45.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,1.81,1.81,0,0,0,.1.6,1.44,1.44,0,0,0,.27.53,1.41,1.41,0,0,0,.45.38,1.28,1.28,0,0,0,.61.14,1.15,1.15,0,0,0,.56-.14,1.49,1.49,0,0,0,.44-.37,1.57,1.57,0,0,0,.26-.52,2.08,2.08,0,0,0,.09-.6,2.16,2.16,0,0,0-.09-.61,1.76,1.76,0,0,0-.24-.54,1.5,1.5,0,0,0-.42-.38,1.24,1.24,0,0,0-.6-.14Z"
            fill="#002b64"
          />
          <Path
            d="M475,264.21a6.34,6.34,0,0,0-1.24,1.49,10.87,10.87,0,0,0-.89,1.88,11.75,11.75,0,0,0-.56,2,10.5,10.5,0,0,0-.19,1.9H470.2a12.1,12.1,0,0,1,.93-3.79,13.63,13.63,0,0,1,2-3.37H469v-1.66h6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_168" data-name="168">
        <G id="_168-2" data-name=" 168">
          <Circle x="576.07" y="267.32" fill="#e3e3e3" r="11.45" />
          <Path
            d="M570.51,271.49h-1.79v-5.73H566.5v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M577.46,264.94a1.56,1.56,0,0,0-.4-.77,1.05,1.05,0,0,0-.78-.33,1.21,1.21,0,0,0-.81.29,2.29,2.29,0,0,0-.5.7,3.67,3.67,0,0,0-.27.87,6.37,6.37,0,0,0-.1.84h0a2.21,2.21,0,0,1,.86-.76,2.75,2.75,0,0,1,1.15-.23,2.54,2.54,0,0,1,1.15.25,2.67,2.67,0,0,1,.92.65,2.47,2.47,0,0,1,.52.93,3.26,3.26,0,0,1,.17,1,3.43,3.43,0,0,1-.23,1.26,3.24,3.24,0,0,1-.63,1,3.13,3.13,0,0,1-1,.69,3.17,3.17,0,0,1-1.26.25,3.08,3.08,0,0,1-1.65-.4,3,3,0,0,1-1-1,4.39,4.39,0,0,1-.55-1.48,9.81,9.81,0,0,1-.15-1.65,7.25,7.25,0,0,1,.19-1.63,4.58,4.58,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.06-1.08,3.29,3.29,0,0,1,3.53.22,2.67,2.67,0,0,1,.94,1.81Zm-1.28,2a1.5,1.5,0,0,0-.63.13,1.4,1.4,0,0,0-.45.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,1.81,1.81,0,0,0,.1.6,1.44,1.44,0,0,0,.27.53,1.41,1.41,0,0,0,.45.38,1.28,1.28,0,0,0,.61.14,1.15,1.15,0,0,0,.56-.14,1.49,1.49,0,0,0,.44-.37,1.57,1.57,0,0,0,.26-.52,2.08,2.08,0,0,0,.09-.6,2.16,2.16,0,0,0-.09-.61,1.76,1.76,0,0,0-.24-.54,1.5,1.5,0,0,0-.42-.38,1.24,1.24,0,0,0-.6-.14Z"
            fill="#002b64"
          />
          <Path
            d="M580.11,264.91a2,2,0,0,1,.26-1,2.43,2.43,0,0,1,.69-.76,3,3,0,0,1,1-.46,3.81,3.81,0,0,1,1.08-.15,3.37,3.37,0,0,1,1.39.25,2.67,2.67,0,0,1,.9.61,2.16,2.16,0,0,1,.5.78,2.09,2.09,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.84,1.84,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.47,2.47,0,0,1-.29,1.21,2.71,2.71,0,0,1-.74.87,3.29,3.29,0,0,1-1.06.52,4.24,4.24,0,0,1-1.2.17,4.5,4.5,0,0,1-1.25-.17,3.15,3.15,0,0,1-1.06-.5,2.37,2.37,0,0,1-.76-.86,2.45,2.45,0,0,1-.29-1.23,2.29,2.29,0,0,1,.45-1.42,2.1,2.1,0,0,1,1.21-.76h0a1.59,1.59,0,0,1-1-.66A2,2,0,0,1,580.11,264.91Zm1.42,3.92a1.52,1.52,0,0,0,.13.62,1.42,1.42,0,0,0,.34.47,1.31,1.31,0,0,0,.48.3,1.6,1.6,0,0,0,.62.11,1.53,1.53,0,0,0,.6-.11,1.31,1.31,0,0,0,.48-.3,1.37,1.37,0,0,0,.32-.47,1.73,1.73,0,0,0,.11-.61,1.35,1.35,0,0,0-.13-.57,1.39,1.39,0,0,0-.32-.45,1.45,1.45,0,0,0-.48-.29,1.65,1.65,0,0,0-.58-.1,1.72,1.72,0,0,0-1.15.35,1.26,1.26,0,0,0-.42,1Zm.26-3.79a1,1,0,0,0,.4.87,1.72,1.72,0,0,0,.44.22,1.87,1.87,0,0,0,.52.07,1.52,1.52,0,0,0,.94-.29,1.05,1.05,0,0,0,.38-.87,1.68,1.68,0,0,0,0-.38,1.14,1.14,0,0,0-.19-.4,1.27,1.27,0,0,0-.4-.32,1.61,1.61,0,0,0-.68-.13,1.53,1.53,0,0,0-1,.32A1.15,1.15,0,0,0,581.8,265Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_169" data-name="169">
        <G id="_169-2" data-name=" 169">
          <Circle x="560.04" y="336.03" fill="#e3e3e3" r="11.45" />
          <Path
            d="M554.47,340.2h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M561.42,333.65a1.56,1.56,0,0,0-.4-.77,1.05,1.05,0,0,0-.78-.33,1.21,1.21,0,0,0-.81.29,2.29,2.29,0,0,0-.5.7,3.67,3.67,0,0,0-.27.87,6.37,6.37,0,0,0-.1.84h0a2.21,2.21,0,0,1,.86-.76,2.75,2.75,0,0,1,1.15-.23,2.54,2.54,0,0,1,1.15.25,2.67,2.67,0,0,1,.92.65,2.47,2.47,0,0,1,.52.93,3.26,3.26,0,0,1,.17,1,3.43,3.43,0,0,1-.23,1.26,3.24,3.24,0,0,1-.63,1,3.13,3.13,0,0,1-1,.69,3.17,3.17,0,0,1-1.26.24,3.08,3.08,0,0,1-1.65-.39,3,3,0,0,1-1-1,4.39,4.39,0,0,1-.55-1.48,9.81,9.81,0,0,1-.15-1.65,7.25,7.25,0,0,1,.19-1.63,4.58,4.58,0,0,1,.61-1.49,3.44,3.44,0,0,1,1.06-1.08,3.29,3.29,0,0,1,3.53.22,2.67,2.67,0,0,1,.94,1.81Zm-1.28,2a1.5,1.5,0,0,0-.63.13,1.4,1.4,0,0,0-.45.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,1.81,1.81,0,0,0,.1.6,1.44,1.44,0,0,0,.27.53,1.41,1.41,0,0,0,.45.38,1.28,1.28,0,0,0,.61.14,1.15,1.15,0,0,0,.56-.14,1.49,1.49,0,0,0,.44-.37,1.57,1.57,0,0,0,.26-.52,2.08,2.08,0,0,0,.09-.6,2.16,2.16,0,0,0-.09-.61,1.49,1.49,0,0,0-.24-.53,1.21,1.21,0,0,0-.42-.38,1.15,1.15,0,0,0-.6-.15Z"
            fill="#002b64"
          />
          <Path
            d="M565.66,337.93a1.43,1.43,0,0,0,.4.77,1,1,0,0,0,.78.33,1.15,1.15,0,0,0,.8-.29,2,2,0,0,0,.5-.69,3.77,3.77,0,0,0,.27-.88,6.21,6.21,0,0,0,.1-.82h0a2.06,2.06,0,0,1-.86.76,2.77,2.77,0,0,1-2.23,0,2.91,2.91,0,0,1-.93-.66,2.78,2.78,0,0,1-.52-.92,3.67,3.67,0,0,1-.16-1.05,3.52,3.52,0,0,1,.22-1.26,3,3,0,0,1,.63-1,2.78,2.78,0,0,1,1-.69,3,3,0,0,1,1.26-.25,3.14,3.14,0,0,1,1.65.39,3.09,3.09,0,0,1,1.05,1.05,4.23,4.23,0,0,1,.54,1.47,8.83,8.83,0,0,1,.15,1.65,7.23,7.23,0,0,1-.18,1.63,4.79,4.79,0,0,1-.61,1.49,3.23,3.23,0,0,1-1.08,1.08,2.91,2.91,0,0,1-1.59.41,3,3,0,0,1-1.94-.63A2.7,2.7,0,0,1,564,338Zm1.28-2a1.33,1.33,0,0,0,.62-.13,1.26,1.26,0,0,0,.45-.35,1.52,1.52,0,0,0,.26-.53,1.87,1.87,0,0,0,.09-.63,2.15,2.15,0,0,0-.09-.6,2.1,2.1,0,0,0-.27-.53,1.37,1.37,0,0,0-.45-.37,1.32,1.32,0,0,0-.61-.15,1.14,1.14,0,0,0-.57.15,1.28,1.28,0,0,0-.42.35,1.75,1.75,0,0,0-.26.53,2,2,0,0,0-.09.58,2.77,2.77,0,0,0,.08.62,1.72,1.72,0,0,0,.25.53,1.15,1.15,0,0,0,1,.52Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_170" data-name="170">
        <G id="_170-2" data-name=" 170">
          <Circle x="511.94" y="336.03" fill="#e3e3e3" r="11.45" />
          <Path
            d="M506.38,340.2h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M515,332.92a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.72,11.72,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M515.71,335.76a7.8,7.8,0,0,1,.25-2.16,3.89,3.89,0,0,1,.71-1.4,2.4,2.4,0,0,1,1-.74,3.44,3.44,0,0,1,2.48,0,2.47,2.47,0,0,1,1,.76,3.72,3.72,0,0,1,.71,1.4,7.8,7.8,0,0,1,.25,2.16,8,8,0,0,1-.25,2.2,4,4,0,0,1-.71,1.43,2.5,2.5,0,0,1-1,.77,3.65,3.65,0,0,1-2.48,0,2.44,2.44,0,0,1-1-.77,4.18,4.18,0,0,1-.71-1.43A8,8,0,0,1,515.71,335.76Zm1.79,0v.92a5.09,5.09,0,0,0,.16,1,2.19,2.19,0,0,0,.42.85,1,1,0,0,0,.82.35,1,1,0,0,0,.85-.35,2.06,2.06,0,0,0,.44-.85,5.09,5.09,0,0,0,.16-1v-2.13a4.68,4.68,0,0,0-.13-.68,2.5,2.5,0,0,0-.24-.6,1.36,1.36,0,0,0-.42-.42,1,1,0,0,0-.62-.17,1,1,0,0,0-.6.17,1.21,1.21,0,0,0-.41.42,3.1,3.1,0,0,0-.25.6,4.67,4.67,0,0,1-.13.68,6.62,6.62,0,0,0,0,.66A2,2,0,0,0,517.5,335.76Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_171" data-name="171">
        <G id="_171-2" data-name=" 171">
          <Circle x="463.85" y="336.03" fill="#e3e3e3" r="11.45" />
          <Path
            d="M458.28,340.2H456.5v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M466.86,332.92a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.73,11.73,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M472.29,340.2H470.5v-5.73h-2.22v-1.35a3.92,3.92,0,0,0,.9-.07,2.6,2.6,0,0,0,.79-.29,1.9,1.9,0,0,0,.58-.55,2.29,2.29,0,0,0,.31-.85h1.42Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_172" data-name="172">
        <G id="_172-2" data-name=" 172">
          <Circle x="415.75" y="336.03" fill="#e3e3e3" r="11.45" />
          <Path
            d="M410.19,340.2H408.4v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M418.77,332.92a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.73,11.73,0,0,0-.21,1.9H414a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M419.72,334.77a4.33,4.33,0,0,1,.18-1.41,3.44,3.44,0,0,1,.61-1.15,2.78,2.78,0,0,1,1-.77,3.63,3.63,0,0,1,1.41-.26,3.55,3.55,0,0,1,1.15.18,3,3,0,0,1,1,.55,2.45,2.45,0,0,1,.65.86,2.61,2.61,0,0,1,.25,1.15,3,3,0,0,1-.13.88,2.4,2.4,0,0,1-.34.71,3,3,0,0,1-.49.58,6.48,6.48,0,0,1-.62.49l-.66.45-.69.46c-.22.16-.44.33-.64.52a3.1,3.1,0,0,0-.55.61h4.17v1.53h-6.47a3.44,3.44,0,0,1,.81-2.35,5.15,5.15,0,0,1,.89-.82l1.08-.77.62-.41a3.92,3.92,0,0,0,.6-.46,2.66,2.66,0,0,0,.46-.56,1.53,1.53,0,0,0,.18-.72,1.32,1.32,0,0,0-.38-1,1.29,1.29,0,0,0-1-.37,1.15,1.15,0,0,0-.66.18,1.6,1.6,0,0,0-.44.48,2.29,2.29,0,0,0-.23.65,3.82,3.82,0,0,0-.07.71Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_173" data-name="173">
        <G id="_173-2" data-name=" 173">
          <Circle x="415.75" y="378.4" fill="#e3e3e3" r="11.45" />
          <Path
            d="M410.19,382.57H408.4v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M418.77,375.29a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.73,11.73,0,0,0-.21,1.9H414a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M422.13,377.31a2.68,2.68,0,0,0,.61,0,1.81,1.81,0,0,0,.62-.14,1.14,1.14,0,0,0,.46-.34.94.94,0,0,0,.19-.61,1.08,1.08,0,0,0-.38-.87,1.35,1.35,0,0,0-.87-.31,1.25,1.25,0,0,0-1,.45,1.75,1.75,0,0,0-.33,1.15h-1.71a3.77,3.77,0,0,1,.25-1.24,2.94,2.94,0,0,1,.62-1,2.74,2.74,0,0,1,.92-.61,3.24,3.24,0,0,1,1.23-.22,3.44,3.44,0,0,1,1.06.16,2.84,2.84,0,0,1,1,.47,2.61,2.61,0,0,1,.69.77,2.07,2.07,0,0,1,.26,1,2.11,2.11,0,0,1-.31,1.15,1.51,1.51,0,0,1-.93.66h0a1.86,1.86,0,0,1,1.15.71,2.08,2.08,0,0,1,.42,1.29,2.65,2.65,0,0,1-.27,1.23,2.85,2.85,0,0,1-.72.92,3.56,3.56,0,0,1-1.05.56,4,4,0,0,1-1.23.18,4.26,4.26,0,0,1-1.36-.21,2.94,2.94,0,0,1-1-.63,2.71,2.71,0,0,1-.66-1,3.44,3.44,0,0,1-.22-1.35h1.69a2.53,2.53,0,0,0,.11.68,1.57,1.57,0,0,0,.29.55,1.37,1.37,0,0,0,.47.38,1.58,1.58,0,0,0,.68.14,1.44,1.44,0,0,0,1-.38,1.27,1.27,0,0,0,.42-1,1.31,1.31,0,0,0-.19-.77,1.15,1.15,0,0,0-.5-.39,2,2,0,0,0-.65-.14h-.69Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_174" data-name="174">
        <G id="_174-2" data-name=" 174">
          <Circle x="463.85" y="378.4" fill="#e3e3e3" r="11.45" />
          <Path
            d="M458.28,382.57H456.5v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M466.86,375.29a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.73,11.73,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M471.28,380.53h-3.73v-1.64l3.84-5.14H473v5.3h1.15v1.48H473v2h-1.69Zm0-4.58h0L469,379h2.29Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_175" data-name="175">
        <G id="_175-2" data-name=" 175">
          <Circle x="511.94" y="378.4" fill="#e3e3e3" r="11.45" />
          <Path
            d="M506.38,382.57h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M515,375.29a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.72,11.72,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M521.75,375.23H518.1l-.35,2h0a2.29,2.29,0,0,1,.78-.53,2.76,2.76,0,0,1,1-.15,2.65,2.65,0,0,1,1.15.24,2.29,2.29,0,0,1,.85.64,2.67,2.67,0,0,1,.54,1,3.83,3.83,0,0,1,.18,1.15,3.12,3.12,0,0,1-.26,1.27,3.23,3.23,0,0,1-.72,1,3.29,3.29,0,0,1-1,.68,3.14,3.14,0,0,1-1.26.22,4.36,4.36,0,0,1-1.24-.17,3.14,3.14,0,0,1-1-.53,2.68,2.68,0,0,1-.73-.87,2.76,2.76,0,0,1-.27-1.23h1.79a1.41,1.41,0,0,0,1.44,1.33,1.37,1.37,0,0,0,.63-.14,1.53,1.53,0,0,0,.48-.38,1.63,1.63,0,0,0,.31-.55,2,2,0,0,0,.1-.64,2.4,2.4,0,0,0-.09-.64,1.52,1.52,0,0,0-.31-.53,1.43,1.43,0,0,0-1.15-.48,1.57,1.57,0,0,0-.78.17,1.78,1.78,0,0,0-.56.54H516l.87-4.88h4.92Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_176" data-name="176">
        <G id="_176-2" data-name=" 176">
          <Circle x="560.04" y="378.4" fill="#e3e3e3" r="11.45" />
          <Path
            d="M554.47,382.57h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M563.05,375.29a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.72,11.72,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37H557v-1.66h6Z"
            fill="#002b64"
          />
          <Path
            d="M568.43,376a1.58,1.58,0,0,0-.41-.77,1,1,0,0,0-.78-.33,1.15,1.15,0,0,0-.8.29,2.06,2.06,0,0,0-.5.7,3.67,3.67,0,0,0-.27.87,4.87,4.87,0,0,0-.1.84h0a2.06,2.06,0,0,1,.86-.76,2.67,2.67,0,0,1,1.15-.23,2.58,2.58,0,0,1,1.15.25,2.78,2.78,0,0,1,.92.65,2.84,2.84,0,0,1,.52.93,3.24,3.24,0,0,1,.16,1,3.31,3.31,0,0,1-.85,2.29,3.13,3.13,0,0,1-1,.69,3.21,3.21,0,0,1-1.26.24,2.9,2.9,0,0,1-2.7-1.43,4.58,4.58,0,0,1-.54-1.48,8.75,8.75,0,0,1-.15-1.65,7.23,7.23,0,0,1,.18-1.63,4.9,4.9,0,0,1,.61-1.49A3.43,3.43,0,0,1,565.7,374a2.91,2.91,0,0,1,1.59-.41,3,3,0,0,1,1.94.63,2.7,2.7,0,0,1,.93,1.81Zm-1.29,2a1.55,1.55,0,0,0-.63.13,1.35,1.35,0,0,0-.44.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,2.15,2.15,0,0,0,.09.6,1.67,1.67,0,0,0,.29.53,1.15,1.15,0,0,0,.45.38,1.27,1.27,0,0,0,.6.14,1.15,1.15,0,0,0,.57-.14,1.31,1.31,0,0,0,.42-.37,1.37,1.37,0,0,0,.26-.52,1.75,1.75,0,0,0,.09-.6,2.15,2.15,0,0,0-.08-.61,1.5,1.5,0,0,0-.25-.53,1.19,1.19,0,0,0-1-.53Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_177" data-name="177">
        <G id="_177-2" data-name=" 177">
          <Circle x="552.02" y="451.69" fill="#e3e3e3" r="11.45" />
          <Path
            d="M546.46,455.86h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M555,448.57a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.72,11.72,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37H549V447h6Z"
            fill="#002b64"
          />
          <Path
            d="M562,448.57a6.34,6.34,0,0,0-1.24,1.49,10.87,10.87,0,0,0-.89,1.88,11.75,11.75,0,0,0-.56,2,10.5,10.5,0,0,0-.19,1.9h-1.92a12.1,12.1,0,0,1,.93-3.79,13.63,13.63,0,0,1,2-3.37H556V447h6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_178" data-name="178">
        <G id="_178-2" data-name=" 178">
          <Circle x="478.74" y="451.69" fill="#e3e3e3" r="11.45" />
          <Path
            d="M473.17,455.86h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M481.75,448.57a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.73,11.73,0,0,0-.21,1.9h-1.91a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18V447h6Z"
            fill="#002b64"
          />
          <Path
            d="M482.78,449.27a2,2,0,0,1,.26-1,2.43,2.43,0,0,1,.69-.76,3,3,0,0,1,1-.46,3.81,3.81,0,0,1,1.08-.15,3.37,3.37,0,0,1,1.39.25,2.67,2.67,0,0,1,.9.61,2.16,2.16,0,0,1,.5.78,2.09,2.09,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.84,1.84,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.47,2.47,0,0,1-.29,1.21,2.71,2.71,0,0,1-.74.87,3.29,3.29,0,0,1-1.06.52,4.23,4.23,0,0,1-1.2.16,4.5,4.5,0,0,1-1.25-.16,3.15,3.15,0,0,1-1.06-.5,2.37,2.37,0,0,1-.76-.86,2.45,2.45,0,0,1-.29-1.23,2.29,2.29,0,0,1,.45-1.42,2.1,2.1,0,0,1,1.21-.76h0a1.59,1.59,0,0,1-1-.66A2,2,0,0,1,482.78,449.27Zm1.42,3.92a1.52,1.52,0,0,0,.13.62,1.42,1.42,0,0,0,.34.47,1.51,1.51,0,0,0,.48.31,1.84,1.84,0,0,0,.62.1,1.76,1.76,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.37,1.37,0,0,0,.32-.47,1.73,1.73,0,0,0,.11-.61,1.35,1.35,0,0,0-.13-.57,1.39,1.39,0,0,0-.32-.45,1.45,1.45,0,0,0-.48-.29,1.65,1.65,0,0,0-.58-.1,1.72,1.72,0,0,0-1.15.35,1.26,1.26,0,0,0-.42,1Zm.26-3.79a1,1,0,0,0,.4.87,1.72,1.72,0,0,0,.44.22,1.87,1.87,0,0,0,.52.07,1.52,1.52,0,0,0,.94-.29,1.05,1.05,0,0,0,.38-.87,1.68,1.68,0,0,0,0-.38,1.14,1.14,0,0,0-.19-.4,1.27,1.27,0,0,0-.4-.32,1.61,1.61,0,0,0-.68-.13,1.53,1.53,0,0,0-1,.32A1.15,1.15,0,0,0,484.46,449.4Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_179" data-name="179">
        <G id="_179-2" data-name=" 179">
          <Circle x="407.74" y="451.69" fill="#e3e3e3" r="11.45" />
          <Path
            d="M402.17,455.86h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M410.75,448.57a6.6,6.6,0,0,0-1.23,1.49,10.91,10.91,0,0,0-.9,1.88,12.84,12.84,0,0,0-.55,2,11.73,11.73,0,0,0-.21,1.9H406a12.1,12.1,0,0,1,.93-3.79,13.58,13.58,0,0,1,2-3.37h-4.18V447h6Z"
            fill="#002b64"
          />
          <Path
            d="M413.36,453.59a1.43,1.43,0,0,0,.4.77,1,1,0,0,0,.78.33,1.15,1.15,0,0,0,.8-.29,2,2,0,0,0,.5-.69,3.77,3.77,0,0,0,.27-.88,6.21,6.21,0,0,0,.1-.82h0a2.06,2.06,0,0,1-.86.76,2.77,2.77,0,0,1-2.23,0,2.91,2.91,0,0,1-.93-.66,2.78,2.78,0,0,1-.52-.92,3.68,3.68,0,0,1-.16-1.05,3.52,3.52,0,0,1,.22-1.26,3,3,0,0,1,.63-1,2.78,2.78,0,0,1,1-.69,3,3,0,0,1,1.26-.25,3.14,3.14,0,0,1,1.65.39,3.09,3.09,0,0,1,1.05,1.05,4.23,4.23,0,0,1,.54,1.47,8.83,8.83,0,0,1,.15,1.65,7.23,7.23,0,0,1-.18,1.63,4.79,4.79,0,0,1-.61,1.49,3.23,3.23,0,0,1-1.08,1.08,2.91,2.91,0,0,1-1.59.41,3,3,0,0,1-1.94-.63,2.7,2.7,0,0,1-.93-1.81Zm1.28-2a1.33,1.33,0,0,0,.62-.13,1.26,1.26,0,0,0,.45-.35,1.52,1.52,0,0,0,.26-.53,1.87,1.87,0,0,0,.09-.63,2.15,2.15,0,0,0-.09-.6,2.1,2.1,0,0,0-.27-.53,1.37,1.37,0,0,0-.45-.37,1.32,1.32,0,0,0-.61-.15,1.14,1.14,0,0,0-.57.15,1.28,1.28,0,0,0-.42.35,1.75,1.75,0,0,0-.26.53,2,2,0,0,0-.09.58,2.77,2.77,0,0,0,.08.62,1.72,1.72,0,0,0,.25.53,1.15,1.15,0,0,0,1,.52Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_180" data-name="180">
        <G id="_180-2" data-name=" 180">
          <Circle x="359.64" y="451.69" fill="#e3e3e3" r="11.45" />
          <Path
            d="M354.08,455.86h-1.79v-5.73h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M356.69,449.27a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,356.69,449.27Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35,1.26,1.26,0,0,0-.41,1Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.06,1.06,0,0,0,.39-.87,1.79,1.79,0,0,0-.06-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.69-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M363.41,451.41a7.8,7.8,0,0,1,.25-2.16,3.89,3.89,0,0,1,.71-1.4,2.4,2.4,0,0,1,1-.74,3.44,3.44,0,0,1,2.48,0,2.47,2.47,0,0,1,1,.76,3.72,3.72,0,0,1,.71,1.4,7.8,7.8,0,0,1,.25,2.16,8,8,0,0,1-.25,2.2,4,4,0,0,1-.71,1.43,2.5,2.5,0,0,1-1,.77,3.65,3.65,0,0,1-2.48,0,2.44,2.44,0,0,1-1-.77,4.18,4.18,0,0,1-.71-1.43A8,8,0,0,1,363.41,451.41Zm1.79,0v.92a5.1,5.1,0,0,0,.16,1,2.19,2.19,0,0,0,.42.85,1,1,0,0,0,.82.35,1,1,0,0,0,.85-.35,2.06,2.06,0,0,0,.44-.85,5.1,5.1,0,0,0,.16-1v-1.47a2.65,2.65,0,0,0-.06-.66,4.67,4.67,0,0,0-.13-.68,2.5,2.5,0,0,0-.24-.6,1.36,1.36,0,0,0-.42-.42,1,1,0,0,0-.62-.17,1,1,0,0,0-.6.17,1.21,1.21,0,0,0-.41.42,3.1,3.1,0,0,0-.25.6c-.06.23-.09.45-.13.68a6.62,6.62,0,0,0,0,.66Q365.2,451.19,365.2,451.41Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_181" data-name="181">
        <G id="_181-2" data-name=" 181">
          <Circle x="359.64" y="494.06" fill="#e3e3e3" r="11.45" />
          <Path
            d="M354.08,498.23h-1.79V492.5h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M356.69,491.64a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,356.69,491.64Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35,1.26,1.26,0,0,0-.41,1Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.06,1.06,0,0,0,.39-.87,1.79,1.79,0,0,0-.06-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.69-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M368.08,498.23H366.3V492.5h-2.22v-1.35a3.92,3.92,0,0,0,.9-.07,2.6,2.6,0,0,0,.79-.29,1.9,1.9,0,0,0,.58-.55,2.29,2.29,0,0,0,.31-.85h1.42Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_182" data-name="182">
        <G id="_182-2" data-name=" 182">
          <Circle x="407.74" y="494.06" fill="#e3e3e3" r="11.45" />
          <Path
            d="M402.17,498.23h-1.79V492.5h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M404.78,491.64a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,404.78,491.64Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35,1.26,1.26,0,0,0-.41,1Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.06,1.06,0,0,0,.39-.87,1.79,1.79,0,0,0-.06-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.69-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M411.7,492.8a4.33,4.33,0,0,1,.18-1.41,3.44,3.44,0,0,1,.61-1.15,2.78,2.78,0,0,1,1-.77,3.63,3.63,0,0,1,1.41-.26,3.55,3.55,0,0,1,1.15.18,3,3,0,0,1,1,.55,2.45,2.45,0,0,1,.65.86,2.61,2.61,0,0,1,.25,1.15,3,3,0,0,1-.13.88,2.4,2.4,0,0,1-.34.71,3,3,0,0,1-.49.58,6.48,6.48,0,0,1-.62.49l-.66.45-.69.46c-.22.16-.44.33-.64.52a3.1,3.1,0,0,0-.55.61h4.17v1.53h-6.47a3.44,3.44,0,0,1,.81-2.35,5.15,5.15,0,0,1,.89-.82l1.08-.77.62-.41a3.92,3.92,0,0,0,.6-.46,2.66,2.66,0,0,0,.46-.56,1.53,1.53,0,0,0,.18-.72,1.32,1.32,0,0,0-.38-1,1.29,1.29,0,0,0-1-.37,1.15,1.15,0,0,0-.66.18,1.6,1.6,0,0,0-.44.48,2.29,2.29,0,0,0-.23.65,3.82,3.82,0,0,0-.07.71Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_183" data-name="183">
        <G id="_183-2" data-name=" 183">
          <Circle x="455.83" y="494.06" fill="#e3e3e3" r="11.45" />
          <Path
            d="M450.27,498.23h-1.79V492.5h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M452.88,491.64a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,452.88,491.64Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35,1.26,1.26,0,0,0-.41,1Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.06,1.06,0,0,0,.39-.87,1.79,1.79,0,0,0-.06-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.69-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M462.21,493a2.68,2.68,0,0,0,.61,0,1.81,1.81,0,0,0,.62-.14,1.14,1.14,0,0,0,.46-.34.94.94,0,0,0,.19-.61,1.08,1.08,0,0,0-.38-.87,1.35,1.35,0,0,0-.87-.31,1.25,1.25,0,0,0-1,.45,1.75,1.75,0,0,0-.33,1.15h-1.71a3.77,3.77,0,0,1,.25-1.24,2.94,2.94,0,0,1,.62-1,2.74,2.74,0,0,1,.92-.61,3.24,3.24,0,0,1,1.23-.22,3.44,3.44,0,0,1,1.06.16,2.84,2.84,0,0,1,1,.47,2.61,2.61,0,0,1,.69.77,2.07,2.07,0,0,1,.26,1,2.11,2.11,0,0,1-.31,1.15,1.51,1.51,0,0,1-.93.66h0a1.86,1.86,0,0,1,1.15.71,2.08,2.08,0,0,1,.42,1.29,2.65,2.65,0,0,1-.27,1.23,2.85,2.85,0,0,1-.72.92,3.56,3.56,0,0,1-1.05.56,4,4,0,0,1-1.23.18,4.26,4.26,0,0,1-1.36-.21,2.94,2.94,0,0,1-1-.63,2.71,2.71,0,0,1-.66-1,3.44,3.44,0,0,1-.22-1.35h1.69a2.53,2.53,0,0,0,.11.68,1.57,1.57,0,0,0,.29.55,1.37,1.37,0,0,0,.47.38,1.58,1.58,0,0,0,.68.14,1.44,1.44,0,0,0,1-.38,1.27,1.27,0,0,0,.42-1,1.31,1.31,0,0,0-.19-.77,1.15,1.15,0,0,0-.5-.39,2,2,0,0,0-.65-.14h-.69Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_184" data-name="184">
        <G id="_184-2" data-name=" 184">
          <Circle x="503.93" y="494.06" fill="#e3e3e3" r="11.45" />
          <Path
            d="M498.36,498.23h-1.79V492.5h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M501,491.64a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.09,2.09,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,501,491.64Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.22,1.22,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35,1.26,1.26,0,0,0-.41,1Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.07,1.07,0,0,0,.39-.87,1.79,1.79,0,0,0,0-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.74-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M511.36,496.19h-3.73v-1.64l3.84-5.14h1.63v5.3h1.15v1.48h-1.15v2h-1.69Zm0-4.58h0l-2.29,3.06h2.29Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_185" data-name="185">
        <G id="_185-2" data-name=" 185">
          <Circle x="552.02" y="494.06" fill="#e3e3e3" r="11.45" />
          <Path
            d="M546.46,498.23h-1.79V492.5h-2.22v-1.35a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M549.07,491.64a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.09,2.09,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,549.07,491.64Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.22,1.22,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35,1.26,1.26,0,0,0-.41,1Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.07,1.07,0,0,0,.39-.87,1.79,1.79,0,0,0,0-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.74-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M561.83,490.89h-3.64l-.35,2h0a2.29,2.29,0,0,1,.78-.53,2.76,2.76,0,0,1,1-.15,2.65,2.65,0,0,1,1.15.24,2.29,2.29,0,0,1,.85.64,2.67,2.67,0,0,1,.54,1,3.83,3.83,0,0,1,.18,1.15,3.12,3.12,0,0,1-.26,1.27,3.23,3.23,0,0,1-.72,1,3.29,3.29,0,0,1-1,.68,3.14,3.14,0,0,1-1.26.22,4.36,4.36,0,0,1-1.24-.17,3.14,3.14,0,0,1-1-.53,2.68,2.68,0,0,1-.73-.87,2.76,2.76,0,0,1-.27-1.23h1.79A1.41,1.41,0,0,0,559,496.9a1.37,1.37,0,0,0,.63-.14,1.53,1.53,0,0,0,.48-.38,1.63,1.63,0,0,0,.31-.55,2,2,0,0,0,.1-.64,2.4,2.4,0,0,0-.09-.64,1.52,1.52,0,0,0-.31-.53,1.43,1.43,0,0,0-1.15-.48,1.57,1.57,0,0,0-.78.17,1.78,1.78,0,0,0-.56.54H556l.87-4.88h4.92Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_186" data-name="186">
        <G id="_186-2" data-name=" 186">
          <Circle x="604.7" y="563.91" fill="#e3e3e3" r="11.45" />
          <Path
            d="M599.13,568.08h-1.79v-5.73h-2.22V561a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M601.74,561.49a1.93,1.93,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,601.74,561.49Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35A1.26,1.26,0,0,0,603.16,565.41Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.07,1.07,0,0,0,.39-.87,1.79,1.79,0,0,0,0-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.74-.08,1.5,1.5,0,0,0-.94.32,1.07,1.07,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M613.09,561.53a1.58,1.58,0,0,0-.41-.77,1,1,0,0,0-.78-.33,1.15,1.15,0,0,0-.8.29,2.06,2.06,0,0,0-.5.7,3.67,3.67,0,0,0-.27.87,4.87,4.87,0,0,0-.1.84h0a2.06,2.06,0,0,1,.86-.76,2.67,2.67,0,0,1,1.15-.23,2.58,2.58,0,0,1,1.15.25,2.78,2.78,0,0,1,.92.65,2.84,2.84,0,0,1,.52.93,3.24,3.24,0,0,1,.16,1,3.31,3.31,0,0,1-.85,2.29,3.13,3.13,0,0,1-1,.69,3.21,3.21,0,0,1-1.26.24,2.9,2.9,0,0,1-2.7-1.43,4.58,4.58,0,0,1-.54-1.48,8.75,8.75,0,0,1-.15-1.65,7.23,7.23,0,0,1,.18-1.63,4.9,4.9,0,0,1,.61-1.49,3.43,3.43,0,0,1,1.08-1.08,2.91,2.91,0,0,1,1.59-.41,3,3,0,0,1,1.94.63,2.7,2.7,0,0,1,.93,1.81Zm-1.29,2a1.55,1.55,0,0,0-.63.13,1.35,1.35,0,0,0-.44.37,1.57,1.57,0,0,0-.26.52,2.29,2.29,0,0,0-.09.63,2.15,2.15,0,0,0,.09.6,1.67,1.67,0,0,0,.29.53,1.15,1.15,0,0,0,.45.38,1.27,1.27,0,0,0,.6.14,1.15,1.15,0,0,0,.57-.14,1.3,1.3,0,0,0,.42-.37,1.37,1.37,0,0,0,.26-.52,1.75,1.75,0,0,0,.09-.6,2.15,2.15,0,0,0-.08-.61,1.5,1.5,0,0,0-.25-.53,1.19,1.19,0,0,0-1-.53Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_187" data-name="187">
        <G id="_187-2" data-name=" 187">
          <Circle x="549.73" y="563.91" fill="#e3e3e3" r="11.45" />
          <Path
            d="M544.17,568.08h-1.79v-5.73h-2.22V561a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M546.78,561.49a1.93,1.93,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,546.78,561.49Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35A1.26,1.26,0,0,0,548.2,565.41Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.07,1.07,0,0,0,.39-.87,1.79,1.79,0,0,0,0-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.74-.08,1.5,1.5,0,0,0-.94.32,1.07,1.07,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M559.75,560.8a6.34,6.34,0,0,0-1.24,1.49,10.87,10.87,0,0,0-.89,1.88,11.75,11.75,0,0,0-.56,2,10.5,10.5,0,0,0-.19,1.9h-1.92a12.1,12.1,0,0,1,.93-3.79,13.63,13.63,0,0,1,2-3.37h-4.18v-1.66h6Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_188" data-name="188">
        <G id="_188-2" data-name=" 188">
          <Circle x="493.62" y="563.91" fill="#e3e3e3" r="11.45" />
          <Path
            d="M488.06,568.08h-1.79v-5.73H484V561a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M490.67,561.49a1.93,1.93,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,490.67,561.49Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31A1.23,1.23,0,0,0,495,566a1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35A1.26,1.26,0,0,0,492.09,565.41Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.07,1.07,0,0,0,.39-.87,1.79,1.79,0,0,0,0-.38,1,1,0,0,0-.19-.4,1.15,1.15,0,0,0-.4-.32,1.61,1.61,0,0,0-.74-.08,1.5,1.5,0,0,0-.94.32,1.07,1.07,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M497.66,561.49a2,2,0,0,1,.26-1,2.43,2.43,0,0,1,.69-.76,3,3,0,0,1,1-.46,3.81,3.81,0,0,1,1.08-.15,3.37,3.37,0,0,1,1.39.25,2.67,2.67,0,0,1,.9.61,2.16,2.16,0,0,1,.5.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.84,1.84,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.47,2.47,0,0,1-.29,1.21,2.71,2.71,0,0,1-.74.87,3.29,3.29,0,0,1-1.06.52,4.22,4.22,0,0,1-1.2.16,4.5,4.5,0,0,1-1.25-.16,3.15,3.15,0,0,1-1.06-.5,2.37,2.37,0,0,1-.76-.86,2.45,2.45,0,0,1-.29-1.23,2.29,2.29,0,0,1,.45-1.42,2.1,2.1,0,0,1,1.21-.76h0a1.59,1.59,0,0,1-1-.66A2,2,0,0,1,497.66,561.49Zm1.42,3.92a1.52,1.52,0,0,0,.13.62,1.42,1.42,0,0,0,.34.47,1.51,1.51,0,0,0,.48.31,1.84,1.84,0,0,0,.62.1,1.76,1.76,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31A1.37,1.37,0,0,0,502,566a1.73,1.73,0,0,0,.11-.61,1.35,1.35,0,0,0-.13-.57,1.39,1.39,0,0,0-.32-.45,1.45,1.45,0,0,0-.48-.29,1.65,1.65,0,0,0-.58-.1,1.72,1.72,0,0,0-1.15.35A1.26,1.26,0,0,0,499.08,565.41Zm.26-3.79a1,1,0,0,0,.4.87,1.72,1.72,0,0,0,.44.22,1.87,1.87,0,0,0,.52.07,1.52,1.52,0,0,0,.94-.29,1.05,1.05,0,0,0,.38-.87,1.68,1.68,0,0,0,0-.38,1.15,1.15,0,0,0-.19-.4,1.27,1.27,0,0,0-.4-.32,1.62,1.62,0,0,0-.68-.13,1.53,1.53,0,0,0-1,.32A1.15,1.15,0,0,0,499.35,561.62Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_189" data-name="189">
        <G id="_189-2" data-name=" 189">
          <Circle x="438.66" y="563.91" fill="#e3e3e3" r="11.45" />
          <Path
            d="M433.09,568.08H431.3v-5.73h-2.22V561a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M435.7,561.49a1.94,1.94,0,0,1,.26-1,2.18,2.18,0,0,1,.69-.76,2.93,2.93,0,0,1,1-.46,3.73,3.73,0,0,1,1.06-.15,3.33,3.33,0,0,1,1.39.25,2.73,2.73,0,0,1,.92.61,2.13,2.13,0,0,1,.49.78,2.08,2.08,0,0,1,.15.73,2,2,0,0,1-.32,1.15,1.8,1.8,0,0,1-1,.7h0a2.08,2.08,0,0,1,1.23.76,2.29,2.29,0,0,1,.42,1.41,2.6,2.6,0,0,1-.27,1.21,2.91,2.91,0,0,1-.76.87,3.34,3.34,0,0,1-1.05.52,4.36,4.36,0,0,1-1.21.16,4.47,4.47,0,0,1-1.24-.16,3.21,3.21,0,0,1-1.08-.5,2.61,2.61,0,0,1-.76-.86,2.58,2.58,0,0,1-.27-1.23,2.29,2.29,0,0,1,.44-1.42,2.13,2.13,0,0,1,1.23-.76h0a1.58,1.58,0,0,1-1-.66A2,2,0,0,1,435.7,561.49Zm1.42,3.92a1.36,1.36,0,0,0,.13.62,1.4,1.4,0,0,0,.33.47,1.44,1.44,0,0,0,.49.31,1.73,1.73,0,0,0,.61.1,1.67,1.67,0,0,0,.6-.1,1.51,1.51,0,0,0,.48-.31,1.23,1.23,0,0,0,.32-.47,1.51,1.51,0,0,0,.11-.61,1.35,1.35,0,0,0-.11-.57,1.42,1.42,0,0,0-.33-.45,1.45,1.45,0,0,0-.48-.29,1.56,1.56,0,0,0-.58-.1,1.74,1.74,0,0,0-1.15.35A1.26,1.26,0,0,0,437.12,565.41Zm.19-3.76a1.15,1.15,0,0,0,.11.5,1,1,0,0,0,.3.37,1.55,1.55,0,0,0,.44.22,1.84,1.84,0,0,0,.5.07,1.5,1.5,0,0,0,.94-.29,1.06,1.06,0,0,0,.39-.87,1.79,1.79,0,0,0-.06-.38,1,1,0,0,0-.19-.4,1.14,1.14,0,0,0-.4-.32,1.61,1.61,0,0,0-.69-.08,1.5,1.5,0,0,0-.94.32,1.06,1.06,0,0,0-.4.82Z"
            fill="#002b64"
          />
          <Path
            d="M444.28,565.81a1.43,1.43,0,0,0,.4.77,1,1,0,0,0,.78.33,1.15,1.15,0,0,0,.8-.29,2,2,0,0,0,.5-.69,3.77,3.77,0,0,0,.27-.88,6.21,6.21,0,0,0,.1-.82h0a2.06,2.06,0,0,1-.86.76,2.77,2.77,0,0,1-2.23,0,2.91,2.91,0,0,1-.93-.66,2.78,2.78,0,0,1-.52-.92,3.68,3.68,0,0,1-.16-1.05,3.52,3.52,0,0,1,.22-1.26,3,3,0,0,1,.63-1,2.78,2.78,0,0,1,1-.69,3,3,0,0,1,1.26-.25,3.14,3.14,0,0,1,1.65.39,3.09,3.09,0,0,1,1.05,1.05,4.23,4.23,0,0,1,.54,1.47,8.83,8.83,0,0,1,.15,1.65,7.23,7.23,0,0,1-.18,1.63,4.79,4.79,0,0,1-.61,1.49,3.23,3.23,0,0,1-1.08,1.08,2.91,2.91,0,0,1-1.59.41,3,3,0,0,1-1.94-.63,2.7,2.7,0,0,1-.93-1.81Zm1.28-2a1.33,1.33,0,0,0,.62-.13,1.26,1.26,0,0,0,.45-.35,1.52,1.52,0,0,0,.26-.53,1.87,1.87,0,0,0,.09-.63,2.15,2.15,0,0,0-.09-.6,2.1,2.1,0,0,0-.27-.53,1.37,1.37,0,0,0-.45-.37,1.32,1.32,0,0,0-.61-.15,1.15,1.15,0,0,0-.57.15,1.28,1.28,0,0,0-.42.35,1.75,1.75,0,0,0-.26.53,2,2,0,0,0-.09.58,2.77,2.77,0,0,0,.08.62,1.72,1.72,0,0,0,.25.53,1.15,1.15,0,0,0,1,.52Z"
            fill="#002b64"
          />
        </G>
      </G>
      <G id="_190" data-name="190">
        <G id="_190-2" data-name=" 190">
          <Circle x="391.71" y="563.91" fill="#e3e3e3" r="11.45" />
          <Path
            d="M386.14,568.08h-1.79v-5.73h-2.22V561a4,4,0,0,0,.9-.07,2.43,2.43,0,0,0,.78-.29,1.82,1.82,0,0,0,.6-.55,2.06,2.06,0,0,0,.3-.85h1.43Z"
            fill="#002b64"
          />
          <Path
            d="M390.32,565.81a1.51,1.51,0,0,0,.4.77,1.05,1.05,0,0,0,.78.33,1.15,1.15,0,0,0,.81-.29,2.18,2.18,0,0,0,.5-.69,3.77,3.77,0,0,0,.27-.88q.07-.46.1-.82h0a2.21,2.21,0,0,1-.86.76,2.79,2.79,0,0,1-2.29,0,2.86,2.86,0,0,1-.92-.66,2.43,2.43,0,0,1-.52-.92,3.33,3.33,0,0,1-.17-1.05,3.52,3.52,0,0,1,.23-1.26,2.83,2.83,0,0,1,.63-1,2.69,2.69,0,0,1,1-.69,3,3,0,0,1,1.26-.25,3.14,3.14,0,0,1,1.65.39,3.06,3.06,0,0,1,1,1.05,4.24,4.24,0,0,1,.55,1.47,9.92,9.92,0,0,1,.15,1.65,7.25,7.25,0,0,1-.19,1.63,4.58,4.58,0,0,1-.61,1.49,3.1,3.1,0,0,1-4.59.86,2.67,2.67,0,0,1-.94-1.81Zm1.28-2a1.37,1.37,0,0,0,.63-.13,1.49,1.49,0,0,0,.45-.35,1.75,1.75,0,0,0,.26-.53,2.2,2.2,0,0,0,.09-.63,1.81,1.81,0,0,0-.1-.6,1.55,1.55,0,0,0-.27-.53,1.37,1.37,0,0,0-.45-.37,1.28,1.28,0,0,0-.61-.15,1.15,1.15,0,0,0-.57.15,1.56,1.56,0,0,0-.42.35,1.75,1.75,0,0,0-.26.53,2,2,0,0,0-.08.58,2.29,2.29,0,0,0,.08.62,1.7,1.7,0,0,0,.24.53,1.5,1.5,0,0,0,.42.38A1.24,1.24,0,0,0,391.6,563.83Z"
            fill="#002b64"
          />
          <Path
            d="M395.47,563.64a7.8,7.8,0,0,1,.25-2.16,3.89,3.89,0,0,1,.71-1.4,2.41,2.41,0,0,1,1-.74,3.44,3.44,0,0,1,2.48,0,2.47,2.47,0,0,1,1,.76,3.72,3.72,0,0,1,.71,1.4,7.8,7.8,0,0,1,.25,2.16,8,8,0,0,1-.25,2.2,4,4,0,0,1-.71,1.43,2.5,2.5,0,0,1-1,.77,3.65,3.65,0,0,1-2.48,0,2.44,2.44,0,0,1-1-.77,4.18,4.18,0,0,1-.71-1.43A8,8,0,0,1,395.47,563.64Zm1.79,0v.92a5.1,5.1,0,0,0,.16,1,2.19,2.19,0,0,0,.42.85,1,1,0,0,0,.82.35,1,1,0,0,0,.85-.35,2.06,2.06,0,0,0,.44-.85,5.1,5.1,0,0,0,.16-1v-1.47a2.65,2.65,0,0,0-.06-.66,4.67,4.67,0,0,0-.13-.68,2.5,2.5,0,0,0-.24-.6,1.36,1.36,0,0,0-.42-.42,1,1,0,0,0-.62-.17,1,1,0,0,0-.6.17,1.21,1.21,0,0,0-.41.42,3.1,3.1,0,0,0-.25.6c-.06.23-.09.45-.13.68a6.62,6.62,0,0,0,0,.66Q397.26,563.41,397.26,563.64Z"
            fill="#002b64"
          />
        </G>
      </G>
    </Svg>
  )
  svgData = parseSvg(svgData)
  return svgData
}

Karhuset.propTypes = {
  parseSvg: PropTypes.func.isRequired
}
export default Karhuset
