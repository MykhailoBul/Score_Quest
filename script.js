const scores = [45, 88, 32, 99, 74, 50,61,92,65,14,90];
let currentScores = [...scores];

const scoreList = document.getElementById('scoreList');
const result = document.getElementById('result');

const kpiCount = document.getElementById('kpi-count');
const kpiAvg = document.getElementById('kpi-avg');
const kpiTh = document.getElementById('kpi-th');
const countInput = document.getElementById("count");


function renderScores() {
  scoreList.innerHTML = "";
  currentScores.forEach((score) => {
      const item = document.createElement("p");
      item.textContent = score;
      scoreList.appendChild(item);
  });
     kpiCount.textContent = currentScores.length;
}

kpiCount.textContent = currentScores.length;
renderScores(currentScores);

function renderAll() {
  renderScores(currentScores);
}

function addBonus() {
  currentScores = currentScores.map((score) => score + 5);
  renderScores(currentScores);
};

function filterByThreshold() {
  const filteredScores = currentScores.filter(score => score >= 60);
  renderScores(filteredScores);
  kpiCount.textContent = filteredScores.length;
}

function showAverage(){
    if (currentScores.length > 0){
        let total = currentScores.reduce((sum, score) => sum + score, 0);
        let average = total / currentScores.length;
        kpiAvg.textContent = average.toFixed(2);
    } else{
        kpiAvg.textContent = '-';
    }
}

function resetAll(){
    currentScores = [...scores];
    renderScores(currentScores);
    kpiAvg.textContent = '-'
}

function makeRandom(){
  const countInput = document.getElementById('count');
  let count = 9; 
  if (countInput) {
    const parsed = parseInt(countInput.value, 10);
    if (!Number.isNaN(parsed) && parsed > 0) count = Math.min(Math.max(parsed, 1), 100);
  }
  currentScores = generateRandomScores(count);
  renderScores(currentScores);
  kpiAvg.textContent = '–';
}

function generateRandomScores(count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(Math.floor(Math.random() * 100) + 1);
  }
  return out;
}

function chainAverage() {
  currentScores = currentScores.map(s => s + 5);
  const filtered = currentScores.filter(s => s >= 60);
  renderScores(filtered);
  showAverage();
}

