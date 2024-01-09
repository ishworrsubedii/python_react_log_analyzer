import re
from datetime import datetime


class LogParserService:
    def __init__(self, log_file_path):
        self.log_file_path = log_file_path

    def extract_country(self, log_line):

        """
        Extracts country from the log line.

            :param log_line: Log line to extract country from
            :return: Extracted country information
        """

        country_info = log_line.split(' - ')[0].strip()
        return country_info

    def extract_os_info(self, log_line):
        """
        Extracts operating system information from the log line

        :return: operating system information
        """
        parts = log_line.split('"')
        user_agent = parts[-2]

        os_info = user_agent.split('(')[1].split(')')[0]

        return os_info

    def extract_browser_info(self, log_line):
        """
        Extracts browser information from the log line

        :return: browser information
        """
        parts = log_line.split('"')
        user_agent = parts[-2]

        browser_info = user_agent.split('(')[0].strip()

        return browser_info

    def extract_times_from_log_file(self, log_line):
        datetime_pattern = r'\[(\d{2}/\w+/\d{4}:\d{2}:\d{2}:\d{2} \+\d{4})\]'

        match = re.search(datetime_pattern, log_line)

        if match:
            datetime_str = match.group(1)

            datetime_obj = datetime.strptime(datetime_str, '%d/%b/%Y:%H:%M:%S %z')

            date_str = datetime_obj.strftime('%Y-%m-%d')
            time_str = datetime_obj.strftime('%H:%M:%S')

            return {'date': date_str, 'time': time_str}
        else:
            return None

    def read_log_file(self):
        """
        Reads the log file and returns the list of lines

        :return: list of lines in the file
        """
        with open(self.log_file_path, 'r') as file:
            log_line = file.readlines()
        return log_line
