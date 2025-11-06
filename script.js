const scores = [45, 88, 32, 99, 74, 50,61,92,65,14,90];
let currentScores = [...scores];

const scoreList = document.getElementById('scoreList');
const result = document.getElementById('result');

const kpiCount = document.getElementById('kpi-count');
const kpiAvg = document.getElementById('kpi-avg');
const kpiTh = document.getElementById('kpi-th');

function renderScores(scores) {
  scoreList.innerHTML = ''; 
  scores.forEach(score => {
    const scoreItem = document.createElement("p");
    scoreItem.textContent = score;
    scoreList.appendChild(scoreItem);
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
    const count = parseInt(countInput.value);
    currentScores = makeRandomScores;
    renderScores(currentScores);
    kpiAvg.textContent = '–';
}

function generateRandomScores(count) {
  const scores = [];
  for (let i = 0; i < count; i++) {
    scores.push(Math.floor(Math.random() * 100) + 1); // Random scores between 1 and 100
  }
  return scores;
}

// Initial load of random scores
makeRandom();

// Event listeners for the buttons
document.getElementById("show").addEventListener("click", renderAll);
document.getElementById("bonus").addEventListener("click", addBonus);
document.getElementById("passed").addEventListener("click", filterByThreshold);
document.getElementById("average").addEventListener("click", showAverage);
document.getElementById("reset").addEventListener("click", resetAll);
document.getElementById("chain").addEventListener("click", () => {
  // A simple chain example: applying all transformations in sequence
  addBonus();
  filterByThreshold();
  showAverage();