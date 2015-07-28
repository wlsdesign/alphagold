
	
		<tr>
			<td>N°</td>
			<td>Nome</td>
			<td>E-mail</td>
		</tr>
		
			<?php
	        include("inc/conexao.php");
	        $sql = mysql_query("SELECT * FROM precadastro ORDER BY id DESC");
	        $i = 0;
	        while($ln=mysql_fetch_array($sql)){
	          $qntd = mysql_num_rows($sql);
	          $i++
	       ?>
	       <tr>

	       		<td><?php echo $i;  ?></td>
				<td><?php echo $ln["nome"]; ?></td>
				<td><?php echo $ln["email"]; ?></td>
			</tr>
			<?php } ?>
	
