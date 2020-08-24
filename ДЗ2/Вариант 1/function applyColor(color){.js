var background123 = 1;
function setBg() {
    background123++;
    if (background123 == 2) {document.bgColor = 'red';}
    if (background123 == 3) {document.bgColor = 'green';}
    if (background123 == 4) {document.bgColor = 'blue';}
    if (background123 == 5) {document.bgColor = 'white'; background123 = 1;}
}