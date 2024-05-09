from flask import Flask
from finance_functions import finance_api
import yfinance as yf

app = Flask(__name__)

app.register_blueprint(finance_api())

@app.route("/members", methods=['GET'])
def members():
    stock = yf.Ticker('CAR-UN.TO')
    print(stock.history(period="1mo"))
    return 'hi'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
