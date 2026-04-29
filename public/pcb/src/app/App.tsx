import { NavBar } from "./components/portfolio/NavBar";
import { HeroSection } from "./components/portfolio/HeroSection";
import { OverviewSection } from "./components/portfolio/OverviewSection";
import { ChallengesSection } from "./components/portfolio/ChallengesSection";
import { StrategySection } from "./components/portfolio/StrategySection";
import { PlanningSection } from "./components/portfolio/PlanningSection";
import { InsightsSection } from "./components/portfolio/InsightsSection";
import { GoalsSection } from "./components/portfolio/GoalsSection";
import { SolutionsSection } from "./components/portfolio/SolutionsSection";
import { FooterSection } from "./components/portfolio/FooterSection";

export default function App() {
  return (
    <div
      className="w-full min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <NavBar />
      <main>
        <HeroSection />
        <OverviewSection />
        <ChallengesSection />
        <StrategySection />
        <PlanningSection />
        <InsightsSection />
        <GoalsSection />
        <SolutionsSection />
      </main>
      <FooterSection />
    </div>
  );
}
