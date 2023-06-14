import mysql.connector
from mysql.connector import Error
from flask import Flask, request, render_template
from config import db_config

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]

        try:
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()

            sql = "INSERT INTO messages (name, email, message) VALUES (%s, %s, %s)"
            values = (name, email, message)
            cursor.execute(sql, values)

            conn.commit()
            cursor.close()
            conn.close()

            return "Mensagem enviada com sucesso!"

        except Error as e:
            return f"Erro ao inserir mensagem no banco de dados: {str(e)}"

    return render_template("index.html")


if __name__ == "__main__":
    app.run()
