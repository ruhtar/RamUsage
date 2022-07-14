const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os; //totalmem e freemen retorna em bytes
  const totalRam = totalmem() / 1024 / 1024; //Transforma os valores de memória em MB
  const freeRam = freemem() / 1024 / 1024; //Transforma os valores de memória em MB
  const usage = (freeRam / totalRam) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${parseInt(totalRam)} MB`,
    FreeRam: `${parseInt(freeRam)} MB`,
    RamUsage: `${parseInt(usage)}%`,
  };
  console.clear(); //Limpa o console antes de printar na tela os valores de OS e RAM
  console.table(stats);
  exports.stats = stats;
}, 1000);
