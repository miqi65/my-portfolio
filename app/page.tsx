import Hero from '@/components/Hero'
import { ProfileIntroSection } from '@/components/ProfileIntroSection'
import ScrollRevealText from '@/components/ScrollRevealText'
import ProjectGrid from '@/components/ProjectGrid'
import { UxMethodologySection } from '@/components/UxMethodologySection'
import { CoreSkillsHeader } from '@/components/CoreSkillsHeader'
import { SkillMatrixSection } from '@/components/SkillMatrixSection'
import { ToolboxSection } from '@/components/ToolboxSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main>
      <Hero />
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
