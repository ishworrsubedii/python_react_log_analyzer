import re


class LogParserService:
    def __init__(self, log_file_path):
        self.log_file_path = log_file_path

    def extract_ip_address(self, log_line):
        """
        Extracts IP address from the log line

        :return: IP address
        """
        parts = log_line.split('"')
        ip_address = parts[0].split()[0]

        return ip_address

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
        time_pattern = r'\b\d{2}:\d{2}:\d{2}\b'
        match = re.search(time_pattern, log_line)
        if match:
            return match.group()
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
