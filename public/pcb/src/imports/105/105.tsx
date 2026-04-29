function Component() {
  return <div className="absolute contents left-[296px] top-[318px]" data-name="栅栏" />;
}

function Group() {
  return (
    <div className="absolute contents left-[296px] top-[274px]">
      <Component />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents inset-[59.83%_66.15%_18.92%_15.42%]" data-name="设计规划">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[65.31%_66.15%_18.92%_15.42%] text-[24px] text-justify">项目的每个功能阶段都已经规划好了，以旧版荷兰PCB系统为基础进行设计和开发。设计和审批通过每个功能后，开发团队就开始落地实施。</p>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[59.83%_75.21%_36.55%_15.42%] text-[28px]">设计规划</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents inset-[59.83%_43.59%_18.92%_37.97%]" data-name="团队协作">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[65.31%_43.59%_18.92%_37.97%] text-[24px] text-justify">我与产品经理合作，根据平台的环境翻译产品功能。设计与功能更匹配的交互，同时还与硬件开发工程师合作，直至推动当前功能落地。</p>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[59.83%_52.66%_36.55%_37.97%] text-[28px]">团队协作</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute contents inset-[59.83%_21.04%_15.77%_60.52%]" data-name="周期紧张">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[65.31%_21.04%_15.77%_60.52%] text-[24px] text-justify">从限定的发版日期往前推进工作，意味着设计被开发赶着进行。除开开发所需的时间，在剩余的时间里创造好的设计，在紧张的氛围里，带来了许多沟通协调跟时间挑战。</p>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[59.83%_30.1%_36.55%_60.52%] text-[28px]">周期紧张</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-[59.83%_21.04%_15.77%_15.42%] leading-[normal] not-italic text-[#181819]" data-name="文本">
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

export default function Component5() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="105">
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[16.7%_74.58%_77.09%_15.42%] leading-[normal] not-italic text-[#181819] text-[48px] whitespace-nowrap">项目规划</p>
      <div className="absolute bg-[#edf5fe] h-[513px] left-0 top-[565px] w-[1920px]" />
      <Group />
      <Component1 />
    </div>
  );
}