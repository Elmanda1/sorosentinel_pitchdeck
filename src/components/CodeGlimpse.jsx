import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CodeGlimpse = () => {
  const containerRef = useRef(null);

  // Mouse tilt logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const codeString = `async fn chaos_proxy_handler(req: Request<Body>) -> Result<Response<Body>, StatusCode> {
    // Intercept RPC traffic
    let (parts, body) = req.into_parts();
    
    // Inject Fault: Latency Spike
    if scenario.has_latency_spike() {
        let delay = scenario.get_spike_duration();
        tokio::time::sleep(Duration::from_millis(delay)).await;
    }
    
    // Forward manipulated traffic to Stellar Node
    forward_to_stellar_rpc(parts, body).await
}`;

  return (
    <section className="text-foreground py-32 px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-16 items-center">
        <div className="col-span-12 lg:col-span-5">
          <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> / Section 04 / The Engine
          </h2>
          <h3 className="text-display-xl uppercase font-display leading-tight mb-8">
            Rust-Powered<br />
            <span className="italic text-muted/30">Resilience.</span>
          </h3>
          <p className="text-xl text-muted leading-relaxed mb-8">
            The core proxy sits at the system layer. By using Rust's zero-cost 
            abstractions and the Tokio runtime, SoroSentinel ensures high-throughput 
            fault injection with microsecond precision.
          </p>
          <ul className="space-y-4 text-caption-s uppercase font-mono text-muted mb-12">
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-accent" /> Hyper-based HTTP/2 Interception
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-accent" /> Low-level Byte Manipulation
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1 h-1 bg-accent" /> Deterministic Chaos Loop
            </li>
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7 perspective-1000">
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#050505] border border-border p-6 md:p-8 rounded-sm shadow-2xl relative overflow-hidden group cursor-crosshair"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4 opacity-40">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted">soro_sentinel_proxy.rs</span>
            </div>

            <pre className="font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <code className="text-muted">
                {codeString.split('\n').map((line, i) => {
                  let coloredLine = line
                    .replace(/(async|fn|let|if|await|Result|Result|StatusCode|Duration)/g, '<span class="text-white">$1</span>')
                    .replace(/(\/\/.*)/g, '<span class="text-muted/40 italic">$1</span>')
                    .replace(/(Request|Body|Response)/g, '<span class="text-accent">$1</span>')
                    .replace(/(tokio|tokio::time|Duration::from_millis)/g, '<span class="text-muted">$1</span>');
                  
                  return (
                    <div key={i} className="flex gap-6 mb-1">
                      <span className="w-6 text-muted/20 text-right select-none">{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: coloredLine }} />
                    </div>
                  );
                })}
              </code>
            </pre>

            {/* Depth elements */}
            <div style={{ transform: "translateZ(50px)" }} className="absolute -bottom-4 -right-4 text-display-xl opacity-[0.02] pointer-events-none select-none">
              RUST
            </div>
            
            {/* Glow */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeGlimpse;
