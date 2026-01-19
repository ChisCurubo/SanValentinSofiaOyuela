let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Función para actualizar el collage de imágenes
// function updateCollage() {
//     const images = [
//         'collageImg1', 'collageImg2', 'collageImg3', 'collageImg4',
//         'collageImg5', 'collageImg7'
//     ];
//     const sources = [
//         'img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg',
//         'img5.jpeg', 'img7.jpeg'
//     ];
//     // Barajar las fuentes
//     const shuffledSources = sources.sort(() => Math.random() - 0.5);
    
//     // Posiciones fijas alrededor de la pantalla
//     const positions = [
//         {top: '5%', left: '5%'},
//         {top: '5%', left: '80%'},
//         {top: '45%', left: '2%'},
//         {top: '45%', left: '88%'},
//         {top: '85%', left: '5%'},
//         {top: '85%', left: '80%'},
//     ];
    
//     images.forEach((id, index) => {
//         const img = document.getElementById(id);
//         img.src = shuffledSources[index];
//         img.style.display = 'block';
//         img.style.top = positions[index].top;
//         img.style.left = positions[index].left;
//     });
// }

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Siii! jijiji';
    document.getElementById('messageContainer2').style.display = 'block';
    document.getElementById('messageContainer2').innerHTML = 'Mi valentin por siempre y para siempre!!!!!';

    // Actualizar collage
    // updateCollage();

    // Mostrar otro gif después de 4 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 4000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 8000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 12000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás seguro?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            // updateCollage();
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas seguro?!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            // updateCollage();
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Estás seguro de verdad, ¿eh?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            // updateCollage();
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = '¿Eres positvo?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            // updateCollage();
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Di que si por favor?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            // updateCollage();
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Solo piensa en ello';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            // updateCollage();
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Si, dices que no estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            // updateCollage();
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            // updateCollage();
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
       
            noButtonState++;
            // updateCollage();
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
          
            noButtonState++;
            // updateCollage();
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'Vale, ya dejaré de preguntar...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            // updateCollage();
            break;
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            // updateCollage();
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
    
            noButtonState++;
            // updateCollage();
            break;
        
        case 13:
           
            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón :(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
         
            noButtonState++;
            // updateCollage();
            break;
        
        case 14:
           
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            
            noButtonState++;
            // updateCollage();
            break;
        
        case 15:
           
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
          
            noButtonState++;
            // updateCollage();
            break;
        
     
        case 16:
                document.getElementById('noBtn').style.display='none'
                document.getElementById('question').innerHTML="Sofia Oyuela Díaz ¿Quieres ser mi San Valentín? eche enserio? ya me canse"
              
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';

                // updateCollage();
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


