import uvicorn
from fastapi import FastAPI, HTTPException
import requests
from collections import Counter

from log_parser_python.example.log_parser_example import LogParserServiceExample

app = FastAPI()
log_file_path = '/home/ishwor/Documents/c++/distributed parallel/individual_react/individual_dpc/log_parser_python/resources/logfiles.log'
log_parser_example = LogParserServiceExample(log_file_path)

os_info_counter = Counter()
browser_info_counter = Counter()
time_info_counter = Counter()


@app.post("/os-info")
async def get_os_info():
    global os_info_counter
    os_info_list = log_parser_example.os_info()
    os_info_counter.update(os_info_list)
    return {"message": os_info_counter}


@app.post("/browser-info")
async def get_browser_info():
    global browser_info_counter
    browser_info_list = log_parser_example.browser_info()
    browser_info_counter.update(browser_info_list)
    return {"message": browser_info_counter}


@app.post("/time-info")
async def get_time_info():
    global time_info_counter
    time_info_list = log_parser_example.time_info()
    time_info_counter.update(time_info_list)
    return {"message": time_info_counter}


unique_ip_country = {}
country_counts = Counter()


@app.get("/ip-info")
async def get_ip_info():
    global country_counts, unique_ip_country

    ip_info_list = log_parser_example.ip_info()
    unique_ips = set(ip_info_list)  # Get unique IP addresses
    # unique_country_counts = Counter()
    #
    # for ip_address in unique_ips:
    #     url = f"http://ip-api.com/csv/{ip_address}?fields=country"
    #     response = requests.get(url)
    #
    #     if response.status_code == 200:
    #         country = response.text.strip()
    #         unique_ip_country[ip_address] = country  # Assign country to IP
    #         unique_country_counts[country] += 1  # Count occurrences of each country for unique IPs
    #     else:
    #         raise HTTPException(status_code=response.status_code, detail="Failed to fetch IP information")
    #
    # country_counts.update(unique_country_counts)  # Update overall country count

    return {"unique_ip_count": (unique_ips)}


@app.get("/country-counts")
async def get_country_counts():
    global country_counts
    return {"country_counts": dict(country_counts)}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
