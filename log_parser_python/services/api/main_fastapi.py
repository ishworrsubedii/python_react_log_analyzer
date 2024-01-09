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
    time_info_list = log_parser_example.time_info()
    return {"message": (time_info_list)}


@app.get("/country-info")
async def get_ip_counts_async():
    global country_counts
    country_info = log_parser_example.country_info()
    country_counts.update(country_info)
    return {"message": country_counts}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
