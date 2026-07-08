import Pcba from "./Pcba";

export default function PcbaHome() {
  return (
    <>
      <style>{`body > header { display: none !important; }`}</style>
      <div className="min-h-screen w-full overflow-x-auto bg-[#fafafa]">
        <Pcba />
      </div>
    </>
  );
}
