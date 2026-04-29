import img2 from "./8ab141dce670b7b6e762d96a6f8f33936d2ae24b.png";
import img3 from "./03233149131de7072335e813105af1d3a37edf24.png";

function Group() {
  return (
    <div className="absolute contents left-[304px] top-[312px]">
      <div className="absolute h-[625px] left-[304px] rounded-[8px] shadow-[0px_4px_40px_0px_rgba(108,117,134,0.2)] top-[312px] w-[1000px]" data-name="2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img2} />
      </div>
      <div className="absolute h-[549px] left-[1344px] opacity-80 rounded-[8px] shadow-[0px_4px_40px_0px_rgba(108,117,134,0.2)] top-[371px] w-[254px]" data-name="3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[113.84%] left-[-287.4%] max-w-none top-[-10.93%] w-[393.7%]" src={img3} />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f1f1f1] relative size-full" data-name="109">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] inset-[16.33%_27.34%_74.77%_27.34%] leading-[48px] not-italic opacity-80 text-[#181819] text-[28px] text-center">在可视化的条件下进行数据修改设置，提高物料识别率和WIP状态，敏捷应对各项异常，重新生成可执行需求。</p>
      <p className="absolute capitalize font-['PingFang_SC:Medium',sans-serif] inset-[9.28%_41.2%_85.53%_41.15%] leading-[normal] not-italic text-[#181819] text-[40px] text-center tracking-[1.6px]">生产/物料可视化</p>
      <Group />
    </div>
  );
}