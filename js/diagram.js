const savedStrings = JSON.parse(localStorage.getItem('gangsters')) || ['Еще никто не был виноват)'];

const counts = new Map();

savedStrings.forEach(function (string) {
    if (counts.has(string)) {
        counts.set(string, counts.get(string) + 1);
    } else {
        counts.set(string, 1);
    }
});

const labels = Array.from(counts.keys());
const data = Array.from(counts.values());

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Виноват кол-во раз',
            data: data,
            backgroundColor: [
                'rgba(245, 97, 32, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(245, 97, 32, 0.5)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});
