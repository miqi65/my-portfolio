import Hero from '@/components/Hero'
import { ProfileIntroSection } from '@/components/ProfileIntroSection'
import WebGLProject from '@/components/WebGLProject'
import ScrollRevealText from '@/components/ScrollRevealText'
import ProjectGrid from '@/components/ProjectGrid'
import { UxMethodologySection } from '@/components/UxMethodologySection'
import { CoreSkillsHeader } from '@/components/CoreSkillsHeader'
import { SkillMatrixSection } from '@/components/SkillMatrixSection'
import Stats from '@/components/Stats'
import { ToolboxSection } from '@/components/ToolboxSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProfileIntroSection />
      <WebGLProject />
      <ScrollRevealText />
      <ProjectGrid />
      <UxMethodologySection />
      <CoreSkillsHeader />
      <SkillMatrixSection />
      <ToolboxSection />
      <Stats />
      <Footer />
    </main>
  )
}
