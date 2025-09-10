document.getElementById('goal-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const goal = document.getElementById('goal').value.toLowerCase();
  const recommendations = [];

  if (goal.includes('weight')) {
    recommendations.push('Incorporate aerobic exercise at least 150 minutes per week.');
    recommendations.push('Aim for a modest calorie deficit through balanced nutrition.');
  } else if (goal.includes('muscle') || goal.includes('strength')) {
    recommendations.push('Perform resistance training 2-3 times per week.');
    recommendations.push('Include protein-rich foods with every meal.');
  } else if (goal.includes('endurance')) {
    recommendations.push('Gradually increase the duration of cardio workouts.');
    recommendations.push('Stay hydrated and allow for rest days.');
  } else if (goal.includes('stress')) {
    recommendations.push('Practice mindfulness or meditation daily.');
    recommendations.push('Engage in regular physical activity to support mental health.');
  } else {
    recommendations.push('Maintain a balanced diet and regular physical activity.');
    recommendations.push('Consult a healthcare professional for personalized guidance.');
  }

  const container = document.getElementById('recommendations');
  container.innerHTML = '<h2>Recommendations</h2>' +
    '<ul>' + recommendations.map(r => '<li>' + r + '</li>').join('') + '</ul>';
});
