import React from 'react'
import {
  Defs, ClipPath, Path, G, Polyline, Polygon
} from 'react-native-svg'
import { Dimensions, Alert } from 'react-native'
import SvgPanZoom from 'react-native-svg-pan-zoom'

const { width } = Dimensions.get('window')

const zoom = width / 800

const AnnexFloor2 = () => (
  <SvgPanZoom canvasHeight={600} canvasWidth={800} minScale={0.5} initialZoom={zoom}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          d="M687,385H644V594H352V137h42V106H687ZM215,182H180V519h35Z"
          style={{ fill: '#002b64', opacity: 0.3 }}
        />
      </ClipPath>
    </Defs>
    <G id="Utställare">
      <Polyline
        points="753.5 191.55 725.63 191.55 725.63 149.78 753.5 149.78 753.5 191.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="753.5 328.55 725.63 328.55 725.63 286.78 753.5 286.78 753.5 328.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="753.5 370.55 725.63 370.55 725.63 328.78 753.5 328.78 753.5 370.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="257.5 434.55 229.63 434.55 229.63 392.78 257.5 392.78 257.5 434.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="257.5 392.55 229.63 392.55 229.63 350.78 257.5 350.78 257.5 392.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="257.5 518.55 229.63 518.55 229.63 476.78 257.5 476.78 257.5 518.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="257.5 476.55 229.63 476.55 229.63 434.78 257.5 434.78 257.5 476.55"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        onPress={() => Alert.alert('HEJ1')}
        points="253.68 574.6 253.68 546.73 295.45 546.73 295.45 574.6 253.68 574.6"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        onPress={() => Alert.alert('HEJ2')}
        points="109.68 574.6 109.68 546.73 179 546.73 179 574.6 109.68 574.6"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        onPress={() => Alert.alert('HEJ3')}
        points="341.5 547 313.63 547 313.63 505.23 341.5 505.23 341.5 547"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polyline
        points="341.5 505 313.63 505 313.63 463.23 341.5 463.23 341.5 505"
        onPress={() => Alert.alert('HEJ4')}
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
      <Polygon
        points="732.73 197.25 732.73 225.12 732.73 253.07 732.73 280.95 753.62 280.95 753.62 253.07 753.62 225.12 753.62 197.25 732.73 197.25"
        style={{
          fill: 'none',
          stroke: '#002b64',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.4173228740692139px'
        }}
      />
    </G>
  </SvgPanZoom>
)

export default AnnexFloor2
