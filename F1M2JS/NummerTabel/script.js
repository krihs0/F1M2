var table = document.getElementById("table");

for(var i = 1; i <= 100; i++){
    var row = document.createElement("tr");
    for(var j = 1; j <= 100; j++){
        var tableData = document.createElement("td");
        tableData.innerHTML = i * j;
        tableData.style.backgroundColor = "rgb(" + (j*2.5) + ", 100," + i + ")"
        table.appendChild(tableData);
    }
    table.appendChild(row);
}
