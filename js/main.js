function writeNumber(){
    var _button = document.getElementsByTagName('button');
    var _input = document.getElementById('input');
    var result = document.getElementById('result');
    var _c = document.getElementById('c')
    _input.value = '';
    for(let x=0;x<_button.length;x++){
        _button[x].onclick = function(){
            _input.value += _button[x].value
            console.log(_input.value)
        }       
    }
    _c.onclick = function(){
        _input.value = '';
    }
    result.onclick = function(){
        if(_input.value == ''){
            alert('please add numbers')
        } else{
            alert(eval(_input.value));
        }
    }
}
writeNumber()