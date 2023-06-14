<?php
// Obtém os dados enviados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

// Conexão com o banco de dados
$servername = "localhost";
$username = "nahuan";
$password = "123456";
$dbname = "message.db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Insere a mensagem no banco de dados
$sql = "INSERT INTO mensagens (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

if ($conn->query($sql) === TRUE) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar a mensagem: " . $conn->error;
}

$conn->close();
?>
