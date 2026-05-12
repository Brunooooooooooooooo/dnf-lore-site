export default function Footer() {
  return (
    <footer className="relative bg-dnf-dark-2 border-t border-dnf-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚔️</span>
              <span className="text-lg font-bold bg-gradient-to-r from-dnf-red via-dnf-gold to-dnf-blue bg-clip-text text-transparent">
                DNF 编年史
              </span>
            </div>
            <p className="text-sm text-dnf-white/40 leading-relaxed">
              一个关于地下城与勇士的非官方资料站，
              记录游戏的故事、职业和副本信息。
              仅供学习交流使用。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-dnf-white/60 mb-4 uppercase tracking-wider">快速导航</h4>
            <ul className="space-y-2">
              {['世界观', '职业转职', '副本团本', '地图', '活动'].map((item) => (
                <li key={item}>
                  <a href={`#${item === '世界观' ? 'story' : item === '职业转职' ? 'classes' : item === '副本团本' ? 'dungeons' : item === '地图' ? 'maps' : 'activities'}`}
                    className="text-sm text-dnf-white/40 hover:text-dnf-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Info */}
          <div>
            <h4 className="text-sm font-bold text-dnf-white/60 mb-4 uppercase tracking-wider">游戏信息</h4>
            <ul className="space-y-2 text-sm text-dnf-white/40">
              <li>开发商：Neople（韩国）</li>
              <li>发行商：腾讯游戏（中国）</li>
              <li>首发日期：2005年（韩服）</li>
              <li>国服公测：2008年6月19日</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-dnf-gray/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dnf-white/30">
            © 2024 DNF 编年史 · 非官方粉丝站 · 仅供学习交流
          </p>
          <p className="text-xs text-dnf-white/30">
            地下城与勇士™ 是 Neople 和腾讯游戏的注册商标
          </p>
        </div>
      </div>
    </footer>
  );
}
