"""
Created By: ishwor subedi
Date: 2024-01-05
"""

import multiprocessing
from log_parser_python.services.log_parser.log_parser_service import LogParserService


class LogParserServiceExample:
    def __init__(self, log_file_path):
        self.log_parser = LogParserService(log_file_path)
        self.log_lines = self.log_parser.read_log_file()
        self.pool = multiprocessing.Pool(processes=multiprocessing.cpu_count())

    def __del__(self):
        self.pool.close()
        self.pool.join()

    def ip_info(self):
        ip_addresses = self.pool.map(self.log_parser.extract_ip_address, self.log_lines)
        return ip_addresses

    def os_info(self):
        os_info = self.pool.map(self.log_parser.extract_os_info, self.log_lines)
        return os_info

    def browser_info(self):
        browser_info = self.pool.map(self.log_parser.extract_browser_info, self.log_lines)
        return browser_info

    def time_info(self):
        time_info = self.pool.map(self.log_parser.extract_times_from_log_file, self.log_lines)
        return time_info


if __name__ == '__main__':
    log_file_path = '/home/ishwor/Documents/c++/distributed parallel/individual_react/individual_dpc/log_parser_python/resources/logfiles.log'
    log_parser_example = LogParserServiceExample(log_file_path)
    ip = log_parser_example.time_info()
    print(ip)
