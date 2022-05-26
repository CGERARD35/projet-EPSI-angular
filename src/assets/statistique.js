// GRAPH CHIFFRE D'AFFAIRE DE L'ANNEE

const labels = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Chiffre d\'affaire par mois',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: false
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// FIN GRAPH CHIFFRE D'AFFAIRE DE L'ANNEE


// GRAPH PRODUIT LE PLUS VENDU

const labelsPie = [
    'Site Web',
    'CRM',
    'E-Commerce'
];

const dataPie = {
    labels: labelsPie,
    datasets: [{
        label: 'Produits les plus vendus',
        data: [300, 50, 100],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const configPie = {
    type: 'pie',
    data: dataPie,
    options: {
        responsive: false
    }
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    configPie
);

// FIN GRAPH PRODUIT LE PLUS VENDU


// GRAPH CHIFFRE PAR VENDEUR

const labelsBar1 = [
    'Carl',
    'Benjamin',
    'Gurvan',
    'Capgemini'
];

const dataBar1 = {
    labels: labelsBar1,
    datasets: [{
        label: 'Chiffres par vendeurs',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
            'red',
            'blue',
            'green',
            'yellow',
        ],

    }]
};

const configBar1 = {
    type: 'bar',
    data: dataBar1,
    options: {
        responsive: false
    }
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configBar1
);


// FIN GRAPH


// GRAPH CHIFFRES PAR CLIENTS

const labelsClients = [
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
    'Capgemini',
];

const dataClients = {
    labels: labelsClients,
    datasets: [{
        label: 'Chiffres par clients',
        backgroundColor: '#ff8b25',
        borderColor: '#ff8b25',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const configClients = {
    type: 'line',
    data: dataClients,
    options: {
        responsive: false
    }
};

const myChart4 = new Chart(
    document.getElementById('myChart4'),
    configClients
);
// FIN GRAPH
