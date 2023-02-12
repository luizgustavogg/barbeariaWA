<?php
    include_once("../include/include.php");
    $nome = mysqli_real_escape_string($conn, $_POST['nome']);
    $numero = mysqli_real_escape_string($conn, $_POST['numero']);
    $funcionario = mysqli_real_escape_string($conn, $_POST['id_categoria']);
    $horario = mysqli_real_escape_string($conn, $_POST['id_sub_categoria']);
    
    if(!empty($nome) || !empty($numero) || !empty($funcionario) || !empty($horario)){ // validar o campo vazio
        if (preg_match("/^[a-zA-Z-' ]*$/", $nome)) { //  validar o nome (so tendo letras e Espaço)
            $random_id = rand(time(), 10000000); // criando identificação aleatória para agenda
            $hoje = date('d/m/Y');

            $sqlInsert = mysqli_query($conn, "INSERT INTO agenda(idAgend, datac, FK_idHora, FK_idFunc, nomeCliente, numCliente)
            VALUES ('$random_id', '$hoje', '$horario','$funcionario', '$nome', '$numero')");

            if($sqlInsert){
                echo "sucesso"; // Deu tudo certo
            }
            else{
                echo "Error ao finalizar o agendamento"; 
            }
        }
        else{
            echo "So pode apenas letras e espaço no nome";
        }
    }
    else{
        echo "Preencher todos os campos";
    }

?>