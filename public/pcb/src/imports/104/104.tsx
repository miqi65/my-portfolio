import imgImage2557 from "./2e033cda65dba1b6407a3b2ca15f51c89c7fe663.png";

function Component() {
  return (
    <div className="absolute contents left-[296px] top-[281px]" data-name="图文">
      <div className="absolute h-[484px] left-[296px] top-[281px] w-[630px]" data-name="image 2557">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2557} />
      </div>
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[71.71%_63.34%_24.86%_27.03%] leading-[normal] not-italic text-[#181819] text-[24px] text-center">原始的PCB系统</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[26.07%_17.97%_25.32%_51.35%] not-italic text-black">
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[26.07%_38.65%_67.72%_51.35%] leading-[normal] text-[48px] whitespace-nowrap">项目策略</p>
      <div className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[34.14%_17.97%_25.32%_51.35%] leading-[0] text-[24px] text-justify whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">为了加快产品上市的速度，我们的任务是在现有的功能框架的基础上设计和构建PCB系统，这样的策略是比较容易上手且风险最小的。</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">假设很简单，即使是荷兰20年前设计的系统，思路也与现代市面流通的pcb系统框架一致，可以降低客户的学习成本，并且利用现有的基础框架更快的进入市场。</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">这个决策对创造和谐的用户体验产生了重要的影响。</p>
      </div>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-white relative size-full" data-name="104">
      <Component />
      <Group />
    </div>
  );
}