import React from 'react'
import PropTypes from 'prop-types'
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Rect,
  Polygon,
  Line,
  Circle,
  Polyline,
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

const StudiecentrumFirstFloor = ({ parseSvg }) => {
  let svgData = (
    <Svg height="100%" width="100%" viewBox="0 0 800 600">
    <Defs>
      <ClipPath id="clip-path">
        <Path
          d="M678,477V595H88V416H211v61ZM387,254H350v92h37Z"
          style={{
            fill: '#002b64',
            opacity: 0.30000000000000004,
          }}
        />
      </ClipPath>
    </Defs>
    <G id="background">
      <Rect
        x={-112}
        y={-212}
        width={1024}
        height={1024}
        style={{
          fill: '#acd6ea',
        }}
      />
      <Rect
        x={260}
        y={5.5}
        width={418.5}
        height={118.5}
        style={{
          fill: '#539326',
        }}
      />
    </G>
    <G id="innerv\xE4ggar">
      <Rect
        x={178}
        y={123}
        width={3}
        height={144}
        rx={0.9856}
        ry={0.9856}
        style={{
          fill: '#002b64',
        }}
      />
      <Rect
        x={178.5}
        y={333.5}
        width={3}
        height={82.5}
        rx={1.002}
        ry={1.002}
        style={{
          fill: '#002b64',
        }}
      />
    </G>
    <G id="Garderob">
      <Polygon
        points="234.5 425 234.5 416.5 212.5 416.5 212.5 475.5 232 475.5 232 476 321 476 321 425 234.5 425"
        style={{
          fill: '#e3e3e3',
          opacity: 0.2,
        }}
      />
      <Path
        d="M275.0271,462.9218q-4.875,0-9.75-.0026a4.8023,4.8023,0,0,1-.7923-.0606,2.1009,2.1009,0,0,1-1.865-2.0058,5.4127,5.4127,0,0,1-.0292-.5565q-.0022-9.7367.0008-19.4733a4.1866,4.1866,0,0,1,.0487-.6877,2.2646,2.2646,0,0,1,2.3071-2.041c.1678-.0105.3362-.0157.5043-.0157q9.5773-.0012,19.1545.0016a5.1129,5.1129,0,0,1,.7929.0552,2.1729,2.1729,0,0,1,1.98,2.1162c.0289.2985.03.6.03.9009q.0024,9.5773-.0049,19.1545a4.199,4.199,0,0,1-.1442,1.0993,2.0633,2.0633,0,0,1-2.0054,1.4975c-.1763.0141-.3538.0171-.5307.0172Q279.8755,462.9225,275.0271,462.9218Z"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M284.5984,453.2521c-.4211-.139-.8477-.2614-1.2706-.3952q-3.8073-1.2045-7.6147-2.4085c-.1871-.059-.2878-.1365-.2855-.3591a.3368.3368,0,0,1,.2756-.3655,2.2422,2.2422,0,1,0-2.9652-2.1392.4318.4318,0,0,0,.4425.472.4524.4524,0,0,0,.4514-.433,3.0523,3.0523,0,0,1,.0843-.4249,1.3344,1.3344,0,1,1,1.3726,1.7423c-.4438.0408-.5438.1483-.5551.6039-.0048.193-.0149.3869-.0027.5791a.2686.2686,0,0,1-.2236.3124c-.4246.1283-.8456.2684-1.2685.4022q-3.834,1.2131-7.6679,2.4267a1.1791,1.1791,0,0,0-.8243,1.3279,1.2245,1.2245,0,0,0,1.3189,1.0783h18.3839a1.2242,1.2242,0,0,0,1.1929-1.0243A1.19,1.19,0,0,0,284.5984,453.2521Zm-.52,1.3456a.2692.2692,0,0,1-.046.0108H266.1313l.0084.001c-.043,0-.1082,0-.1574-.0006a.3118.3118,0,0,1-.144-.0348l-.0093-.005a.1824.1824,0,0,1,.0075-.3255l.0166-.0063q3.6779-1.1753,7.36-2.3366c.5423-.1719,1.0822-.351,1.6262-.5172a.54.54,0,0,1,.3016-.0072q4.482,1.4151,8.9591,2.8458l.0032.0011A.1953.1953,0,0,1,284.0781,454.5977Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Line
        x1={322}
        y1={424.5}
        x2={322}
        y2={477}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeMiterlimit: 10,
          strokeWidth: '2.83464574813843px',
        }}
      />
      <Line
        x1={235}
        y1={416.5}
        x2={211.5}
        y2={416.5}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeMiterlimit: 10,
          strokeWidth: '2.83464574813843px',
        }}
      />
    </G>
    <G id="wc">
      <G
        style={{
          opacity: 0.2,
        }}
      >
        <Rect
          x={237}
          y={176}
          width={84}
          height={54}
          style={{
            fill: '#e3e3e3',
          }}
        />
        <Rect
          x={236}
          y={370}
          width={86}
          height={54}
          style={{
            fill: '#e3e3e3',
          }}
        />
      </G>
      <Rect
        x={260}
        y={5}
        width={418}
        height={119}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2.83464574813843px',
        }}
      />
      <Rect
        x={237}
        y={176}
        width={84}
        height={54}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2.83464574813843px',
        }}
      />
      <Rect
        x={236}
        y={370}
        width={86}
        height={54}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2.83464574813843px',
        }}
      />
      <Path
        d="M279.0271,215.4218q-4.875,0-9.75-.0026a4.8023,4.8023,0,0,1-.7923-.0606,2.1009,2.1009,0,0,1-1.865-2.0058,5.4128,5.4128,0,0,1-.0292-.5565q-.0022-9.7367.0008-19.4735a4.1866,4.1866,0,0,1,.0487-.6877,2.2646,2.2646,0,0,1,2.3071-2.041c.1678-.0105.3362-.0157.5043-.0157q9.5773-.0012,19.1547.0016a5.1129,5.1129,0,0,1,.7929.0552,2.1729,2.1729,0,0,1,1.98,2.1162c.0289.2985.03.6.03.9009q.0024,9.5773-.0049,19.1547a4.1991,4.1991,0,0,1-.1442,1.0993,2.0633,2.0633,0,0,1-2.0054,1.4975c-.1763.0141-.3538.0171-.5307.0172Q283.8755,215.4226,279.0271,215.4218Z"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M278.123,197.0926h3.1109l-1.9526,11.8148H275.74l-.9929-7.9427h-.0331l-.9432,7.9427h-3.6074l-1.936-11.8148h3.21l.7777,8.373h.0331l1.0425-8.373h2.9124l1.1748,8.373h.0331Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M286.4959,200.5014q0-.1986-.0083-.4468a1.89,1.89,0,0,0-.0744-.4716.9833.9833,0,0,0-.2069-.3806.4955.4955,0,0,0-.3889-.1572.755.755,0,0,0-.5047.1489,1.0365,1.0365,0,0,0-.2647.5709,6.693,6.693,0,0,0-.1076,1.2q-.0167.7779-.0165,2.0353,0,1.2906.0248,2.0767a6.9789,6.9789,0,0,0,.1158,1.2.8976.8976,0,0,0,.273.5461.7962.7962,0,0,0,.48.1324.5959.5959,0,0,0,.5709-.4468,4.8014,4.8014,0,0,0,.1738-1.5554v-.91h3.21v.7446a7.1592,7.1592,0,0,1-.2151,1.845,3.4423,3.4423,0,0,1-.695,1.3652,2.9943,2.9943,0,0,1-1.2411.8522,5.234,5.234,0,0,1-1.8533.29,5.6584,5.6584,0,0,1-2.4573-.43,2.7024,2.7024,0,0,1-1.2659-1.2245,4.9273,4.9273,0,0,1-.4633-1.9278q-.0664-1.1333-.0662-2.5565,0-1.3733.0662-2.5069a4.9963,4.9963,0,0,1,.4633-1.936,2.7779,2.7779,0,0,1,1.2659-1.2493,5.4738,5.4738,0,0,1,2.4573-.4468,5.6022,5.6022,0,0,1,2.1015.3227,2.8629,2.8629,0,0,1,1.1914.8522,2.6559,2.6559,0,0,1,.5295,1.2,8.0161,8.0161,0,0,1,.1158,1.3652v.86h-3.21Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M279.0271,409.4218q-4.875,0-9.75-.0026a4.8023,4.8023,0,0,1-.7923-.0606,2.1009,2.1009,0,0,1-1.865-2.0058,5.4128,5.4128,0,0,1-.0292-.5565q-.0022-9.7367.0008-19.4735a4.1866,4.1866,0,0,1,.0487-.6877,2.2646,2.2646,0,0,1,2.3071-2.041c.1678-.0105.3362-.0157.5043-.0157q9.5773-.0012,19.1547.0016a5.1129,5.1129,0,0,1,.7929.0552,2.1729,2.1729,0,0,1,1.98,2.1162c.0289.2985.03.6.03.9009q.0024,9.5773-.0049,19.1547a4.1991,4.1991,0,0,1-.1442,1.0993,2.0633,2.0633,0,0,1-2.0054,1.4975c-.1763.0141-.3538.0171-.5307.0172Q283.8755,409.4226,279.0271,409.4218Z"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M278.123,391.0926h3.1109l-1.9526,11.8148H275.74l-.9929-7.9427h-.0331l-.9432,7.9427h-3.6074l-1.936-11.8148h3.21l.7777,8.373h.0331l1.0425-8.373h2.9124l1.1748,8.373h.0331Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M286.4959,394.5014q0-.1986-.0083-.4468a1.89,1.89,0,0,0-.0744-.4716.9833.9833,0,0,0-.2069-.3806.4955.4955,0,0,0-.3889-.1572.755.755,0,0,0-.5047.1489,1.0365,1.0365,0,0,0-.2647.5709,6.693,6.693,0,0,0-.1076,1.2q-.0167.7779-.0165,2.0353,0,1.2906.0248,2.0767a6.9789,6.9789,0,0,0,.1158,1.2.8976.8976,0,0,0,.273.5461.7962.7962,0,0,0,.48.1324.5959.5959,0,0,0,.5709-.4468,4.8014,4.8014,0,0,0,.1738-1.5554v-.91h3.21v.7446a7.1592,7.1592,0,0,1-.2151,1.845,3.4423,3.4423,0,0,1-.695,1.3652,2.9943,2.9943,0,0,1-1.2411.8522,5.234,5.234,0,0,1-1.8533.29,5.6584,5.6584,0,0,1-2.4573-.43,2.7024,2.7024,0,0,1-1.2659-1.2245,4.9273,4.9273,0,0,1-.4633-1.9278q-.0664-1.1333-.0662-2.5565,0-1.3733.0662-2.5069a4.9963,4.9963,0,0,1,.4633-1.936,2.7779,2.7779,0,0,1,1.2659-1.2493,5.4738,5.4738,0,0,1,2.4573-.4468,5.6022,5.6022,0,0,1,2.1015.3227,2.8629,2.8629,0,0,1,1.1914.8522,2.6559,2.6559,0,0,1,.5295,1.2,8.0161,8.0161,0,0,1,.1158,1.3652v.86h-3.21Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
    <G id="Onyttjade_ytor" data-name="Onyttjade ytor">
      <Path
        d="M678,477V595H88V416H211v61ZM387,254H350v92h37Z"
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
          x1={-388.4831}
          y1={389.956}
          x2={1137.2706}
          y2={-1135.7977}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={405.4952}
          x2={1137.2706}
          y2={-1120.2585}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={421.0344}
          x2={1137.2706}
          y2={-1104.7193}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={436.5736}
          x2={1137.2706}
          y2={-1089.1801}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={452.1128}
          x2={1137.2706}
          y2={-1073.6409}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={467.652}
          x2={1137.2706}
          y2={-1058.1018}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={483.1911}
          x2={1137.2706}
          y2={-1042.5626}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={498.7303}
          x2={1137.2706}
          y2={-1027.0234}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={514.2695}
          x2={1137.2706}
          y2={-1011.4842}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={529.8087}
          x2={1137.2706}
          y2={-995.945}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={545.3479}
          x2={1137.2706}
          y2={-980.4058}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={560.8871}
          x2={1137.2706}
          y2={-964.8666}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={576.4263}
          x2={1137.2706}
          y2={-949.3275}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={591.9654}
          x2={1137.2706}
          y2={-933.7883}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={607.5046}
          x2={1137.2706}
          y2={-918.2491}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={623.0438}
          x2={1137.2706}
          y2={-902.7099}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={638.583}
          x2={1137.2706}
          y2={-887.1707}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={654.1222}
          x2={1137.2706}
          y2={-871.6315}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={669.6614}
          x2={1137.2706}
          y2={-856.0923}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={685.2006}
          x2={1137.2706}
          y2={-840.5532}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={700.7397}
          x2={1137.2706}
          y2={-825.014}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={716.2789}
          x2={1137.2706}
          y2={-809.4748}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={731.8181}
          x2={1137.2706}
          y2={-793.9356}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={747.3573}
          x2={1137.2706}
          y2={-778.3964}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={762.8965}
          x2={1137.2706}
          y2={-762.8572}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={778.4357}
          x2={1137.2706}
          y2={-747.3181}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={793.9748}
          x2={1137.2706}
          y2={-731.7789}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={809.514}
          x2={1137.2706}
          y2={-716.2397}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={825.0532}
          x2={1137.2706}
          y2={-700.7005}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={840.5924}
          x2={1137.2706}
          y2={-685.1613}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={856.1316}
          x2={1137.2706}
          y2={-669.6221}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={871.6708}
          x2={1137.2706}
          y2={-654.0829}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={887.21}
          x2={1137.2706}
          y2={-638.5438}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={902.7491}
          x2={1137.2706}
          y2={-623.0046}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={918.2883}
          x2={1137.2706}
          y2={-607.4654}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={933.8275}
          x2={1137.2706}
          y2={-591.9262}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={949.3667}
          x2={1137.2706}
          y2={-576.387}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={964.9059}
          x2={1137.2706}
          y2={-560.8478}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={980.4451}
          x2={1137.2706}
          y2={-545.3087}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={995.9842}
          x2={1137.2706}
          y2={-529.7695}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1011.5234}
          x2={1137.2706}
          y2={-514.2303}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1027.0626}
          x2={1137.2706}
          y2={-498.6911}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1042.6018}
          x2={1137.2706}
          y2={-483.1519}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1058.141}
          x2={1137.2706}
          y2={-467.6127}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1073.6802}
          x2={1137.2706}
          y2={-452.0735}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1089.2194}
          x2={1137.2706}
          y2={-436.5344}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1104.7585}
          x2={1137.2706}
          y2={-420.9952}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1120.2977}
          x2={1137.2706}
          y2={-405.456}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1135.8369}
          x2={1137.2706}
          y2={-389.9168}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1151.3761}
          x2={1137.2706}
          y2={-374.3776}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1166.9153}
          x2={1137.2706}
          y2={-358.8384}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1182.4545}
          x2={1137.2706}
          y2={-343.2992}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1197.9937}
          x2={1137.2706}
          y2={-327.7601}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1213.5328}
          x2={1137.2706}
          y2={-312.2209}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1229.072}
          x2={1137.2706}
          y2={-296.6817}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1244.6112}
          x2={1137.2706}
          y2={-281.1425}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1260.1504}
          x2={1137.2706}
          y2={-265.6033}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1275.6896}
          x2={1137.2706}
          y2={-250.0641}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1291.2288}
          x2={1137.2706}
          y2={-234.525}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1306.7679}
          x2={1137.2706}
          y2={-218.9858}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1322.3071}
          x2={1137.2706}
          y2={-203.4466}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1337.8463}
          x2={1137.2706}
          y2={-187.9074}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1353.3855}
          x2={1137.2706}
          y2={-172.3682}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1368.9247}
          x2={1137.2706}
          y2={-156.829}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1384.4639}
          x2={1137.2706}
          y2={-141.2898}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1400.0031}
          x2={1137.2706}
          y2={-125.7507}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1415.5422}
          x2={1137.2706}
          y2={-110.2115}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1431.0814}
          x2={1137.2706}
          y2={-94.6723}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1446.6206}
          x2={1137.2706}
          y2={-79.1331}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1462.1598}
          x2={1137.2706}
          y2={-63.5939}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1477.699}
          x2={1137.2706}
          y2={-48.0547}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1493.2382}
          x2={1137.2706}
          y2={-32.5155}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1508.7774}
          x2={1137.2706}
          y2={-16.9764}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1524.3165}
          x2={1137.2706}
          y2={-1.4372}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1539.8557}
          x2={1137.2706}
          y2={14.102}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1555.3949}
          x2={1137.2706}
          y2={29.6412}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1570.9341}
          x2={1137.2706}
          y2={45.1804}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1586.4733}
          x2={1137.2706}
          y2={60.7196}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1602.0125}
          x2={1137.2706}
          y2={76.2587}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1617.5516}
          x2={1137.2706}
          y2={91.7979}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1633.0908}
          x2={1137.2706}
          y2={107.3371}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1648.63}
          x2={1137.2706}
          y2={122.8763}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1664.1692}
          x2={1137.2706}
          y2={138.4155}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1679.7084}
          x2={1137.2706}
          y2={153.9547}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1695.2476}
          x2={1137.2706}
          y2={169.4939}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1710.7868}
          x2={1137.2706}
          y2={185.033}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1726.3259}
          x2={1137.2706}
          y2={200.5722}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1741.8651}
          x2={1137.2706}
          y2={216.1114}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1757.4043}
          x2={1137.2706}
          y2={231.6506}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1772.9435}
          x2={1137.2706}
          y2={247.1898}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
        <Line
          x1={-388.4831}
          y1={1788.4827}
          x2={1137.2706}
          y2={262.729}
          style={{
            fill: '#002b64',
            stroke: '#fff',
            strokeMiterlimit: 10,
            strokeWidth: '1.1012021617351px',
          }}
        />
      </G>
      <Polygon
        points="211 477 211 416 88 416 88 595 211 595 678 595 678 477 211 477"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2.83464574813843px',
        }}
      />
      <Rect
        x={350}
        y={254}
        width={37}
        height={92}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2.83464574813843px',
        }}
      />
    </G>
    <G id="trappa">
      <Circle
        cx={275}
        cy={300}
        r={26}
        style={{
          fill: '#e3e3e3',
          opacity: 0.2,
        }}
      />
      <Circle
        cx={275}
        cy={300}
        r={26}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2.83464574813843px',
        }}
      />
      <Path
        d="M275.0271,312.4218q-4.875,0-9.75-.0026a4.8023,4.8023,0,0,1-.7923-.0606,2.1009,2.1009,0,0,1-1.865-2.0058,5.4127,5.4127,0,0,1-.0292-.5565q-.0022-9.7367.0008-19.4733a4.1866,4.1866,0,0,1,.0487-.6877,2.2646,2.2646,0,0,1,2.3071-2.041c.1678-.0105.3362-.0157.5043-.0157q9.5773-.0012,19.1545.0016a5.1129,5.1129,0,0,1,.7929.0552,2.1729,2.1729,0,0,1,1.98,2.1162c.0289.2985.03.6.03.9009q.0024,9.5773-.0049,19.1545a4.199,4.199,0,0,1-.1442,1.0993,2.0633,2.0633,0,0,1-2.0054,1.4975c-.1763.0141-.3538.0171-.5307.0172Q279.8755,312.4225,275.0271,312.4218Z"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M279.55,295.3651h-.3327c-.9474,0-1.895.0071-2.8422-.0051-.2283-.0029-.3045.0508-.3009.2921.0142.9649.0063,1.93.0051,2.8954,0,.0932-.01.1863-.0175.3066h-3.5005v3.5477H269.133v3.5234h-3.4621v1.7784H270.86V304.17h3.4979v-3.506h3.4709V297.152h3.4674v-3.493h3.411v-1.7437H279.55Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
    <G
      id="Layer_11"
      data-name="Layer 11"
      style={{
        opacity: 0.30000000000000004,
      }}
    >
      <Rect
        x={360.4}
        y={80.1115}
        width={29.2}
        height={43.777}
        transform="translate(477 -273) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={277.4}
        y={80.1115}
        width={29.2}
        height={43.777}
        transform="translate(394 -190) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={421.4}
        y={80.1115}
        width={29.2}
        height={43.777}
        transform="translate(538 -334) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={552.4}
        y={80.1115}
        width={29.2}
        height={43.777}
        transform="translate(669 -465) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={552.4}
        y={-2.9998}
        width={29.2}
        height={72}
        transform="translate(600.0002 -533.9998) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={333.4}
        y={-9.9999}
        width={29.2}
        height={86}
        transform="translate(381.0001 -314.9999) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={421.4}
        y={11.1115}
        width={29.2}
        height={43.777}
        transform="translate(469 -403) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={482.1607}
        y={18.2736}
        width={22.6786}
        height={29}
        transform="translate(526.2736 -460.7264) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Polyline
        points="202.161 12.411 158.264 12.411 158.264 41.623 202.161 41.623 202.161 12.411"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Polyline
        points="244 16.411 214.264 16.411 214.264 38 244 38 244 16.411"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Polyline
        points="93.825 52.871 93.825 82 116 82 116 52.871 93.825 52.871"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Polyline
        points="93.558 137.976 115 137.976 115 167.266 93.558 167.266 115 167.266 115 196.478 93.558 196.478 93.558 225.768 115 225.768 115 196.478 93.558 196.478 93.558 167.266 93.558 137.976"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={136.4}
        y={129.1115}
        width={29.2}
        height={43.777}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={165.2057}
        y={72.3057}
        width={29.2}
        height={59.3885}
        transform="translate(281.8057 -77.8057) rotate(90)"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={136.4}
        y={173.1115}
        width={29.2}
        height={43.777}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Rect
        x={136.4}
        y={217.1115}
        width={29.2}
        height={43.777}
        style={{
          fill: '#e3e3e3',
        }}
      />
    </G>
    <G id="Infodisk">
      <G id="Utst\xE4llare">
        <Rect
          x={360.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(528 -222) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={448.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(616 -310) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={492.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(660 -354) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={404.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(572 -266) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={543.7057}
          y={123.8057}
          width={29.2}
          height={58.3885}
          transform="translate(711.3057 -405.3057) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={360.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(528 -222) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={448.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(616 -310) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={492.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(660 -354) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={404.4}
          y={131.1115}
          width={29.2}
          height={43.777}
          transform="translate(572 -266) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={543.7057}
          y={123.8057}
          width={29.2}
          height={58.3885}
          transform="translate(711.3057 -405.3057) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={415.4}
          y={231.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={462.4}
          y={352.1115}
          width={29.2}
          height={43.777}
          transform="translate(851 -103) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={506.4}
          y={352.1115}
          width={29.2}
          height={43.777}
          transform="translate(895 -147) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={376.4}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(837 55) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={420.4}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(881 11) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={566.9}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(1027.5 -135.5) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={522.9}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(983.5 -91.5) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={462.4}
          y={199.1115}
          width={29.2}
          height={43.777}
          transform="translate(698 -256) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={506.4}
          y={199.1115}
          width={29.2}
          height={43.777}
          transform="translate(742 -300) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={633.4}
          y={190.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 424) rotate(180)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={633.4}
          y={234.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 512) rotate(180)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={633.4}
          y={322.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 688) rotate(180)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={633.4}
          y={278.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 600) rotate(180)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={415.4}
          y={275.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={415.4}
          y={319.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={415.4}
          y={231.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={462.4}
          y={352.1115}
          width={29.2}
          height={43.777}
          transform="translate(851 -103) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={506.4}
          y={352.1115}
          width={29.2}
          height={43.777}
          transform="translate(895 -147) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={376.4}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(837 55) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={420.4}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(881 11) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={566.9}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(1027.5 -135.5) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={522.9}
          y={424.1115}
          width={29.2}
          height={43.777}
          transform="translate(983.5 -91.5) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={462.4}
          y={199.1115}
          width={29.2}
          height={43.777}
          transform="translate(698 -256) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={506.4}
          y={199.1115}
          width={29.2}
          height={43.777}
          transform="translate(742 -300) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={633.4}
          y={190.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 424) rotate(180)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={633.4}
          y={234.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 512) rotate(180)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={633.4}
          y={322.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 688) rotate(180)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={633.4}
          y={366.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 776) rotate(180)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={633.4}
          y={366.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 776) rotate(180)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={633.4}
          y={278.1115}
          width={29.2}
          height={43.777}
          transform="translate(1296 600) rotate(180)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={415.4}
          y={275.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={415.4}
          y={319.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={562.4}
          y={231.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={562.4}
          y={275.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={562.4}
          y={319.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={562.4}
          y={231.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={562.4}
          y={275.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={562.4}
          y={319.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={360.4}
          y={80.1115}
          width={29.2}
          height={43.777}
          transform="translate(477 -273) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={277.4}
          y={80.1115}
          width={29.2}
          height={43.777}
          transform="translate(394 -190) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={421.4}
          y={80.1115}
          width={29.2}
          height={43.777}
          transform="translate(538 -334) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={552.4}
          y={80.1115}
          width={29.2}
          height={43.777}
          transform="translate(669 -465) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={552.4}
          y={-2.9998}
          width={29.2}
          height={72}
          transform="translate(600.0002 -533.9998) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={333.4}
          y={-9.9999}
          width={29.2}
          height={86}
          transform="translate(381.0001 -314.9999) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={421.4}
          y={11.1115}
          width={29.2}
          height={43.777}
          transform="translate(469 -403) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={482.1607}
          y={18.2736}
          width={22.6786}
          height={29}
          transform="translate(526.2736 -460.7264) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="202.161 12.411 158.264 12.411 158.264 41.623 202.161 41.623 202.161 12.411"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="244 16.411 214.264 16.411 214.264 38 244 38 244 16.411"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="93.825 52.871 93.825 82 116 82 116 52.871 93.825 52.871"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="93.558 137.976 116 137.976 116 167.266 93.558 167.266 116 167.266 116 196.478 93.558 196.478 93.558 225.768 116 225.768 116 196.478 93.558 196.478 93.558 167.266 93.558 137.976"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={136.4}
          y={129.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={165.2057}
          y={72.3057}
          width={29.2}
          height={59.3885}
          transform="translate(281.8057 -77.8057) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.65080956338185px',
          }}
        />
        <Rect
          x={136.4}
          y={173.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={136.4}
          y={217.1115}
          width={29.2}
          height={43.777}
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Polyline
          points="669.958 59.563 669.958 116.637 641.158 116.637 641.158 59.563 669.958 59.563"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Polyline
          points="670.066 59.563 670.066 116.637 641.266 116.637 641.266 59.563 670.066 59.563"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
        <Rect
          x={471.7057}
          y={416.8057}
          width={29.2}
          height={58.3885}
          transform="translate(932.3057 -40.3057) rotate(90)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={471.7057}
          y={416.8057}
          width={29.2}
          height={58.3885}
          transform="translate(932.3057 -40.3057) rotate(90)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.41732287406921px',
          }}
        />
      </G>
      <G id="info">
        <Rect
          x={317.4}
          y={262.1115}
          width={29.2}
          height={72.3885}
          transform="translate(664 596.6115) rotate(180)"
          style={{
            fill: '#e3e3e3',
            opacity: 0.30000000000000004,
          }}
        />
        <Rect
          x={317.4}
          y={262.1115}
          width={29.2}
          height={72.3885}
          transform="translate(664 596.6115) rotate(180)"
          style={{
            fill: 'none',
            stroke: '#002b64',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.82255476365153px',
          }}
        />
      </G>
      <Path
        d="M332.15,311.9259q-4.6949,0-9.39-.0025a4.6249,4.6249,0,0,1-.763-.0584,2.0233,2.0233,0,0,1-1.7961-1.9317,5.2128,5.2128,0,0,1-.0281-.5359q-.0021-9.3769.0008-18.7539a4.0319,4.0319,0,0,1,.0469-.6622,2.1809,2.1809,0,0,1,2.2219-1.9656c.1616-.01.3238-.0151.4857-.0151q9.2234-.0011,18.4469.0016a4.924,4.924,0,0,1,.7636.0531,2.0926,2.0926,0,0,1,1.9068,2.038c.0279.2875.0289.5783.0289.8676q.0023,9.2234-.0047,18.4469a4.0439,4.0439,0,0,1-.1389,1.0587A1.9871,1.9871,0,0,1,342,311.9087c-.17.0135-.3407.0165-.5111.0166Q336.82,311.9266,332.15,311.9259Z"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M330.7832,294.5815v-2.2051h2.6758v2.2051Zm2.6758,1.5073v9.7432h-2.6758v-9.7432Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Circle
        cx={332.1211}
        cy={299.9673}
        r={9.4226}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeMiterlimit: 10,
          strokeWidth: '1.48387835209671px',
        }}
      />
    </G>
    <G id="Layer_2" data-name="Layer 2">
      <Path
        d="M88,5V286.1581a25.9635,25.9635,0,0,0-41.3265-3.4731H13v34.63H46.6735A25.9635,25.9635,0,0,0,88,313.8419V595H678V5Z"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '6.13526091031974px',
        }}
      />
      <Path
        d="M67.0327,315.0137q-5.8922,0-11.7844-.0031a5.8044,5.8044,0,0,1-.9576-.0732,2.5393,2.5393,0,0,1-2.2541-2.4243,6.5422,6.5422,0,0,1-.0353-.6726q-.0026-11.7683.001-23.5367a5.06,5.06,0,0,1,.0588-.8311,2.7371,2.7371,0,0,1,2.7885-2.4669c.2028-.0127.4063-.019.61-.019q11.5757-.0014,23.1514.002a6.18,6.18,0,0,1,.9584.0667,2.6263,2.6263,0,0,1,2.3931,2.5578c.035.3608.0362.7258.0363,1.0889q.0029,11.5757-.0059,23.1513a5.0752,5.0752,0,0,1-.1743,1.3287,2.4938,2.4938,0,0,1-2.4238,1.81c-.213.017-.4276.0207-.6414.0208Q72.8928,315.0146,67.0327,315.0137Z"
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M71.08,299.8092V297.137a.43.43,0,0,0-.43-.43H56.3291a.43.43,0,0,1-.43-.43v-2.2352a.43.43,0,0,1,.43-.43H70.65a.43.43,0,0,0,.43-.43V290.51a.43.43,0,0,1,.645-.3723l8.05,4.65a.43.43,0,0,1,0,.7446l-8.05,4.65A.43.43,0,0,1,71.08,299.8092Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M62.92,300.1908v2.6723a.43.43,0,0,0,.43.43h14.321a.43.43,0,0,1,.43.43v2.2352a.43.43,0,0,1-.43.43H63.35a.43.43,0,0,0-.43.43V309.49a.43.43,0,0,1-.645.3723l-8.05-4.65a.43.43,0,0,1,0-.7446l8.05-4.65A.43.43,0,0,1,62.92,300.1908Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
    <G id="_35" data-name="35">
    <G id="_35-2" data-name="35">
      <Circle
        cx={151}
        cy={240}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M147.9307,239.0547a1.6918,1.6918,0,0,0,.5332-.1265,1.0241,1.0241,0,0,0,.4072-.3027.8159.8159,0,0,0,.1592-.5278.914.914,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0657,1.0657,0,0,0-.8965.3906,1.5113,1.5113,0,0,0-.291.9844h-1.4854a3.2571,3.2571,0,0,1,.2148-1.0835,2.4666,2.4666,0,0,1,.5391-.8418,2.3807,2.3807,0,0,1,.83-.5444,2.8993,2.8993,0,0,1,1.0781-.1924,3.22,3.22,0,0,1,.9238.1377,2.6328,2.6328,0,0,1,.83.4121,2.2214,2.2214,0,0,1,.6.6714,1.7746,1.7746,0,0,1,.2314.9126,1.8225,1.8225,0,0,1-.27.99,1.3507,1.3507,0,0,1-.8086.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7922,2.7922,0,0,1-.9131.4839,3.72,3.72,0,0,1-2.2607-.022,2.477,2.477,0,0,1-.9072-.5444,2.4045,2.4045,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4844a2.2061,2.2061,0,0,0,.1.5884,1.4346,1.4346,0,0,0,.2529.4839,1.1939,1.1939,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2891,1.2891,0,0,0,.8906-.3247,1.3156,1.3156,0,0,0,.1924-1.5566.9794.9794,0,0,0-.4346-.3354,1.8309,1.8309,0,0,0-.5771-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,147.9307,239.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M153.32,237.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615H152.76a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573H156.5v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_36" data-name="36">
    <G id="_36-2" data-name="36">
      <Circle
        cx={151}
        cy={195}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M147.9307,194.0547a1.6918,1.6918,0,0,0,.5332-.1265,1.0241,1.0241,0,0,0,.4072-.3027.8159.8159,0,0,0,.1592-.5278.914.914,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0657,1.0657,0,0,0-.8965.3906,1.5113,1.5113,0,0,0-.291.9844h-1.4854a3.2571,3.2571,0,0,1,.2148-1.0835,2.4666,2.4666,0,0,1,.5391-.8418,2.3807,2.3807,0,0,1,.83-.5444,2.8993,2.8993,0,0,1,1.0781-.1924,3.22,3.22,0,0,1,.9238.1377,2.6328,2.6328,0,0,1,.83.4121,2.2214,2.2214,0,0,1,.6.6714,1.7746,1.7746,0,0,1,.2314.9126,1.8225,1.8225,0,0,1-.27.99,1.3507,1.3507,0,0,1-.8086.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7922,2.7922,0,0,1-.9131.4839,3.72,3.72,0,0,1-2.2607-.022,2.477,2.477,0,0,1-.9072-.5444,2.4045,2.4045,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4844a2.2061,2.2061,0,0,0,.1.5884,1.4346,1.4346,0,0,0,.2529.4839,1.1939,1.1939,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2891,1.2891,0,0,0,.8906-.3247,1.3156,1.3156,0,0,0,.1924-1.5566.9794.9794,0,0,0-.4346-.3354,1.8309,1.8309,0,0,0-.5771-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,147.9307,194.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M154.916,192.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2814,3.2814,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,154.916,192.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,153.6016,194.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_37" data-name="37">
    <G id="_37-2" data-name="37">
      <Circle
        cx={151}
        cy={151}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M147.9307,150.0547a1.6918,1.6918,0,0,0,.5332-.1265,1.0241,1.0241,0,0,0,.4072-.3027.8159.8159,0,0,0,.1592-.5278.914.914,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0657,1.0657,0,0,0-.8965.3906,1.5113,1.5113,0,0,0-.291.9844h-1.4854a3.2571,3.2571,0,0,1,.2148-1.0835,2.4666,2.4666,0,0,1,.5391-.8418,2.3807,2.3807,0,0,1,.83-.5444,2.8993,2.8993,0,0,1,1.0781-.1924,3.22,3.22,0,0,1,.9238.1377,2.6328,2.6328,0,0,1,.83.4121,2.2214,2.2214,0,0,1,.6.6714,1.7746,1.7746,0,0,1,.2314.9126,1.8225,1.8225,0,0,1-.27.99,1.3507,1.3507,0,0,1-.8086.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7922,2.7922,0,0,1-.9131.4839,3.72,3.72,0,0,1-2.2607-.022,2.477,2.477,0,0,1-.9072-.5444,2.4045,2.4045,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4844a2.2061,2.2061,0,0,0,.1.5884,1.4346,1.4346,0,0,0,.2529.4839,1.1939,1.1939,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2891,1.2891,0,0,0,.8906-.3247,1.3156,1.3156,0,0,0,.1924-1.5566.9794.9794,0,0,0-.4346-.3354,1.8309,1.8309,0,0,0-.5771-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,147.9307,150.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M155.6143,149.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611h-1.6719a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523v-1.4521h5.2578v1.3423A5.4762,5.4762,0,0,0,155.6143,149.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_38" data-name="38">
    <G id="_38-2" data-name="38">
      <Circle
        cx={179.8057}
        cy={102}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M176.7363,101.0547a1.6916,1.6916,0,0,0,.5337-.1265,1.0191,1.0191,0,0,0,.4067-.3027.816.816,0,0,0,.16-.5278.9154.9154,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0644,1.0644,0,0,0-.8965.3906,1.5115,1.5115,0,0,0-.2915.9844h-1.4854a3.2693,3.2693,0,0,1,.2148-1.0835,2.4739,2.4739,0,0,1,.5391-.8418,2.3872,2.3872,0,0,1,.8306-.5444,2.8985,2.8985,0,0,1,1.0776-.1924,3.2229,3.2229,0,0,1,.9243.1377,2.638,2.638,0,0,1,.83.4121,2.2344,2.2344,0,0,1,.6.6714,1.7743,1.7743,0,0,1,.231.9126,1.8225,1.8225,0,0,1-.27.99,1.351,1.351,0,0,1-.8081.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8067,1.8067,0,0,1,.3628,1.1328,2.3848,2.3848,0,0,1-.2363,1.0781,2.3551,2.3551,0,0,1-.6328.792,2.7947,2.7947,0,0,1-.9126.4839,3.72,3.72,0,0,1-2.2607-.022,2.4791,2.4791,0,0,1-.9077-.5444,2.4107,2.4107,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4849a2.2058,2.2058,0,0,0,.0991.5884,1.4346,1.4346,0,0,0,.2529.4839,1.2031,1.2031,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2874,1.2874,0,0,0,.8906-.3247,1.3168,1.3168,0,0,0,.1929-1.5566.9821.9821,0,0,0-.4346-.3354,1.8369,1.8369,0,0,0-.5776-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,176.7363,101.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M180.51,98.9756a2.1047,2.1047,0,0,1,.6-.66,2.69,2.69,0,0,1,.83-.396,3.3922,3.3922,0,0,1,.9351-.1318,2.9669,2.9669,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9417,1.9417,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.7867,1.7867,0,0,1-.2808,1.001,1.5478,1.5478,0,0,1-.8413.6162v.022a1.7513,1.7513,0,0,1,1.0669.6543,1.9908,1.9908,0,0,1,.374,1.2266,2.1818,2.1818,0,0,1-.2476,1.0669,2.2584,2.2584,0,0,1-.6543.748,2.9232,2.9232,0,0,1-.9238.4458,3.8239,3.8239,0,0,1-1.0562.1484,4.2329,4.2329,0,0,1-1.0835-.1377,2.791,2.791,0,0,1-.9351-.4346,2.1355,2.1355,0,0,1-.9077-1.8257,1.9621,1.9621,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4285,1.4285,0,0,1-.8472-.583,1.9078,1.9078,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2931,1.2931,0,0,0,.2915.4126,1.2571,1.2571,0,0,0,.4341.2637,1.5092,1.5092,0,0,0,.5283.0938,1.407,1.407,0,0,0,.5225-.0937,1.2976,1.2976,0,0,0,.418-.2637,1.1611,1.1611,0,0,0,.28-.4126,1.373,1.373,0,0,0,.0991-.5278,1.173,1.173,0,0,0-.1045-.5,1.2089,1.2089,0,0,0-.2861-.3906,1.273,1.273,0,0,0-.418-.2529,1.4566,1.4566,0,0,0-.5112-.0884,1.51,1.51,0,0,0-.9683.314,1.0891,1.0891,0,0,0-.396.9072A1.2805,1.2805,0,0,0,181.6318,103.8486Zm.418-3.0635a1.354,1.354,0,0,0,.8247.2583,1.2975,1.2975,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4568,1.4568,0,0,0-.0439-.3354.9313.9313,0,0,0-.1709-.3467.9666.9666,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3942,1.3942,0,0,0-.4453.0713,1.2113,1.2113,0,0,0-.3794.2036.9133.9133,0,0,0-.2588.33,1.0743,1.0743,0,0,0-.0933.4619A.8759.8759,0,0,0,182.05,100.7852Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_39" data-name="39">
    <G id="_39-2" data-name="39">
      <Circle
        cx={105}
        cy={67}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M101.9307,66.0547a1.6918,1.6918,0,0,0,.5332-.1265,1.0241,1.0241,0,0,0,.4072-.3027.8159.8159,0,0,0,.1592-.5278.914.914,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0657,1.0657,0,0,0-.8965.3906,1.5113,1.5113,0,0,0-.291.9844H99.2686a3.2571,3.2571,0,0,1,.2148-1.0835,2.4666,2.4666,0,0,1,.5391-.8418,2.3807,2.3807,0,0,1,.83-.5444,2.8993,2.8993,0,0,1,1.0781-.1924,3.22,3.22,0,0,1,.9238.1377,2.6328,2.6328,0,0,1,.83.4121,2.2214,2.2214,0,0,1,.6.6714,1.7746,1.7746,0,0,1,.2314.9126,1.8225,1.8225,0,0,1-.27.99,1.3507,1.3507,0,0,1-.8086.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7922,2.7922,0,0,1-.9131.4839,3.72,3.72,0,0,1-2.2607-.022,2.477,2.477,0,0,1-.9072-.5444,2.4045,2.4045,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4844a2.2061,2.2061,0,0,0,.1.5884,1.4346,1.4346,0,0,0,.2529.4839,1.1939,1.1939,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2891,1.2891,0,0,0,.8906-.3247,1.3156,1.3156,0,0,0,.1924-1.5566.9794.9794,0,0,0-.4346-.3354,1.8309,1.8309,0,0,0-.5771-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,101.9307,66.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M107.2,69.3325a.9051.9051,0,0,0,.6816.2861,1.0127,1.0127,0,0,0,.7041-.2476,1.84,1.84,0,0,0,.4395-.605,3.0855,3.0855,0,0,0,.2373-.7646,7.235,7.235,0,0,0,.0928-.7261l-.0215-.022a1.867,1.867,0,0,1-.748.66,2.4225,2.4225,0,0,1-1.958-.0166,2.4216,2.4216,0,0,1-.8027-.5771,2.2115,2.2115,0,0,1-.4512-.8032,2.9942,2.9942,0,0,1-.1436-.9131,3.1214,3.1214,0,0,1,.1924-1.1055,2.6528,2.6528,0,0,1,.5508-.8911,2.6135,2.6135,0,0,1,.8525-.5991,2.6693,2.6693,0,0,1,1.1-.22,2.7342,2.7342,0,0,1,1.4463.3467,2.66,2.66,0,0,1,.9072.9126,3.7968,3.7968,0,0,1,.4736,1.2817,7.93,7.93,0,0,1,.1318,1.4409,6.3194,6.3194,0,0,1-.165,1.43,4.1783,4.1783,0,0,1-.5283,1.2925,2.9174,2.9174,0,0,1-.9346.9351,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1377,2.2254,2.2254,0,0,1-.7588-.4126,2.2022,2.2022,0,0,1-.5391-.6709,2.6613,2.6613,0,0,1-.2754-.9019h1.4854A1.3249,1.3249,0,0,0,107.2,69.3325Zm1.3193-2.5132a1.1033,1.1033,0,0,0,.3848-.314,1.3634,1.3634,0,0,0,.2314-.4561,1.9187,1.9187,0,0,0,.0771-.5449,1.6908,1.6908,0,0,0-.083-.5225,1.4775,1.4775,0,0,0-.2412-.4619,1.2,1.2,0,0,0-.3906-.3242,1.1237,1.1237,0,0,0-.5283-.1211,1.01,1.01,0,0,0-.4951.1211,1.2051,1.2051,0,0,0-.374.3188,1.37,1.37,0,0,0-.23.4512,1.75,1.75,0,0,0-.0771.5166,1.9846,1.9846,0,0,0,.0713.5337,1.4809,1.4809,0,0,0,.2148.4619,1.0907,1.0907,0,0,0,.3682.33,1.0478,1.0478,0,0,0,.5225.1265A1.2182,1.2182,0,0,0,108.52,66.8193Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_40" data-name="40">
    <G id="_40-2" data-name="40">
      <Circle
        cx={180}
        cy={27}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M174.06,28.8594V27.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854V28.8594Zm3.2227-3.96-1.99,2.6733h2.0234V24.8994Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M180.4561,24.8721a3.3966,3.3966,0,0,1,.61-1.2266,2.1882,2.1882,0,0,1,.8965-.66,2.9721,2.9721,0,0,1,1.084-.1982,3.0029,3.0029,0,0,1,1.0947.1982,2.2217,2.2217,0,0,1,.9014.66,3.34,3.34,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.02,7.02,0,0,1-.2256,1.93,3.3383,3.3383,0,0,1-.6162,1.2378,2.2262,2.2262,0,0,1-.9014.66,3.0029,3.0029,0,0,1-1.0947.1982,2.9721,2.9721,0,0,1-1.084-.1982,2.1926,2.1926,0,0,1-.8965-.66,3.3949,3.3949,0,0,1-.61-1.2378,7.02,7.02,0,0,1-.2256-1.93A6.7593,6.7593,0,0,1,180.4561,24.8721Zm1.3584,2.6841a4.2734,4.2734,0,0,0,.1377.9019,1.9433,1.9433,0,0,0,.3682.7427.888.888,0,0,0,.7266.3081.9151.9151,0,0,0,.7422-.3081,1.885,1.885,0,0,0,.374-.7427,4.2734,4.2734,0,0,0,.1377-.9019q.022-.4673.0225-.7974c0-.1323-.002-.2915-.0059-.4785a5.3831,5.3831,0,0,0-.1543-1.166,1.8185,1.8185,0,0,0-.2139-.5225,1.1824,1.1824,0,0,0-.3633-.374.9685.9685,0,0,0-.5391-.1431.94.94,0,0,0-.5332.1431,1.1408,1.1408,0,0,0-.3525.374,2.0364,2.0364,0,0,0-.2148.5225,4.05,4.05,0,0,0-.1094.5884q-.0337.2966-.0391.5776c-.0029.187-.0049.3462-.0049.4785Q181.793,27.0884,181.8145,27.5562Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_41" data-name="41">
    <G id="_41-2" data-name="41">
      <Circle
        cx={229}
        cy={27}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M223.06,28.8594V27.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854V28.8594Zm3.2227-3.96-1.99,2.6733h2.0234V24.8994Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M231.75,30.6416V25.6475h-1.9365V24.4707a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_42" data-name="42">
    <G id="_42-2" data-name="42">
      <Circle
        cx={375}
        cy={153}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M369.0591,154.8594v-1.43l3.3442-4.4883H373.8v4.6313h1.0229v1.2866H373.8v1.7822h-1.4849v-1.7822Zm3.2231-3.96-1.9907,2.6733h2.0239v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M375.5605,150.6743a2.8464,2.8464,0,0,1,.5278-.99,2.394,2.394,0,0,1,.8857-.66,3.0053,3.0053,0,0,1,1.2266-.2363,3.0675,3.0675,0,0,1,1.0063.165,2.5837,2.5837,0,0,1,.8413.4731,2.2406,2.2406,0,0,1,.5776.7588,2.3272,2.3272,0,0,1,.2144,1.0122,2.4338,2.4338,0,0,1-.187,1.001,2.6194,2.6194,0,0,1-.4946.7422,4.2378,4.2378,0,0,1-.6987.5889q-.39.2637-.7866.5225t-.77.5552a3.49,3.49,0,0,0-.66.6934h3.6406v1.3418H375.23a3.2094,3.2094,0,0,1,.1924-1.166,3.1073,3.1073,0,0,1,.5225-.8853,4.5808,4.5808,0,0,1,.7759-.7207q.4453-.33.94-.6709.2527-.1758.5391-.3574a3.5865,3.5865,0,0,0,.5225-.4019,2.139,2.139,0,0,0,.396-.4946,1.232,1.232,0,0,0,.1592-.6274,1.16,1.16,0,0,0-.3242-.8745,1.146,1.146,0,0,0-.8306-.3135,1.012,1.012,0,0,0-.5776.16,1.1894,1.1894,0,0,0-.3794.418,1.9388,1.9388,0,0,0-.2036.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4956A3.683,3.683,0,0,1,375.5605,150.6743Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_43" data-name="43">
    <G id="_43-2" data-name="43">
      <Circle
        cx={419}
        cy={153}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M413.06,154.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M422.0469,152.0547a1.6918,1.6918,0,0,0,.5332-.1265,1.0241,1.0241,0,0,0,.4072-.3027.8159.8159,0,0,0,.1592-.5278.914.914,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0657,1.0657,0,0,0-.8965.3906,1.5113,1.5113,0,0,0-.291.9844h-1.4854a3.2571,3.2571,0,0,1,.2148-1.0835,2.4666,2.4666,0,0,1,.5391-.8418,2.3807,2.3807,0,0,1,.83-.5444,2.8993,2.8993,0,0,1,1.0781-.1924,3.22,3.22,0,0,1,.9238.1377,2.6328,2.6328,0,0,1,.83.4121,2.2214,2.2214,0,0,1,.6.6714,1.7746,1.7746,0,0,1,.2314.9126,1.8225,1.8225,0,0,1-.27.99,1.3507,1.3507,0,0,1-.8086.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7922,2.7922,0,0,1-.9131.4839,3.72,3.72,0,0,1-2.2607-.022,2.477,2.477,0,0,1-.9072-.5444,2.4045,2.4045,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4844a2.2061,2.2061,0,0,0,.1.5884,1.4346,1.4346,0,0,0,.2529.4839,1.1939,1.1939,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2891,1.2891,0,0,0,.8906-.3247,1.3156,1.3156,0,0,0,.1924-1.5566.9794.9794,0,0,0-.4346-.3354,1.8309,1.8309,0,0,0-.5771-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,422.0469,152.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_44" data-name="44">
    <G id="_44-2" data-name="44">
      <Circle
        cx={463}
        cy={153}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M457.06,154.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M463.1758,154.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866H467.917v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_45" data-name="45">
    <G id="_45-2" data-name="45">
      <Circle
        cx={507}
        cy={153}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M501.06,154.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M509.32,150.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615H508.76a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573H512.5v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_46" data-name="46">
    <G id="_46-2" data-name="46">
      <Circle
        cx={557}
        cy={153}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M551.06,154.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M560.916,150.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2814,3.2814,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,560.916,150.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,559.6016,152.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_47" data-name="47">
    <G id="_47-2" data-name="47">
      <Circle
        cx={477}
        cy={221}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M471.06,222.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M481.6143,219.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611h-1.6719a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523v-1.4521h5.2578v1.3423A5.4762,5.4762,0,0,0,481.6143,219.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_48" data-name="48">
    <G id="_48-2" data-name="48">
      <Circle
        cx={521}
        cy={221}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M515.06,222.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M521.7041,217.9756a2.0989,2.0989,0,0,1,.6-.66,2.6842,2.6842,0,0,1,.83-.396,3.3861,3.3861,0,0,1,.9346-.1318,2.9652,2.9652,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9277,1.9277,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.79,1.79,0,0,1-.28,1.001,1.5508,1.5508,0,0,1-.8418.6162v.022a1.7539,1.7539,0,0,1,1.0674.6543,1.9939,1.9939,0,0,1,.374,1.2266,2.1819,2.1819,0,0,1-.248,1.0669,2.2529,2.2529,0,0,1-.6543.748,2.9181,2.9181,0,0,1-.9238.4458,3.8179,3.8179,0,0,1-1.0557.1484,4.2394,4.2394,0,0,1-1.084-.1377,2.7841,2.7841,0,0,1-.9346-.4346,2.1374,2.1374,0,0,1-.9082-1.8257,1.9651,1.9651,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2918,1.2918,0,0,0,.291.4126,1.2593,1.2593,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.3029,1.3029,0,0,0,.418-.2637,1.1675,1.1675,0,0,0,.28-.4126,1.3728,1.3728,0,0,0,.0986-.5278,1.1658,1.1658,0,0,0-.1045-.5,1.2018,1.2018,0,0,0-.2861-.3906,1.2631,1.2631,0,0,0-.418-.2529,1.4539,1.4539,0,0,0-.5107-.0884,1.511,1.511,0,0,0-.9687.314,1.0888,1.0888,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,522.8262,222.8486Zm.418-3.0635a1.3525,1.3525,0,0,0,.8242.2583,1.2966,1.2966,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4305,1.4305,0,0,0-.0439-.3354.9168.9168,0,0,0-.1709-.3467.9625.9625,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3986,1.3986,0,0,0-.4453.0713,1.2088,1.2088,0,0,0-.3789.2036.9133.9133,0,0,0-.2588.33,1.0671,1.0671,0,0,0-.0937.4619A.8751.8751,0,0,0,523.2441,219.7852Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_49" data-name="49">
    <G id="_49-2" data-name="49">
      <Circle
        cx={648}
        cy={212}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M642.06,213.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866h-1.0225v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M650.2,214.3325a.9051.9051,0,0,0,.6816.2861,1.0127,1.0127,0,0,0,.7041-.2476,1.84,1.84,0,0,0,.4395-.605,3.0855,3.0855,0,0,0,.2373-.7646,7.235,7.235,0,0,0,.0928-.7261l-.0215-.022a1.867,1.867,0,0,1-.748.66,2.4225,2.4225,0,0,1-1.958-.0166,2.4216,2.4216,0,0,1-.8027-.5771,2.2115,2.2115,0,0,1-.4512-.8032,2.9942,2.9942,0,0,1-.1436-.9131,3.1214,3.1214,0,0,1,.1924-1.1055,2.6528,2.6528,0,0,1,.5508-.8911,2.6135,2.6135,0,0,1,.8525-.5991,2.6693,2.6693,0,0,1,1.1-.22,2.7342,2.7342,0,0,1,1.4463.3467,2.66,2.66,0,0,1,.9072.9126,3.7968,3.7968,0,0,1,.4736,1.2817,7.93,7.93,0,0,1,.1318,1.4409,6.3194,6.3194,0,0,1-.165,1.43,4.1783,4.1783,0,0,1-.5283,1.2925,2.9174,2.9174,0,0,1-.9346.9351,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1377,2.2254,2.2254,0,0,1-.7588-.4126,2.2022,2.2022,0,0,1-.5391-.6709,2.6613,2.6613,0,0,1-.2754-.9019h1.4854A1.3249,1.3249,0,0,0,650.2,214.3325Zm1.3193-2.5132a1.1033,1.1033,0,0,0,.3848-.314,1.3634,1.3634,0,0,0,.2314-.4561,1.9187,1.9187,0,0,0,.0771-.5449,1.6908,1.6908,0,0,0-.083-.5225,1.4775,1.4775,0,0,0-.2412-.4619,1.2,1.2,0,0,0-.3906-.3242,1.1237,1.1237,0,0,0-.5283-.1211,1.01,1.01,0,0,0-.4951.1211,1.2051,1.2051,0,0,0-.374.3188,1.37,1.37,0,0,0-.23.4512,1.75,1.75,0,0,0-.0771.5166,1.9846,1.9846,0,0,0,.0713.5337,1.4809,1.4809,0,0,0,.2148.4619,1.0907,1.0907,0,0,0,.3682.33,1.0478,1.0478,0,0,0,.5225.1265A1.2182,1.2182,0,0,0,651.52,211.8193Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_50" data-name="50">
    <G id="_50-2" data-name="50">
      <Circle
        cx={648}
        cy={256}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M644.2041,253.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615h1.5615a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M648.4561,253.8721a3.3966,3.3966,0,0,1,.61-1.2266,2.1882,2.1882,0,0,1,.8965-.66,2.9721,2.9721,0,0,1,1.084-.1982,3.0029,3.0029,0,0,1,1.0947.1982,2.2217,2.2217,0,0,1,.9014.66,3.34,3.34,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.02,7.02,0,0,1-.2256,1.93,3.3383,3.3383,0,0,1-.6162,1.2378,2.2262,2.2262,0,0,1-.9014.66,3.0029,3.0029,0,0,1-1.0947.1982,2.9721,2.9721,0,0,1-1.084-.1982,2.1926,2.1926,0,0,1-.8965-.66,3.3949,3.3949,0,0,1-.61-1.2378,7.02,7.02,0,0,1-.2256-1.93A6.7593,6.7593,0,0,1,648.4561,253.8721Zm1.3584,2.6841a4.2734,4.2734,0,0,0,.1377.9019,1.9433,1.9433,0,0,0,.3682.7427.888.888,0,0,0,.7266.3081.9151.9151,0,0,0,.7422-.3081,1.885,1.885,0,0,0,.374-.7427,4.2734,4.2734,0,0,0,.1377-.9019q.022-.4673.0225-.7974c0-.1323-.002-.2915-.0059-.4785a5.3831,5.3831,0,0,0-.1543-1.166,1.8185,1.8185,0,0,0-.2139-.5225,1.1824,1.1824,0,0,0-.3633-.374.9685.9685,0,0,0-.5391-.1431.94.94,0,0,0-.5332.1431,1.1408,1.1408,0,0,0-.3525.374,2.0364,2.0364,0,0,0-.2148.5225,4.05,4.05,0,0,0-.1094.5884q-.0337.2966-.0391.5776c-.0029.187-.0049.3462-.0049.4785Q649.793,256.0884,649.8145,256.5562Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_51" data-name="51">
    <G id="_51-2" data-name="51">
      <Circle
        cx={648}
        cy={300}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M644.2041,297.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6509,2.6509,0,0,1-.2314,1.1055,2.8152,2.8152,0,0,1-.6211.8857,2.7763,2.7763,0,0,1-.9072.5771,2.8237,2.8237,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6724,2.6724,0,0,1-.9072-.4561,2.2724,2.2724,0,0,1-.6328-.7646,2.36,2.36,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2089,1.2089,0,0,0,.5557-.127,1.3141,1.3141,0,0,0,.418-.33,1.48,1.48,0,0,0,.2646-.4727,1.7056,1.7056,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M650.75,303.6416v-4.9941h-1.9365v-1.1768a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_52" data-name="52">
    <G id="_52-2" data-name="52">
      <Circle
        cx={648}
        cy={344}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M644.2041,341.2285l-.3076,1.749.0225.0225a1.9309,1.9309,0,0,1,.6816-.457,2.5558,2.5558,0,0,1,1.8369.0723,2.2139,2.2139,0,0,1,.7422.5605,2.4228,2.4228,0,0,1,.4619.83,3.1958,3.1958,0,0,1,.16,1.0176,2.6477,2.6477,0,0,1-.2314,1.1055,2.8042,2.8042,0,0,1-.6211.8857,2.76,2.76,0,0,1-.9072.5771,2.8423,2.8423,0,0,1-1.1006.1934,3.8746,3.8746,0,0,1-1.0723-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2724,2.2724,0,0,1-.6328-.7646,2.3567,2.3567,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.3417,1.3417,0,0,0,.418-.33,1.4955,1.4955,0,0,0,.2646-.4736,1.7013,1.7013,0,0,0,.0928-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3239,1.3239,0,0,0-.2637-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3461,1.3461,0,0,0-.5615-.11,1.3959,1.3959,0,0,0-.6816.1484,1.6078,1.6078,0,0,0-.4951.4688h-1.4082l.76-4.2578h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M648.5605,341.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418H648.23a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,648.5605,341.6738Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_53" data-name="53">
    <G id="_53-2" data-name="53">
      <Circle
        cx={648}
        cy={388}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M644.2041,385.2285l-.3076,1.749.0225.0225a1.9309,1.9309,0,0,1,.6816-.457,2.5558,2.5558,0,0,1,1.8369.0723,2.2139,2.2139,0,0,1,.7422.5605,2.4228,2.4228,0,0,1,.4619.83,3.1958,3.1958,0,0,1,.16,1.0176,2.6477,2.6477,0,0,1-.2314,1.1055,2.8042,2.8042,0,0,1-.6211.8857,2.76,2.76,0,0,1-.9072.5771,2.8423,2.8423,0,0,1-1.1006.1934,3.8746,3.8746,0,0,1-1.0723-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2724,2.2724,0,0,1-.6328-.7646,2.3567,2.3567,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.3417,1.3417,0,0,0,.418-.33,1.4955,1.4955,0,0,0,.2646-.4736,1.7013,1.7013,0,0,0,.0928-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3239,1.3239,0,0,0-.2637-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3461,1.3461,0,0,0-.5615-.11,1.3959,1.3959,0,0,0-.6816.1484,1.6078,1.6078,0,0,0-.4951.4688h-1.4082l.76-4.2578h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M651.0469,387.0547a1.679,1.679,0,0,0,.5332-.127,1.0151,1.0151,0,0,0,.4072-.3027.8126.8126,0,0,0,.1592-.5273.9156.9156,0,0,0-.33-.76,1.18,1.18,0,0,0-.7588-.2637,1.067,1.067,0,0,0-.8965.3906,1.5131,1.5131,0,0,0-.291.9844h-1.4854a3.2567,3.2567,0,0,1,.2148-1.083,2.4713,2.4713,0,0,1,.5391-.8418,2.3727,2.3727,0,0,1,.83-.5439,2.88,2.88,0,0,1,1.0781-.1934,3.2211,3.2211,0,0,1,.9238.1387,2.6225,2.6225,0,0,1,.83.4121,2.2139,2.2139,0,0,1,.6.6709,1.7751,1.7751,0,0,1,.2314.9131,1.8272,1.8272,0,0,1-.27.99,1.3493,1.3493,0,0,1-.8086.582v.0225a1.6757,1.6757,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7912,2.7912,0,0,1-.9131.4834,3.7053,3.7053,0,0,1-2.2607-.0215,2.4846,2.4846,0,0,1-.9072-.5449,2.4026,2.4026,0,0,1-.5771-.874,3.0787,3.0787,0,0,1-.1924-1.1885h1.4844a2.2064,2.2064,0,0,0,.1.5889,1.4322,1.4322,0,0,0,.2529.4834,1.19,1.19,0,0,0,.4121.3252,1.323,1.323,0,0,0,.5889.1211,1.2872,1.2872,0,0,0,.8906-.3252,1.3155,1.3155,0,0,0,.1924-1.5566.9783.9783,0,0,0-.4346-.335,1.8175,1.8175,0,0,0-.5771-.1211q-.3135-.0161-.6-.0166v-1.1A3.3088,3.3088,0,0,0,651.0469,387.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_54" data-name="54">
    <G id="_54-2" data-name="54">
      <Circle
        cx={577}
        cy={254}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M573.2041,251.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615h1.5615a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M577.1758,255.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866H581.917v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234v-2.6733Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_55" data-name="55">
    <G id="_55-2" data-name="55">
      <Circle
        cx={577}
        cy={297}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M573.2041,294.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615h1.5615a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M579.32,294.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615H578.76a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573H582.5v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_56" data-name="56">
    <G id="_56-2" data-name="56">
      <Circle
        cx={577}
        cy={342}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M573.2041,339.2285l-.3076,1.749.0225.0225a1.9309,1.9309,0,0,1,.6816-.457,2.5558,2.5558,0,0,1,1.8369.0723,2.2139,2.2139,0,0,1,.7422.5605,2.4228,2.4228,0,0,1,.4619.83,3.1958,3.1958,0,0,1,.16,1.0176,2.6477,2.6477,0,0,1-.2314,1.1055,2.8042,2.8042,0,0,1-.6211.8857,2.76,2.76,0,0,1-.9072.5771,2.8423,2.8423,0,0,1-1.1006.1934,3.8746,3.8746,0,0,1-1.0723-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2724,2.2724,0,0,1-.6328-.7646,2.3567,2.3567,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.3417,1.3417,0,0,0,.418-.33,1.4955,1.4955,0,0,0,.2646-.4736,1.7013,1.7013,0,0,0,.0928-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3239,1.3239,0,0,0-.2637-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3461,1.3461,0,0,0-.5615-.11,1.3959,1.3959,0,0,0-.6816.1484,1.6078,1.6078,0,0,0-.4951.4688h-1.4082l.76-4.2578h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M580.916,339.25a.9132.9132,0,0,0-.6826-.2852,1.0177,1.0177,0,0,0-.6982.2471,1.8227,1.8227,0,0,0-.4453.6045,3.2892,3.2892,0,0,0-.2422.7656,4.7432,4.7432,0,0,0-.0879.7256l.0225.0225a1.861,1.861,0,0,1,.7471-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4382,2.4382,0,0,1,.8037.5781,2.2341,2.2341,0,0,1,.4512.8027,3.0255,3.0255,0,0,1,.1426.9131,3.1234,3.1234,0,0,1-.1924,1.1055,2.6623,2.6623,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0545,3.0545,0,0,1-2.541-.1328,2.6592,2.6592,0,0,1-.9131-.9062,3.77,3.77,0,0,1-.4736-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3744,6.3744,0,0,1,.165-1.43,4.1706,4.1706,0,0,1,.5283-1.292,2.9768,2.9768,0,0,1,.9346-.9414,2.5571,2.5571,0,0,1,1.3975-.3633,2.9206,2.9206,0,0,1,.9238.1436,2.3584,2.3584,0,0,1,.7588.4131,2.119,2.119,0,0,1,.5391.665,2.6533,2.6533,0,0,1,.2754.9131h-1.4854A1.33,1.33,0,0,0,580.916,339.25Zm-1.3145,2.5137a1.0959,1.0959,0,0,0-.3906.3145,1.3676,1.3676,0,0,0-.2314.4561,1.9219,1.9219,0,0,0-.0771.5439,1.7289,1.7289,0,0,0,.083.5234,1.4443,1.4443,0,0,0,.2422.4609,1.1772,1.1772,0,0,0,.3906.3252,1.1139,1.1139,0,0,0,.5273.1211,1.0015,1.0015,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3813,1.3813,0,0,0,.2314-.4512,1.78,1.78,0,0,0,.0771-.5166,1.9968,1.9968,0,0,0-.0723-.5342,1.4906,1.4906,0,0,0-.2139-.4609,1.1033,1.1033,0,0,0-.3691-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2342,1.2342,0,0,0,579.6016,341.7637Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_57" data-name="57">
    <G id="_57-2" data-name="57">
      <Circle
        cx={581.5}
        cy={446}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M577.7041,443.2285l-.3076,1.749.0225.0225a1.9309,1.9309,0,0,1,.6816-.457,2.5558,2.5558,0,0,1,1.8369.0723,2.2139,2.2139,0,0,1,.7422.5605,2.4228,2.4228,0,0,1,.4619.83,3.1958,3.1958,0,0,1,.16,1.0176,2.6477,2.6477,0,0,1-.2314,1.1055,2.8042,2.8042,0,0,1-.6211.8857,2.76,2.76,0,0,1-.9072.5771,2.8423,2.8423,0,0,1-1.1006.1934,3.8746,3.8746,0,0,1-1.0723-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2724,2.2724,0,0,1-.6328-.7646,2.3567,2.3567,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.3417,1.3417,0,0,0,.418-.33,1.4955,1.4955,0,0,0,.2646-.4736,1.7013,1.7013,0,0,0,.0928-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3239,1.3239,0,0,0-.2637-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3461,1.3461,0,0,0-.5615-.11,1.3959,1.3959,0,0,0-.6816.1484,1.6078,1.6078,0,0,0-.4951.4688h-1.4082l.76-4.2578h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M586.1143,444.582a9.1224,9.1224,0,0,0-.7812,1.6387,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611h-1.6719a10.4846,10.4846,0,0,1,.8086-3.3213,11.7672,11.7672,0,0,1,1.7764-2.9268h-3.6523v-1.4521h5.2578v1.3418A5.4818,5.4818,0,0,0,586.1143,444.582Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_58" data-name="58">
    <G id="_58-2" data-name="58">
      <Circle
        cx={537.5}
        cy={446}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M533.7041,443.2285l-.3076,1.749.0225.0225a1.9309,1.9309,0,0,1,.6816-.457,2.5558,2.5558,0,0,1,1.8369.0723,2.2139,2.2139,0,0,1,.7422.5605,2.4228,2.4228,0,0,1,.4619.83,3.1958,3.1958,0,0,1,.16,1.0176,2.6477,2.6477,0,0,1-.2314,1.1055,2.8042,2.8042,0,0,1-.6211.8857,2.76,2.76,0,0,1-.9072.5771,2.8423,2.8423,0,0,1-1.1006.1934,3.8746,3.8746,0,0,1-1.0723-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2724,2.2724,0,0,1-.6328-.7646,2.3567,2.3567,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.3417,1.3417,0,0,0,.418-.33,1.4955,1.4955,0,0,0,.2646-.4736,1.7013,1.7013,0,0,0,.0928-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3239,1.3239,0,0,0-.2637-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3461,1.3461,0,0,0-.5615-.11,1.3959,1.3959,0,0,0-.6816.1484,1.6078,1.6078,0,0,0-.4951.4688h-1.4082l.76-4.2578h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M538.2041,442.9756a2.0989,2.0989,0,0,1,.6-.66,2.6723,2.6723,0,0,1,.83-.3955,3.3873,3.3873,0,0,1,.9346-.1328,2.973,2.973,0,0,1,1.21.2207,2.51,2.51,0,0,1,.7979.5332,1.9322,1.9322,0,0,1,.4346.6709,1.8891,1.8891,0,0,1,.1318.6436,1.7926,1.7926,0,0,1-.28,1.001,1.5531,1.5531,0,0,1-.8418.6162v.0215a1.76,1.76,0,0,1,1.0674.6543,1.9949,1.9949,0,0,1,.374,1.2266,2.18,2.18,0,0,1-.248,1.0674,2.2577,2.2577,0,0,1-.6543.748,2.93,2.93,0,0,1-.9238.4463,3.8549,3.8549,0,0,1-1.0557.1484,4.24,4.24,0,0,1-1.084-.1387,2.7918,2.7918,0,0,1-.9346-.4336,2.1391,2.1391,0,0,1-.9082-1.8262,1.9675,1.9675,0,0,1,.38-1.2324,1.8348,1.8348,0,0,1,1.0723-.66v-.0215a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2994,1.2994,0,0,0,.291.4131,1.2744,1.2744,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.32,1.32,0,0,0,.418-.2637,1.1738,1.1738,0,0,0,.28-.4131,1.3718,1.3718,0,0,0,.0986-.5283,1.1635,1.1635,0,0,0-.1045-.5,1.1967,1.1967,0,0,0-.2861-.3906,1.2713,1.2713,0,0,0-.418-.2529,1.4541,1.4541,0,0,0-.5107-.0889,1.5141,1.5141,0,0,0-.9687.3145,1.0894,1.0894,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,539.3262,447.8486Zm.418-3.0635a1.3554,1.3554,0,0,0,.8242.2578,1.2992,1.2992,0,0,0,.8252-.2578.9.9,0,0,0,.33-.7539,1.43,1.43,0,0,0-.0439-.335.9133.9133,0,0,0-.1709-.3467.9791.9791,0,0,0-.3516-.2754,1.3658,1.3658,0,0,0-.5889-.1094,1.3986,1.3986,0,0,0-.4453.0713,1.2,1.2,0,0,0-.3789.2041.9092.9092,0,0,0-.2588.33,1.0612,1.0612,0,0,0-.0937.4609A.8754.8754,0,0,0,539.7441,444.7852Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_59" data-name="59">
    <G id="_59-2" data-name="59">
      <Circle
        cx={486.5}
        cy={446}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M482.7041,443.2285l-.3076,1.749.0225.0225a1.9309,1.9309,0,0,1,.6816-.457,2.5558,2.5558,0,0,1,1.8369.0723,2.2139,2.2139,0,0,1,.7422.5605,2.4228,2.4228,0,0,1,.4619.83,3.1958,3.1958,0,0,1,.16,1.0176,2.6477,2.6477,0,0,1-.2314,1.1055,2.8042,2.8042,0,0,1-.6211.8857,2.76,2.76,0,0,1-.9072.5771,2.8423,2.8423,0,0,1-1.1006.1934,3.8746,3.8746,0,0,1-1.0723-.1484,2.6921,2.6921,0,0,1-.9072-.457,2.2724,2.2724,0,0,1-.6328-.7646,2.3567,2.3567,0,0,1-.2471-1.0615h1.5615a1.28,1.28,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2085,1.2085,0,0,0,.5557-.126,1.3417,1.3417,0,0,0,.418-.33,1.4955,1.4955,0,0,0,.2646-.4736,1.7013,1.7013,0,0,0,.0928-.5557,1.7641,1.7641,0,0,0-.0879-.5605,1.3239,1.3239,0,0,0-.2637-.4629,1.2527,1.2527,0,0,0-.418-.3076,1.3461,1.3461,0,0,0-.5615-.11,1.3959,1.3959,0,0,0-.6816.1484,1.6078,1.6078,0,0,0-.4951.4688h-1.4082l.76-4.2578h4.3008v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M488.7,448.332a.9042.9042,0,0,0,.6816.2871,1.013,1.013,0,0,0,.7041-.248,1.8425,1.8425,0,0,0,.4395-.6055,3.0781,3.0781,0,0,0,.2373-.7637,7.2609,7.2609,0,0,0,.0928-.7266l-.0215-.0215a1.8781,1.8781,0,0,1-.748.66,2.3581,2.3581,0,0,1-.99.1973,2.3122,2.3122,0,0,1-.9678-.2148,2.4191,2.4191,0,0,1-.8027-.5762,2.2175,2.2175,0,0,1-.4512-.8037,2.9919,2.9919,0,0,1-.1436-.9131,3.12,3.12,0,0,1,.1924-1.1055,2.6411,2.6411,0,0,1,.5508-.8906,2.6,2.6,0,0,1,.8525-.6,2.6773,2.6773,0,0,1,1.1-.2207,2.73,2.73,0,0,1,1.4463.3477,2.6587,2.6587,0,0,1,.9072.9121,3.7941,3.7941,0,0,1,.4736,1.2813,7.931,7.931,0,0,1,.1318,1.4414,6.3183,6.3183,0,0,1-.165,1.43,4.1762,4.1762,0,0,1-.5283,1.293,2.9189,2.9189,0,0,1-.9346.9355,2.5871,2.5871,0,0,1-1.3975.3574,3.0061,3.0061,0,0,1-.9238-.1387,2.1891,2.1891,0,0,1-1.2979-1.083,2.662,2.662,0,0,1-.2754-.9014h1.4854A1.3219,1.3219,0,0,0,488.7,448.332Zm1.3193-2.5127a1.1074,1.1074,0,0,0,.3848-.3135,1.3729,1.3729,0,0,0,.2314-.457,1.9138,1.9138,0,0,0,.0771-.5449,1.6824,1.6824,0,0,0-.083-.5215,1.4933,1.4933,0,0,0-.2412-.4629,1.2187,1.2187,0,0,0-.3906-.3242,1.13,1.13,0,0,0-.5283-.1211,1.0156,1.0156,0,0,0-.4951.1211,1.2132,1.2132,0,0,0-.374.3193,1.37,1.37,0,0,0-.23.4512,1.752,1.752,0,0,0-.0771.5166,1.9784,1.9784,0,0,0,.0713.5332,1.4915,1.4915,0,0,0,.2148.4629,1.101,1.101,0,0,0,.3682.33,1.0528,1.0528,0,0,0,.5225.126A1.2117,1.2117,0,0,0,490.02,445.8193Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_60" data-name="60">
    <G id="_60-2" data-name="60">
      <Circle
        cx={435}
        cy={446}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M432.8,443.25a.9132.9132,0,0,0-.6826-.2852,1.0177,1.0177,0,0,0-.6982.2471,1.8227,1.8227,0,0,0-.4453.6045,3.2892,3.2892,0,0,0-.2422.7656,4.7432,4.7432,0,0,0-.0879.7256l.0225.0225a1.861,1.861,0,0,1,.7471-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4382,2.4382,0,0,1,.8037.5781,2.2341,2.2341,0,0,1,.4512.8027,3.0255,3.0255,0,0,1,.1426.9131,3.1234,3.1234,0,0,1-.1924,1.1055,2.6623,2.6623,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0545,3.0545,0,0,1-2.541-.1328,2.6592,2.6592,0,0,1-.9131-.9062,3.77,3.77,0,0,1-.4736-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3744,6.3744,0,0,1,.165-1.43,4.1706,4.1706,0,0,1,.5283-1.292,2.9768,2.9768,0,0,1,.9346-.9414,2.5571,2.5571,0,0,1,1.3975-.3633,2.9206,2.9206,0,0,1,.9238.1436,2.3584,2.3584,0,0,1,.7588.4131,2.119,2.119,0,0,1,.5391.665,2.6533,2.6533,0,0,1,.2754.9131h-1.4854A1.33,1.33,0,0,0,432.8,443.25Zm-1.3145,2.5137a1.0959,1.0959,0,0,0-.3906.3145,1.3676,1.3676,0,0,0-.2314.4561,1.9219,1.9219,0,0,0-.0771.5439,1.7289,1.7289,0,0,0,.083.5234,1.4443,1.4443,0,0,0,.2422.4609,1.1772,1.1772,0,0,0,.3906.3252,1.1139,1.1139,0,0,0,.5273.1211,1.0015,1.0015,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3813,1.3813,0,0,0,.2314-.4512,1.78,1.78,0,0,0,.0771-.5166,1.9968,1.9968,0,0,0-.0723-.5342,1.4906,1.4906,0,0,0-.2139-.4609,1.1033,1.1033,0,0,0-.3691-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2342,1.2342,0,0,0,431.4854,445.7637Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M435.4561,443.8721a3.3925,3.3925,0,0,1,.61-1.2266,2.1826,2.1826,0,0,1,.8965-.6592,2.9626,2.9626,0,0,1,1.084-.1992,2.9933,2.9933,0,0,1,1.0947.1992,2.216,2.216,0,0,1,.9014.6592,3.3357,3.3357,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.0235,7.0235,0,0,1-.2256,1.9307,3.3359,3.3359,0,0,1-.6162,1.2373,2.216,2.216,0,0,1-.9014.6592,2.9933,2.9933,0,0,1-1.0947.1992,2.9626,2.9626,0,0,1-1.084-.1992,2.1826,2.1826,0,0,1-.8965-.6592,3.3924,3.3924,0,0,1-.61-1.2373,7.0235,7.0235,0,0,1-.2256-1.9307A6.7593,6.7593,0,0,1,435.4561,443.8721Zm1.3584,2.6846a4.2834,4.2834,0,0,0,.1377.9014,1.9455,1.9455,0,0,0,.3682.7432.8877.8877,0,0,0,.7266.3076.9148.9148,0,0,0,.7422-.3076,1.8871,1.8871,0,0,0,.374-.7432,4.2834,4.2834,0,0,0,.1377-.9014q.022-.4687.0225-.7979c0-.1318-.002-.292-.0059-.4785a5.3936,5.3936,0,0,0-.1543-1.166,1.8243,1.8243,0,0,0-.2139-.5225,1.1773,1.1773,0,0,0-.3633-.374.9727.9727,0,0,0-.5391-.1436.9436.9436,0,0,0-.5332.1436,1.136,1.136,0,0,0-.3525.374,2.0437,2.0437,0,0,0-.2148.5225,4.0322,4.0322,0,0,0-.1094.5889c-.0225.1973-.0352.3906-.0391.5771s-.0049.3467-.0049.4785Q436.793,446.0884,436.8145,446.5566Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_61" data-name="61">
    <G id="_61-2" data-name="61">
      <Circle
        cx={391}
        cy={446}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M388.7993,443.25a.9122.9122,0,0,0-.6821-.2852,1.016,1.016,0,0,0-.6982.2471,1.8173,1.8173,0,0,0-.4458.6045,3.2884,3.2884,0,0,0-.2417.7656,4.8116,4.8116,0,0,0-.0884.7256l.0225.0225a1.8621,1.8621,0,0,1,.7476-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4311,2.4311,0,0,1,.8032.5781,2.2341,2.2341,0,0,1,.4512.8027,3.01,3.01,0,0,1,.1426.9131,3.1125,3.1125,0,0,1-.1924,1.1055,2.6545,2.6545,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0544,3.0544,0,0,1-2.541-.1328,2.6677,2.6677,0,0,1-.9131-.9062,3.7588,3.7588,0,0,1-.4731-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3462,6.3462,0,0,1,.165-1.43,4.17,4.17,0,0,1,.5278-1.292,2.9733,2.9733,0,0,1,.9351-.9414,2.5543,2.5543,0,0,1,1.397-.3633,2.9237,2.9237,0,0,1,.9243.1436,2.3635,2.3635,0,0,1,.7588.4131,2.1258,2.1258,0,0,1,.5391.665,2.6637,2.6637,0,0,1,.2749.9131h-1.4849A1.331,1.331,0,0,0,388.7993,443.25Zm-1.3145,2.5137a1.1,1.1,0,0,0-.3906.3145,1.3577,1.3577,0,0,0-.231.4561,1.9046,1.9046,0,0,0-.0771.5439,1.7283,1.7283,0,0,0,.0825.5234,1.4541,1.4541,0,0,0,.2422.4609,1.1821,1.1821,0,0,0,.3906.3252,1.1159,1.1159,0,0,0,.5278.1211.9983.9983,0,0,0,.5-.1211,1.2258,1.2258,0,0,0,.3687-.3193,1.3709,1.3709,0,0,0,.231-.4512,1.7633,1.7633,0,0,0,.0771-.5166,1.9964,1.9964,0,0,0-.0718-.5342,1.48,1.48,0,0,0-.2144-.4609,1.1017,1.1017,0,0,0-.3687-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2364,1.2364,0,0,0,387.4849,445.7637Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M393.75,449.6416v-4.9941h-1.936v-1.1768a3.6549,3.6549,0,0,0,.7866-.0605,2.0588,2.0588,0,0,0,.6821-.2529,1.6744,1.6744,0,0,0,.5112-.4785,1.7058,1.7058,0,0,0,.2749-.7373h1.2432v7.7Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_62" data-name="62">
    <G id="_62-2" data-name="62">
      <Circle
        cx={521}
        cy={374}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M518.8,371.25a.9132.9132,0,0,0-.6826-.2852,1.0177,1.0177,0,0,0-.6982.2471,1.8227,1.8227,0,0,0-.4453.6045,3.2892,3.2892,0,0,0-.2422.7656,4.7432,4.7432,0,0,0-.0879.7256l.0225.0225a1.861,1.861,0,0,1,.7471-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4382,2.4382,0,0,1,.8037.5781,2.2341,2.2341,0,0,1,.4512.8027,3.0255,3.0255,0,0,1,.1426.9131,3.1234,3.1234,0,0,1-.1924,1.1055,2.6623,2.6623,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0545,3.0545,0,0,1-2.541-.1328,2.6592,2.6592,0,0,1-.9131-.9062,3.77,3.77,0,0,1-.4736-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3744,6.3744,0,0,1,.165-1.43,4.1706,4.1706,0,0,1,.5283-1.292,2.9768,2.9768,0,0,1,.9346-.9414,2.5571,2.5571,0,0,1,1.3975-.3633,2.9206,2.9206,0,0,1,.9238.1436,2.3584,2.3584,0,0,1,.7588.4131,2.119,2.119,0,0,1,.5391.665,2.6533,2.6533,0,0,1,.2754.9131h-1.4854A1.33,1.33,0,0,0,518.8,371.25Zm-1.3145,2.5137a1.0959,1.0959,0,0,0-.3906.3145,1.3676,1.3676,0,0,0-.2314.4561,1.9219,1.9219,0,0,0-.0771.5439,1.7289,1.7289,0,0,0,.083.5234,1.4443,1.4443,0,0,0,.2422.4609,1.1772,1.1772,0,0,0,.3906.3252,1.1139,1.1139,0,0,0,.5273.1211,1.0015,1.0015,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3813,1.3813,0,0,0,.2314-.4512,1.78,1.78,0,0,0,.0771-.5166,1.9968,1.9968,0,0,0-.0723-.5342,1.4906,1.4906,0,0,0-.2139-.4609,1.1033,1.1033,0,0,0-.3691-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2342,1.2342,0,0,0,517.4854,373.7637Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M521.5605,371.6738a2.8567,2.8567,0,0,1,.5283-.99,2.402,2.402,0,0,1,.8857-.66,3.02,3.02,0,0,1,1.2266-.2363,3.0524,3.0524,0,0,1,1.0059.166,2.585,2.585,0,0,1,.8418.4727,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0127,2.4272,2.4272,0,0,1-.1875,1,2.5874,2.5874,0,0,1-.4941.7422,4.2466,4.2466,0,0,1-.6992.59q-.39.2637-.7861.5215t-.7705.5557a3.4747,3.4747,0,0,0-.6592.6934h3.6406v1.3418H521.23a3.22,3.22,0,0,1,.1924-1.166,3.128,3.128,0,0,1,.5225-.8857,4.6245,4.6245,0,0,1,.7764-.7207q.4453-.33.94-.67c.168-.1172.3477-.2373.5391-.3574a3.6508,3.6508,0,0,0,.5225-.4023,2.1576,2.1576,0,0,0,.3955-.4941,1.2277,1.2277,0,0,0,.1592-.6279,1.0993,1.0993,0,0,0-1.1543-1.1885,1.0187,1.0187,0,0,0-.5781.16,1.1923,1.1923,0,0,0-.3789.418,1.9346,1.9346,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6767,3.6767,0,0,1,521.5605,371.6738Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_63" data-name="63">
    <G id="_63-2" data-name="63">
      <Circle
        cx={477}
        cy={374}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M474.8,371.25a.9132.9132,0,0,0-.6826-.2852,1.0177,1.0177,0,0,0-.6982.2471,1.8227,1.8227,0,0,0-.4453.6045,3.2892,3.2892,0,0,0-.2422.7656,4.7432,4.7432,0,0,0-.0879.7256l.0225.0225a1.861,1.861,0,0,1,.7471-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4382,2.4382,0,0,1,.8037.5781,2.2341,2.2341,0,0,1,.4512.8027,3.0255,3.0255,0,0,1,.1426.9131,3.1234,3.1234,0,0,1-.1924,1.1055,2.6623,2.6623,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0545,3.0545,0,0,1-2.541-.1328,2.6592,2.6592,0,0,1-.9131-.9062,3.77,3.77,0,0,1-.4736-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3744,6.3744,0,0,1,.165-1.43,4.1706,4.1706,0,0,1,.5283-1.292,2.9768,2.9768,0,0,1,.9346-.9414,2.5571,2.5571,0,0,1,1.3975-.3633,2.9206,2.9206,0,0,1,.9238.1436,2.3584,2.3584,0,0,1,.7588.4131,2.119,2.119,0,0,1,.5391.665,2.6533,2.6533,0,0,1,.2754.9131h-1.4854A1.33,1.33,0,0,0,474.8,371.25Zm-1.3145,2.5137a1.0959,1.0959,0,0,0-.3906.3145,1.3676,1.3676,0,0,0-.2314.4561,1.9219,1.9219,0,0,0-.0771.5439,1.7289,1.7289,0,0,0,.083.5234,1.4443,1.4443,0,0,0,.2422.4609,1.1772,1.1772,0,0,0,.3906.3252,1.1139,1.1139,0,0,0,.5273.1211,1.0015,1.0015,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3813,1.3813,0,0,0,.2314-.4512,1.78,1.78,0,0,0,.0771-.5166,1.9968,1.9968,0,0,0-.0723-.5342,1.4906,1.4906,0,0,0-.2139-.4609,1.1033,1.1033,0,0,0-.3691-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2342,1.2342,0,0,0,473.4854,373.7637Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M480.0469,373.0547a1.679,1.679,0,0,0,.5332-.127,1.0151,1.0151,0,0,0,.4072-.3027.8126.8126,0,0,0,.1592-.5273.9156.9156,0,0,0-.33-.76,1.18,1.18,0,0,0-.7588-.2637,1.067,1.067,0,0,0-.8965.3906,1.5131,1.5131,0,0,0-.291.9844h-1.4854a3.2567,3.2567,0,0,1,.2148-1.083,2.4713,2.4713,0,0,1,.5391-.8418,2.3727,2.3727,0,0,1,.83-.5439,2.88,2.88,0,0,1,1.0781-.1934,3.2211,3.2211,0,0,1,.9238.1387,2.6225,2.6225,0,0,1,.83.4121,2.2139,2.2139,0,0,1,.6.6709,1.7751,1.7751,0,0,1,.2314.9131,1.8272,1.8272,0,0,1-.27.99,1.3493,1.3493,0,0,1-.8086.582v.0225a1.6757,1.6757,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7912,2.7912,0,0,1-.9131.4834,3.7053,3.7053,0,0,1-2.2607-.0215,2.4846,2.4846,0,0,1-.9072-.5449,2.4026,2.4026,0,0,1-.5771-.874,3.0787,3.0787,0,0,1-.1924-1.1885h1.4844a2.2064,2.2064,0,0,0,.1.5889,1.4322,1.4322,0,0,0,.2529.4834,1.19,1.19,0,0,0,.4121.3252,1.323,1.323,0,0,0,.5889.1211,1.2872,1.2872,0,0,0,.8906-.3252,1.3155,1.3155,0,0,0,.1924-1.5566.9783.9783,0,0,0-.4346-.335,1.8175,1.8175,0,0,0-.5771-.1211q-.3135-.0161-.6-.0166v-1.1A3.3088,3.3088,0,0,0,480.0469,373.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_64" data-name="64">
    <G id="_64-2" data-name="64">
      <Circle
        cx={430}
        cy={342}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M427.8,339.25a.9132.9132,0,0,0-.6826-.2852,1.0177,1.0177,0,0,0-.6982.2471,1.8227,1.8227,0,0,0-.4453.6045,3.2892,3.2892,0,0,0-.2422.7656,4.7432,4.7432,0,0,0-.0879.7256l.0225.0225a1.861,1.861,0,0,1,.7471-.66,2.4278,2.4278,0,0,1,1.958.0156,2.4382,2.4382,0,0,1,.8037.5781,2.2341,2.2341,0,0,1,.4512.8027,3.0255,3.0255,0,0,1,.1426.9131,3.1234,3.1234,0,0,1-.1924,1.1055,2.6623,2.6623,0,0,1-.55.8916,2.5563,2.5563,0,0,1-.8525.5938,3.0545,3.0545,0,0,1-2.541-.1328,2.6592,2.6592,0,0,1-.9131-.9062,3.77,3.77,0,0,1-.4736-1.2715,7.8971,7.8971,0,0,1-.1318-1.4463,6.3744,6.3744,0,0,1,.165-1.43,4.1706,4.1706,0,0,1,.5283-1.292,2.9768,2.9768,0,0,1,.9346-.9414,2.5571,2.5571,0,0,1,1.3975-.3633,2.9206,2.9206,0,0,1,.9238.1436,2.3584,2.3584,0,0,1,.7588.4131,2.119,2.119,0,0,1,.5391.665,2.6533,2.6533,0,0,1,.2754.9131h-1.4854A1.33,1.33,0,0,0,427.8,339.25Zm-1.3145,2.5137a1.0959,1.0959,0,0,0-.3906.3145,1.3676,1.3676,0,0,0-.2314.4561,1.9219,1.9219,0,0,0-.0771.5439,1.7289,1.7289,0,0,0,.083.5234,1.4443,1.4443,0,0,0,.2422.4609,1.1772,1.1772,0,0,0,.3906.3252,1.1139,1.1139,0,0,0,.5273.1211,1.0015,1.0015,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3813,1.3813,0,0,0,.2314-.4512,1.78,1.78,0,0,0,.0771-.5166,1.9968,1.9968,0,0,0-.0723-.5342,1.4906,1.4906,0,0,0-.2139-.4609,1.1033,1.1033,0,0,0-.3691-.33,1.0532,1.0532,0,0,0-.5225-.127A1.2342,1.2342,0,0,0,426.4854,341.7637Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M430.1758,343.8594v-1.43l3.3438-4.4883h1.3975v4.6309h1.0225v1.2871H434.917v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6729h2.0234v-2.6729Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_65" data-name="65">
    <G id="_65-2" data-name="65">
      <Circle
        cx={430}
        cy={297}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M427.8,294.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2813,3.2813,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,427.8,294.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,426.4854,296.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M432.32,294.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615H431.76a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561,1.3153,1.3153,0,0,0-.2637-.4619,1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573H435.5v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_66" data-name="66">
    <G id="_66-2" data-name="66">
      <Circle
        cx={430}
        cy={254}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M427.8,251.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2813,3.2813,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,427.8,251.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,426.4854,253.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M433.916,251.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2814,3.2814,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,433.916,251.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,432.6016,253.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_67" data-name="67">
    <G id="_67-2" data-name="67">
      <Circle
        cx={292}
        cy={102}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M289.8,99.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2813,3.2813,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,289.8,99.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,288.4854,101.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M296.6143,100.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611h-1.6719a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V97.9414h5.2578v1.3423A5.4762,5.4762,0,0,0,296.6143,100.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_68" data-name="68">
    <G id="_68-2" data-name="68">
      <Circle
        cx={348}
        cy={33}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M345.7993,30.25a.909.909,0,0,0-.6821-.2856,1.016,1.016,0,0,0-.6982.2471,1.8143,1.8143,0,0,0-.4458.605,3.2805,3.2805,0,0,0-.2417.7646,4.81,4.81,0,0,0-.0884.7261l.0225.022a1.87,1.87,0,0,1,.7476-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3175,2.3175,0,0,1,.9678.2144,2.423,2.423,0,0,1,.8032.5776,2.2424,2.2424,0,0,1,.4512.8027,3.008,3.008,0,0,1,.1426.9131,3.1106,3.1106,0,0,1-.1924,1.1055,2.638,2.638,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0615,3.0615,0,0,1-2.541-.1323,2.6662,2.6662,0,0,1-.9131-.9072,3.7458,3.7458,0,0,1-.4731-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3462,6.3462,0,0,1,.165-1.43,4.1726,4.1726,0,0,1,.5278-1.2925,2.9767,2.9767,0,0,1,.9351-.9409,2.5583,2.5583,0,0,1,1.397-.3628,2.91,2.91,0,0,1,.9243.1431,2.3718,2.3718,0,0,1,.7588.4126,2.1333,2.1333,0,0,1,.5391.6655,2.6642,2.6642,0,0,1,.2749.9126h-1.4849A1.328,1.328,0,0,0,345.7993,30.25Zm-1.3145,2.5137a1.0976,1.0976,0,0,0-.3906.3135,1.374,1.374,0,0,0-.231.4565,1.9006,1.9006,0,0,0-.0771.5444,1.72,1.72,0,0,0,.0825.5225,1.4591,1.4591,0,0,0,.2422.4619,1.1866,1.1866,0,0,0,.3906.3247,1.1217,1.1217,0,0,0,.5278.1211,1.0034,1.0034,0,0,0,.5-.1211,1.2258,1.2258,0,0,0,.3687-.3193,1.3781,1.3781,0,0,0,.231-.4507,1.769,1.769,0,0,0,.0771-.5171,1.9875,1.9875,0,0,0-.0718-.5337,1.4963,1.4963,0,0,0-.2144-.4619,1.1121,1.1121,0,0,0-.3687-.33,1.053,1.053,0,0,0-.5225-.1265A1.223,1.223,0,0,0,344.4849,32.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M348.7036,29.9756a2.1047,2.1047,0,0,1,.6-.66,2.69,2.69,0,0,1,.83-.396,3.3922,3.3922,0,0,1,.9351-.1318,2.9669,2.9669,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9417,1.9417,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.7867,1.7867,0,0,1-.2808,1.001,1.5478,1.5478,0,0,1-.8413.6162v.022a1.7513,1.7513,0,0,1,1.0669.6543,1.9908,1.9908,0,0,1,.374,1.2266,2.1818,2.1818,0,0,1-.2476,1.0669,2.2584,2.2584,0,0,1-.6543.748,2.9232,2.9232,0,0,1-.9238.4458,3.8239,3.8239,0,0,1-1.0562.1484,4.2329,4.2329,0,0,1-1.0835-.1377,2.791,2.791,0,0,1-.9351-.4346,2.1355,2.1355,0,0,1-.9077-1.8257,1.9621,1.9621,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4285,1.4285,0,0,1-.8472-.583,1.9078,1.9078,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2931,1.2931,0,0,0,.2915.4126,1.2571,1.2571,0,0,0,.4341.2637,1.5092,1.5092,0,0,0,.5283.0938,1.407,1.407,0,0,0,.5225-.0937,1.2976,1.2976,0,0,0,.418-.2637,1.1611,1.1611,0,0,0,.28-.4126,1.373,1.373,0,0,0,.0991-.5278,1.173,1.173,0,0,0-.1045-.5,1.2089,1.2089,0,0,0-.2861-.3906,1.273,1.273,0,0,0-.418-.2529,1.4566,1.4566,0,0,0-.5112-.0884,1.51,1.51,0,0,0-.9683.314,1.0891,1.0891,0,0,0-.396.9072A1.2805,1.2805,0,0,0,349.8257,34.8486Zm.418-3.0635a1.354,1.354,0,0,0,.8247.2583,1.2975,1.2975,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4568,1.4568,0,0,0-.0439-.3354.9313.9313,0,0,0-.1709-.3467.9666.9666,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3942,1.3942,0,0,0-.4453.0713,1.2113,1.2113,0,0,0-.3794.2036.9133.9133,0,0,0-.2588.33,1.0743,1.0743,0,0,0-.0933.4619A.8759.8759,0,0,0,350.2437,31.7852Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_69" data-name="69">
    <G id="_69-2" data-name="69">
      <Circle
        cx={375}
        cy={102}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M372.7993,99.25a.909.909,0,0,0-.6821-.2856,1.016,1.016,0,0,0-.6982.2471,1.8143,1.8143,0,0,0-.4458.605,3.2805,3.2805,0,0,0-.2417.7646,4.81,4.81,0,0,0-.0884.7261l.0225.022a1.87,1.87,0,0,1,.7476-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3175,2.3175,0,0,1,.9678.2144,2.423,2.423,0,0,1,.8032.5776,2.2424,2.2424,0,0,1,.4512.8027,3.008,3.008,0,0,1,.1426.9131,3.1106,3.1106,0,0,1-.1924,1.1055,2.638,2.638,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0615,3.0615,0,0,1-2.541-.1323,2.6662,2.6662,0,0,1-.9131-.9072,3.7458,3.7458,0,0,1-.4731-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3462,6.3462,0,0,1,.165-1.43,4.1726,4.1726,0,0,1,.5278-1.2925,2.9767,2.9767,0,0,1,.9351-.9409,2.5583,2.5583,0,0,1,1.397-.3628,2.91,2.91,0,0,1,.9243.1431,2.3718,2.3718,0,0,1,.7588.4126,2.1333,2.1333,0,0,1,.5391.6655,2.6642,2.6642,0,0,1,.2749.9126h-1.4849A1.328,1.328,0,0,0,372.7993,99.25Zm-1.3145,2.5137a1.0976,1.0976,0,0,0-.3906.3135,1.374,1.374,0,0,0-.231.4565,1.9006,1.9006,0,0,0-.0771.5444,1.72,1.72,0,0,0,.0825.5225,1.4591,1.4591,0,0,0,.2422.4619,1.1866,1.1866,0,0,0,.3906.3247,1.1217,1.1217,0,0,0,.5278.1211,1.0034,1.0034,0,0,0,.5-.1211,1.2258,1.2258,0,0,0,.3687-.3193,1.3781,1.3781,0,0,0,.231-.4507,1.769,1.769,0,0,0,.0771-.5171,1.9875,1.9875,0,0,0-.0718-.5337,1.4963,1.4963,0,0,0-.2144-.4619,1.1121,1.1121,0,0,0-.3687-.33,1.053,1.053,0,0,0-.5225-.1265A1.223,1.223,0,0,0,371.4849,101.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M377.2,104.3325a.9066.9066,0,0,0,.6816.2861,1.0119,1.0119,0,0,0,.7041-.2476,1.8417,1.8417,0,0,0,.44-.605,3.0847,3.0847,0,0,0,.2368-.7646,7.1082,7.1082,0,0,0,.0933-.7261l-.022-.022a1.867,1.867,0,0,1-.748.66,2.4226,2.4226,0,0,1-1.958-.0166,2.4216,2.4216,0,0,1-.8027-.5771,2.2258,2.2258,0,0,1-.4512-.8032,3.0086,3.0086,0,0,1-.1431-.9131,3.1106,3.1106,0,0,1,.1924-1.1055,2.6439,2.6439,0,0,1,.55-.8911,2.6135,2.6135,0,0,1,.8525-.5991,2.6709,2.6709,0,0,1,1.1-.22,2.7361,2.7361,0,0,1,1.4468.3467,2.6686,2.6686,0,0,1,.9072.9126,3.7962,3.7962,0,0,1,.4731,1.2817,7.93,7.93,0,0,1,.1318,1.4409,6.3465,6.3465,0,0,1-.1646,1.43,4.1783,4.1783,0,0,1-.5283,1.2925,2.9189,2.9189,0,0,1-.9351.9351,2.5853,2.5853,0,0,1-1.397.3574,3.0061,3.0061,0,0,1-.9238-.1377,2.2322,2.2322,0,0,1-.7593-.4126,2.1935,2.1935,0,0,1-.5386-.6709,2.65,2.65,0,0,1-.2754-.9019h1.4854A1.32,1.32,0,0,0,377.2,104.3325Zm1.32-2.5132a1.1077,1.1077,0,0,0,.3848-.314,1.3725,1.3725,0,0,0,.2314-.4561,1.9186,1.9186,0,0,0,.0767-.5449,1.7048,1.7048,0,0,0-.0825-.5225,1.4685,1.4685,0,0,0-.2417-.4619,1.1951,1.1951,0,0,0-.3906-.3242,1.1217,1.1217,0,0,0-.5278-.1211,1.01,1.01,0,0,0-.4951.1211,1.2,1.2,0,0,0-.374.3188,1.3712,1.3712,0,0,0-.231.4512,1.7657,1.7657,0,0,0-.0771.5166,2.0042,2.0042,0,0,0,.0713.5337,1.4809,1.4809,0,0,0,.2148.4619,1.0953,1.0953,0,0,0,.3682.33,1.05,1.05,0,0,0,.5229.1265A1.2211,1.2211,0,0,0,378.52,101.8193Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_70" data-name="70">
    <G id="_70-2" data-name="70">
      <Circle
        cx={436}
        cy={102}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M434.498,100.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H431.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V97.9414H435.57v1.3423A5.4762,5.4762,0,0,0,434.498,100.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M436.4561,99.8721a3.3966,3.3966,0,0,1,.61-1.2266,2.1882,2.1882,0,0,1,.8965-.66,2.9721,2.9721,0,0,1,1.084-.1982,3.0029,3.0029,0,0,1,1.0947.1982,2.2217,2.2217,0,0,1,.9014.66,3.34,3.34,0,0,1,.6162,1.2266,6.7593,6.7593,0,0,1,.2256,1.8867,7.02,7.02,0,0,1-.2256,1.93,3.3383,3.3383,0,0,1-.6162,1.2378,2.2262,2.2262,0,0,1-.9014.66,3.0029,3.0029,0,0,1-1.0947.1982,2.9721,2.9721,0,0,1-1.084-.1982,2.1926,2.1926,0,0,1-.8965-.66,3.3949,3.3949,0,0,1-.61-1.2378,7.02,7.02,0,0,1-.2256-1.93A6.7593,6.7593,0,0,1,436.4561,99.8721Zm1.3584,2.6841a4.2734,4.2734,0,0,0,.1377.9019,1.9433,1.9433,0,0,0,.3682.7427.888.888,0,0,0,.7266.3081.9151.9151,0,0,0,.7422-.3081,1.885,1.885,0,0,0,.374-.7427,4.2734,4.2734,0,0,0,.1377-.9019q.022-.4673.0225-.7974c0-.1323-.002-.2915-.0059-.4785a5.3831,5.3831,0,0,0-.1543-1.166,1.8185,1.8185,0,0,0-.2139-.5225,1.1824,1.1824,0,0,0-.3633-.374.9685.9685,0,0,0-.5391-.1431.94.94,0,0,0-.5332.1431,1.1408,1.1408,0,0,0-.3525.374,2.0364,2.0364,0,0,0-.2148.5225,4.05,4.05,0,0,0-.1094.5884q-.0337.2966-.0391.5776c-.0029.187-.0049.3462-.0049.4785Q437.793,102.0884,437.8145,102.5562Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_71" data-name="71">
    <G id="_71-2" data-name="71">
      <Circle
        cx={436}
        cy={33}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M434.498,31.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H431.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V28.9414H435.57v1.3423A5.4762,5.4762,0,0,0,434.498,31.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M438.75,36.6416V31.6475h-1.9365V30.4707a3.6908,3.6908,0,0,0,.7871-.0605,2.0561,2.0561,0,0,0,.6816-.2529,1.6875,1.6875,0,0,0,.5117-.4785,1.7093,1.7093,0,0,0,.2744-.7373h1.2432v7.7Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_72" data-name="72">
    <G id="_72-2" data-name="72">
      <Circle
        cx={494}
        cy={33}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M492.498,31.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H489.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V28.9414H493.57v1.3423A5.4762,5.4762,0,0,0,492.498,31.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M494.5605,30.6743a2.8393,2.8393,0,0,1,.5283-.99,2.3861,2.3861,0,0,1,.8857-.66,3.0037,3.0037,0,0,1,1.2266-.2363,3.0646,3.0646,0,0,1,1.0059.165,2.5861,2.5861,0,0,1,.8418.4731,2.2332,2.2332,0,0,1,.5771.7588,2.32,2.32,0,0,1,.2148,1.0122,2.4336,2.4336,0,0,1-.1875,1.001,2.6076,2.6076,0,0,1-.4941.7422,4.2416,4.2416,0,0,1-.6992.5889q-.39.2637-.7861.5225t-.7705.5552a3.4878,3.4878,0,0,0-.6592.6934h3.6406v1.3418H494.23a3.22,3.22,0,0,1,.1924-1.166,3.1186,3.1186,0,0,1,.5225-.8853,4.5844,4.5844,0,0,1,.7764-.7207q.4453-.33.94-.6709.252-.1758.5391-.3574a3.613,3.613,0,0,0,.5225-.4019,2.15,2.15,0,0,0,.3955-.4946,1.2272,1.2272,0,0,0,.1592-.6274,1.1579,1.1579,0,0,0-.3242-.8745,1.1449,1.1449,0,0,0-.83-.3135,1.0147,1.0147,0,0,0-.5781.16,1.1881,1.1881,0,0,0-.3789.418,1.94,1.94,0,0,0-.2041.5723,3.2958,3.2958,0,0,0-.0605.6211h-1.4951A3.6705,3.6705,0,0,1,494.5605,30.6743Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_73" data-name="73">
    <G id="_73-2" data-name="73">
      <Circle
        cx={567}
        cy={33}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M565.498,31.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H562.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V28.9414H566.57v1.3423A5.4762,5.4762,0,0,0,565.498,31.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M570.0469,32.0547a1.6918,1.6918,0,0,0,.5332-.1265,1.0241,1.0241,0,0,0,.4072-.3027.8159.8159,0,0,0,.1592-.5278.914.914,0,0,0-.33-.7593,1.18,1.18,0,0,0-.7588-.2637,1.0657,1.0657,0,0,0-.8965.3906,1.5113,1.5113,0,0,0-.291.9844h-1.4854a3.2571,3.2571,0,0,1,.2148-1.0835,2.4666,2.4666,0,0,1,.5391-.8418,2.3807,2.3807,0,0,1,.83-.5444,2.8993,2.8993,0,0,1,1.0781-.1924,3.22,3.22,0,0,1,.9238.1377,2.6328,2.6328,0,0,1,.83.4121,2.2214,2.2214,0,0,1,.6.6714,1.7746,1.7746,0,0,1,.2314.9126,1.8225,1.8225,0,0,1-.27.99,1.3507,1.3507,0,0,1-.8086.583v.022a1.678,1.678,0,0,1,1.001.6162,1.8041,1.8041,0,0,1,.3633,1.1328,2.33,2.33,0,0,1-.8691,1.87,2.7922,2.7922,0,0,1-.9131.4839,3.72,3.72,0,0,1-2.2607-.022,2.477,2.477,0,0,1-.9072-.5444,2.4045,2.4045,0,0,1-.5771-.8745,3.0761,3.0761,0,0,1-.1924-1.188h1.4844a2.2061,2.2061,0,0,0,.1.5884,1.4346,1.4346,0,0,0,.2529.4839,1.1939,1.1939,0,0,0,.4121.3247,1.33,1.33,0,0,0,.5889.1211,1.2891,1.2891,0,0,0,.8906-.3247,1.3156,1.3156,0,0,0,.1924-1.5566.9794.9794,0,0,0-.4346-.3354,1.8309,1.8309,0,0,0-.5771-.1211q-.3135-.0161-.6-.0161v-1.1A3.3088,3.3088,0,0,0,570.0469,32.0547Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_74" data-name="74">
    <G id="_74-2" data-name="74">
      <Circle
        cx={567}
        cy={102}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M565.498,100.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H562.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V97.9414H566.57v1.3423A5.4762,5.4762,0,0,0,565.498,100.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M567.1758,103.8594v-1.43l3.3438-4.4883h1.3975v4.6313h1.0225v1.2866H571.917v1.7822h-1.4854v-1.7822Zm3.2227-3.96-1.99,2.6733h2.0234V99.8994Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_75" data-name="75">
    <G id="_75-2" data-name="75">
      <Circle
        cx={656}
        cy={87}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M654.498,85.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H651.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523V82.9414H655.57v1.3423A5.4762,5.4762,0,0,0,654.498,85.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M658.32,84.2285l-.3076,1.749.0225.022a1.9359,1.9359,0,0,1,.6816-.4565,2.5519,2.5519,0,0,1,1.8369.0718,2.2152,2.2152,0,0,1,.7422.561,2.4182,2.4182,0,0,1,.4619.83,3.198,3.198,0,0,1,.16,1.0176,2.6493,2.6493,0,0,1-.2314,1.1055,2.81,2.81,0,0,1-.6211.8857,2.77,2.77,0,0,1-.9072.5776,2.8417,2.8417,0,0,1-1.1006.1924,3.8383,3.8383,0,0,1-1.0723-.1484,2.6822,2.6822,0,0,1-.9072-.4565,2.2724,2.2724,0,0,1-.6328-.7646,2.3583,2.3583,0,0,1-.2471-1.0615H657.76a1.2785,1.2785,0,0,0,.3955.8418,1.2355,1.2355,0,0,0,.8691.3135,1.2087,1.2087,0,0,0,.5557-.1265,1.3209,1.3209,0,0,0,.418-.33,1.4825,1.4825,0,0,0,.2646-.4731,1.7035,1.7035,0,0,0,.0928-.5557,1.7671,1.7671,0,0,0-.0879-.561A1.3153,1.3153,0,0,0,660.0039,87a1.2474,1.2474,0,0,0-.418-.3081,1.3461,1.3461,0,0,0-.5615-.11,1.3851,1.3851,0,0,0-.6816.1484,1.5979,1.5979,0,0,0-.4951.4678h-1.4082l.76-4.2573H661.5v1.2871Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_76" data-name="76">
    <G id="_76-2" data-name="76">
      <Circle
        cx={105}
        cy={211}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M103.498,209.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H100.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263H99.3125v-1.4521H104.57v1.3423A5.4762,5.4762,0,0,0,103.498,209.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M108.916,208.25a.91.91,0,0,0-.6826-.2856,1.0177,1.0177,0,0,0-.6982.2471,1.82,1.82,0,0,0-.4453.605,3.2814,3.2814,0,0,0-.2422.7646,4.7418,4.7418,0,0,0-.0879.7261l.0225.022a1.8683,1.8683,0,0,1,.7471-.66,2.3431,2.3431,0,0,1,.99-.1978,2.3158,2.3158,0,0,1,.9678.2144,2.43,2.43,0,0,1,.8037.5776,2.2424,2.2424,0,0,1,.4512.8027,3.0231,3.0231,0,0,1,.1426.9131,3.1214,3.1214,0,0,1-.1924,1.1055,2.6457,2.6457,0,0,1-.55.8911,2.5506,2.5506,0,0,1-.8525.5942,3.0616,3.0616,0,0,1-2.541-.1323,2.6577,2.6577,0,0,1-.9131-.9072,3.7566,3.7566,0,0,1-.4736-1.2705,7.9024,7.9024,0,0,1-.1318-1.4468,6.3744,6.3744,0,0,1,.165-1.43,4.1734,4.1734,0,0,1,.5283-1.2925,2.98,2.98,0,0,1,.9346-.9409,2.5612,2.5612,0,0,1,1.3975-.3628,2.9068,2.9068,0,0,1,.9238.1431,2.3667,2.3667,0,0,1,.7588.4126,2.1265,2.1265,0,0,1,.5391.6655,2.6538,2.6538,0,0,1,.2754.9126h-1.4854A1.3272,1.3272,0,0,0,108.916,208.25Zm-1.3145,2.5137a1.0934,1.0934,0,0,0-.3906.3135,1.3842,1.3842,0,0,0-.2314.4565,1.9178,1.9178,0,0,0-.0771.5444,1.72,1.72,0,0,0,.083.5225,1.4492,1.4492,0,0,0,.2422.4619,1.1817,1.1817,0,0,0,.3906.3247,1.12,1.12,0,0,0,.5273.1211,1.0066,1.0066,0,0,0,.501-.1211,1.224,1.224,0,0,0,.3682-.3193,1.3886,1.3886,0,0,0,.2314-.4507,1.7855,1.7855,0,0,0,.0771-.5171,1.9879,1.9879,0,0,0-.0723-.5337,1.5066,1.5066,0,0,0-.2139-.4619,1.1138,1.1138,0,0,0-.3691-.33,1.053,1.053,0,0,0-.5225-.1265A1.2209,1.2209,0,0,0,107.6016,210.7642Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_77" data-name="77">
    <G id="_77-2" data-name="77">
      <Circle
        cx={105}
        cy={182}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M103.498,180.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H100.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263H99.3125v-1.4521H104.57v1.3423A5.4762,5.4762,0,0,0,103.498,180.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M109.6143,180.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611h-1.6719a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263h-3.6523v-1.4521h5.2578v1.3423A5.4762,5.4762,0,0,0,109.6143,180.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
    </G>
  </G>
    <G id="_78" data-name="78">
    <G id="_78-2" data-name="78">
      <Circle
        cx={105}
        cy={153}
        r={10}
        style={{
          fill: '#e3e3e3',
        }}
      />
      <Path
        d="M103.498,151.5815a9.127,9.127,0,0,0-.7812,1.6392,11.562,11.562,0,0,0-.4834,1.76,9.5024,9.5024,0,0,0-.1816,1.6611H100.38a10.4907,10.4907,0,0,1,.8086-3.3218,11.7732,11.7732,0,0,1,1.7764-2.9263H99.3125v-1.4521H104.57v1.3423A5.4762,5.4762,0,0,0,103.498,151.5815Z"
        style={{
          fill: '#002b64',
        }}
      />
      <Path
        d="M105.7041,149.9756a2.0989,2.0989,0,0,1,.6-.66,2.6842,2.6842,0,0,1,.83-.396,3.3861,3.3861,0,0,1,.9346-.1318,2.9652,2.9652,0,0,1,1.21.22,2.51,2.51,0,0,1,.7979.5332,1.9277,1.9277,0,0,1,.4346.6709,1.8869,1.8869,0,0,1,.1318.6436,1.79,1.79,0,0,1-.28,1.001,1.5508,1.5508,0,0,1-.8418.6162v.022a1.7539,1.7539,0,0,1,1.0674.6543,1.9939,1.9939,0,0,1,.374,1.2266,2.1819,2.1819,0,0,1-.248,1.0669,2.2529,2.2529,0,0,1-.6543.748,2.9181,2.9181,0,0,1-.9238.4458,3.8179,3.8179,0,0,1-1.0557.1484,4.2394,4.2394,0,0,1-1.084-.1377,2.7841,2.7841,0,0,1-.9346-.4346,2.1374,2.1374,0,0,1-.9082-1.8257,1.9651,1.9651,0,0,1,.38-1.2319,1.8324,1.8324,0,0,1,1.0723-.66v-.022a1.4259,1.4259,0,0,1-.8467-.583,1.9047,1.9047,0,0,1-.0547-1.9141Zm1.1221,4.873a1.2918,1.2918,0,0,0,.291.4126,1.2593,1.2593,0,0,0,.4346.2637,1.5092,1.5092,0,0,0,.5283.0938,1.4088,1.4088,0,0,0,.5225-.0937,1.3029,1.3029,0,0,0,.418-.2637,1.1675,1.1675,0,0,0,.28-.4126,1.3728,1.3728,0,0,0,.0986-.5278,1.1658,1.1658,0,0,0-.1045-.5,1.2018,1.2018,0,0,0-.2861-.3906,1.2631,1.2631,0,0,0-.418-.2529,1.4539,1.4539,0,0,0-.5107-.0884,1.511,1.511,0,0,0-.9687.314,1.0888,1.0888,0,0,0-.3955.9072A1.2731,1.2731,0,0,0,106.8262,154.8486Zm.418-3.0635a1.3525,1.3525,0,0,0,.8242.2583,1.2966,1.2966,0,0,0,.8252-.2583.9.9,0,0,0,.33-.7534,1.4305,1.4305,0,0,0-.0439-.3354.9168.9168,0,0,0-.1709-.3467.9625.9625,0,0,0-.3516-.2749,1.3509,1.3509,0,0,0-.5889-.11,1.3986,1.3986,0,0,0-.4453.0713,1.2088,1.2088,0,0,0-.3789.2036.9133.9133,0,0,0-.2588.33,1.0671,1.0671,0,0,0-.0937.4619A.8751.8751,0,0,0,107.2441,151.7852Z"
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

StudiecentrumFirstFloor.propTypes = {
  parseSvg: PropTypes.func.isRequired
}

export default StudiecentrumFirstFloor
