import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const imageJobs = [
  // Industrial AI case
  ["public/images/industrial-ai-detection/7ff1541c3c112892a91494819379750e14ac3783.png", "public/images/work/industrial-ai-detection/00-card.webp"],
  ["public/images/industrial-ai-detection/a1925cfcd1b376841168c4a647d62506c5e54411.png", "public/images/work/industrial-ai-detection/01-hero-base.webp"],
  ["public/images/industrial-ai-detection/7ff1541c3c112892a91494819379750e14ac3783.png", "public/images/work/industrial-ai-detection/02-hero-overlay.webp"],
  ["public/images/industrial-ai-detection/b68591649a0c5b43bd7be4f181ad6cdf25343e21.png", "public/images/work/industrial-ai-detection/03-project-overview.webp"],
  ["public/images/industrial-ai-detection/b41c69a490f4ab2cfaeca97dc4c67de92515c0e1.png", "public/images/work/industrial-ai-detection/04-system-architecture.webp"],
  ["public/images/industrial-ai-detection/23db8f8988371344f84784807220c5d6a8d983d7.png", "public/images/work/industrial-ai-detection/05-monitoring-dashboard.webp"],
  ["public/images/industrial-ai-detection/9b3579a2f0c172e663531cc5f5c8c811a83c58b5.png", "public/images/work/industrial-ai-detection/06-realtime-inspection.webp"],
  ["public/images/industrial-ai-detection/21389c5ba9135ba0ad25cc506e86cb01fe1353a5.png", "public/images/work/industrial-ai-detection/07-defect-analysis.webp"],
  ["public/images/industrial-ai-detection/9e6c33246ff9bd3ed711d7c06cd8dc92b348fea8.png", "public/images/work/industrial-ai-detection/08-camera-settings-2d.webp"],
  ["public/images/industrial-ai-detection/6df9dfe1cddc42ebbae56801d1e0ffc4ef9a56fc.png", "public/images/work/industrial-ai-detection/09-statistics.webp"],
  ["public/images/industrial-ai-detection/d91966385d380fddef53c5d2b5576df90d044da3.png", "public/images/work/industrial-ai-detection/10-camera-settings-3d.webp"],
  ["public/images/industrial-ai-detection/0717bbbb31eb92e5856283b50b1cb6111b528d12.png", "public/images/work/industrial-ai-detection/11-log-management.webp"],
  ["public/images/industrial-ai-detection/29217513684c15e27a45d97c6015c3c2f5c085e0.png", "public/images/work/industrial-ai-detection/12-parameter-editing.webp"],
  ["public/images/industrial-ai-detection/53a693dc74fbe2103a8cc64ab135afb9b6ec3e41.png", "public/images/work/industrial-ai-detection/13-control-settings.webp"],
  ["public/images/industrial-ai-detection/f5b18b0118a63c885a32117e33dd2455fc6abab6.png", "public/images/work/industrial-ai-detection/14-permission-system.webp"],
  ["public/images/industrial-ai-detection/5299ca64c00763e9f4edb1b3da8a61612503b84d.png", "public/images/work/industrial-ai-detection/15-device-frame-a.webp"],
  ["public/images/industrial-ai-detection/6446bca686381664549221adf7c8ec8131858576.png", "public/images/work/industrial-ai-detection/16-device-frame-b.webp"],
  ["public/images/industrial-ai-detection/3829fadc0e9472939fa554b8f2710edd317813fe.png", "public/images/work/industrial-ai-detection/17-next-cover-a.webp"],
  ["public/images/industrial-ai-detection/336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png", "public/images/work/industrial-ai-detection/18-next-cover-b.webp"],

  // PCBA case
  ["public/images/pcba-home/pcba-hero.png", "public/images/work/pcba/00-card.webp"],
  ["components/pcba-home/336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png", "public/images/work/pcba/01-hero.webp"],
  ["components/pcba-home/675995c2c82521a0dc62189b26c8ee62ca24f27c.png", "public/images/work/pcba/02-current-system.webp"],
  ["components/pcba-home/624ba88a81dd15f77f161713646a3bb487791e47.png", "public/images/work/pcba/03-new-system.webp"],
  ["components/pcba-home/336b80f307604bc41aa09ecb4e1c62d6c8923fbb.png", "public/images/work/pcba/04-warning-dashboard.webp"],
  ["components/pcba-home/9411563a9cc31096dbe3c3ba0e68c0d6d7af9a5a.png", "public/images/work/pcba/05-material-module.webp"],
  ["components/pcba-home/76b02e451ed4096f0049d09ff5d57ab14e0589fa.png", "public/images/work/pcba/06-engineering-module.webp"],
  ["components/pcba-home/d06be4b293e6e9da83309f9db088e40e56f1eddb.png", "public/images/work/pcba/07-camera-acquisition.webp"],
  ["components/pcba-home/a04d80b7e9cc02b75a0a6e3c604427f15624d716.png", "public/images/work/pcba/08-camera-parameters.webp"],
  ["components/pcba-home/82db8862f219b0c8e745cba7b48e81e1ab37c950.png", "public/images/work/pcba/09-teaching-record.webp"],
  ["components/pcba-home/283d44a05d25da00718ceb03930a9d89950ea4d8.png", "public/images/work/pcba/10-io-settings.webp"],
  ["components/pcba-home/6cb585a56d57ce6d78f22a8e0778838d259921db.png", "public/images/work/pcba/11-manual-conveyor.webp"],
  ["components/pcba-home/cc2e3a438e2a2e816d538d8531bbefb102aae1c1.png", "public/images/work/pcba/12-manual-gripper.webp"],
  ["components/pcba-home/5d37d244a4c8b86b5eb0187d986e055487ce9529.png", "public/images/work/pcba/13-sync-material.webp"],
  ["components/pcba-home/12dcbeca2073ad63622fd4b6a302a6a46cb4effb.png", "public/images/work/pcba/14-sync-engineering.webp"],
  ["components/pcba-home/ca6affa2ee32b97dba0ce890113d27c4fff8ac33.png", "public/images/work/pcba/15-login-account.webp"],
  ["components/pcba-home/acb98dc1df59b2c421cff35a014d70cfc0954f48.png", "public/images/work/pcba/16-login-role.webp"],
  ["components/pcba-home/da22bb1dc5d22619edf06778cb5189906925d105.png", "public/images/work/pcba/17-log-page.webp"],
  ["components/pcba-home/09f3178d69590a4682617280317cdb2e359f6fb2.png", "public/images/work/pcba/18-design-overview.webp"],
  ["components/pcba-home/697cf02696f0582ebbae7246db44c3273ccf4868.png", "public/images/work/pcba/19-ab-layout.webp"],
  ["components/pcba-home/0f67c6ce1d60b0a2d712d3839b3c0c839937c363.png", "public/images/work/pcba/20-delivery-spec.webp"],
  ["components/pcba-home/1de66081858867de98b51b3111da70765774411b.png", "public/images/work/pcba/21-system-overview.webp"],
  ["components/pcba-home/6b3816bad157ecaa376f6d84b7a048515174afc9.png", "public/images/work/pcba/22-detail-a.webp"],
  ["components/pcba-home/616fa371695e7da9908714e51d353f8fac40e7f0.png", "public/images/work/pcba/23-detail-b.webp"],
  ["components/pcba-home/54cc1c93b05f4a2db171275c844145a8080477a5.png", "public/images/work/pcba/24-detail-c.webp"],
  ["components/pcba-home/52fd17621767d4e158718d29cbd8ec0c341dbcab.png", "public/images/work/pcba/25-detail-d.webp"],
  ["components/pcba-home/3d71b47522280e7710f58e93d1182b994445fb9d.png", "public/images/work/pcba/26-detail-e.webp"],
  ["components/pcba-home/89a0c3a9cbe856d51e011da6370ffc7009277ec0.png", "public/images/work/pcba/27-detail-f.webp"],
  ["components/pcba-home/920fc547070a8ce4c51bf4d728c32509a6f5cfb8.png", "public/images/work/pcba/28-detail-g.webp"],
  ["components/pcba-home/af0f212e078716b99c8651b32f8cf6b15595ab67.png", "public/images/work/pcba/29-final-overview.webp"],
  ["components/pcba-home/ec1290c4e5b3993a689fece1d66b3a220f916819.png", "public/images/work/pcba/30-next-cover.webp"],
  ["components/pcba-home/3829fadc0e9472939fa554b8f2710edd317813fe.png", "public/images/work/pcba/31-next-cover-a.webp"],

  // WMS static case
  ["public/Project_P2/source/src/imports/Wms/a1925cfcd1b376841168c4a647d62506c5e54411.png", "public/images/work/wms/00-card.webp"],
  ["public/Project_P2/source/src/imports/Wms/a1925cfcd1b376841168c4a647d62506c5e54411.png", "public/images/work/wms/01-hero.webp"],
  ["public/Project_P2/source/src/imports/Wms/b68591649a0c5b43bd7be4f181ad6cdf25343e21.png", "public/images/work/wms/02-dashboard-overview.webp"],
  ["public/Project_P2/source/src/imports/Wms/23db8f8988371344f84784807220c5d6a8d983d7.png", "public/images/work/wms/03-web-view.webp"],
  ["public/Project_P2/source/src/imports/Wms/0a47443951c4caecf5be305a8a7407e048a33a6b.png", "public/images/work/wms/04-rf-view.webp"],
  ["public/Project_P2/source/src/imports/Wms/d7e53d8267efccb18d7d4fe8b83acbe3cf988548.png", "public/images/work/wms/05-template-all.webp"],
  ["public/Project_P2/source/src/imports/Wms/8f7228e72dbc01354c8ea444c4f893f671624be5.png", "public/images/work/wms/06-rf-main.webp"],
  ["public/Project_P2/source/src/imports/Wms/5bf999b8ed489032f7552203d35f645d1fa67a08.png", "public/images/work/wms/07-mode-lite.webp"],
  ["public/Project_P2/source/src/imports/Wms/2600512d4e2103f088c39cd0d6a317dc37041951.png", "public/images/work/wms/08-mode-standard.webp"],
  ["public/Project_P2/source/src/imports/Wms/6abd3ce5edb43a085e7d1698973ee1cae4c9b145.png", "public/images/work/wms/09-mode-complex.webp"],
  ["public/Project_P2/source/src/imports/Wms/4eb63c54b41f18338aeec748c0640b917e3d744f.png", "public/images/work/wms/10-flow-1.webp"],
  ["public/Project_P2/source/src/imports/Wms/3829fadc0e9472939fa554b8f2710edd317813fe.png", "public/images/work/wms/11-flow-2.webp"],
  ["public/Project_P2/source/src/imports/Wms/336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png", "public/images/work/wms/12-flow-3.webp"],

  // GPS case
  ["public/images/gps-2/hero.png", "public/images/work/gps-2/00-card.webp"],
  ["public/images/project-gps-2/5479f65d6abe97f21b99c7efb59f599dbb01e1bc.png", "public/images/work/gps-2/01-hero-base.webp"],
  ["public/images/project-gps-2/0ad3598a1bb924f5ad4091a724980ccb08506b91.png", "public/images/work/gps-2/02-hero-overlay.webp"],
  ["public/images/project-gps-2/66b8726b5ed08e4a8dc2767d44e20519f6b4ebee.png", "public/images/work/gps-2/03-project-overview.webp"],
  ["public/images/project-gps-2/d6204e0055b0267ba30402b5aafa540d00cca09b.png", "public/images/work/gps-2/04-map-dashboard.webp"],
  ["public/images/project-gps-2/9104ded63af30bb84614c6f588e1e4af634e31d4.png", "public/images/work/gps-2/05-task-flow.webp"],
  ["public/images/project-gps-2/0b095acc2c953901851bc74b531bbee54172bef5.png", "public/images/work/gps-2/06-mobile-frame-base.webp"],
  ["public/images/project-gps-2/fd5105de07db292be4ee03033fb27bd9fed589de.png", "public/images/work/gps-2/07-mobile-state-1.webp"],
  ["public/images/project-gps-2/52f1bd9e3c1eaa68686e1b32d68848db09447b03.png", "public/images/work/gps-2/08-mobile-state-2.webp"],
  ["public/images/project-gps-2/1de99f8b6576b99ceda5802611e5007a6d8d6596.png", "public/images/work/gps-2/09-mobile-state-3.webp"],
  ["public/images/project-gps-2/6847e7c9b863929b8d5b783629f8f965847eb2ad.png", "public/images/work/gps-2/10-mobile-state-4.webp"],
  ["public/images/project-gps-2/96d16763ae68c834d0746ae5b4d0ab04bd688ada.png", "public/images/work/gps-2/11-decision-map.webp"],
  ["public/images/project-gps-2/52e64294f6d0960bb715f6e9b5050e6fce1d02c4.png", "public/images/work/gps-2/12-strategy-panel.webp"],
  ["public/images/project-gps-2/d796b62bdf4be0e2f203452401a5f82ad1d2351b.png", "public/images/work/gps-2/13-interface-overview-a.webp"],
  ["public/images/project-gps-2/3f9330c83c364b2bc1ddc78c57f66e338f2726b0.png", "public/images/work/gps-2/14-interface-overview-b.webp"],
  ["public/images/project-gps-2/b1dba9dd7b5e787ee49e1606ac8d956c32a88ab0.png", "public/images/work/gps-2/15-mobile-state-5.webp"],
  ["public/images/project-gps-2/eac1e7e093ed6ee5ff5350f9d4f61a708899e05d.png", "public/images/work/gps-2/16-mobile-state-6.webp"],
  ["public/images/project-gps-2/7fa7beb8bd81207395c5ca2def0fa53dd77cc00d.png", "public/images/work/gps-2/17-mobile-state-7.webp"],
  ["public/images/project-gps-2/91fb763dea378ed2e49aebc19c5f3a3ec3a3149d.png", "public/images/work/gps-2/18-final-overview.webp"],
  ["public/images/project-gps-2/7fe295df83399d569038760dda9cf61bf545625d.png", "public/images/work/gps-2/19-next-cover-a.webp"],
  ["public/images/project-gps-2/3829fadc0e9472939fa554b8f2710edd317813fe.png", "public/images/work/gps-2/20-next-cover-b.webp"],
  ["public/images/project-gps-2/336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png", "public/images/work/gps-2/21-next-cover-c.webp"],

  // 5G Chatbot case
  ["app/work/5G/src/imports/5Gchatbot/902bd9cb5345e95748b19b0a35ef01cb4f60a3f5.png", "public/images/work/5g-chatbot/00-card.webp"],
  ["app/work/5G/src/imports/5Gchatbot/902bd9cb5345e95748b19b0a35ef01cb4f60a3f5.png", "public/images/work/5g-chatbot/01-hero.webp"],
  ["app/work/5G/src/imports/5Gchatbot/a169984832e56fd99a6974db941e6246f6758413.png", "public/images/work/5g-chatbot/02-challenges.webp"],
  ["app/work/5G/src/imports/5Gchatbot/c6d713bf855a8399cbf3882240f2ed94e204cc6e.png", "public/images/work/5g-chatbot/03-strategy-flow.webp"],
  ["app/work/5G/src/imports/5Gchatbot/f21bc47bf40d6c7af0e89e41b96507852425354c.png", "public/images/work/5g-chatbot/04-design-spec.webp"],
  ["app/work/5G/src/imports/5Gchatbot/f8eb217af3bca6a7db483191f74f0068285aac8e.png", "public/images/work/5g-chatbot/05-strategy-detail.webp"],
  ["app/work/5G/src/imports/5Gchatbot/449724633cc62d0afe68e79ac547f710cc5249c1.png", "public/images/work/5g-chatbot/06-deliverables.webp"],

  // Factory dashboard case
  ["app/work/factory/src/imports/友讯达数据大屏/c5559afa8d754117b73a27710273be81c1fdc7c6.png", "public/images/work/factory-dashboard/00-card.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/c5559afa8d754117b73a27710273be81c1fdc7c6.png", "public/images/work/factory-dashboard/01-hero.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/af642686dce3013c8b19020aaeb8e39891ce0f8d.png", "public/images/work/factory-dashboard/02-overview.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/05bdfedb9f5eab215358879e4eeea132b944bb9d.png", "public/images/work/factory-dashboard/03-data-dashboard.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/289409ed7f5d42c956c81efa0421804f97c7abac.png", "public/images/work/factory-dashboard/04-production-analysis.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/c6a4717dc9a15f634e8f8ab3dd89d3b98e177bec.png", "public/images/work/factory-dashboard/05-alert-system.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/7b809cfff199bef8cf9e7d4a5fb52dccb822722a.png", "public/images/work/factory-dashboard/06-management-view.webp"],
  ["app/work/factory/src/imports/友讯达数据大屏/ec4c6095fd6a350f08b58788a4065275f3c24293.png", "public/images/work/factory-dashboard/07-final-screen.webp"],

  // DS-AI case
  ["public/images/p3_assets/p3-card-cover.png", "public/images/work/ds-ai/00-card.webp"],
  ["public/images/p3_assets/evidence-01.png", "public/images/work/ds-ai/01-evidence-01.webp"],
  ["public/images/p3_assets/evidence-02.png", "public/images/work/ds-ai/02-evidence-02.webp"],
  ["public/images/p3_assets/context-package.png", "public/images/work/ds-ai/03-context-package.webp"],
  ["public/images/p3_assets/ai-draft-vs-human.png", "public/images/work/ds-ai/04-ai-draft-vs-human.webp"],
  ["public/images/p3_assets/qa-checklist.png", "public/images/work/ds-ai/05-qa-checklist.webp"]
];

let totalBefore = 0;
let totalAfter = 0;

for (const [source, target] of imageJobs) {
  const sourcePath = path.join(root, source);
  const targetPath = path.join(root, target);
  await fs.mkdir(path.dirname(targetPath), { recursive: true });

  const before = (await fs.stat(sourcePath)).size;
  await sharp(sourcePath)
    .webp({
      quality: 84,
      effort: 6,
      smartSubsample: true
    })
    .toFile(targetPath);
  const after = (await fs.stat(targetPath)).size;

  totalBefore += before;
  totalAfter += after;
  console.log(`${target}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
}

console.log(`Generated ${imageJobs.length} WebP files.`);
console.log(`Total: ${Math.round(totalBefore / 1024)}KB -> ${Math.round(totalAfter / 1024)}KB`);
