<?php
    include_once("include/include.php");
    $hoje = date('d/m/Y');
	$id_categoria = $_GET['id_categoria'];

	$result_sub_cat = "SELECT * FROM horarios";
	$resultado_sub_cat = mysqli_query($conn, $result_sub_cat);
	// $result_sub_cat = ($conn, "SELECT * FROM horarios");

	while ($row_sub_cat = mysqli_fetch_assoc($resultado_sub_cat) ) {

		$sql = "SELECT * FROM agenda WHERE FK_idFunc = '$id_categoria' AND FK_idHora = ". $row_sub_cat['idHora'];
		$resultado = mysqli_query($conn, $sql);

		if(mysqli_num_rows($resultado) == 0){
		echo "<option value='".$row_sub_cat['idHora']."'>".$row_sub_cat['descricao']."</option>";
    }
}

?>