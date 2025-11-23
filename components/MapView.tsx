import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { MILESTONES } from '../constants';

interface MapViewProps {
  currentStep: number;
  onNodeClick: (index: number) => void;
}

const MapView: React.FC<MapViewProps> = ({ currentStep, onNodeClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generates a smooth curved path connecting all milestones
  const generatePath = () => {
    let d = `M ${MILESTONES[0].coords.x} ${MILESTONES[0].coords.y}`;
    for (let i = 1; i < MILESTONES.length; i++) {
      const curr = MILESTONES[i].coords;
      const prev = MILESTONES[i-1].coords;
      // Midpoint for quadratic Bezier curve control point
      const midX = (prev.x + curr.x) / 2;
      // Using a quadratic bezier for smoothing: Start -> Control Point -> End
      d += ` Q ${midX} ${prev.y}, ${(prev.x + curr.x)/2} ${(prev.y + curr.y)/2} T ${curr.x} ${curr.y}`;
    }
    return d;
  };

  // Generates the active red path up to the current step
  const generateActivePath = () => {
    if (currentStep === 0) return "";
    let d = `M ${MILESTONES[0].coords.x} ${MILESTONES[0].coords.y}`;
    for (let i = 1; i <= currentStep; i++) {
        const curr = MILESTONES[i].coords;
        const prev = MILESTONES[i-1].coords;
        const midX = (prev.x + curr.x) / 2;
        d += ` Q ${midX} ${prev.y}, ${(prev.x + curr.x)/2} ${(prev.y + curr.y)/2} T ${curr.x} ${curr.y}`;
    }
    return d;
  };

  return (
    <div className="relative w-full h-full bg-[#f0e6d2] rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] border-4 border-[#d4c5a3]">
      {/* Vintage paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')" }}
      ></div>
      
      {/* Grid decoration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#000000 0.5px, transparent 0.5px), linear-gradient(90deg, #000000 0.5px, transparent 0.5px)', 
          backgroundSize: '10% 10%' 
        }}
      ></div>

      {/* Title Decoration */}
      <div className="absolute top-4 left-4 text-[#8c7b60] font-serif opacity-50 text-xl md:text-3xl font-bold select-none pointer-events-none z-10">
        二萬五千里長征示意圖
      </div>

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Full Path (Dotted Line) */}
        <path 
          d={generatePath()} 
          fill="none" 
          stroke="#b09878" 
          strokeWidth="0.6" 
          strokeDasharray="1,1" 
        />
        
        {/* Active Path (Red Line) */}
        <path 
          d={generateActivePath()} 
          fill="none" 
          stroke="#c0392b" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-sm transition-all duration-1000 ease-in-out"
        />

        {/* Nodes */}
        {MILESTONES.map((milestone, index) => {
          const isCurrent = index === currentStep;
          const isActive = index <= currentStep;
          const isHovered = hoveredIndex === index;

          // Define radius values for cleaner logic
          // Visual radius
          const rVisual = isCurrent ? 2.5 : (isActive ? 1.5 : 1.2);
          
          return (
            <g 
              key={milestone.id} 
              onClick={() => onNodeClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`cursor-pointer transition-all duration-300 group ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
            >
              {/* Hit area - Invisible larger circle for easier clicking */}
              <circle cx={milestone.coords.x} cy={milestone.coords.y} r="6" fill="transparent" />

              {/* Visual Node Circle */}
              <circle 
                cx={milestone.coords.x} 
                cy={milestone.coords.y} 
                r={rVisual}
                fill={isActive ? (isCurrent ? "#c0392b" : "#a93226") : "#7f8c8d"}
                stroke={isActive ? "#fff" : "none"}
                strokeWidth={isCurrent ? 0.8 : 0.4}
                className={`transition-all duration-300 ease-out ${isCurrent ? 'drop-shadow-md' : ''}`}
                style={{
                    transformBox: 'fill-box',
                    transformOrigin: 'center',
                    transform: isHovered && !isCurrent ? 'scale(1.4)' : 'scale(1)'
                }}
              />
              
              {/* Current Location Pulse Effect */}
              {isCurrent && (
                <circle cx={milestone.coords.x} cy={milestone.coords.y} r="6" stroke="#c0392b" strokeWidth="0.3" fill="none">
                  <animate attributeName="r" from="2.5" to="8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Location Name Label */}
              <text 
                x={milestone.coords.x} 
                y={milestone.coords.y + 5} 
                textAnchor="middle" 
                className={`text-[2.2px] font-bold select-none pointer-events-none transition-all duration-300 ${isCurrent || isHovered ? 'fill-red-900 font-black' : 'fill-stone-600'}`}
                style={{
                  textShadow: isCurrent ? '0 0.5px 2px rgba(255,255,255,0.9)' : 'none'
                }}
              >
                {milestone.title}
              </text>
            </g>
          );
        })}
        
        {/* Red Army Star Icon (Moving Cursor) */}
        <g 
          style={{ 
            transform: `translate(${MILESTONES[currentStep].coords.x}px, ${MILESTONES[currentStep].coords.y}px)`,
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          className="pointer-events-none"
        >
             {/* Using foreignObject to render the Lucide icon cleanly */}
             {/* Center the icon: x = -width/2, y = -height/2 */}
            <foreignObject x="-2.5" y="-2.5" width="5" height="5" className="overflow-visible">
                <div className="w-full h-full flex items-center justify-center">
                    <Star 
                      size="100%" 
                      fill="#ffff00" 
                      stroke="#c0392b" 
                      strokeWidth={2} 
                      className="animate-pulse drop-shadow-md" 
                    />
                </div>
            </foreignObject>
        </g>

        {/* Tooltip Overlay */}
        {hoveredIndex !== null && (
          <g pointerEvents="none" className="animate-in fade-in duration-200" style={{ zIndex: 100 }}>
            {(() => {
               const m = MILESTONES[hoveredIndex];
               // Layout configuration for the tooltip inside SVG coordinates (0-100)
               const width = 40; // units
               const height = 15; // units
               // Center horizontally above the node
               const x = m.coords.x - (width / 2);
               // Position vertically above the node (node y - offset)
               const y = m.coords.y - 16; 
               
               return (
                 <foreignObject 
                    x={x} 
                    y={y} 
                    width={width} 
                    height={height} 
                    style={{ overflow: 'visible' }}
                  >
                   <div className="flex flex-col items-center justify-end h-full w-full">
                      <div className="bg-stone-800/95 backdrop-blur-sm text-white rounded-lg shadow-xl border border-stone-600/50 flex flex-col items-center justify-center px-2 py-1 transform transition-all scale-100 origin-bottom min-w-max">
                         <span className="text-[3px] font-bold whitespace-nowrap leading-none mb-0.5 text-amber-100">{m.title}</span>
                         <span className="text-[2px] text-stone-300 whitespace-nowrap leading-none font-mono">{m.date}</span>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="w-0 h-0 border-l-[2px] border-l-transparent border-r-[2px] border-r-transparent border-t-[3px] border-t-stone-800/95 -mt-[0.5px]"></div>
                   </div>
                 </foreignObject>
               );
            })()}
          </g>
        )}

      </svg>
    </div>
  );
};

export default MapView;
