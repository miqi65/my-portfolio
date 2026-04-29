import imgBg from "./0d463ae03b4d5d0c96742799d2fbcc75bad93590.png";
import imgBg1 from "./91a2a81a06731793b7804a326a5b8c3dc8c99cd3.png";
import img31 from "./e61a0a5617df8e3ae01b9ad58bed878848c9c1ce.png";

function Component1() {
  return (
    <div className="absolute contents inset-[46.85%_72.14%_38.03%_8.33%]" data-name="主题与描述">
      <div className="absolute inset-[61.97%_72.66%_38.03%_8.39%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364 1">
            <line id="Line 167" stroke="var(--stroke-0, white)" x2="364" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute capitalize font-['PingFang_SC:Medium',sans-serif] inset-[52.41%_72.14%_39.89%_8.39%] leading-[28px] not-italic text-[18px] text-white">主导重新设计了PCB系统。提升了用户的管理（+28%）与插件（+17%）效率，降低了人工介入率（-10%）与工程导入耗时（-17%）</p>
      <p className="absolute capitalize font-['PingFang_SC:Semibold',sans-serif] inset-[46.85%_83.7%_48.52%_8.33%] leading-[normal] not-italic text-[36px] text-white tracking-[1.44px] whitespace-nowrap">PCB系统</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute capitalize contents inset-[74.95%_80.36%_16.14%_8.39%] whitespace-nowrap">
      <div className="absolute font-['PingFang_SC:Medium',sans-serif] inset-[74.95%_80.36%_16.14%_13.8%] leading-[0]">
        <p className="leading-[24px] mb-0">洞察与创意</p>
        <p className="leading-[24px] mb-0">体验策略与愿景</p>
        <p className="leading-[24px] mb-0">规划与范围定义</p>
        <p className="leading-[24px]">设计执行与验证</p>
      </div>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[74.95%_88.28%_23.01%_8.39%] leading-[normal]">职能范围</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[68.65%_81.93%_26.9%_8.39%]">
      <div className="absolute font-['PingFang_SC:Medium',sans-serif] inset-[68.65%_81.93%_26.9%_13.8%] leading-[0] whitespace-nowrap">
        <p className="leading-[24px] mb-0">{`UI&UX设计`}</p>
        <p className="leading-[24px]">用户研究</p>
      </div>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[68.65%_88.28%_29.34%_8.39%] leading-[normal]">担任角色</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute capitalize contents inset-[64.75%_82.86%_33.21%_8.39%] leading-[normal]">
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[64.75%_89.95%_33.23%_8.39%]">客户</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] inset-[64.75%_82.86%_33.21%_13.8%] whitespace-nowrap">长园达明</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute capitalize contents inset-[85.71%_79.95%_12.06%_8.39%]">
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] inset-[85.71%_79.95%_12.06%_13.8%] leading-[24px]">2020,Jan-Sep</p>
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[85.71%_88.28%_12.24%_8.39%] leading-[normal] whitespace-nowrap">项目时间</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents inset-[64.75%_79.95%_12.06%_8.39%] not-italic text-[16px] text-white" data-name="职能">
      <Group3 />
      <Group2 />
      <Group />
      <Group1 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[46.85%_72.14%_12.06%_8.33%]" data-name="文案">
      <Component1 />
      <Component2 />
    </div>
  );
}

export default function Component3() {
  return (
    <div className="bg-white relative size-full" data-name="101">
      <div className="absolute flex h-[1078px] items-center justify-center left-0 top-0 w-[1920px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[1078px] relative w-[1920px]" data-name="bg">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[192.02%] left-0 max-w-none top-[-45.55%] w-[107.81%]" src={imgBg} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[1276px] left-0 top-[-53px] w-[2050px]" data-name="bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.7%] left-0 max-w-none top-[-0.36%] w-full" src={imgBg1} />
        </div>
      </div>
      <div className="absolute h-[1113px] left-0 top-[-30px] w-[1978.667px]" data-name="组 3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img31} />
      </div>
      <Component />
    </div>
  );
}