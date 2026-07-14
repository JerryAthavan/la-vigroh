function LogosBar(){
    return(
        <div className="py-8 px-16 flex items-center justify-center gap-12 bg-dark2 light:bg-light2 flex-wrap border-t border-white/5 light:border-black/10 border-b border-white/5 light:border-black/10">
            <span className="text-xs text-muted light:text-light-muted tracking-widest">COMPLIANCE ACROSS</span>
            <span className="text-sm text-text-dim light:text-light-text-dim font-normal flex items-center gap-[6px]"><span className="text-lg">🇺🇸</span>United States</span>
            <span className="text-sm text-text-dim light:text-light-text-dim font-normal flex items-center gap-[6px]"><span className="text-lg">🇮🇳</span>India</span>
            <span className="text-sm text-text-dim light:text-light-text-dim font-normal flex items-center gap-[6px]"><span className="text-lg">🇬🇧</span>United Kingdom</span>
            <span className="text-sm text-text-dim light:text-light-text-dim font-normal flex items-center gap-[6px]"><span className="text-lg">🇦🇺</span>Australia</span>
            <span className="text-sm text-text-dim light:text-light-text-dim font-normal flex items-center gap-[6px]"><span className="text-lg">🇩🇪</span>Germany</span>
            <span className="text-sm text-text-dim light:text-light-text-dim font-normal flex items-center gap-[6px]"><span className="text-lg">🇨🇦</span>Canada</span>
            <span className="text-sm text-gold font-normal flex items-center gap-[6px]">+30 more →</span>
        </div>
    );
}
export default LogosBar;