from concurrent.futures import ThreadPoolExecutor

import uvicorn
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import requests
from collections import Counter

from log_parser_python.example.log_parser_example import LogParserServiceExample

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Add the origin of your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

log_file_path = '/home/ishwor/Documents/c++/distributed parallel/individual_react/individual_dpc/log_parser_python/resources/logfiles.log'
log_parser_example = LogParserServiceExample(log_file_path)

os_info_counter = Counter()
browser_info_counter = Counter()
time_info_counter = Counter()
unique_ips = set(log_parser_example.ip_info()[:40])  # Limit to the first 4000 unique IPs
country_counts = Counter()

@app.get("/os-info")
async def get_os_info():
    global os_info_counter
    os_info_list = log_parser_example.os_info()
    os_info_counter.update(os_info_list)
    return {"message": os_info_counter}


@app.get("/browser-info")
async def get_browser_info():
    global browser_info_counter
    browser_info_list = log_parser_example.browser_info()
    browser_info_counter.update(browser_info_list)
    return {"message": browser_info_counter}


@app.get("/time-info")
async def get_time_info():
    global time_info_counter
    time_info_list = log_parser_example.time_info()
    time_info_counter.update(time_info_list)
    return {"message": dict(time_info_counter)}

def fetch_country(ip_address):
    try:
        url = f"http://ip-api.com/csv/{ip_address}?fields=country"
        response = requests.get(url)
        response.raise_for_status()  # Raise an HTTPError for bad responses
        country = response.text.strip()
        country_counts[country] += 1
    except requests.exceptions.RequestException as e:
        print(f"Error processing IP {ip_address}: {e}")
    except Exception as e:
        print(f"Unexpected error processing IP {ip_address}: {e}")

@app.get("/ip-counts")
async def get_ip_counts(max_threads: int = 10):
    with ThreadPoolExecutor(max_threads) as executor:
        executor.map(fetch_country, unique_ips)

    return dict(country_counts)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
