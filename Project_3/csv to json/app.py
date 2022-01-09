# 1.import flask

from flask import Flask

# 2. create a local app

app = Flask(__name__)

# 3. define index route
@app.route("/")
def home():
    # print message thro command line
     print("Server accessed the Home route")
     # print message thro command line
     return("Tony")
    
    


# define main function

if __name__ == "__main__":
    app.run(debug=True)