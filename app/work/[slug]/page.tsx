"use client";

import { LocalizedText, ProjectSolution, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

import SafeImage from "@/components/SafeImage";
import CaseHero from "@/components/CaseHero";
import CaseTextBlock from "@/components/CaseTextBlock";
import CaseChallengeGrid from "@/components/CaseChallengeGrid";
import CaseStatement from "@/components/CaseStatement";
import CasePrinciples from "@/components/CasePrinciples";
import CaseRules from "@/components/CaseRules";
import CaseSolution from "@/components/CaseSolution";
import NextProjectHero from "@/components/NextProjectHero";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { language } = useLanguage();
  
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  const t = (obj?: LocalizedText) => obj?.[language] ?? obj?.en ?? "";

  return (
    // 强制全局无衬线字体，符合 Mason Wong 的排版调性
    <main 
      className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden antialiased"
      style={{ fontFamily: '"Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Arial, sans-serif' }}
    >
      
      <CaseHero title={t(project.title)} meta={project.meta} language={language} />

      <section className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px]">
        <div className="w-full aspect-video md:aspect-[21/9]">
          <SafeImage src={project.heroImage} className="w-full h-full" />
        </div>
      </section>

      {project.overview && (
        <CaseTextBlock 
          label={t(project.overview.label)} 
          headline={t(project.overview.headline)} 
          body={t(project.overview.body)} 
        />
      )}

      {project.challenges && (
        <CaseChallengeGrid 
          label={t(project.challenges.label)} 
          headline={t(project.challenges.headline)} 
          items={project.challenges.items} 
          language={language}
        />
      )}

      {project.productGoal && (
        <CaseStatement 
          text={t(project.productGoal.headline)} 
          image={project.productGoal.image} 
        />
      )}

      {project.principles && (
        <CasePrinciples 
          label={t(project.principles.label)} 
          items={project.principles.items} 
          language={language} 
        />
      )}

      {project.rules && (
        <CaseRules 
          label={t(project.rules.label)} 
          items={project.rules.items} 
          image={project.rules.image}
          language={language}
        />
      )}

      {project.solutions && (
        <div className="w-full pt-[40px] border-t border-foreground/15">
          {project.solutions.items.map((item: ProjectSolution, idx: number) => (
            <CaseSolution 
              key={idx}
              label={t(item.label)}
              title={t(item.title)}
              body={t(item.body)}
              value={t(item.value)}
              valuePrefix={language === "en" ? "VALUE" : "价值"}
              image={item.image}
              layout={item.layout}
            />
          ))}
        </div>
      )}

      {project.projectValue && (
        <CaseTextBlock 
          label={t(project.projectValue.label)} 
          headline={t(project.projectValue.headline)} 
          body={project.projectValue.items.map((item: string) => item)} 
          isList={true}
        />
      )}

      {project.reflection && (
        <CaseTextBlock 
          label={t(project.reflection.label)} 
          body={t(project.reflection.body)} 
        />
      )}

      {project.confidentiality && (
        <section className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-start-7 md:col-span-6 border-t border-foreground/15 pt-6">
              <span className="uppercase text-[12px] font-bold tracking-[0.08em] text-muted block mb-4">
                [{t(project.confidentiality.label)}]
              </span>
              <p className="text-[12px] leading-[1.6] text-muted opacity-80">
                {t(project.confidentiality.body)}
              </p>
            </div>
          </div>
        </section>
      )}

      <NextProjectHero nextProject={nextProject} language={language} />

    </main>
  );
}
