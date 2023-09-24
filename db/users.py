import pymysql
from pymysql import MySQLError, connect

db_user = "root"
db_pass = "12345"
db_name = "db_695"
ip_address = "localhost"
connection = ""

def connectionSQL():
    try:
        global connection
        connection = connect(host=ip_address,
                             user=db_user,
                             password=db_pass,
                             db=db_name)
        print("Succesful connection")
    except MySQLError as ex:
        print(ex)

def insert_record(name, lastName, id, age):
    try:
        cursor = connection.cursor()
        instruction = "INSERT INTO users VALUES ('"+name+"', '" +lastName+ "', " +id+ ", " +age+ ")"
        cursor.execute(instruction)
        connection.commit()
        print("User Registered")
    except MySQLError as ex:
        print(ex)

def consult_record(id):
    try:
        cursor = connection.cursor()
        instruction = "SELECT * FROM users WHERE id="+id+";"
        cursor.execute(instruction)
        results = cursor.fetchall()
        return results
    except MySQLError as ex:
        print(ex)
        return ex