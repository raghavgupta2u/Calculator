function sin() {
    document.calculator.result.value = Math.sin(document.calculator.result.value);
}
function cos() {
    document.calculator.result.value = Math.cos(document.calculator.result.value);
}
function tan() {
    document.calculator.result.value = Math.tan(document.calculator.result.value);
}
function pow() {
    document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}
function sqrt() {
    document.calculator.result.value = Math.sqrt(document.calculator.result.value, 2);
}
function log() {
    document.calculator.result.value = Math.log(document.calculator.result.value);
}
function pi() {
    document.calculator.result.value = 3.14159265359;
}
function e() {
    document.calculator.result.value = 2.71828182846;
}
function fact() {
    var i, num, f;
    f = 1;
    num = document.calculator.result.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    document.calculator.result.value = f;
}

function hiddbutton(){
    document.querySelector('.more').addEventListener('click', function() {
        const buttons = document.querySelectorAll('.h');
        const equals = document.querySelector('.equal');
        buttons.forEach(function(button) {
            if(button.style.display === 'none'){
                 button.style.display = '';
                 equals.style.width = '240px';
                
            }else{
                button.style.display = 'none' ;
                equals.style.width = '145px';
            };
        });
    });

}


