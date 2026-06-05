import HeroV2 from '@/components/home-v2/HeroV2'
import { ProfileIntroSection } from '@/components/ProfileIntroSection'
import ScrollRevealText from '@/components/ScrollRevealText'
import ProjectGrid from '@/components/ProjectGrid'
import { UxMethodologySection } from '@/components/UxMethodologySection'
import { CoreSkillsHeader } from '@/components/CoreSkillsHeader'
import { SkillMatrixSection } from '@/components/SkillMatrixSection'
import { ToolboxSection } from '@/components/ToolboxSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const homeHeroNavItems = [
  { label: '首页', href: '#intro', active: true },
  { label: '作品', href: '#works' },
  { label: '方法', href: '#ux-methodology-title' },
  { label: '关于我', href: '#contact' },
]

export default function Home() {
  return (
    <main data-home-v2-hero>
      <style>{`
        body:has(main[data-home-v2-hero]) > header {
          display: none !important;
        }
      `}</style>
      <HeroV2 navItems={homeHeroNavItems} primaryCtaHref="#works" />
      <ProfileIntroSection />
      <ProjectGrid />
      <ScrollRevealText />
      <UxMethodologySection />
      <CoreSkillsHeader />
      <SkillMatrixSection />
      <ToolboxSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
