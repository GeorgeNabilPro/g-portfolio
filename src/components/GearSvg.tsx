import type { FC } from 'react';

import './gears.css';

// Involute function (angle: radian)
const invloluteFunc = (angle: number) => Math.tan(angle) - angle;

type CutoutCircleParams = {
  count: number | null;
  diameter: number | null;
  distance: number | null;
};

type CutoutSpokeParams = {
  count: number | null;
  innerRadius: number | null;
  outerRadius: number | null;
  ratio: number;
};
interface GearSvgProps {
  showCircle?: boolean;
  module?: number;
  teethNumber?: number;
  holeDiameter?: number | null;
  cutoutType?: 'None' | 'Circle' | 'Spoke';
  cutoutCircleParams?: CutoutCircleParams;
  cutoutSpokeParams?: CutoutSpokeParams;
  pressureAngle?: number;
  fillColor?: string;
  strokeColor?: string;
  scale?: number;
}

const GearSvg: FC<GearSvgProps> = (props) => {
  const INVOLUTE_RESOLUTION = 20;
  const {
    showCircle = true,
    teethNumber = 12,
    holeDiameter = null,
    cutoutType = 'None',
    cutoutCircleParams = {
      count: 6,
      diameter: null,
      distance: null,
    },
    cutoutSpokeParams = {
      count: 6,
      innerRadius: null,
      outerRadius: null,
      ratio: 0.6,
    },
    pressureAngle: _pressureAngle = 20,
    module = 1,
    fillColor = 'red',
    strokeColor = 'red',
    scale = 1,
  } = props;

  let pressureAngle = _pressureAngle * (Math.PI / 180);
  // if (teethNumber > 1.25 / Math.pow(2, Math.sin(pressureAngle))) {
  //   pressureAngle = Math.asin(Math.sqrt(1.25 / teethNumber));
  // }
  const pitchRadius = (module * teethNumber) / 2;
  // const baseRadius = pitchRadius * Math.cos(pressureAngle);
  const baseRadius = Math.max(pitchRadius - 1.25 * module, pitchRadius * Math.cos(pressureAngle));
  const tipRadius = pitchRadius + module;
  const rootRadius = pitchRadius - 1.25 * module;
  // const rootRadius = Math.max(pitchRadius - 1.25 * module, pitchRadius * Math.cos(pressureAngle));
  const maxInvoluteAngle = Math.sqrt(tipRadius ** 2 - baseRadius ** 2) / baseRadius;

  const isCutoutCircleParamsNonNull = (
    param: CutoutCircleParams,
  ): param is { diameter: number; count: number; distance: number } =>
    param.diameter !== null && param.count !== null && param.distance !== null;
  const isCutoutSpokeParamsNonNull = (
    param: CutoutSpokeParams,
  ): param is { count: number; innerRadius: number; outerRadius: number; ratio: number } =>
    param.count !== null && param.innerRadius !== null && param.outerRadius !== null;

  // Stroke width: proportional to tip radius
  const strokeWidthThick = 2 / scale;
  const strokeWidthThin = 2 / scale;
  // const strokeWidthThick = tipRadius / 150;
  // const strokeWidthThin = tipRadius / 300;

  const svgMargin = 0;
  const viewBoxSize = (tipRadius + svgMargin) * 2;

  console.log(
    'Pitch Radius:',
    pitchRadius,
    'Base Radius:',
    baseRadius,
    'Tip Radius:',
    tipRadius,
    'Root Radius:',
    rootRadius,
    'Pressure Angle (rad):',
    pressureAngle * (180 / Math.PI),
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={viewBoxSize * scale}
      height={viewBoxSize * scale}
      viewBox={`-${viewBoxSize / 2 + strokeWidthThick} -${viewBoxSize / 2 + strokeWidthThick} ${viewBoxSize + strokeWidthThick} ${viewBoxSize + strokeWidthThick}`}
      className="animate-rotate"
      fillRule="evenodd"
    >
      {/* Circles */}
      {showCircle && (
        <g>
          <circle
            cx="0"
            cy="0"
            r={tipRadius}
            fill="none"
            stroke="#ddd"
            strokeWidth={strokeWidthThin}
          />
          <circle
            cx="0"
            cy="0"
            r={pitchRadius}
            fill="none"
            stroke="#ddd"
            strokeWidth={strokeWidthThin}
          />
          <circle
            cx="0"
            cy="0"
            r={baseRadius}
            fill="none"
            stroke="#ddd"
            strokeWidth={strokeWidthThin}
          />
          <circle
            cx="0"
            cy="0"
            r={rootRadius}
            fill="none"
            stroke="#ddd"
            strokeWidth={strokeWidthThin}
          />
        </g>
      )}
      {/* Involute teethNumber */}
      <circle cx="0" cy="0" r={rootRadius} fill={fillColor} stroke="none" />
      {Array.from({ length: teethNumber }, (_, i) => {
        const offsetAngle = (2 * i * Math.PI) / teethNumber;
        const offsetAngle2 =
          // ((2 * i + 1) * Math.PI) / teethNumber + 2 * invloluteFunc(pressureAngle);
          ((2 * i + 1) * Math.PI) / teethNumber +
          1 * invloluteFunc(Math.acos(baseRadius / tipRadius));
        const tip = {
          x1:
            baseRadius *
            (Math.cos(maxInvoluteAngle + offsetAngle) +
              maxInvoluteAngle * Math.sin(maxInvoluteAngle + offsetAngle)),
          y1:
            baseRadius *
            (Math.sin(maxInvoluteAngle + offsetAngle) -
              maxInvoluteAngle * Math.cos(maxInvoluteAngle + offsetAngle)),
          x2:
            baseRadius *
            (Math.cos(offsetAngle2 - maxInvoluteAngle) -
              maxInvoluteAngle * Math.sin(offsetAngle2 - maxInvoluteAngle)),
          y2:
            baseRadius *
            (Math.sin(offsetAngle2 - maxInvoluteAngle) +
              maxInvoluteAngle * Math.cos(offsetAngle2 - maxInvoluteAngle)),
        };
        const root = {
          x1: rootRadius * Math.cos(offsetAngle2),
          y1: rootRadius * Math.sin(offsetAngle2),
          x2: rootRadius * Math.cos((2 * (i + 1) * Math.PI) / teethNumber),
          y2: rootRadius * Math.sin((2 * (i + 1) * Math.PI) / teethNumber),
        };
        return (
          <g key={`g_${i}`}>
            {/* involute */}
            <path
              d={
                `M ${rootRadius * Math.cos(offsetAngle)} ${rootRadius * Math.sin(offsetAngle)} L ${baseRadius * Math.cos(offsetAngle)} ${baseRadius * Math.sin(offsetAngle)}` +
                ` ${baseRadius * Math.cos(offsetAngle)} ${baseRadius * Math.sin(offsetAngle)}` +
                Array.from({ length: INVOLUTE_RESOLUTION }, (_, j) => {
                  const angle = ((j + 1) * maxInvoluteAngle) / INVOLUTE_RESOLUTION;
                  const x =
                    baseRadius *
                    (Math.cos(angle + offsetAngle) + angle * Math.sin(angle + offsetAngle));
                  const y =
                    baseRadius *
                    (Math.sin(angle + offsetAngle) - angle * Math.cos(angle + offsetAngle));
                  return ` L ${x} ${y}`;
                }).join('') +
                ` ${tip.x1},${tip.y1} A ${tipRadius},${tipRadius} 0 0,1 ${tip.x2},${tip.y2}` +
                // `M ${baseRadius * Math.cos(offsetAngle2)} ${baseRadius * Math.sin(offsetAngle2)}` +
                Array.from({ length: INVOLUTE_RESOLUTION + 1 }, (_, j) => {
                  const angle = (j * maxInvoluteAngle) / INVOLUTE_RESOLUTION;
                  const x =
                    baseRadius *
                    (Math.cos(offsetAngle2 - angle) - angle * Math.sin(offsetAngle2 - angle));
                  const y =
                    baseRadius *
                    (Math.sin(offsetAngle2 - angle) + angle * Math.cos(offsetAngle2 - angle));
                  return ` L ${x} ${y}`;
                })
                  .reverse()
                  .join('') +
                ` ${rootRadius * Math.cos(offsetAngle2)} ${rootRadius * Math.sin(offsetAngle2)} L ${baseRadius * Math.cos(offsetAngle2)} ${baseRadius * Math.sin(offsetAngle2)}` +
                ` ${root.x1},${root.y1} A ${rootRadius},${rootRadius} 0 0,1 ${root.x2},${root.y2}`
              }
              stroke={strokeColor}
              strokeWidth={strokeWidthThick}
              fill={fillColor}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit={10}
            />
          </g>
        );
      })}
      {/* Center Hole */}
      {holeDiameter && (
        <circle
          cx="0"
          cy="0"
          r={holeDiameter / 2}
          fill="#f8fafc" // slate-50
          // fillRule="evenodd"
          stroke={strokeColor}
          strokeWidth={strokeWidthThick}
        />
      )}
      {/* Other Holes */}
      {cutoutType === 'Circle' &&
        isCutoutCircleParamsNonNull(cutoutCircleParams) &&
        Array.from({ length: cutoutCircleParams.count }, (_, i) => {
          const angle = (2 * i * Math.PI) / cutoutCircleParams.count;
          return (
            <circle
              key={`cutout_circle_${i}`}
              cx={cutoutCircleParams.distance * Math.cos(angle)}
              cy={cutoutCircleParams.distance * Math.sin(angle)}
              r={cutoutCircleParams.diameter / 2}
              fill="red"
              stroke={strokeColor}
              strokeWidth={strokeWidthThick}
            />
          );
        })}
      {/* Spoke */}
      {cutoutType === 'Spoke' &&
        isCutoutSpokeParamsNonNull(cutoutSpokeParams) &&
        Array.from({ length: cutoutSpokeParams.count }, (_, i) => {
          const angle1 = (2 * i * Math.PI) / cutoutSpokeParams.count;
          const angle2 = (2 * (i + 1) * Math.PI) / cutoutSpokeParams.count;
          const dAngle = ((angle2 - angle1) * (1 - cutoutSpokeParams.ratio)) / 2;

          const inner = {
            start: {
              x: cutoutSpokeParams.innerRadius * Math.cos(angle1 + dAngle),
              y: cutoutSpokeParams.innerRadius * Math.sin(angle1 + dAngle),
            },
            end: {
              x: cutoutSpokeParams.innerRadius * Math.cos(angle2 - dAngle),
              y: cutoutSpokeParams.innerRadius * Math.sin(angle2 - dAngle),
            },
          };
          const outer = {
            start: {
              x: cutoutSpokeParams.outerRadius * Math.cos(angle1 + dAngle),
              y: cutoutSpokeParams.outerRadius * Math.sin(angle1 + dAngle),
            },
            end: {
              x: cutoutSpokeParams.outerRadius * Math.cos(angle2 - dAngle),
              y: cutoutSpokeParams.outerRadius * Math.sin(angle2 - dAngle),
            },
          };
          return (
            <g key={`cutout_spoke_${i}`}>
              <path
                d={`M ${inner.start.x},${inner.start.y} A ${cutoutSpokeParams.innerRadius},${cutoutSpokeParams.innerRadius} 0 0,1 ${inner.end.x},${inner.end.y}`}
                stroke={strokeColor}
                strokeWidth={strokeWidthThick}
                fill="none"
              />
              <path
                d={`M ${outer.start.x},${outer.start.y} A ${cutoutSpokeParams.outerRadius},${cutoutSpokeParams.outerRadius} 0 0,1 ${outer.end.x},${outer.end.y}`}
                stroke={strokeColor}
                strokeWidth={strokeWidthThick}
                fill="none"
              />
              <line
                x1={inner.start.x}
                y1={inner.start.y}
                x2={outer.start.x}
                y2={outer.start.y}
                stroke={strokeColor}
                strokeWidth={strokeWidthThick}
              />
              <line
                x1={inner.end.x}
                y1={inner.end.y}
                x2={outer.end.x}
                y2={outer.end.y}
                stroke={strokeColor}
                strokeWidth={strokeWidthThick}
              />
            </g>
          );
        })}
    </svg>
  );
};

export default GearSvg;
