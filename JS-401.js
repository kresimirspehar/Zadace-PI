let studenti = [
    {
        ime: "Marko",
        prezime: "Marković",
        upisan: true 
    },
    {
        ime: "Iva",
        prezime: "Ivić",
        upisan: false
    },
    {
        ime: "Krešimir",
        prezime: "Špehar",
        upisan: true
    },
    {
        ime: "Ivan",
        prezime: "Zelinski",
        upisan: true
    },
    {
        ime: "Mirjana",
        prezime: "Horvat",
        upisan: false
    },
    {
        ime: "Luka",
        prezime: "Tomić",
        upisan: false
    },
    {
        ime: "Stipe",
        prezime: "Ivanko",
        upisan: true
    },
    {
        ime: "Mario",
        prezime: "Kopljar",
        upisan: true
    },
    {
        ime: "Ivana",
        prezime: "Perić",
        upisan: true
    },
    {
        ime: "Boris",
        prezime: "Božić",
        upisan: true
    }
]


function provjeri (lista, pojam) {
    for (let i = 0; i<lista.length; i++) {
        if (lista[i].ime == pojam && lista[i].upisan == true || lista[i].prezime == pojam && lista[i].upisan == true) 
        return true;
    }
        return false;
}

console.log(provjeri (studenti, "Tomić"));