import imgBg from "figma:asset/b72dea6be251c289805b21852b8c55595bead513.png";

const challenges = [
  {
    title: "团队能力",
    desc: "对PCB领域首次接触，需要从0开始学习PCB相关知识",
  },
  {
    title: "研发能力",
    desc: "研发团队需要一边写内容，一边与机器协调并配合工业改造",
  },
  {
    title: "项目压力",
    desc: "竞争对手在TO B领域疯狂扩张，迫使我们业务部门急需向外界展示我们的业务能力，公司重点关注项目",
  },
  {
    title: "时间压力",
    desc: "项目发版时间限定，各项内容所需时间需要紧张谋划",
  },
];

export function ChallengesSection() {
  return (
    <section
      id="challenges"
      className="relative w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={imgBg.src}
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30,30,35,0.82)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-0.5px",
              color: "#ffffff",
              marginBottom: "0",
            }}
          >
            难点与挑战
          </h2>
        </div>

        {/* Challenge cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, i) => (
            <div key={i} className="flex justify-center">
              <div
                className="flex flex-col items-center text-center justify-center"
                style={{
                  backgroundColor: "#3f8ef7",
                  borderRadius: "50%",
                  width: "260px",
                  height: "260px",
                  padding: "36px",
                  flexShrink: 0,
                }}
              >
                <h3
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "10px",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}