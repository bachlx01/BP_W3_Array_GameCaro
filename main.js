let b = document.getElementById("carogame");
let player = 1;

let board = new Array(10);
let data = "";
for (i = 0; i < 10; i++) {
    board[i] = new Array('', '', '', '', '', '', '', '', '', '');
}
data += "<table>";
for (let i = 0; i < board.length; i++) {
    data += "<tr>";
    for (let j = 0; j < board[i].length; j++) {
        data += '<td id="' + i + "-" + j + '" onclick="changeValue(this)">' + board[i][j] + "</td>";
    }
    data += "</tr>";
}
data += '</table>';
b.innerHTML = data;

function changeValue(element) {
    if (player == 1) {
        let positionX = element.getAttribute('id').slice(0, element.getAttribute('id').indexOf('-'));
        let positionY = element.getAttribute('id').slice(element.getAttribute('id').indexOf('-') + 1);
        if (board[positionX][positionY] == "") {
            data = "";
            board[positionX][positionY] = "O";
            data += "<table>";
            for (let i = 0; i < board.length; i++) {
                data += "<tr>";
                for (let j = 0; j < board[i].length; j++) {
                    data += '<td id="' + i + "-" + j + '" onclick="changeValue(this)">' + board[i][j] + "</td>";
                }
                data += "</tr>";
            }
            data += '</table>';
            b.innerHTML = data;
        } else {
            alert('Vị trí này đã được đánh dấu rồi. Nhập lại vị trí khác!');
        }
        player = 2;
    } else {
        let positionX = element.getAttribute('id').slice(0, element.getAttribute('id').indexOf('-'));
        let positionY = element.getAttribute('id').slice(element.getAttribute('id').indexOf('-') + 1);
        if (board[positionX][positionY] == "") {
            data = "";
            board[positionX][positionY] = "X";
            data += "<table>";
            for (let i = 0; i < board.length; i++) {
                data += "<tr>";
                for (let j = 0; j < board[i].length; j++) {
                    data += '<td id="' + i + "-" + j + '" onclick="changeValue(this)">' + board[i][j] + "</td>";
                }
                data += "</tr>";
            }
            data += '</table>';
            b.innerHTML = data;
        } else {
            alert('Vị trí này đã được đánh dấu rồi. Nhập lại vị trí khác!');
        }
        player = 1;
    }
}
