function Group6() {
  return (
    <div className="absolute contents inset-[21.34%_31.04%_67.9%_31.04%] leading-[normal] not-italic text-black whitespace-nowrap">
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] inset-[21.34%_45%_72.45%_45%] text-[48px]">用户洞察</p>
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[28.48%_31.04%_67.9%_31.04%] text-[28px]">为了了解用户想要的产品是怎么样的，我们进行了员工访谈</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[54.82%_41.15%_35.71%_40.1%]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[54.82%_41.15%_35.71%_40.1%] leading-[normal] not-italic text-[24px] text-black">“用户分为因业务需要经常进行机台操作和主要进行项目管理偶尔查看机台运作情况两类。”</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[39.8%_17.97%_50.74%_63.28%]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[39.8%_17.97%_50.74%_63.28%] leading-[normal] not-italic text-[24px] text-black">“机台故障在系统上只有硬件红黄灯亮起预警，用户需要检查机台才能发现当前报警原因。”</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[39.8%_64.32%_50.74%_16.93%]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[39.8%_64.32%_50.74%_16.93%] leading-[normal] not-italic text-[24px] text-black">“用户只能通过项目日志来确认项目是否顺利，并进行对应的策略调整。”</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[54.82%_64.32%_38.87%_16.93%]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[54.82%_64.32%_38.87%_16.93%] leading-[normal] not-italic text-[24px] text-black">“项目资料对接只能通过人工使用存储设备额外导入。”</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[39.8%_41.15%_50.74%_40.1%]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[39.8%_41.15%_50.74%_40.1%] leading-[normal] not-italic text-[24px] text-black">“用户需要通过机台跟操作后台来回操作确认机器状态，以确认插件顺利对孔。”</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[54.82%_17.97%_38.87%_63.28%]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[54.82%_17.97%_38.87%_63.28%] leading-[normal] not-italic text-[24px] text-black">“人员权限管理依靠额外OA进行管控，人工进行权限输入。”</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="106">
      <Group6 />
      <Group />
      <Group3 />
      <Group1 />
      <Group4 />
      <Group2 />
      <Group5 />
    </div>
  );
}