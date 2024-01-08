"""
Created By: ishwor subedi
Date: 2024-01-04
"""
from functools import lru_cache
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from collections import Counter
import aiohttp
import asyncio

from log_parser_python.example.log_parser_example import LogParserServiceExample

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

log_file_path = '/home/ishwor/Documents/c++/distributed parallel/individual_react/individual_dpc/log_parser_python/resources/logfiles.log'
log_parser_example = LogParserServiceExample(log_file_path)

os_info_counter = Counter()
browser_info_counter = Counter()
time_info_counter = Counter()
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



@lru_cache(maxsize=None)
async def fetch_country_async(ip_address, session, max_retries=100, delay=1):
    for attempt in range(max_retries):
        try:
            url = f"http://ip-api.com/csv/{ip_address}?fields=country"
            async with session.get(url) as response:
                response.raise_for_status()
                country = await response.text()
                country=country.split('\n')[0]
                country_counts[country] += 1
                break
        except aiohttp.ClientError as e:
            print(f"Error processing IP {ip_address}: {e}")
        except Exception as e:
            print(f"Unexpected error processing IP {ip_address}: {e}")
        await asyncio.sleep(delay) 


@app.get("/ip-counts")
async def get_ip_counts_async():
    max_connections = 100
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(limit_per_host=max_connections)) as session:
        tasks = [fetch_country_async(ip, session) for ip in unique_ips]
        await asyncio.gather(*tasks)

    return dict(country_counts)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
