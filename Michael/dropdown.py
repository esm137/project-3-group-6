# code to be added to project_3_flask_starter.py for dropdown
from flask import Flask, render_template

@app.route("/dropdown")
def dropdown():
    Position=pd.DataFrame(engine.execute('SELECT * FROM "Spotify_Tracks" order by Position limit 50;').fetchall())
    return render_template("index.html",Position=Position)

