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
            d="M358.5,553.5h-59v-73h59Zm913-670-109,19-11-58-594,104V52h-400V302.5h152V203h49v50H660V203h0V187.5h89.5V72.5l539-95Z"
            style={{
              fill: '#002b64',
              opacity: 0.30000000000000004,
            }}
          />
        </ClipPath>
      </Defs>
      <G id="bg">
        <Rect
          x={-112}
          y={-212}
          width={1024}
          height={1024}
          style={{
            fill: '#acd6ea',
          }}
        />
      </G>
      <G id="garderob">
        <Line
          x1={309.5}
          y1={302.5}
          x2={357.5}
          y2={302.5}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
        <Rect
          x={310}
          y={204}
          width={48}
          height={98.5}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
      </G>
      <G id="innerv\xE4ggar">
        <Polyline
          points="377 434 380.5 434 380.5 466"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
        <Polyline
          points="363 434 358.5 434 358.5 481"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
        <Line
          x1={358.5}
          y1={390}
          x2={358.5}
          y2={421}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
        <Line
          x1={358.5}
          y1={254}
          x2={358.5}
          y2={378}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
      </G>
      <G id="onyttjade_ytor">
        <Path
          d="M358.5,553.5h-59v-73h59Zm913-670-109,19-11-58-594,104V52h-400V302.5h152V203h49v50H660V203h0V187.5h89.5V72.5l539-95Z"
          style={{
            fill: '#002b64',
            opacity: 0.30000000000000004,
          }}
        />
        <G
          style={{
            clipPath: 'url(#clip-path)',
          }}
        >
          <Line
            x1={-200.0343}
            y1={339.8276}
            x2={1256.4794}
            y2={-1116.6861}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={354.6616}
            x2={1256.4794}
            y2={-1101.8521}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={369.4956}
            x2={1256.4794}
            y2={-1087.0181}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={384.3296}
            x2={1256.4794}
            y2={-1072.1841}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={399.1636}
            x2={1256.4794}
            y2={-1057.3501}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={413.9976}
            x2={1256.4794}
            y2={-1042.5161}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={428.8316}
            x2={1256.4794}
            y2={-1027.6821}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={443.6656}
            x2={1256.4794}
            y2={-1012.8481}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={458.4996}
            x2={1256.4794}
            y2={-998.0141}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={473.3336}
            x2={1256.4794}
            y2={-983.1801}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={488.1676}
            x2={1256.4794}
            y2={-968.3461}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={503.0016}
            x2={1256.4794}
            y2={-953.5121}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={517.8356}
            x2={1256.4794}
            y2={-938.6781}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={532.6696}
            x2={1256.4794}
            y2={-923.8441}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={547.5036}
            x2={1256.4794}
            y2={-909.0101}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={562.3376}
            x2={1256.4794}
            y2={-894.1761}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={577.1716}
            x2={1256.4794}
            y2={-879.3421}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={592.0056}
            x2={1256.4794}
            y2={-864.5081}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={606.8396}
            x2={1256.4794}
            y2={-849.6741}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={621.6736}
            x2={1256.4794}
            y2={-834.8401}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={636.5076}
            x2={1256.4794}
            y2={-820.0061}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={651.3416}
            x2={1256.4794}
            y2={-805.172}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={666.1756}
            x2={1256.4794}
            y2={-790.338}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={681.0096}
            x2={1256.4794}
            y2={-775.504}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={695.8436}
            x2={1256.4794}
            y2={-760.67}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={710.6776}
            x2={1256.4794}
            y2={-745.836}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={725.5116}
            x2={1256.4794}
            y2={-731.002}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={740.3456}
            x2={1256.4794}
            y2={-716.168}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={755.1797}
            x2={1256.4794}
            y2={-701.334}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={770.0137}
            x2={1256.4794}
            y2={-686.5}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={784.8477}
            x2={1256.4794}
            y2={-671.666}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={799.6817}
            x2={1256.4794}
            y2={-656.832}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={814.5157}
            x2={1256.4794}
            y2={-641.998}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={829.3497}
            x2={1256.4794}
            y2={-627.164}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={844.1837}
            x2={1256.4794}
            y2={-612.33}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={859.0177}
            x2={1256.4794}
            y2={-597.496}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={873.8517}
            x2={1256.4794}
            y2={-582.662}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={888.6857}
            x2={1256.4794}
            y2={-567.828}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={903.5197}
            x2={1256.4794}
            y2={-552.994}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={918.3537}
            x2={1256.4794}
            y2={-538.16}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={933.1877}
            x2={1256.4794}
            y2={-523.326}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={948.0217}
            x2={1256.4794}
            y2={-508.492}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={962.8557}
            x2={1256.4794}
            y2={-493.658}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={977.6897}
            x2={1256.4794}
            y2={-478.824}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={992.5237}
            x2={1256.4794}
            y2={-463.99}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1007.3577}
            x2={1256.4794}
            y2={-449.156}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1022.1917}
            x2={1256.4794}
            y2={-434.322}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1037.0257}
            x2={1256.4794}
            y2={-419.488}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1051.8597}
            x2={1256.4794}
            y2={-404.654}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1066.6937}
            x2={1256.4794}
            y2={-389.82}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1081.5277}
            x2={1256.4794}
            y2={-374.986}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1096.3617}
            x2={1256.4794}
            y2={-360.152}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1111.1957}
            x2={1256.4794}
            y2={-345.318}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1126.0297}
            x2={1256.4794}
            y2={-330.4839}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1140.8637}
            x2={1256.4794}
            y2={-315.6499}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1155.6977}
            x2={1256.4794}
            y2={-300.8159}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1170.5317}
            x2={1256.4794}
            y2={-285.9819}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1185.3657}
            x2={1256.4794}
            y2={-271.1479}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1200.1997}
            x2={1256.4794}
            y2={-256.3139}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1215.0337}
            x2={1256.4794}
            y2={-241.4799}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1229.8677}
            x2={1256.4794}
            y2={-226.6459}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1244.7018}
            x2={1256.4794}
            y2={-211.8119}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1259.5358}
            x2={1256.4794}
            y2={-196.9779}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1274.3698}
            x2={1256.4794}
            y2={-182.1439}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1289.2038}
            x2={1256.4794}
            y2={-167.3099}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1304.0378}
            x2={1256.4794}
            y2={-152.4759}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1318.8718}
            x2={1256.4794}
            y2={-137.6419}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1333.7058}
            x2={1256.4794}
            y2={-122.8079}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1348.5398}
            x2={1256.4794}
            y2={-107.9739}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1363.3738}
            x2={1256.4794}
            y2={-93.1399}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1378.2078}
            x2={1256.4794}
            y2={-78.3059}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1393.0418}
            x2={1256.4794}
            y2={-63.4719}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1407.8758}
            x2={1256.4794}
            y2={-48.6379}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1422.7098}
            x2={1256.4794}
            y2={-33.8039}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1437.5438}
            x2={1256.4794}
            y2={-18.9699}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1452.3778}
            x2={1256.4794}
            y2={-4.1359}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1467.2118}
            x2={1256.4794}
            y2={10.6981}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1482.0458}
            x2={1256.4794}
            y2={25.5321}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1496.8798}
            x2={1256.4794}
            y2={40.3661}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1511.7138}
            x2={1256.4794}
            y2={55.2001}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1526.5478}
            x2={1256.4794}
            y2={70.0341}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1541.3818}
            x2={1256.4794}
            y2={84.8681}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1556.2158}
            x2={1256.4794}
            y2={99.7021}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1571.0498}
            x2={1256.4794}
            y2={114.5361}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1585.8838}
            x2={1256.4794}
            y2={129.3701}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1600.7178}
            x2={1256.4794}
            y2={144.2041}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1615.5518}
            x2={1256.4794}
            y2={159.0382}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1630.3858}
            x2={1256.4794}
            y2={173.8722}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1645.2198}
            x2={1256.4794}
            y2={188.7062}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1660.0538}
            x2={1256.4794}
            y2={203.5402}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
          <Line
            x1={-200.0343}
            y1={1674.8878}
            x2={1256.4794}
            y2={218.3742}
            style={{
              fill: '#002b64',
              stroke: '#fff',
              strokeMiterlimit: 10,
              strokeWidth: '1.05122865212236px',
            }}
          />
        </G>
        <Path
          d="M358.5,553.5h-59v-73h59Zm913-670-109,19-11-58-594,104V52h-400V302.5h152V203h49v50H660V203h0V187.5h89.5V72.5l539-95Z"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
      </G>
      <G id="Trappor">
        <Polygon
          points="263.361 306.259 263.361 360.726 263.361 388.357 292 388.357 292 339 292 306.259 263.361 306.259"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2.83464574813843px',
            opacity: 0.5,
          }}
        />
        <Rect
          x={263.3614}
          y={306.2593}
          width={28.6386}
          height={82.0972}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Path
          d="M277.7057,358.7632q-4.4957,0-8.9913-.0024a4.4286,4.4286,0,0,1-.7306-.0559,1.9374,1.9374,0,0,1-1.72-1.85,4.9916,4.9916,0,0,1-.0269-.5132q-.002-8.9791.0007-17.9581a3.8608,3.8608,0,0,1,.0449-.6341,2.0884,2.0884,0,0,1,2.1276-1.8822c.1547-.01.31-.0145.4651-.0145q8.8321-.0011,17.6641.0015a4.7151,4.7151,0,0,1,.7312.0509,2.0038,2.0038,0,0,1,1.8259,1.9516c.0267.2753.0276.5538.0277.8308q.0022,8.8321-.0045,17.6641a3.8723,3.8723,0,0,1-.133,1.0137,1.9028,1.9028,0,0,1-1.8493,1.381c-.1625.013-.3262.0158-.4894.0159Q282.1768,358.7639,277.7057,358.7632Z"
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M281.8769,343.0337H281.57c-.8737,0-1.7475.0066-2.6211-.0047-.2105-.0027-.2808.0469-.2775.2694.0131.89.0058,1.78.0047,2.67,0,.0859-.01.1718-.0161.2827H275.432v3.2716H272.27v3.2492h-3.1927v1.64h4.7855v-3.259h3.2257V347.92H280.29v-3.2383h3.1976V341.46h3.1456v-1.608h-4.7558Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
      <G id="Ytterv\xE4ggar">
        <Polygon
          points="1271.5 -116.5 1162.5 -97.5 1151.5 -155.5 557.5 -51.5 557.5 51.5 157.5 51.5 157.5 553.5 659.5 553.5 659.5 187.5 749.5 187.5 749.5 72.5 1288.5 -22.5 1271.5 -116.5"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '5.66929149627686px',
          }}
        />
      </G>
      <G id="Utst\xE4llare">
        <Polyline
          points="365.625 300.778 393.498 300.778 393.498 342.551 365.625 342.551 365.625 300.778"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="469.448 259.728 469.448 287.601 400 287.601 400 259.728 469.448 259.728"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="525 259.728 525 287.601 469.675 287.601 469.675 259.728 525 259.728"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="487.675 347.601 487.675 319.728 529.448 319.728 529.448 347.601 487.675 347.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="529.675 347.601 529.675 319.728 571.448 319.728 571.448 347.601 529.675 347.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="571.675 347.601 571.675 319.728 613.448 319.728 613.448 347.601 571.675 347.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="432.675 384.601 432.675 356.728 474.448 356.728 474.448 384.601 432.675 384.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="474.675 384.601 474.675 356.728 516.448 356.728 516.448 384.601 474.675 384.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="516.675 384.601 516.675 356.728 558.448 356.728 558.448 384.601 516.675 384.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="445.675 485.601 445.675 457.728 487.448 457.728 487.448 485.601 445.675 485.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="403.675 485.601 403.675 457.728 445.448 457.728 445.448 485.601 403.675 485.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="267.675 475.601 267.675 447.728 309.448 447.728 309.448 475.601 267.675 475.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="487.675 485.601 487.675 457.728 529.448 457.728 529.448 485.601 487.675 485.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="529.675 485.601 529.675 457.728 571.448 457.728 571.448 485.601 529.675 485.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="571.675 485.601 571.675 457.728 613.448 457.728 613.448 485.601 571.675 485.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="410.675 546.601 410.675 518.728 452.448 518.728 452.448 546.601 410.675 546.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="452.675 546.601 452.675 518.728 494.448 518.728 494.448 546.601 452.675 546.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="549.675 546.601 549.675 518.728 591.448 518.728 591.448 546.601 549.675 546.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="494.676 546.601 494.676 518.728 550 518.728 550 546.601 494.676 546.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="365.625 300.778 393.498 300.778 393.498 342.551 365.625 342.551 365.625 300.778"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="469.448 259.728 469.448 287.601 400 287.601 400 259.728 469.448 259.728"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="525 259.728 525 287.601 469.675 287.601 469.675 259.728 525 259.728"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="644 259.728 644 287.601 588.675 287.601 588.675 259.728 644 259.728"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="644 259.728 644 287.601 588.675 287.601 588.675 259.728 644 259.728"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="488 319.728 488 347.601 432.675 347.601 432.675 319.728 488 319.728"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="488 319.728 488 347.601 432.675 347.601 432.675 319.728 488 319.728"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="614 356.728 614 384.601 558.675 384.601 558.675 356.728 614 356.728"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="613.462 356.728 613.462 384.601 558.138 384.601 558.138 356.728 613.462 356.728"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="487.675 347.601 487.675 319.728 529.448 319.728 529.448 347.601 487.675 347.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="529.675 347.601 529.675 319.728 571.448 319.728 571.448 347.601 529.675 347.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="571.675 347.601 571.675 319.728 613.448 319.728 613.448 347.601 571.675 347.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="546.675 287.601 546.675 259.728 588.448 259.728 588.448 287.601 546.675 287.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="546.675 287.601 546.675 259.728 588.448 259.728 588.448 287.601 546.675 287.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="432.675 384.601 432.675 356.728 474.448 356.728 474.448 384.601 432.675 384.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="474.675 384.601 474.675 356.728 516.448 356.728 516.448 384.601 474.675 384.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="516.675 384.601 516.675 356.728 558.448 356.728 558.448 384.601 516.675 384.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="445.675 485.601 445.675 457.728 487.448 457.728 487.448 485.601 445.675 485.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="403.675 485.601 403.675 457.728 445.448 457.728 445.448 485.601 403.675 485.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="267.675 475.601 267.675 447.728 309.448 447.728 309.448 475.601 267.675 475.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="487.675 485.601 487.675 457.728 529.448 457.728 529.448 485.601 487.675 485.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="529.675 485.601 529.675 457.728 571.448 457.728 571.448 485.601 529.675 485.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="571.675 485.601 571.675 457.728 613.448 457.728 613.448 485.601 571.675 485.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="445.675 448.601 445.675 420.728 487.448 420.728 487.448 448.601 445.675 448.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="403.675 448.601 403.675 420.728 445.448 420.728 445.448 448.601 403.675 448.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="487.675 448.601 487.675 420.728 529.448 420.728 529.448 448.601 487.675 448.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="529.675 448.601 529.675 420.728 571.448 420.728 571.448 448.601 529.675 448.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="571.675 448.601 571.675 420.728 613.448 420.728 613.448 448.601 571.675 448.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="445.675 448.601 445.675 420.728 487.448 420.728 487.448 448.601 445.675 448.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="403.675 448.601 403.675 420.728 445.448 420.728 445.448 448.601 403.675 448.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="487.675 448.601 487.675 420.728 529.448 420.728 529.448 448.601 487.675 448.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="529.675 448.601 529.675 420.728 571.448 420.728 571.448 448.601 529.675 448.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="571.675 448.601 571.675 420.728 613.448 420.728 613.448 448.601 571.675 448.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="410.675 546.601 410.675 518.728 452.448 518.728 452.448 546.601 410.675 546.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="452.675 546.601 452.675 518.728 494.448 518.728 494.448 546.601 452.675 546.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="549.675 546.601 549.675 518.728 591.448 518.728 591.448 546.601 549.675 546.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="591.675 546.601 591.675 518.728 633.448 518.728 633.448 546.601 591.675 546.601"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="591.675 546.601 591.675 518.728 633.448 518.728 633.448 546.601 591.675 546.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="494.676 546.601 494.676 518.728 550 518.728 550 546.601 494.676 546.601"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Path
          d="M288.71,473.4452q-4.4957,0-8.9915-.0024a4.4287,4.4287,0,0,1-.7307-.0559,1.9375,1.9375,0,0,1-1.72-1.85,4.9917,4.9917,0,0,1-.0269-.5132q-.002-8.9792.0007-17.9585a3.8609,3.8609,0,0,1,.0449-.6342,2.0884,2.0884,0,0,1,2.1276-1.8822c.1547-.01.31-.0145.4651-.0145q8.8322-.0011,17.6645.0015a4.7152,4.7152,0,0,1,.7312.0509,2.0039,2.0039,0,0,1,1.8259,1.9516c.0267.2753.0276.5538.0277.8308q.0022,8.8322-.0045,17.6645a3.8724,3.8724,0,0,1-.133,1.0138,1.9028,1.9028,0,0,1-1.8494,1.381c-.1625.013-.3263.0158-.4894.0159Q293.181,473.4459,288.71,473.4452Z"
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M286.4259,467.557l-.0176-.5728.9957-.1322a.5328.5328,0,0,0,.304-.1806,1.0763,1.0763,0,0,0,.0837-.5331v-.0969q0-.1057.0132-.3833t.0132-.489q0-.1673-.0264-.6432l.0132-.4406-.0132-.4142.0264-1.4363a3.1281,3.1281,0,0,0-.0533-.5639.7682.7682,0,0,0-.3548-.2291,3.5593,3.5593,0,0,0-.896-.141v-.4934a4.2733,4.2733,0,0,0,1.5949-.3789,3.6817,3.6817,0,0,0,1.0133-.749h.59q.0351,1.0927.0352,2.8373l-.0617,3.5951a5.754,5.754,0,0,0,.0353.67,5.4706,5.4706,0,0,0,.89.1938,1.9186,1.9186,0,0,1,.3789.0881l-.0176.4846q-.2375.0089-.3518.0088-.132,0-.4045-.0176-.8971-.044-2.401-.0441-.4308,0-.8354.0308T286.4259,467.557Zm1.2336-10.5121a1.0473,1.0473,0,0,1,.3084-.78,1.0818,1.0818,0,0,1,.793-.304,1.2146,1.2146,0,0,1,.8635.3216.9751.9751,0,0,1,.3436.7269,1.434,1.434,0,0,1-.1366.5992,1.0806,1.0806,0,0,1-.4318.48,1.1433,1.1433,0,0,1-.6036.1806,1.08,1.08,0,0,1-.78-.3613A1.1857,1.1857,0,0,1,287.66,457.0449Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Circle
          cx={288.6817}
          cy={461.9938}
          r={9.023}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '1.42094275784221px',
          }}
        />
        <Polyline
          points="393.499 398.062 365.625 398.062 365.625 342.738 393.499 342.738 393.499 398.062"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="393.499 398.062 365.625 398.062 365.625 342.738 393.499 342.738 393.499 398.062"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
      </G>
      <G id="Toa">
        <Line
          x1={160}
          y1={480.5}
          x2={299}
          y2={480.5}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeMiterlimit: 10,
            strokeWidth: '2.83464574813843px',
          }}
        />
        <Rect
          x={160}
          y={480.5}
          width={138}
          height={70}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Path
          d="M229.025,526.9555q-4.4957,0-8.9915-.0024a4.4287,4.4287,0,0,1-.7307-.0559,1.9375,1.9375,0,0,1-1.72-1.85,4.9917,4.9917,0,0,1-.0269-.5132q-.002-8.9792.0007-17.9585a3.8609,3.8609,0,0,1,.0449-.6342,2.0884,2.0884,0,0,1,2.1276-1.8822c.1547-.01.31-.0145.4651-.0145q8.8322-.0011,17.6645.0015a4.7151,4.7151,0,0,1,.7312.0509,2.0039,2.0039,0,0,1,1.8259,1.9516c.0267.2753.0276.5538.0277.8308q.0022,8.8322-.0045,17.6645a3.8724,3.8724,0,0,1-.133,1.0138,1.9028,1.9028,0,0,1-1.8494,1.381c-.1625.013-.3263.0158-.4894.0159Q233.4962,526.9562,229.025,526.9555Z"
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M228.1913,510.0522H231.06l-1.8007,10.8957h-3.2657l-.9156-7.3248h-.0305l-.87,7.3248h-3.3267l-1.7854-10.8957h2.96l.7172,7.7216h.0305l.9614-7.7216h2.6858l1.0834,7.7216h.0305Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M235.9128,513.1958q0-.1831-.0076-.412a1.7425,1.7425,0,0,0-.0686-.4349.9068.9068,0,0,0-.1908-.351.4569.4569,0,0,0-.3586-.145.6963.6963,0,0,0-.4654.1373.9559.9559,0,0,0-.2441.5265,6.1723,6.1723,0,0,0-.0992,1.1064q-.0154.7174-.0153,1.877,0,1.19.0229,1.9151a6.436,6.436,0,0,0,.1068,1.1063.8277.8277,0,0,0,.2518.5036.7342.7342,0,0,0,.4425.1221.55.55,0,0,0,.5265-.412,4.4278,4.4278,0,0,0,.16-1.4344v-.8393h2.96v.6867a6.6022,6.6022,0,0,1-.1984,1.7015,3.1745,3.1745,0,0,1-.6409,1.259,2.7613,2.7613,0,0,1-1.1445.7859,4.8268,4.8268,0,0,1-1.7091.2671,5.2182,5.2182,0,0,1-2.2661-.3968,2.4922,2.4922,0,0,1-1.1674-1.1292,4.5439,4.5439,0,0,1-.4273-1.7778q-.0612-1.0451-.0611-2.3577,0-1.2665.0611-2.3119a4.6076,4.6076,0,0,1,.4273-1.7854,2.5618,2.5618,0,0,1,1.1674-1.1521,5.048,5.048,0,0,1,2.2661-.412,5.1664,5.1664,0,0,1,1.938.2976,2.64,2.64,0,0,1,1.0988.7859,2.4493,2.4493,0,0,1,.4883,1.1064,7.3925,7.3925,0,0,1,.1068,1.259v.7935h-2.96Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M334.025,264.7055q-4.4957,0-8.9915-.0024a4.4287,4.4287,0,0,1-.7307-.0559,1.9375,1.9375,0,0,1-1.72-1.85,4.9917,4.9917,0,0,1-.0269-.5132q-.002-8.9792.0007-17.9585a3.8609,3.8609,0,0,1,.0449-.6342,2.0884,2.0884,0,0,1,2.1276-1.8822c.1547-.01.31-.0145.4651-.0145q8.8322-.0011,17.6645.0015a4.7151,4.7151,0,0,1,.7312.0509,2.0039,2.0039,0,0,1,1.8259,1.9516c.0267.2753.0276.5538.0277.8308q.0022,8.8322-.0045,17.6645a3.8724,3.8724,0,0,1-.133,1.0138,1.9028,1.9028,0,0,1-1.8494,1.381c-.1625.013-.3263.0158-.4894.0159Q338.4962,264.7062,334.025,264.7055Z"
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M343.8632,256.0776c-.4327-.1428-.871-.2686-1.3056-.4061q-3.9122-1.2377-7.8246-2.4748c-.1923-.0606-.2957-.14-.2933-.369a.346.346,0,0,1,.2832-.3756,2.304,2.304,0,1,0-3.047-2.1982.4437.4437,0,0,0,.4547.485.4648.4648,0,0,0,.4638-.4449,3.1365,3.1365,0,0,1,.0866-.4366,1.3712,1.3712,0,1,1,1.41,1.79c-.456.0419-.5588.1524-.57.6205-.0049.1983-.0153.3975-.0028.595a.276.276,0,0,1-.23.321c-.4363.1319-.8689.2758-1.3034.4133q-3.94,1.2465-7.8792,2.4936a1.2116,1.2116,0,0,0-.847,1.3645,1.2582,1.2582,0,0,0,1.3553,1.108h18.8906a1.2579,1.2579,0,0,0,1.2258-1.0525A1.2227,1.2227,0,0,0,343.8632,256.0776Zm-.5346,1.3826a.2766.2766,0,0,1-.0473.011H324.8872l.0086.001c-.0442,0-.1112,0-.1618-.0006a.32.32,0,0,1-.148-.0358l-.01-.0051a.1874.1874,0,0,1,.0077-.3344l.0171-.0064q3.7793-1.2077,7.5632-2.401c.5572-.1766,1.1121-.3607,1.671-.5315a.5546.5546,0,0,1,.31-.0074q4.6056,1.4541,9.206,2.9243l.0033.0011A.2007.2007,0,0,1,343.3286,257.46Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M180.58,438.4555q-4.4957,0-8.9915-.0024a4.4287,4.4287,0,0,1-.7307-.0559,1.9375,1.9375,0,0,1-1.72-1.85,4.9917,4.9917,0,0,1-.0269-.5132q-.002-8.9792.0007-17.9585a3.8609,3.8609,0,0,1,.0449-.6342,2.0884,2.0884,0,0,1,2.1276-1.8822c.1547-.01.31-.0145.4651-.0145q8.8322-.0011,17.6645.0015a4.7151,4.7151,0,0,1,.7312.0509,2.0039,2.0039,0,0,1,1.8259,1.9516c.0267.2753.0276.5538.0277.8308q.0022,8.8322-.0045,17.6645a3.8724,3.8724,0,0,1-.133,1.0138,1.9028,1.9028,0,0,1-1.8494,1.381c-.1625.013-.3263.0158-.4894.0159Q185.0512,438.4562,180.58,438.4555Z"
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M183.6681,426.8544v-2.039a.328.328,0,0,0-.328-.328H172.4131a.328.328,0,0,1-.328-.328V422.454a.328.328,0,0,1,.328-.328H183.34a.328.328,0,0,0,.328-.328V419.759a.328.328,0,0,1,.4921-.2841l6.1422,3.5477a.328.328,0,0,1,0,.5681l-6.1422,3.5477A.328.328,0,0,1,183.6681,426.8544Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M177.4419,427.1456v2.039a.328.328,0,0,0,.328.328h10.9269a.328.328,0,0,1,.328.328v1.7055a.328.328,0,0,1-.328.328H177.77a.328.328,0,0,0-.328.328v2.0389a.328.328,0,0,1-.4921.2841l-6.1422-3.5477a.328.328,0,0,1,0-.5681l6.1422-3.5477A.328.328,0,0,1,177.4419,427.1456Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M266.1,323.025q0-4.4957.0024-8.9915a4.4287,4.4287,0,0,1,.0559-.7307,1.9375,1.9375,0,0,1,1.85-1.72,4.9917,4.9917,0,0,1,.5132-.0269q8.9792-.002,17.9585.0007a3.8609,3.8609,0,0,1,.6342.0449,2.0884,2.0884,0,0,1,1.8822,2.1276c.01.1547.0145.31.0145.4651q.0011,8.8322-.0015,17.6645a4.7151,4.7151,0,0,1-.0509.7312,2.0039,2.0039,0,0,1-1.9516,1.8259c-.2753.0267-.5538.0276-.8308.0277q-8.8322.0022-17.6645-.0045a3.8724,3.8724,0,0,1-1.0138-.133,1.9028,1.9028,0,0,1-1.381-1.8494c-.013-.1625-.0158-.3263-.0159-.4894Q266.0988,327.4962,266.1,323.025Z"
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M277.7006,326.1131h2.039a.328.328,0,0,0,.328-.328V314.8581a.328.328,0,0,1,.328-.328h1.7055a.328.328,0,0,1,.328.328V325.785a.328.328,0,0,0,.328.328h2.0389a.328.328,0,0,1,.2841.4921l-3.5477,6.1422a.328.328,0,0,1-.5681,0l-3.5477-6.1422A.328.328,0,0,1,277.7006,326.1131Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M277.4094,319.8869H275.37a.328.328,0,0,0-.328.328v10.9269a.328.328,0,0,1-.328.328H273.009a.328.328,0,0,1-.328-.328V320.215a.328.328,0,0,0-.328-.328H270.314a.328.328,0,0,1-.2841-.4921l3.5477-6.1422a.328.328,0,0,1,.5681,0l3.5477,6.1422A.328.328,0,0,1,277.4094,319.8869Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
      <G id="_179" data-name="179">
      <G id="_179-2" data-name="179">
        <Circle
          cx={380}
          cy={370}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M373.5757,373.6416v-4.9941H371.64v-1.1768a3.6549,3.6549,0,0,0,.7866-.0605,2.0588,2.0588,0,0,0,.6821-.2529,1.6744,1.6744,0,0,0,.5112-.4785,1.7058,1.7058,0,0,0,.2749-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M381.5562,368.582a9.1206,9.1206,0,0,0-.7808,1.6387,11.564,11.564,0,0,0-.4839,1.76,9.5972,9.5972,0,0,0-.1816,1.6611H378.438a10.4846,10.4846,0,0,1,.8086-3.3213,11.7818,11.7818,0,0,1,1.7764-2.9268h-3.6519v-1.4521h5.2578v1.3418A5.4951,5.4951,0,0,0,381.5562,368.582Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M385.2578,372.332a.9057.9057,0,0,0,.6816.2871,1.0122,1.0122,0,0,0,.7041-.248,1.8438,1.8438,0,0,0,.44-.6055,3.0773,3.0773,0,0,0,.2368-.7637,7.1334,7.1334,0,0,0,.0933-.7266l-.022-.0215a1.8781,1.8781,0,0,1-.748.66,2.3558,2.3558,0,0,1-.99.1973,2.3144,2.3144,0,0,1-.9683-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2319,2.2319,0,0,1-.4512-.8037,3.0062,3.0062,0,0,1-.1431-.9131,3.1087,3.1087,0,0,1,.1924-1.1055,2.6322,2.6322,0,0,1,.55-.8906,2.6,2.6,0,0,1,.8525-.6,2.679,2.679,0,0,1,1.1-.2207,2.7315,2.7315,0,0,1,1.4468.3477,2.6672,2.6672,0,0,1,.9072.9121,3.7935,3.7935,0,0,1,.4731,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3455,6.3455,0,0,1-.1646,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.92,2.92,0,0,1-.9351.9355,2.5853,2.5853,0,0,1-1.397.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.2228,2.2228,0,0,1-.7593-.4121,2.1935,2.1935,0,0,1-.5386-.6709,2.6511,2.6511,0,0,1-.2754-.9014h1.4854A1.3175,1.3175,0,0,0,385.2578,372.332Zm1.32-2.5127a1.1119,1.1119,0,0,0,.3848-.3135,1.3821,1.3821,0,0,0,.2314-.457,1.9137,1.9137,0,0,0,.0767-.5449,1.6964,1.6964,0,0,0-.0825-.5215,1.4841,1.4841,0,0,0-.2417-.4629,1.2135,1.2135,0,0,0-.3906-.3242,1.1276,1.1276,0,0,0-.5278-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2076,1.2076,0,0,0-.374.3193,1.3712,1.3712,0,0,0-.231.4512,1.7682,1.7682,0,0,0-.0771.5166,1.998,1.998,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.1057,1.1057,0,0,0,.3682.33,1.0547,1.0547,0,0,0,.5229.126A1.2146,1.2146,0,0,0,386.5776,369.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_180" data-name="180">
      <G id="_180-2" data-name="180">
        <Circle
          cx={380}
          cy={323}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M373.5757,326.6416v-4.9941H371.64v-1.1768a3.6549,3.6549,0,0,0,.7866-.0605,2.0588,2.0588,0,0,0,.6821-.2529,1.6744,1.6744,0,0,0,.5112-.4785,1.7058,1.7058,0,0,0,.2749-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M377.646,319.9756a2.1047,2.1047,0,0,1,.6-.66,2.6775,2.6775,0,0,1,.83-.3955,3.3933,3.3933,0,0,1,.9351-.1328,2.9747,2.9747,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9463,1.9463,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.789,1.789,0,0,1-.2808,1.001,1.55,1.55,0,0,1-.8413.6162v.0215a1.7579,1.7579,0,0,1,1.0669.6543,1.9918,1.9918,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.2476,1.0674,2.2632,2.2632,0,0,1-.6543.748,2.9346,2.9346,0,0,1-.9238.4463,3.861,3.861,0,0,1-1.0562.1484,4.2333,4.2333,0,0,1-1.0835-.1387,2.7987,2.7987,0,0,1-.9351-.4336,2.2368,2.2368,0,0,1-.66-.748,2.21,2.21,0,0,1-.2476-1.0781,1.9645,1.9645,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4285,1.4285,0,0,1-.8472-.583,1.9078,1.9078,0,0,1-.0547-1.9141Zm1.1221,4.873a1.3006,1.3006,0,0,0,.2915.4131,1.2722,1.2722,0,0,0,.4341.2637,1.5092,1.5092,0,0,0,.5283.0938,1.407,1.407,0,0,0,.5225-.0937,1.3144,1.3144,0,0,0,.418-.2637,1.1674,1.1674,0,0,0,.28-.4131,1.3719,1.3719,0,0,0,.0991-.5283,1.1708,1.1708,0,0,0-.1045-.5,1.2037,1.2037,0,0,0-.2861-.3906,1.2814,1.2814,0,0,0-.418-.2529,1.4568,1.4568,0,0,0-.5112-.0889,1.5127,1.5127,0,0,0-.9683.3145,1.09,1.09,0,0,0-.396.9072A1.2805,1.2805,0,0,0,378.7681,324.8486Zm.418-3.0635a1.3568,1.3568,0,0,0,.8247.2578,1.3,1.3,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.4562,1.4562,0,0,0-.0439-.335.9278.9278,0,0,0-.1709-.3467.9833.9833,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3942,1.3942,0,0,0-.4453.0713,1.2025,1.2025,0,0,0-.3794.2041.9092.9092,0,0,0-.2588.33,1.0683,1.0683,0,0,0-.0933.4609A.8763.8763,0,0,0,379.186,321.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M383.5142,320.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.96,2.96,0,0,1,1.0835-.1992,2.9914,2.9914,0,0,1,1.0947.1992,2.2206,2.2206,0,0,1,.9019.6592,3.3431,3.3431,0,0,1,.6162,1.2266,6.7793,6.7793,0,0,1,.2251,1.8867,7.0442,7.0442,0,0,1-.2251,1.9307,3.3433,3.3433,0,0,1-.6162,1.2373,2.2206,2.2206,0,0,1-.9019.6592,2.9914,2.9914,0,0,1-1.0947.1992,2.96,2.96,0,0,1-1.0835-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,383.5142,320.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9317,1.9317,0,0,0,.3682.7432.8867.8867,0,0,0,.7261.3076.9158.9158,0,0,0,.7427-.3076,1.8936,1.8936,0,0,0,.374-.7432,4.2831,4.2831,0,0,0,.1372-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.2969,5.2969,0,0,0-.0439-.5771,5.4372,5.4372,0,0,0-.11-.5889,1.8112,1.8112,0,0,0-.2144-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9447.9447,0,0,0-.5332.1436,1.1346,1.1346,0,0,0-.3521.374,2.0264,2.0264,0,0,0-.2148.5225,4.0335,4.0335,0,0,0-.11.5889c-.022.1973-.0347.3906-.0386.5771s-.0054.3467-.0054.4785Q384.8506,323.0884,384.8726,323.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_181" data-name="181">
      <G id="_181-2" data-name="181">
        <Circle
          cx={434}
          cy={274}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M427.5762,277.6416v-4.9941H425.64v-1.1768a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M431.6465,270.9756a2.0989,2.0989,0,0,1,.6-.66,2.6842,2.6842,0,0,1,.83-.396,3.3861,3.3861,0,0,1,.9346-.1318,2.9652,2.9652,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9277,1.9277,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.79,1.79,0,0,1-.28,1.001,1.5508,1.5508,0,0,1-.8418.6162v.022a1.7539,1.7539,0,0,1,1.0674.6543,1.9939,1.9939,0,0,1,.374,1.2266,2.1819,2.1819,0,0,1-.248,1.0669,2.2529,2.2529,0,0,1-.6543.748,2.9181,2.9181,0,0,1-.9238.4458,3.8179,3.8179,0,0,1-1.0557.1484,4.2394,4.2394,0,0,1-1.084-.1377,2.7841,2.7841,0,0,1-.9346-.4346,2.1374,2.1374,0,0,1-.9082-1.8257,1.9651,1.9651,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2918,1.2918,0,0,0,.291.4126,1.2593,1.2593,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.3029,1.3029,0,0,0,.418-.2637,1.1675,1.1675,0,0,0,.28-.4126,1.3728,1.3728,0,0,0,.0986-.5278,1.1658,1.1658,0,0,0-.1045-.5,1.2018,1.2018,0,0,0-.2861-.3906,1.2631,1.2631,0,0,0-.418-.2529,1.4539,1.4539,0,0,0-.5107-.0884,1.511,1.511,0,0,0-.9687.314,1.0888,1.0888,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,432.7686,275.8486Zm.418-3.0635a1.3525,1.3525,0,0,0,.8242.2583,1.2966,1.2966,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4305,1.4305,0,0,0-.0439-.3354.9168.9168,0,0,0-.1709-.3467.9625.9625,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3986,1.3986,0,0,0-.4453.0713,1.2088,1.2088,0,0,0-.3789.2036.9133.9133,0,0,0-.2588.33,1.0671,1.0671,0,0,0-.0937.4619A.8751.8751,0,0,0,433.1865,272.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M439.8076,277.6416v-4.9941h-1.9355v-1.1768a3.6816,3.6816,0,0,0,.7861-.0605,2.0615,2.0615,0,0,0,.6826-.2529,1.6731,1.6731,0,0,0,.5107-.4785,1.6976,1.6976,0,0,0,.2754-.7373H441.37v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_182" data-name="182">
      <G id="_182-2" data-name="182">
        <Circle
          cx={497}
          cy={274}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M490.5762,277.6416v-4.9941H488.64v-1.1768a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M494.6465,270.9756a2.0989,2.0989,0,0,1,.6-.66,2.6842,2.6842,0,0,1,.83-.396,3.3861,3.3861,0,0,1,.9346-.1318,2.9652,2.9652,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9277,1.9277,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.79,1.79,0,0,1-.28,1.001,1.5508,1.5508,0,0,1-.8418.6162v.022a1.7539,1.7539,0,0,1,1.0674.6543,1.9939,1.9939,0,0,1,.374,1.2266,2.1819,2.1819,0,0,1-.248,1.0669,2.2529,2.2529,0,0,1-.6543.748,2.9181,2.9181,0,0,1-.9238.4458,3.8179,3.8179,0,0,1-1.0557.1484,4.2394,4.2394,0,0,1-1.084-.1377,2.7841,2.7841,0,0,1-.9346-.4346,2.1374,2.1374,0,0,1-.9082-1.8257,1.9651,1.9651,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2918,1.2918,0,0,0,.291.4126,1.2593,1.2593,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.3029,1.3029,0,0,0,.418-.2637,1.1675,1.1675,0,0,0,.28-.4126,1.3728,1.3728,0,0,0,.0986-.5278,1.1658,1.1658,0,0,0-.1045-.5,1.2018,1.2018,0,0,0-.2861-.3906,1.2631,1.2631,0,0,0-.418-.2529,1.4539,1.4539,0,0,0-.5107-.0884,1.511,1.511,0,0,0-.9687.314,1.0888,1.0888,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,495.7686,275.8486Zm.418-3.0635a1.3525,1.3525,0,0,0,.8242.2583,1.2966,1.2966,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4305,1.4305,0,0,0-.0439-.3354.9168.9168,0,0,0-.1709-.3467.9625.9625,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3986,1.3986,0,0,0-.4453.0713,1.2088,1.2088,0,0,0-.3789.2036.9133.9133,0,0,0-.2588.33,1.0671,1.0671,0,0,0-.0937.4619A.8751.8751,0,0,0,496.1865,272.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M500.6191,271.6743a2.8536,2.8536,0,0,1,.5273-.99,2.402,2.402,0,0,1,.8857-.66,3.0069,3.0069,0,0,1,1.2266-.2363,3.07,3.07,0,0,1,1.0068.165,2.5814,2.5814,0,0,1,.8408.4731,2.2481,2.2481,0,0,1,.5781.7588,2.334,2.334,0,0,1,.2139,1.0122,2.434,2.434,0,0,1-.1865,1.001,2.6312,2.6312,0,0,1-.4951.7422,4.234,4.234,0,0,1-.6982.5889q-.3911.2637-.7871.5225t-.77.5552a3.4925,3.4925,0,0,0-.66.6934h3.6406v1.3418h-5.6533a3.199,3.199,0,0,1,.1924-1.166,3.0961,3.0961,0,0,1,.5225-.8853,4.5772,4.5772,0,0,1,.7754-.7207q.4453-.33.94-.6709.2534-.1758.5391-.3574a3.56,3.56,0,0,0,.5225-.4019,2.1283,2.1283,0,0,0,.3965-.4946,1.2369,1.2369,0,0,0,.1592-.6274,1.1616,1.1616,0,0,0-.3242-.8745,1.1472,1.1472,0,0,0-.8311-.3135,1.0093,1.0093,0,0,0-.5771.16,1.1908,1.1908,0,0,0-.38.418,1.9382,1.9382,0,0,0-.2031.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4961A3.6956,3.6956,0,0,1,500.6191,271.6743Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_183" data-name="183">
      <G id="_183-2" data-name="183">
        <Circle
          cx={460}
          cy={334}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M453.5762,337.6416v-4.9941H451.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M457.6465,330.9756a2.0989,2.0989,0,0,1,.6-.66,2.6723,2.6723,0,0,1,.83-.3955,3.3873,3.3873,0,0,1,.9346-.1328,2.973,2.973,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9322,1.9322,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7926,1.7926,0,0,1-.28,1.001,1.5531,1.5531,0,0,1-.8418.6162v.0215a1.76,1.76,0,0,1,1.0674.6543,1.9949,1.9949,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.248,1.0674,2.2577,2.2577,0,0,1-.6543.748,2.93,2.93,0,0,1-.9238.4463,3.8549,3.8549,0,0,1-1.0557.1484,4.24,4.24,0,0,1-1.084-.1387,2.7918,2.7918,0,0,1-.9346-.4336,2.1391,2.1391,0,0,1-.9082-1.8262,1.9675,1.9675,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2994,1.2994,0,0,0,.291.4131,1.2744,1.2744,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.32,1.32,0,0,0,.418-.2637,1.1738,1.1738,0,0,0,.28-.4131,1.3718,1.3718,0,0,0,.0986-.5283,1.1635,1.1635,0,0,0-.1045-.5,1.1966,1.1966,0,0,0-.2861-.3906,1.2713,1.2713,0,0,0-.418-.2529,1.4541,1.4541,0,0,0-.5107-.0889,1.5141,1.5141,0,0,0-.9687.3145,1.0894,1.0894,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,458.7686,335.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8242.2578,1.2992,1.2992,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.43,1.43,0,0,0-.0439-.335.9133.9133,0,0,0-.1709-.3467.9791.9791,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3986,1.3986,0,0,0-.4453.0713,1.2,1.2,0,0,0-.3789.2041.9092.9092,0,0,0-.2588.33,1.0612,1.0612,0,0,0-.0937.4609A.8754.8754,0,0,0,459.1865,332.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M466.1045,333.0547a1.6786,1.6786,0,0,0,.5342-.127,1.0053,1.0053,0,0,0,.4063-.3027.8129.8129,0,0,0,.16-.5273.9184.9184,0,0,0-.33-.76,1.18,1.18,0,0,0-.7588-.2637,1.0645,1.0645,0,0,0-.8965.3906,1.5135,1.5135,0,0,0-.292.9844h-1.4854a3.2813,3.2813,0,0,1,.2148-1.083,2.486,2.486,0,0,1,.5391-.8418,2.3857,2.3857,0,0,1,.8311-.5439,2.8782,2.8782,0,0,1,1.0771-.1934,3.2276,3.2276,0,0,1,.9248.1387,2.6328,2.6328,0,0,1,.83.4121,2.24,2.24,0,0,1,.6.6709,1.7746,1.7746,0,0,1,.23.9131,1.8272,1.8272,0,0,1-.27.99,1.35,1.35,0,0,1-.8076.582v.0225a1.6757,1.6757,0,0,1,1.001.6162,1.8094,1.8094,0,0,1,.3623,1.1328,2.3848,2.3848,0,0,1-.2363,1.0781,2.3433,2.3433,0,0,1-.6328.792,2.7961,2.7961,0,0,1-.9121.4834,3.7053,3.7053,0,0,1-2.2607-.0215,2.4888,2.4888,0,0,1-.9082-.5449,2.415,2.415,0,0,1-.5771-.874,3.0787,3.0787,0,0,1-.1924-1.1885h1.4854a2.2058,2.2058,0,0,0,.0986.5889,1.4322,1.4322,0,0,0,.2529.4834,1.2078,1.2078,0,0,0,.4121.3252,1.323,1.323,0,0,0,.5889.1211,1.2838,1.2838,0,0,0,.8906-.3252,1.3181,1.3181,0,0,0,.1934-1.5566.9837.9837,0,0,0-.4346-.335,1.8293,1.8293,0,0,0-.5781-.1211c-.209-.0107-.4082-.0166-.6-.0166v-1.1A3.3088,3.3088,0,0,0,466.1045,333.0547Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_184" data-name="184">
      <G id="_184-2" data-name="184">
        <Circle
          cx={509}
          cy={334}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M502.5762,337.6416v-4.9941H500.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M506.6465,330.9756a2.0989,2.0989,0,0,1,.6-.66,2.6723,2.6723,0,0,1,.83-.3955,3.3873,3.3873,0,0,1,.9346-.1328,2.973,2.973,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9322,1.9322,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7926,1.7926,0,0,1-.28,1.001,1.5531,1.5531,0,0,1-.8418.6162v.0215a1.76,1.76,0,0,1,1.0674.6543,1.9949,1.9949,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.248,1.0674,2.2577,2.2577,0,0,1-.6543.748,2.93,2.93,0,0,1-.9238.4463,3.8549,3.8549,0,0,1-1.0557.1484,4.24,4.24,0,0,1-1.084-.1387,2.7918,2.7918,0,0,1-.9346-.4336,2.1391,2.1391,0,0,1-.9082-1.8262,1.9675,1.9675,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2994,1.2994,0,0,0,.291.4131,1.2744,1.2744,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.32,1.32,0,0,0,.418-.2637,1.1738,1.1738,0,0,0,.28-.4131,1.3718,1.3718,0,0,0,.0986-.5283,1.1635,1.1635,0,0,0-.1045-.5,1.1966,1.1966,0,0,0-.2861-.3906,1.2713,1.2713,0,0,0-.418-.2529,1.4541,1.4541,0,0,0-.5107-.0889,1.5141,1.5141,0,0,0-.9687.3145,1.0894,1.0894,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,507.7686,335.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8242.2578,1.2992,1.2992,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.43,1.43,0,0,0-.0439-.335.9133.9133,0,0,0-.1709-.3467.9791.9791,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3986,1.3986,0,0,0-.4453.0713,1.2,1.2,0,0,0-.3789.2041.9092.9092,0,0,0-.2588.33,1.0612,1.0612,0,0,0-.0937.4609A.8754.8754,0,0,0,508.1865,332.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M512.2334,335.8594v-1.43l3.3447-4.4883h1.3965v4.6309h1.0234v1.2871h-1.0234v1.7822H515.49v-1.7822Zm3.2236-3.96-1.9912,2.6729H515.49v-2.6729Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_185" data-name="185">
      <G id="_185-2" data-name="185">
        <Circle
          cx={551}
          cy={334}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M544.5762,337.6416v-4.9941H542.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M548.6465,330.9756a2.0989,2.0989,0,0,1,.6-.66,2.6723,2.6723,0,0,1,.83-.3955,3.3873,3.3873,0,0,1,.9346-.1328,2.973,2.973,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9322,1.9322,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7926,1.7926,0,0,1-.28,1.001,1.5531,1.5531,0,0,1-.8418.6162v.0215a1.76,1.76,0,0,1,1.0674.6543,1.9949,1.9949,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.248,1.0674,2.2577,2.2577,0,0,1-.6543.748,2.93,2.93,0,0,1-.9238.4463,3.8549,3.8549,0,0,1-1.0557.1484,4.24,4.24,0,0,1-1.084-.1387,2.7918,2.7918,0,0,1-.9346-.4336,2.1391,2.1391,0,0,1-.9082-1.8262,1.9675,1.9675,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2994,1.2994,0,0,0,.291.4131,1.2744,1.2744,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.32,1.32,0,0,0,.418-.2637,1.1738,1.1738,0,0,0,.28-.4131,1.3718,1.3718,0,0,0,.0986-.5283,1.1635,1.1635,0,0,0-.1045-.5,1.1966,1.1966,0,0,0-.2861-.3906,1.2713,1.2713,0,0,0-.418-.2529,1.4541,1.4541,0,0,0-.5107-.0889,1.5141,1.5141,0,0,0-.9687.3145,1.0894,1.0894,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,549.7686,335.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8242.2578,1.2992,1.2992,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.43,1.43,0,0,0-.0439-.335.9133.9133,0,0,0-.1709-.3467.9791.9791,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3986,1.3986,0,0,0-.4453.0713,1.2,1.2,0,0,0-.3789.2041.9092.9092,0,0,0-.2588.33,1.0612,1.0612,0,0,0-.0937.4609A.8754.8754,0,0,0,550.1865,332.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M556.3789,331.2285l-.3076,1.749.0215.0225a1.9483,1.9483,0,0,1,.6816-.457,2.5584,2.5584,0,0,1,1.8379.0723,2.2237,2.2237,0,0,1,.7422.5605,2.4555,2.4555,0,0,1,.4619.83,3.1954,3.1954,0,0,1,.1592,1.0176,2.6624,2.6624,0,0,1-.23,1.1055,2.8068,2.8068,0,0,1-.6221.8857,2.74,2.74,0,0,1-.9072.5771,2.8342,2.8342,0,0,1-1.1.1934,3.8868,3.8868,0,0,1-1.0732-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2955,2.2955,0,0,1-.6328-.7646,2.37,2.37,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3965.8418,1.2339,1.2339,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.353,1.353,0,0,0,.418-.33,1.5125,1.5125,0,0,0,.2637-.4736,1.6768,1.6768,0,0,0,.0938-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3415,1.3415,0,0,0-.2646-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3414,1.3414,0,0,0-.5605-.11,1.4,1.4,0,0,0-.6826.1484,1.5948,1.5948,0,0,0-.4941.4688H554.498l.7588-4.2578h4.3008v1.2871Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_186" data-name="186">
      <G id="_186-2" data-name="186">
        <Circle
          cx={593}
          cy={334}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M586.5762,337.6416v-4.9941H584.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M590.6465,330.9756a2.0989,2.0989,0,0,1,.6-.66,2.6723,2.6723,0,0,1,.83-.3955,3.3873,3.3873,0,0,1,.9346-.1328,2.973,2.973,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9322,1.9322,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7926,1.7926,0,0,1-.28,1.001,1.5531,1.5531,0,0,1-.8418.6162v.0215a1.76,1.76,0,0,1,1.0674.6543,1.9949,1.9949,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.248,1.0674,2.2577,2.2577,0,0,1-.6543.748,2.93,2.93,0,0,1-.9238.4463,3.8549,3.8549,0,0,1-1.0557.1484,4.24,4.24,0,0,1-1.084-.1387,2.7918,2.7918,0,0,1-.9346-.4336,2.1391,2.1391,0,0,1-.9082-1.8262,1.9675,1.9675,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2994,1.2994,0,0,0,.291.4131,1.2744,1.2744,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.32,1.32,0,0,0,.418-.2637,1.1738,1.1738,0,0,0,.28-.4131,1.3718,1.3718,0,0,0,.0986-.5283,1.1635,1.1635,0,0,0-.1045-.5,1.1966,1.1966,0,0,0-.2861-.3906,1.2713,1.2713,0,0,0-.418-.2529,1.4541,1.4541,0,0,0-.5107-.0889,1.5141,1.5141,0,0,0-.9687.3145,1.0894,1.0894,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,591.7686,335.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8242.2578,1.2992,1.2992,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.43,1.43,0,0,0-.0439-.335.9133.9133,0,0,0-.1709-.3467.9791.9791,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3986,1.3986,0,0,0-.4453.0713,1.2,1.2,0,0,0-.3789.2041.9092.9092,0,0,0-.2588.33,1.0612,1.0612,0,0,0-.0937.4609A.8754.8754,0,0,0,592.1865,332.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M599.9736,331.25a.9111.9111,0,0,0-.6816-.2852,1.0143,1.0143,0,0,0-.6982.2471,1.812,1.812,0,0,0-.4463.6045,3.2875,3.2875,0,0,0-.2412.7656,4.882,4.882,0,0,0-.0889.7256l.0225.0225a1.8633,1.8633,0,0,1,.748-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4241,2.4241,0,0,1,.8027.5781,2.2341,2.2341,0,0,1,.4512.8027,2.9953,2.9953,0,0,1,.1426.9131,3.1017,3.1017,0,0,1-.1924,1.1055,2.6468,2.6468,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0544,3.0544,0,0,1-2.541-.1328,2.6762,2.6762,0,0,1-.9131-.9062,3.7479,3.7479,0,0,1-.4727-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3183,6.3183,0,0,1,.165-1.43,4.169,4.169,0,0,1,.5273-1.292,2.97,2.97,0,0,1,.9355-.9414,2.5514,2.5514,0,0,1,1.3965-.3633,2.9268,2.9268,0,0,1,.9248.1436,2.3687,2.3687,0,0,1,.7588.4131,2.1326,2.1326,0,0,1,.5391.665,2.6742,2.6742,0,0,1,.2744.9131h-1.4844A1.3318,1.3318,0,0,0,599.9736,331.25Zm-1.3145,2.5137a1.1044,1.1044,0,0,0-.3906.3145,1.3479,1.3479,0,0,0-.23.4561,1.8876,1.8876,0,0,0-.0771.5439,1.7276,1.7276,0,0,0,.082.5234,1.464,1.464,0,0,0,.2422.4609,1.187,1.187,0,0,0,.3906.3252,1.1179,1.1179,0,0,0,.5283.1211.9952.9952,0,0,0,.5-.1211,1.2276,1.2276,0,0,0,.3691-.3193,1.3607,1.3607,0,0,0,.23-.4512,1.7472,1.7472,0,0,0,.0771-.5166,1.996,1.996,0,0,0-.0713-.5342,1.47,1.47,0,0,0-.2148-.4609,1.1,1.1,0,0,0-.3682-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2386,1.2386,0,0,0,598.6592,333.7637Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_187" data-name="187">
      <G id="_187-2" data-name="187">
        <Circle
          cx={568}
          cy={274}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M561.5762,277.6416v-4.9941H559.64v-1.1768a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M565.6465,270.9756a2.0989,2.0989,0,0,1,.6-.66,2.6842,2.6842,0,0,1,.83-.396,3.3861,3.3861,0,0,1,.9346-.1318,2.9652,2.9652,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9277,1.9277,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.79,1.79,0,0,1-.28,1.001,1.5508,1.5508,0,0,1-.8418.6162v.022a1.7539,1.7539,0,0,1,1.0674.6543,1.9939,1.9939,0,0,1,.374,1.2266,2.1819,2.1819,0,0,1-.248,1.0669,2.2529,2.2529,0,0,1-.6543.748,2.9181,2.9181,0,0,1-.9238.4458,3.8179,3.8179,0,0,1-1.0557.1484,4.2394,4.2394,0,0,1-1.084-.1377,2.7841,2.7841,0,0,1-.9346-.4346,2.1374,2.1374,0,0,1-.9082-1.8257,1.9651,1.9651,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2918,1.2918,0,0,0,.291.4126,1.2593,1.2593,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.3029,1.3029,0,0,0,.418-.2637,1.1675,1.1675,0,0,0,.28-.4126,1.3728,1.3728,0,0,0,.0986-.5278,1.1658,1.1658,0,0,0-.1045-.5,1.2018,1.2018,0,0,0-.2861-.3906,1.2631,1.2631,0,0,0-.418-.2529,1.4539,1.4539,0,0,0-.5107-.0884,1.511,1.511,0,0,0-.9687.314,1.0888,1.0888,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,566.7686,275.8486Zm.418-3.0635a1.3525,1.3525,0,0,0,.8242.2583,1.2966,1.2966,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4305,1.4305,0,0,0-.0439-.3354.9168.9168,0,0,0-.1709-.3467.9625.9625,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3986,1.3986,0,0,0-.4453.0713,1.2088,1.2088,0,0,0-.3789.2036.9133.9133,0,0,0-.2588.33,1.0671,1.0671,0,0,0-.0937.4619A.8751.8751,0,0,0,567.1865,272.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M575.6719,272.5815a9.1233,9.1233,0,0,0-.78,1.6392,11.566,11.566,0,0,0-.4844,1.76,9.6938,9.6938,0,0,0-.1816,1.6611h-1.6719a10.4907,10.4907,0,0,1,.8086-3.3218,11.8024,11.8024,0,0,1,1.7764-2.9263h-3.6514v-1.4521h5.2578v1.3423A5.5028,5.5028,0,0,0,575.6719,272.5815Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_188" data-name="188">
      <G id="_188-2" data-name="188">
        <Circle
          cx={616}
          cy={274}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M609.5762,277.6416v-4.9941H607.64v-1.1768a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M613.6465,270.9756a2.0989,2.0989,0,0,1,.6-.66,2.6842,2.6842,0,0,1,.83-.396,3.3861,3.3861,0,0,1,.9346-.1318,2.9652,2.9652,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9277,1.9277,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.79,1.79,0,0,1-.28,1.001,1.5508,1.5508,0,0,1-.8418.6162v.022a1.7539,1.7539,0,0,1,1.0674.6543,1.9939,1.9939,0,0,1,.374,1.2266,2.1819,2.1819,0,0,1-.248,1.0669,2.2529,2.2529,0,0,1-.6543.748,2.9181,2.9181,0,0,1-.9238.4458,3.8179,3.8179,0,0,1-1.0557.1484,4.2394,4.2394,0,0,1-1.084-.1377,2.7841,2.7841,0,0,1-.9346-.4346,2.1374,2.1374,0,0,1-.9082-1.8257,1.9651,1.9651,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2918,1.2918,0,0,0,.291.4126,1.2593,1.2593,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.3029,1.3029,0,0,0,.418-.2637,1.1675,1.1675,0,0,0,.28-.4126,1.3728,1.3728,0,0,0,.0986-.5278,1.1658,1.1658,0,0,0-.1045-.5,1.2018,1.2018,0,0,0-.2861-.3906,1.2631,1.2631,0,0,0-.418-.2529,1.4539,1.4539,0,0,0-.5107-.0884,1.511,1.511,0,0,0-.9687.314,1.0888,1.0888,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,614.7686,275.8486Zm.418-3.0635a1.3525,1.3525,0,0,0,.8242.2583,1.2966,1.2966,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4305,1.4305,0,0,0-.0439-.3354.9168.9168,0,0,0-.1709-.3467.9625.9625,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3986,1.3986,0,0,0-.4453.0713,1.2088,1.2088,0,0,0-.3789.2036.9133.9133,0,0,0-.2588.33,1.0671,1.0671,0,0,0-.0937.4619A.8751.8751,0,0,0,615.1865,272.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M619.7617,270.9756a2.1106,2.1106,0,0,1,.6-.66,2.6948,2.6948,0,0,1,.83-.396,3.3982,3.3982,0,0,1,.9355-.1318,2.9685,2.9685,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.956,1.956,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.7831,1.7831,0,0,1-.2812,1.001,1.5448,1.5448,0,0,1-.8408.6162v.022a1.7487,1.7487,0,0,1,1.0664.6543,1.9877,1.9877,0,0,1,.374,1.2266,2.1817,2.1817,0,0,1-.2471,1.0669,2.2639,2.2639,0,0,1-.6543.748,2.9282,2.9282,0,0,1-.9238.4458,3.83,3.83,0,0,1-1.0566.1484,4.2263,4.2263,0,0,1-1.083-.1377,2.7979,2.7979,0,0,1-.9355-.4346,2.2358,2.2358,0,0,1-.66-.7476,2.21,2.21,0,0,1-.2471-1.0781,1.9592,1.9592,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4312,1.4312,0,0,1-.8477-.583,1.911,1.911,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2943,1.2943,0,0,0,.292.4126,1.255,1.255,0,0,0,.4336.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4052,1.4052,0,0,0,.5225-.0937,1.2924,1.2924,0,0,0,.418-.2637,1.1548,1.1548,0,0,0,.28-.4126,1.3731,1.3731,0,0,0,.1-.5278,1.18,1.18,0,0,0-.1045-.5,1.2161,1.2161,0,0,0-.2861-.3906,1.2832,1.2832,0,0,0-.418-.2529,1.4594,1.4594,0,0,0-.5117-.0884,1.5082,1.5082,0,0,0-.9678.314,1.09,1.09,0,0,0-.3965.9072A1.2881,1.2881,0,0,0,620.8838,275.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8252.2583,1.2985,1.2985,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.484,1.484,0,0,0-.0439-.3354.9464.9464,0,0,0-.1709-.3467.9708.9708,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.39,1.39,0,0,0-.4453.0713,1.2139,1.2139,0,0,0-.38.2036.9133.9133,0,0,0-.2588.33,1.0816,1.0816,0,0,0-.0928.4619A.8768.8768,0,0,0,621.3018,272.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_189" data-name="189">
      <G id="_189-2" data-name="189">
        <Circle
          cx={586}
          cy={371}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M579.5762,374.6416v-4.9941H577.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M583.6465,367.9756a2.0989,2.0989,0,0,1,.6-.66,2.6723,2.6723,0,0,1,.83-.3955,3.3873,3.3873,0,0,1,.9346-.1328,2.973,2.973,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9322,1.9322,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7926,1.7926,0,0,1-.28,1.001,1.5531,1.5531,0,0,1-.8418.6162v.0215a1.76,1.76,0,0,1,1.0674.6543,1.9949,1.9949,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.248,1.0674,2.2577,2.2577,0,0,1-.6543.748,2.93,2.93,0,0,1-.9238.4463,3.8549,3.8549,0,0,1-1.0557.1484,4.24,4.24,0,0,1-1.084-.1387,2.7918,2.7918,0,0,1-.9346-.4336,2.1391,2.1391,0,0,1-.9082-1.8262,1.9675,1.9675,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2994,1.2994,0,0,0,.291.4131,1.2744,1.2744,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.32,1.32,0,0,0,.418-.2637,1.1738,1.1738,0,0,0,.28-.4131,1.3718,1.3718,0,0,0,.0986-.5283,1.1635,1.1635,0,0,0-.1045-.5,1.1966,1.1966,0,0,0-.2861-.3906,1.2713,1.2713,0,0,0-.418-.2529,1.4541,1.4541,0,0,0-.5107-.0889,1.5141,1.5141,0,0,0-.9687.3145,1.0894,1.0894,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,584.7686,372.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8242.2578,1.2992,1.2992,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.43,1.43,0,0,0-.0439-.335.9133.9133,0,0,0-.1709-.3467.9791.9791,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3986,1.3986,0,0,0-.4453.0713,1.2,1.2,0,0,0-.3789.2041.9092.9092,0,0,0-.2588.33,1.0612,1.0612,0,0,0-.0937.4609A.8754.8754,0,0,0,585.1865,369.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M591.2578,373.332a.9072.9072,0,0,0,.6816.2871,1.0114,1.0114,0,0,0,.7041-.248,1.845,1.845,0,0,0,.44-.6055,3.0766,3.0766,0,0,0,.2363-.7637,7.01,7.01,0,0,0,.0938-.7266l-.0225-.0215a1.8781,1.8781,0,0,1-.748.66,2.3535,2.3535,0,0,1-.9893.1973,2.3166,2.3166,0,0,1-.9687-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2465,2.2465,0,0,1-.4512-.8037,3.0208,3.0208,0,0,1-.1426-.9131,3.0979,3.0979,0,0,1,.1924-1.1055,2.598,2.598,0,0,1,1.4023-1.49,2.6806,2.6806,0,0,1,1.1-.2207,2.7333,2.7333,0,0,1,1.4473.3477,2.6758,2.6758,0,0,1,.9072.9121,3.7929,3.7929,0,0,1,.4727,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3729,6.3729,0,0,1-.1641,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9219,2.9219,0,0,1-.9355.9355,2.5836,2.5836,0,0,1-1.3965.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.23,2.23,0,0,1-.76-.4121,2.1849,2.1849,0,0,1-.5381-.6709,2.64,2.64,0,0,1-.2754-.9014h1.4854A1.313,1.313,0,0,0,591.2578,373.332Zm1.32-2.5127a1.1164,1.1164,0,0,0,.3848-.3135,1.3914,1.3914,0,0,0,.2314-.457,1.9136,1.9136,0,0,0,.0762-.5449,1.7105,1.7105,0,0,0-.082-.5215,1.4751,1.4751,0,0,0-.2422-.4629,1.2084,1.2084,0,0,0-.3906-.3242,1.1256,1.1256,0,0,0-.5273-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.202,1.202,0,0,0-.374.3193,1.3722,1.3722,0,0,0-.2314.4512,1.7847,1.7847,0,0,0-.0771.5166,2.0179,2.0179,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.11,1.11,0,0,0,.3682.33,1.0566,1.0566,0,0,0,.5234.126A1.2175,1.2175,0,0,0,592.5781,370.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_190" data-name="190">
      <G id="_190-2" data-name="190">
        <Circle
          cx={538}
          cy={371}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M531.5762,374.6416v-4.9941H529.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M537.1426,373.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H536.79A1.3219,1.3219,0,0,0,537.1426,373.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,538.4619,370.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M541.5146,368.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9574,2.9574,0,0,1,1.083-.1992,2.99,2.99,0,0,1,1.0947.1992,2.2253,2.2253,0,0,1,.9023.6592,3.3507,3.3507,0,0,1,.6162,1.2266,6.7994,6.7994,0,0,1,.2246,1.8867,7.0651,7.0651,0,0,1-.2246,1.9307,3.3507,3.3507,0,0,1-.6162,1.2373,2.2253,2.2253,0,0,1-.9023.6592,2.99,2.99,0,0,1-1.0947.1992,2.9574,2.9574,0,0,1-1.083-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,541.5146,368.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9181,1.9181,0,0,0,.3682.7432.8857.8857,0,0,0,.7256.3076.9168.9168,0,0,0,.7432-.3076,1.9,1.9,0,0,0,.374-.7432,4.2828,4.2828,0,0,0,.1367-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.1776,5.1776,0,0,0-.0439-.5771,5.4357,5.4357,0,0,0-.1094-.5889,1.7984,1.7984,0,0,0-.2148-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9458.9458,0,0,0-.5332.1436,1.1333,1.1333,0,0,0-.3516.374,2.0093,2.0093,0,0,0-.2148.5225,4.0348,4.0348,0,0,0-.11.5889c-.0215.1973-.0342.3906-.0381.5771s-.0059.3467-.0059.4785Q542.8506,371.0884,542.873,371.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_191" data-name="191">
      <G id="_191-2" data-name="191">
        <Circle
          cx={496}
          cy={371}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M489.5762,374.6416v-4.9941H487.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M495.1426,373.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H494.79A1.3219,1.3219,0,0,0,495.1426,373.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,496.4619,370.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M501.8076,374.6416v-4.9941h-1.9355v-1.1768a3.65,3.65,0,0,0,.7861-.0605,2.0615,2.0615,0,0,0,.6826-.2529,1.6672,1.6672,0,0,0,.5107-.4785,1.7,1.7,0,0,0,.2754-.7373H503.37v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_192" data-name="192">
      <G id="_192-2" data-name="192">
        <Circle
          cx={454}
          cy={371}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M447.5762,374.6416v-4.9941H445.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M453.1426,373.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H452.79A1.3219,1.3219,0,0,0,453.1426,373.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,454.4619,370.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M457.6191,368.6738a2.8711,2.8711,0,0,1,.5273-.99,2.4181,2.4181,0,0,1,.8857-.66,3.0232,3.0232,0,0,1,1.2266-.2363,3.0582,3.0582,0,0,1,1.0068.166,2.58,2.58,0,0,1,.8408.4727,2.2481,2.2481,0,0,1,.5781.7588,2.3331,2.3331,0,0,1,.2139,1.0127,2.4276,2.4276,0,0,1-.1865,1,2.6105,2.6105,0,0,1-.4951.7422,4.239,4.239,0,0,1-.6982.59q-.3911.2637-.7871.5215t-.77.5557a3.4793,3.4793,0,0,0-.66.6934h3.6406v1.3418h-5.6533a3.199,3.199,0,0,1,.1924-1.166,3.1053,3.1053,0,0,1,.5225-.8857,4.6172,4.6172,0,0,1,.7754-.7207q.4453-.33.94-.67c.1689-.1172.3486-.2373.5391-.3574a3.5971,3.5971,0,0,0,.5225-.4023,2.136,2.136,0,0,0,.3965-.4941,1.2375,1.2375,0,0,0,.1592-.6279,1.16,1.16,0,0,0-.3242-.874,1.1479,1.1479,0,0,0-.8311-.3145,1.0132,1.0132,0,0,0-.5771.16,1.195,1.195,0,0,0-.38.418,1.9332,1.9332,0,0,0-.2031.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4961A3.7019,3.7019,0,0,1,457.6191,368.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_193" data-name="193">
      <G id="_193-2" data-name="193">
        <Circle
          cx={425}
          cy={435}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M418.5762,438.6416v-4.9941H416.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M424.1426,437.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H423.79A1.3219,1.3219,0,0,0,424.1426,437.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,425.4619,434.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M431.1045,434.0547a1.6786,1.6786,0,0,0,.5342-.127,1.0053,1.0053,0,0,0,.4063-.3027.8129.8129,0,0,0,.16-.5273.9184.9184,0,0,0-.33-.76,1.18,1.18,0,0,0-.7588-.2637,1.0645,1.0645,0,0,0-.8965.3906,1.5135,1.5135,0,0,0-.292.9844h-1.4854a3.2813,3.2813,0,0,1,.2148-1.083,2.486,2.486,0,0,1,.5391-.8418,2.3857,2.3857,0,0,1,.8311-.5439,2.8782,2.8782,0,0,1,1.0771-.1934,3.2276,3.2276,0,0,1,.9248.1387,2.6328,2.6328,0,0,1,.83.4121,2.24,2.24,0,0,1,.6.6709,1.7746,1.7746,0,0,1,.23.9131,1.8272,1.8272,0,0,1-.27.99,1.35,1.35,0,0,1-.8076.582v.0225a1.6757,1.6757,0,0,1,1.001.6162,1.8094,1.8094,0,0,1,.3623,1.1328,2.3848,2.3848,0,0,1-.2363,1.0781,2.3433,2.3433,0,0,1-.6328.792,2.7961,2.7961,0,0,1-.9121.4834,3.7053,3.7053,0,0,1-2.2607-.0215,2.4888,2.4888,0,0,1-.9082-.5449,2.415,2.415,0,0,1-.5771-.874,3.0787,3.0787,0,0,1-.1924-1.1885h1.4854a2.2058,2.2058,0,0,0,.0986.5889,1.4322,1.4322,0,0,0,.2529.4834,1.2078,1.2078,0,0,0,.4121.3252,1.323,1.323,0,0,0,.5889.1211,1.2838,1.2838,0,0,0,.8906-.3252,1.3181,1.3181,0,0,0,.1934-1.5566.9837.9837,0,0,0-.4346-.335,1.8293,1.8293,0,0,0-.5781-.1211c-.209-.0107-.4082-.0166-.6-.0166v-1.1A3.3088,3.3088,0,0,0,431.1045,434.0547Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_194" data-name="194">
      <G id="_194-2" data-name="194">
        <Circle
          cx={467}
          cy={435}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M460.5762,438.6416v-4.9941H458.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M466.1426,437.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H465.79A1.3219,1.3219,0,0,0,466.1426,437.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,467.4619,434.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M470.2334,436.8594v-1.43l3.3447-4.4883h1.3965v4.6309h1.0234v1.2871h-1.0234v1.7822H473.49v-1.7822Zm3.2236-3.96-1.9912,2.6729H473.49v-2.6729Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_195" data-name="195">
      <G id="_195-2" data-name="195">
        <Circle
          cx={509}
          cy={435}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M502.5762,438.6416v-4.9941H500.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M508.1426,437.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H507.79A1.3219,1.3219,0,0,0,508.1426,437.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,509.4619,434.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M514.3789,432.2285l-.3076,1.749.0215.0225a1.9483,1.9483,0,0,1,.6816-.457,2.5584,2.5584,0,0,1,1.8379.0723,2.2237,2.2237,0,0,1,.7422.5605,2.4555,2.4555,0,0,1,.4619.83,3.1954,3.1954,0,0,1,.1592,1.0176,2.6624,2.6624,0,0,1-.23,1.1055,2.8068,2.8068,0,0,1-.6221.8857,2.74,2.74,0,0,1-.9072.5771,2.8342,2.8342,0,0,1-1.1.1934,3.8868,3.8868,0,0,1-1.0732-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2955,2.2955,0,0,1-.6328-.7646,2.37,2.37,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3965.8418,1.2339,1.2339,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.353,1.353,0,0,0,.418-.33,1.5125,1.5125,0,0,0,.2637-.4736,1.6768,1.6768,0,0,0,.0938-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3415,1.3415,0,0,0-.2646-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3414,1.3414,0,0,0-.5605-.11,1.4,1.4,0,0,0-.6826.1484,1.5948,1.5948,0,0,0-.4941.4688H512.498l.7588-4.2578h4.3008v1.2871Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_196" data-name="196">
      <G id="_196-2" data-name="196">
        <Circle
          cx={551}
          cy={435}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M544.5762,438.6416v-4.9941H542.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M550.1426,437.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H549.79A1.3219,1.3219,0,0,0,550.1426,437.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,551.4619,434.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M557.9736,432.25a.9111.9111,0,0,0-.6816-.2852,1.0143,1.0143,0,0,0-.6982.2471,1.812,1.812,0,0,0-.4463.6045,3.2875,3.2875,0,0,0-.2412.7656,4.882,4.882,0,0,0-.0889.7256l.0225.0225a1.8633,1.8633,0,0,1,.748-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4241,2.4241,0,0,1,.8027.5781,2.2341,2.2341,0,0,1,.4512.8027,2.9953,2.9953,0,0,1,.1426.9131,3.1017,3.1017,0,0,1-.1924,1.1055,2.6468,2.6468,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0544,3.0544,0,0,1-2.541-.1328,2.6762,2.6762,0,0,1-.9131-.9062,3.7479,3.7479,0,0,1-.4727-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3183,6.3183,0,0,1,.165-1.43,4.169,4.169,0,0,1,.5273-1.292,2.97,2.97,0,0,1,.9355-.9414,2.5514,2.5514,0,0,1,1.3965-.3633,2.9268,2.9268,0,0,1,.9248.1436,2.3687,2.3687,0,0,1,.7588.4131,2.1326,2.1326,0,0,1,.5391.665,2.6742,2.6742,0,0,1,.2744.9131h-1.4844A1.3318,1.3318,0,0,0,557.9736,432.25Zm-1.3145,2.5137a1.1044,1.1044,0,0,0-.3906.3145,1.3479,1.3479,0,0,0-.23.4561,1.8876,1.8876,0,0,0-.0771.5439,1.7276,1.7276,0,0,0,.082.5234,1.464,1.464,0,0,0,.2422.4609,1.187,1.187,0,0,0,.3906.3252,1.1179,1.1179,0,0,0,.5283.1211.9952.9952,0,0,0,.5-.1211,1.2276,1.2276,0,0,0,.3691-.3193,1.3607,1.3607,0,0,0,.23-.4512,1.7472,1.7472,0,0,0,.0771-.5166,1.996,1.996,0,0,0-.0713-.5342,1.47,1.47,0,0,0-.2148-.4609,1.1,1.1,0,0,0-.3682-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2386,1.2386,0,0,0,556.6592,434.7637Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_197" data-name="197">
      <G id="_197-2" data-name="197">
        <Circle
          cx={593}
          cy={435}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M586.5762,438.6416v-4.9941H584.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M592.1426,437.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H591.79A1.3219,1.3219,0,0,0,592.1426,437.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,593.4619,434.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M600.6719,433.582a9.1188,9.1188,0,0,0-.78,1.6387,11.566,11.566,0,0,0-.4844,1.76,9.6938,9.6938,0,0,0-.1816,1.6611h-1.6719a10.4846,10.4846,0,0,1,.8086-3.3213,11.7964,11.7964,0,0,1,1.7764-2.9268h-3.6514v-1.4521h5.2578v1.3418A5.5085,5.5085,0,0,0,600.6719,433.582Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_198" data-name="198">
      <G id="_198-2" data-name="198">
        <Circle
          cx={593}
          cy={472}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M586.5762,475.6416v-4.9941H584.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M592.1426,474.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H591.79A1.3219,1.3219,0,0,0,592.1426,474.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,593.4619,471.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M596.7617,468.9756a2.1106,2.1106,0,0,1,.6-.66,2.6828,2.6828,0,0,1,.83-.3955,3.3994,3.3994,0,0,1,.9355-.1328,2.9763,2.9763,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9606,1.9606,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7854,1.7854,0,0,1-.2812,1.001,1.5471,1.5471,0,0,1-.8408.6162v.0215a1.7553,1.7553,0,0,1,1.0664.6543,1.9887,1.9887,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.2471,1.0674,2.2687,2.2687,0,0,1-.6543.748,2.94,2.94,0,0,1-.9238.4463,3.8671,3.8671,0,0,1-1.0566.1484,4.2267,4.2267,0,0,1-1.083-.1387,2.8057,2.8057,0,0,1-.9355-.4336,2.2422,2.2422,0,0,1-.66-.748,2.21,2.21,0,0,1-.2471-1.0781,1.9616,1.9616,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4312,1.4312,0,0,1-.8477-.583,1.911,1.911,0,0,1-.0547-1.9141Zm1.1221,4.873a1.3019,1.3019,0,0,0,.292.4131,1.27,1.27,0,0,0,.4336.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4052,1.4052,0,0,0,.5225-.0937,1.3091,1.3091,0,0,0,.418-.2637,1.161,1.161,0,0,0,.28-.4131,1.3721,1.3721,0,0,0,.1-.5283,1.1781,1.1781,0,0,0-.1045-.5,1.2108,1.2108,0,0,0-.2861-.3906,1.2916,1.2916,0,0,0-.418-.2529,1.46,1.46,0,0,0-.5117-.0889,1.5113,1.5113,0,0,0-.9678.3145,1.09,1.09,0,0,0-.3965.9072A1.2881,1.2881,0,0,0,597.8838,473.8486Zm.418-3.0635a1.3583,1.3583,0,0,0,.8252.2578,1.3011,1.3011,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.4835,1.4835,0,0,0-.0439-.335.9427.9427,0,0,0-.1709-.3467.9876.9876,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.39,1.39,0,0,0-.4453.0713,1.205,1.205,0,0,0-.38.2041.9092.9092,0,0,0-.2588.33,1.0755,1.0755,0,0,0-.0928.4609A.8771.8771,0,0,0,598.3018,470.7852Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_199" data-name="199">
      <G id="_199-2" data-name="199">
        <Circle
          cx={551}
          cy={472}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M544.5762,475.6416v-4.9941H542.64v-1.1768a3.6594,3.6594,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6815,1.6815,0,0,0,.5117-.4785,1.7117,1.7117,0,0,0,.2744-.7373h1.2432v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M550.1426,474.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014H549.79A1.3219,1.3219,0,0,0,550.1426,474.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,551.4619,471.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M556.2578,474.332a.9072.9072,0,0,0,.6816.2871,1.0114,1.0114,0,0,0,.7041-.248,1.845,1.845,0,0,0,.44-.6055,3.0766,3.0766,0,0,0,.2363-.7637,7.01,7.01,0,0,0,.0938-.7266l-.0225-.0215a1.8781,1.8781,0,0,1-.748.66,2.3535,2.3535,0,0,1-.9893.1973,2.3166,2.3166,0,0,1-.9687-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2465,2.2465,0,0,1-.4512-.8037,3.0208,3.0208,0,0,1-.1426-.9131,3.0979,3.0979,0,0,1,.1924-1.1055,2.598,2.598,0,0,1,1.4023-1.49,2.6806,2.6806,0,0,1,1.1-.2207,2.7333,2.7333,0,0,1,1.4473.3477,2.6758,2.6758,0,0,1,.9072.9121,3.7929,3.7929,0,0,1,.4727,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3729,6.3729,0,0,1-.1641,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9219,2.9219,0,0,1-.9355.9355,2.5836,2.5836,0,0,1-1.3965.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.23,2.23,0,0,1-.76-.4121,2.1849,2.1849,0,0,1-.5381-.6709,2.64,2.64,0,0,1-.2754-.9014h1.4854A1.313,1.313,0,0,0,556.2578,474.332Zm1.32-2.5127a1.1164,1.1164,0,0,0,.3848-.3135,1.3914,1.3914,0,0,0,.2314-.457,1.9136,1.9136,0,0,0,.0762-.5449,1.7105,1.7105,0,0,0-.082-.5215,1.4751,1.4751,0,0,0-.2422-.4629,1.2084,1.2084,0,0,0-.3906-.3242,1.1256,1.1256,0,0,0-.5273-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.202,1.202,0,0,0-.374.3193,1.3722,1.3722,0,0,0-.2314.4512,1.7847,1.7847,0,0,0-.0771.5166,2.0179,2.0179,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.11,1.11,0,0,0,.3682.33,1.0566,1.0566,0,0,0,.5234.126A1.2175,1.2175,0,0,0,557.5781,471.8193Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_200" data-name="200">
      <G id="_200-2" data-name="200">
        <Circle
          cx={509}
          cy={472}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M500.3867,469.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,500.3867,469.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M506.3984,469.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,506.3984,469.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q507.7354,472.0884,507.7568,472.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M512.5146,469.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9574,2.9574,0,0,1,1.083-.1992,2.99,2.99,0,0,1,1.0947.1992,2.2253,2.2253,0,0,1,.9023.6592,3.3507,3.3507,0,0,1,.6162,1.2266,6.7994,6.7994,0,0,1,.2246,1.8867,7.0651,7.0651,0,0,1-.2246,1.9307,3.3507,3.3507,0,0,1-.6162,1.2373,2.2253,2.2253,0,0,1-.9023.6592,2.99,2.99,0,0,1-1.0947.1992,2.9574,2.9574,0,0,1-1.083-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,512.5146,469.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9181,1.9181,0,0,0,.3682.7432.8857.8857,0,0,0,.7256.3076.9168.9168,0,0,0,.7432-.3076,1.9,1.9,0,0,0,.374-.7432,4.2828,4.2828,0,0,0,.1367-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.1776,5.1776,0,0,0-.0439-.5771,5.4357,5.4357,0,0,0-.1094-.5889,1.7984,1.7984,0,0,0-.2148-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9458.9458,0,0,0-.5332.1436,1.1333,1.1333,0,0,0-.3516.374,2.0093,2.0093,0,0,0-.2148.5225,4.0348,4.0348,0,0,0-.11.5889c-.0215.1973-.0342.3906-.0381.5771s-.0059.3467-.0059.4785Q513.8506,472.0884,513.873,472.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_201" data-name="201">
      <G id="_201-2" data-name="201">
        <Circle
          cx={467}
          cy={472}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M458.3867,469.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,458.3867,469.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M464.3984,469.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,464.3984,469.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q465.7354,472.0884,465.7568,472.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M472.8076,475.6416v-4.9941h-1.9355v-1.1768a3.65,3.65,0,0,0,.7861-.0605,2.0615,2.0615,0,0,0,.6826-.2529,1.6672,1.6672,0,0,0,.5107-.4785,1.7,1.7,0,0,0,.2754-.7373H474.37v7.7Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_202" data-name="202">
      <G id="_202-2" data-name="202">
        <Circle
          cx={425}
          cy={472}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M416.3867,469.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,416.3867,469.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M422.3984,469.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,422.3984,469.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q423.7354,472.0884,423.7568,472.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M428.6191,469.6738a2.8711,2.8711,0,0,1,.5273-.99,2.4181,2.4181,0,0,1,.8857-.66,3.0232,3.0232,0,0,1,1.2266-.2363,3.0582,3.0582,0,0,1,1.0068.166,2.58,2.58,0,0,1,.8408.4727,2.2481,2.2481,0,0,1,.5781.7588,2.3331,2.3331,0,0,1,.2139,1.0127,2.4276,2.4276,0,0,1-.1865,1,2.6105,2.6105,0,0,1-.4951.7422,4.239,4.239,0,0,1-.6982.59q-.3911.2637-.7871.5215t-.77.5557a3.4793,3.4793,0,0,0-.66.6934h3.6406v1.3418h-5.6533a3.199,3.199,0,0,1,.1924-1.166,3.1053,3.1053,0,0,1,.5225-.8857,4.6172,4.6172,0,0,1,.7754-.7207q.4453-.33.94-.67c.1689-.1172.3486-.2373.5391-.3574a3.5971,3.5971,0,0,0,.5225-.4023,2.136,2.136,0,0,0,.3965-.4941,1.2375,1.2375,0,0,0,.1592-.6279,1.16,1.16,0,0,0-.3242-.874,1.1479,1.1479,0,0,0-.8311-.3145,1.0132,1.0132,0,0,0-.5771.16,1.195,1.195,0,0,0-.38.418,1.9332,1.9332,0,0,0-.2031.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4961A3.7019,3.7019,0,0,1,428.6191,469.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_203" data-name="203">
      <G id="_203-2" data-name="203">
        <Circle
          cx={433}
          cy={533}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M424.3867,530.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,424.3867,530.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M430.3984,530.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,430.3984,530.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q431.7354,533.0884,431.7568,533.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M439.1045,532.0547a1.6786,1.6786,0,0,0,.5342-.127,1.0053,1.0053,0,0,0,.4063-.3027.8129.8129,0,0,0,.16-.5273.9184.9184,0,0,0-.33-.76,1.18,1.18,0,0,0-.7588-.2637,1.0645,1.0645,0,0,0-.8965.3906,1.5135,1.5135,0,0,0-.292.9844h-1.4854a3.2813,3.2813,0,0,1,.2148-1.083,2.486,2.486,0,0,1,.5391-.8418,2.3857,2.3857,0,0,1,.8311-.5439,2.8782,2.8782,0,0,1,1.0771-.1934,3.2276,3.2276,0,0,1,.9248.1387,2.6328,2.6328,0,0,1,.83.4121,2.24,2.24,0,0,1,.6.6709,1.7746,1.7746,0,0,1,.23.9131,1.8272,1.8272,0,0,1-.27.99,1.35,1.35,0,0,1-.8076.582v.0225a1.6757,1.6757,0,0,1,1.001.6162,1.8094,1.8094,0,0,1,.3623,1.1328,2.3848,2.3848,0,0,1-.2363,1.0781,2.3433,2.3433,0,0,1-.6328.792,2.7961,2.7961,0,0,1-.9121.4834,3.7053,3.7053,0,0,1-2.2607-.0215,2.4888,2.4888,0,0,1-.9082-.5449,2.415,2.415,0,0,1-.5771-.874,3.0787,3.0787,0,0,1-.1924-1.1885h1.4854a2.2058,2.2058,0,0,0,.0986.5889,1.4322,1.4322,0,0,0,.2529.4834,1.2078,1.2078,0,0,0,.4121.3252,1.323,1.323,0,0,0,.5889.1211,1.2838,1.2838,0,0,0,.8906-.3252,1.3181,1.3181,0,0,0,.1934-1.5566.9837.9837,0,0,0-.4346-.335,1.8293,1.8293,0,0,0-.5781-.1211c-.209-.0107-.4082-.0166-.6-.0166v-1.1A3.3088,3.3088,0,0,0,439.1045,532.0547Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_204" data-name="204">
      <G id="_204-2" data-name="204">
        <Circle
          cx={474}
          cy={533}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M465.3867,530.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,465.3867,530.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M471.3984,530.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,471.3984,530.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q472.7354,533.0884,472.7568,533.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M477.2334,534.8594v-1.43l3.3447-4.4883h1.3965v4.6309h1.0234v1.2871h-1.0234v1.7822H480.49v-1.7822Zm3.2236-3.96-1.9912,2.6729H480.49v-2.6729Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_205" data-name="205">
      <G id="_205-2" data-name="205">
        <Circle
          cx={522}
          cy={533}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M513.3867,530.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,513.3867,530.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M519.3984,530.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,519.3984,530.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q520.7354,533.0884,520.7568,533.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M527.3789,530.2285l-.3076,1.749.0215.0225a1.9483,1.9483,0,0,1,.6816-.457,2.5584,2.5584,0,0,1,1.8379.0723,2.2237,2.2237,0,0,1,.7422.5605,2.4555,2.4555,0,0,1,.4619.83,3.1954,3.1954,0,0,1,.1592,1.0176,2.6624,2.6624,0,0,1-.23,1.1055,2.8068,2.8068,0,0,1-.6221.8857,2.74,2.74,0,0,1-.9072.5771,2.8342,2.8342,0,0,1-1.1.1934,3.8868,3.8868,0,0,1-1.0732-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2955,2.2955,0,0,1-.6328-.7646,2.37,2.37,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3965.8418,1.2339,1.2339,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.353,1.353,0,0,0,.418-.33,1.5125,1.5125,0,0,0,.2637-.4736,1.6768,1.6768,0,0,0,.0938-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3415,1.3415,0,0,0-.2646-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3414,1.3414,0,0,0-.5605-.11,1.4,1.4,0,0,0-.6826.1484,1.5948,1.5948,0,0,0-.4941.4688H525.498l.7588-4.2578h4.3008v1.2871Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_206" data-name="206">
      <G id="_206-2" data-name="206">
        <Circle
          cx={571}
          cy={533}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M562.3867,530.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,562.3867,530.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M568.3984,530.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,568.3984,530.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q569.7354,533.0884,569.7568,533.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M577.9736,530.25a.9111.9111,0,0,0-.6816-.2852,1.0143,1.0143,0,0,0-.6982.2471,1.812,1.812,0,0,0-.4463.6045,3.2875,3.2875,0,0,0-.2412.7656,4.882,4.882,0,0,0-.0889.7256l.0225.0225a1.8633,1.8633,0,0,1,.748-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4241,2.4241,0,0,1,.8027.5781,2.2341,2.2341,0,0,1,.4512.8027,2.9953,2.9953,0,0,1,.1426.9131,3.1017,3.1017,0,0,1-.1924,1.1055,2.6468,2.6468,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0544,3.0544,0,0,1-2.541-.1328,2.6762,2.6762,0,0,1-.9131-.9062,3.7479,3.7479,0,0,1-.4727-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3183,6.3183,0,0,1,.165-1.43,4.169,4.169,0,0,1,.5273-1.292,2.97,2.97,0,0,1,.9355-.9414,2.5514,2.5514,0,0,1,1.3965-.3633,2.9268,2.9268,0,0,1,.9248.1436,2.3687,2.3687,0,0,1,.7588.4131,2.1326,2.1326,0,0,1,.5391.665,2.6742,2.6742,0,0,1,.2744.9131h-1.4844A1.3318,1.3318,0,0,0,577.9736,530.25Zm-1.3145,2.5137a1.1044,1.1044,0,0,0-.3906.3145,1.3479,1.3479,0,0,0-.23.4561,1.8876,1.8876,0,0,0-.0771.5439,1.7276,1.7276,0,0,0,.082.5234,1.464,1.464,0,0,0,.2422.4609,1.187,1.187,0,0,0,.3906.3252,1.1179,1.1179,0,0,0,.5283.1211.9952.9952,0,0,0,.5-.1211,1.2276,1.2276,0,0,0,.3691-.3193,1.3607,1.3607,0,0,0,.23-.4512,1.7472,1.7472,0,0,0,.0771-.5166,1.996,1.996,0,0,0-.0713-.5342,1.47,1.47,0,0,0-.2148-.4609,1.1,1.1,0,0,0-.3682-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2386,1.2386,0,0,0,576.6592,532.7637Z"
          style={{
            fill: '#002b64',
          }}
        />
      </G>
  </G>
      <G id="_207" data-name="207">
      <G id="_207-2" data-name="207">
        <Circle
          cx={613}
          cy={533}
          r={10}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Path
          d="M604.3867,530.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418h-5.6543a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,604.3867,530.6738Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M610.3984,530.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,610.3984,530.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q611.7354,533.0884,611.7568,533.5566Z"
          style={{
            fill: '#002b64',
          }}
        />
        <Path
          d="M620.6719,531.582a9.1188,9.1188,0,0,0-.78,1.6387,11.566,11.566,0,0,0-.4844,1.76,9.6938,9.6938,0,0,0-.1816,1.6611h-1.6719a10.4846,10.4846,0,0,1,.8086-3.3213,11.7964,11.7964,0,0,1,1.7764-2.9268h-3.6514v-1.4521h5.2578v1.3418A5.5085,5.5085,0,0,0,620.6719,531.582Z"
          style={{
            fill: '#002b64',
          }}
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
