import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS
engine = create_engine(f'postgresql://postgres:password@localhost/project_3')

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return(f'routes:<br/>'
            f'/dump'

    )



@app.route('/dump')
def bulkdata():
    result=pd.DataFrame(engine.execute('select * from spotify_tracks limit 1000000   ;').fetchall())
    return(
       result.to_json()

    )

@app.route('/regionlist')
def regionlist():
    result=pd.DataFrame(engine.execute('select "Region" from spotify_tracks group by "Region" ;').fetchall())
    return(
       result[0].to_json()

    )

@app.route('/datelist')
def datelist():
    result=pd.DataFrame(engine.execute('select "Date" from spotify_tracks group by "Date" ;').fetchall())
    return(
       result[0].to_json()

    )
@app.route('/artistlist/<region>/<date>')
def artistlist(region,date):
    query=(f"""select spotify_tracks."Artist"
    from spotify_tracks
    where spotify_tracks."Region"=\'{region}\' and Spotify_Tracks."Date"=\'{date}\'
    group by spotify_tracks."Artist"
    order by Sum("Streams")
    limit 10
    ;""")


    result=pd.DataFrame(engine.execute(query).fetchall())
    return(
       result[0].to_json()
    )

@app.route('/streamslist/<region>/<date>')
def streamslist(region,date):
    query=(f"""select sum(spotify_tracks."Streams")
    from spotify_tracks
    where spotify_tracks."Region"=\'{region}\' and Spotify_Tracks."Date"=\'{date}\'
    group by spotify_tracks."Artist"
    order by sum("Streams")
    limit 10
    ;""")

    result=pd.DataFrame(engine.execute(query).fetchall())
    return(
       result[0].to_json()
    )
if __name__ == '__main__':
    app.run(debug=True)
 
