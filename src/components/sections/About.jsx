import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity, ShoppingBag } from 'lucide-react';
import './About.css';

// Project ecosystem map nodes
const ecosystemNodes = [
  { 
    id: 1, 
    name: 'Focusly', 
    tech: 'React · Spring Boot · SQL · Gemini AI', 
    desc: 'AI-powered personalized learning platform with adaptive roadmaps and smart assessment modules.',
    x: 85, 
    y: 75, 
    connections: [5, 3],
    icon: <Cpu size={16} />
  },
  { 
    id: 2, 
    name: 'Social-Mate', 
    tech: 'React · JavaScript · CSS variables', 
    desc: 'Responsive social media platform focused on user engagement, interactive posts, and modular component rendering.',
    x: 335, 
    y: 75, 
    connections: [5, 4],
    icon: <Activity size={16} />
  },
  { 
    id: 3, 
    name: 'TechHub', 
    tech: 'React · Spring Boot · MySQL · JWT', 
    desc: 'Production-grade e-commerce platform with stateless JWT authentication, product catalog filters, and inventory panels.',
    x: 85, 
    y: 245, 
    connections: [5, 1],
    icon: <ShoppingBag size={16} />
  },
  { 
    id: 4, 
    name: 'Quantum Intel', 
    tech: 'Python · LLMs · LangChain', 
    desc: 'AI research assistant automating raw information harvesting, textual semantic analysis, and structured insight compilation.',
    x: 335, 
    y: 245, 
    connections: [5, 2],
    icon: <Shield size={16} />
  },
  { 
    id: 5, 
    name: 'Java Full Stack', 
    tech: 'Priyansh · B.Tech CSE (AIML)', 
    desc: 'Core architecture and full-stack engine tying together system modules and frontends.',
    x: 210, 
    y: 160, 
    connections: [1, 2, 3, 4],
    icon: <Terminal size={16} />
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.22 });
  const [hoveredNode, setHoveredNode] = useState(null);

  // Quick facts matching updated student criteria
  const quickFacts = [
    { label: 'EDUCATION', value: 'B.Tech CSE (AIML)' },
    { label: 'GRADUATING', value: '2027' },
    { label: 'PROJECTS', value: '5+' },
    { label: 'SPECIALIZATION', value: 'Java Full Stack' }
  ];

  const currentHoveredNodeInfo = ecosystemNodes.find(n => n.id === hoveredNode);

  return (
    <section id="about" className="about-section section-padding" ref={ref}>
      <div className="container">
        
        {/* Section Label */}
        <span className="section-label mono">01 — About</span>

        <div className="about-layout">
          {/* Left Column - Text Details */}
          <motion.div
            className="about-text-column"
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="about-heading">
              Creating web experiences from frontend to backend.
            </h2>
            
            <div className="about-description">
              <p>
                I'm a final-year B.Tech student specializing in Computer Science with a strong interest in full-stack web development.
              </p>
              <p>
                I build modern web applications using React, Java, Spring Boot, and SQL, focusing on responsive user experiences and scalable backend systems.
              </p>
              <p>
                My projects include Focusly, an AI-powered learning platform, TechHub, an ecommerce application, Social-Mate, a social networking platform, and Quantum Intel, an AI-driven research assistant.
              </p>
              <p>
                Currently, I'm expanding my knowledge in system design, cloud technologies, and scalable software architecture while continuing to build real-world products.
              </p>
            </div>

            {/* Quick Status / Currently Indicator */}
            <div className="currently-indicator mono">
              <span className="currently-pulse" />
              <span className="currently-text">Currently: Building Quantum Intel</span>
            </div>

            {/* Quick Facts Grid */}
            <div className="quick-facts-grid">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-item">
                  <span className="fact-label mono">{fact.label}</span>
                  <span className="fact-value mono">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Project Ecosystem Map */}
          <motion.div
            className="about-visual-column"
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="constellation-card card-premium">
              <div className="card-ambient-glow" />
              
              <div className="constellation-header">
                <span className="constellation-title mono">project_ecosystem.json</span>
              </div>
              
              {/* Project Ecosystem Map Visualizer */}
              <div className="constellation-body">
                <svg viewBox="0 0 420 320" className="constellation-svg">
                  {/* Connection Paths */}
                  {ecosystemNodes.map((node) => 
                    node.connections.map((connId) => {
                      if (node.id > connId) return null;
                      const target = ecosystemNodes.find(n => n.id === connId);
                      if (!target) return null;
                      
                      const isLineGlowing = hoveredNode === node.id || hoveredNode === target.id;
                      
                      return (
                        <line
                          key={`${node.id}-${connId}`}
                          x1={node.x}
                          y1={node.y}
                          x2={target.x}
                          y2={target.y}
                          className={`constellation-line ${isLineGlowing ? 'glowing' : ''}`}
                        />
                      );
                    })
                  )}

                  {/* SVG Nodes */}
                  {ecosystemNodes.map((node) => {
                    const isHovered = hoveredNode === node.id;
                    const isConnected = hoveredNode !== null && node.connections.includes(hoveredNode);
                    const isFlagship = node.id === 1;
                    const isCenter = node.id === 5;
                    
                    return (
                      <g 
                        key={node.id} 
                        className="constellation-node-group"
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {/* Special Flagship ripple ring for Focusly */}
                        {isFlagship && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={18}
                            className="node-glow-ring flagship-pulse"
                          />
                        )}
                        
                        {/* Invisible hover area for easier interaction */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={28}
                          fill="transparent"
                          style={{ cursor: 'pointer' }}
                        />

                        {/* Interactive Node Outer Glow */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isCenter ? (isHovered ? 24 : 20) : (isFlagship ? (isHovered ? 22 : 18) : (isHovered ? 20 : 16))}
                          className={`node-glow-ring ${isHovered ? 'active' : ''} ${isConnected ? 'pulse' : ''}`}
                          style={{
                            stroke: isCenter ? 'var(--accent-primary)' : (isFlagship ? 'var(--accent-primary)' : 'var(--accent-secondary)')
                          }}
                        />
                        {/* Node Core Circle */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isCenter ? (isHovered ? 10 : 8) : (isFlagship ? (isHovered ? 9.5 : 7.5) : (isHovered ? 8 : 6))}
                          className={`node-dot ${isHovered ? 'active' : ''} ${isConnected ? 'connected' : ''} ${isFlagship ? 'flagship-dot' : ''}`}
                          style={{
                            fill: isCenter ? 'var(--accent-primary)' : (isFlagship ? 'var(--accent-primary)' : 'var(--accent-secondary)')
                          }}
                        />
                        {/* Node Labels */}
                        <text
                          x={node.x}
                          y={node.y - (isHovered ? 18 : 15)}
                          textAnchor="middle"
                          className={`node-label mono ${isHovered ? 'active' : ''} ${isConnected ? 'connected' : ''}`}
                        >
                          {node.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Dynamic Ecosystem Information Details Overlay Panel */}
              <div className="ecosystem-details-panel">
                {hoveredNode ? (
                  <div className="details-panel-content">
                    <span className="details-tech mono">{currentHoveredNodeInfo.tech}</span>
                    <h4 className="details-title">{currentHoveredNodeInfo.name}</h4>
                    <p className="details-desc">{currentHoveredNodeInfo.desc}</p>
                  </div>
                ) : (
                  <div className="details-panel-content placeholder-state">
                    <span className="details-tech mono">SYSTEM_MAP : READ_STATE</span>
                    <h4 className="details-title">Project Ecosystem</h4>
                    <p className="details-desc">Projects connected through a shared full-stack ecosystem.</p>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
