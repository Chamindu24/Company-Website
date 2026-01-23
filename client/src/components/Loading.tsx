export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FDFDFD] z-50 overflow-hidden">
      <div className="relative flex flex-col items-center">
        
        {/* 2. The Text Container */}
        <div className="relative flex items-center justify-center">
          
          {/* BASE LAYER (The faint/inactive state) */}
          <div className="flex flex-row items-baseline opacity-10 select-none">
            <h1 className="text-[12vw] font-bold tracking-tighter text-stone-900">
              LUSH
            </h1>
            <h1 className="text-[12vw] font-bold tracking-tighter  text-transparent"
                style={{ WebkitTextStroke: '2px #1c1917' }}>
              WARE
            </h1>
          </div>

          {/* REVEAL LAYER (The animated active state) */}
          <div className="absolute inset-0 flex flex-row items-baseline overflow-hidden animate-[reveal-clip_3s_infinite_ease-in-out]">
            <h1 className="text-[12vw] font-bold tracking-tighter text-emerald-900">
              LUSH
            </h1>
            <h1 className="text-[12vw] font-bold tracking-tighter text-transparent"
                style={{ WebkitTextStroke: '2px #064e3b' }}>
              WARE
            </h1>
          </div>

          {/* 3. The Scanning Light Beam */}
          {/* We use a wider glow to make it look more organic as it passes the letters */}
          <div className="absolute top-0 w-1 h-full bg-linear-to-b from-transparent via-emerald-400 to-transparent blur-[2px] animate-[scan-move_3s_infinite_ease-in-out]"></div>
        </div>

      </div>

      <style>{`
        @keyframes reveal-clip {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0 0% 0 0); }
          100% { clip-path: inset(0 0 0 100%); }
        }
        @keyframes scan-move {
          0% { left: 0%; opacity: 0; }
          50% { left: 50%; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes line-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}