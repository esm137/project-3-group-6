import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

engine = create_engine(f'postgresql://postgres:password@localhost/project_3')

app = Flask(__name__)


@app.route('/')
def welcome():
    return(f'routes:<br/>'
            f'/sample'

    )



@app.route('/sample')
def bulkdata():
    result=pd.DataFrame(engine.execute('select * from "Spotify_Tracks" limit 10;').fetchall())
    return(
       result.to_json()

    )



if __name__ == '__main__':
    app.run(debug=True)
