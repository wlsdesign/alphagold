<?php
	include('../inc/conexao.php');

	$nome = $_POST['nome'];
	$sexo = $_POST['sexo'];
	$email = $_POST['email'];
	$zap = $_POST['zap'];
	$obs = $_POST['obs'];

		$sql2 = mysql_query("SELECT * FROM precadastro ORDER BY id DESC");
		$resultado = mysql_fetch_array($sql2);
		$result_email = $resultado['email'];
		$result_nome = $resultado['nome'];

		if($nome == $result_nome){
			echo "<div class='alerta'>Já existem um usuário cadastrado com esse nome.</div>";
		}
		elseif($email == $result_email){
			echo "<div class='alerta'>Já existem um usuário cadastrado com esse E-mail.</div>";
		}else{
			$sql = mysql_query("INSERT INTO precadastro (nome, sexo, email, zap, obs) VALUES ('$nome', '$sexo', '$email', '$zap', '$obs')");
			if($sql == true){
				echo "Pré-cadastro realizado com sucesso!";
			}else{
				echo "Falha ao cadastrar.";
			}
		}

		
 ?>