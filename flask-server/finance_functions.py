from flask import Blueprint, request
import numpy as np
import pandas as pd
import yfinance as yf
import datetime


def finance_api():

    finance = Blueprint('finance', __name__)

    # current price - previous close = current +/-
    # current +/- divided by 
    @finance.route("/account", methods=['GET'])
    def account():
        try:
            top_20 = 'AAPL MSFT GOOG TSLA PLTR NVDA AMZN PFE LYFT AMD'
            list_top_20 = top_20.split(' ')
            ticker = yf.Tickers(top_20)

            temp = []
            for entry in list_top_20:
                entry_info = ticker.tickers[entry].info
                diff = entry_info['currentPrice'] - entry_info['previousClose']
                percent = (diff / entry_info['currentPrice']) * 100
                temp.append({
                    'name': entry, 
                    'day_diff': round(diff, 2), 
                    'current_price': round(entry_info['currentPrice'], 2), 
                    'percentage': round(percent, 2)
                })
            
            return temp
        except:
            return('error')
        
    @finance.route("/search_ticker", methods=['POST'])
    def search_ticker():
        try:
            d = request.get_json()
            name = d.get('ticker', '')

            ticker = yf.Ticker(name)

            entry_info = ticker.info
            diff = entry_info['currentPrice'] - entry_info['previousClose']
            percent = (diff / entry_info['currentPrice']) * 100

            # 1 day ticker data
            _1d_data = ticker.history(period="1d", interval='1m').reset_index()
            _1d_data['Close'] = _1d_data['Close'].apply(lambda x: round(x, 2))
            _1d_data['Date'] = _1d_data['Datetime'].apply(lambda x: x.strftime('%m-%d %I:%M%p'))

            # 5 day ticker data
            _5d_data = ticker.history(period="5d", interval='30m').reset_index()
            _5d_data['Close'] = _5d_data['Close'].apply(lambda x: round(x, 2))
            _5d_data['Date'] = _5d_data['Datetime'].apply(lambda x: x.strftime('%m-%d %I:%M%p'))

            # 1 month ticker data
            _1m_data = ticker.history(period="1mo", interval='1d').reset_index()
            _1m_data['Close'] = _1m_data['Close'].apply(lambda x: round(x, 2))
            _1m_data['Date'] = _1m_data['Date'].apply(lambda x: x.strftime('%Y-%m-%d'))

            # 6 month ticker data
            _6m_data = ticker.history(period="6mo", interval='1d').reset_index()
            _6m_data['Close'] = _6m_data['Close'].apply(lambda x: round(x, 2))
            _6m_data['Date'] = _6m_data['Date'].apply(lambda x: x.strftime('%Y-%m-%d'))

            # 1 year ticker data
            _1y_data = ticker.history(period="1y", interval='5d').reset_index()
            _1y_data['Close'] = _1y_data['Close'].apply(lambda x: round(x, 2))
            _1y_data['Date'] = _1y_data['Date'].apply(lambda x: x.strftime('%Y-%m-%d'))
            # 5 year ticker data
            _5y_data = ticker.history(period="5y", interval='1wk').reset_index()
            _5y_data['Close'] = _5y_data['Close'].apply(lambda x: round(x, 2))
            _5y_data['Date'] = _5y_data['Date'].apply(lambda x: x.strftime('%Y-%m-%d'))
            # max ticker data

            complete_ticker_data = {
                'name': name, 
                'day_diff': round(diff, 2), 
                'current_price': round(entry_info['currentPrice'], 2), 
                'percentage': round(percent, 2),
                'entry_info': entry_info,
                'oneDayData': _1d_data.reset_index().to_dict('records'),
                'fiveDayData': _5d_data.reset_index().to_dict('records'),
                'oneMonthData': _1m_data.reset_index().to_dict('records'),
                'sixMonthData': _6m_data.reset_index().to_dict('records'),
                'oneYearData': _1y_data.reset_index().to_dict('records'),
                'fiveYearData': _5y_data.reset_index().to_dict('records'),
            }

            return complete_ticker_data
            
        except:
            return('unknown ticker')
        
        
    return finance
        