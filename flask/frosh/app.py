from flask import Flask, render_template, request

app = Flask(__name__) #<--Hi

SPORTS = ["Dodgeball", "Kickball", "Soccer"]

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)

@app.route("/register", methods=["POST"])
def register():
    if not request.form.get("name") or not request.form.get("sport") not in SPORTS:
        return render_template("failure.html")
    for sport in request.form.getList("sport"):
        if sport not in SPORTS:
            return render_template("failure.html")
    return render_template("success.html")