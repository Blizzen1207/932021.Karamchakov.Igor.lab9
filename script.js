let is_equally_pressed = false;
document.addEventListener('DOMContentLoaded', function()
{

    // Обработка событий для кнопок ввода цифр
    document.querySelectorAll("button[class *='button_']").forEach(element =>{
        element.addEventListener('click',function(element){
            if(is_equally_pressed)
            {
                document.querySelector('input').value = "";
                document.querySelector('.Gray_Input').textContent = "";
                is_equally_pressed = false;
            }
            if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) === true && document.querySelector('input').value.slice(-1) !== '.')
            {
                document.querySelector('.Gray_Input').textContent = "";
            }
            document.querySelector('input').value+=element.target.textContent;
            document.querySelector('.Gray_Input').textContent+=element.target.textContent;
        })
    });

    // Очисщаем ввод
    document.querySelector('.delete').addEventListener('click',function(){
        document.querySelector('input').value = "";
        document.querySelector('.Gray_Input').textContent = "";
    })

    // Удаление одного символа
    document.querySelector('.left').addEventListener('click', function(){
        document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
        document.querySelector('.Gray_Input').textContent=document.querySelector('.Gray_Input').textContent.slice(0,-1);
    })

    // Операторы
    document.querySelectorAll('.operation').forEach(element =>{
        element.addEventListener('click', function(element){
            if (is_equally_pressed){is_equally_pressed = false;}
            if(document.querySelector('input').value.length!==0 ){
                if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 1)
                {
                    document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
                    document.querySelector('.Gray_Input').textContent =document.querySelector('.Gray_Input').textContent.slice(0,-1);
                }
                document.querySelector('.Gray_Input').textContent+=element.target.textContent;
                document.querySelector('input').value+=element.target.textContent;
            }
        });
    })

    // Добавление точки
    document.querySelector('.dot').addEventListener('click', function(){
        if(document.querySelector('input').value.slice(-1) !== '.')
        {
            document.querySelector('input').value+= '.';
            document.querySelector('.Gray_Input').textContent+='.'
        }
    })

    // Вычисление результата
    document.querySelector('.equally').addEventListener('click',function(){
        if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 0)
        {
            document.querySelector('input').value = eval(document.querySelector('input').value);
            document.querySelector('.Gray_Input').textContent = document.querySelector('input').value;
            is_equally_pressed = true
        }

    })
})