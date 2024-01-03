from datetime import datetime


class LogParserService:
    def __init__(self, log_file):
        self.log_file = log_file

    def extract_ip_address(self, log_line):
        """
        Extracts IP address from the log line

        :param log_line: log line to be parsed
        :return: IP address
        """
        parts = log_line.split('"')
        ip_address = parts[0].split()[0]

        return ip_address

    def extract_os_info(self, log_line):
        """
        Extracts operating system information from the log line

        :param log_line: log line to be parsed
        :return: operating system information
        """
        parts = log_line.split('"')
        user_agent = parts[-2]

        os_info = user_agent.split('(')[1].split(')')[0]

        return os_info

    def extract_browser_info(self, log_line):
        """
        Extracts browser information from the log line

        :param log_line: log line to be parsed
        :return: browser information
        """
        parts = log_line.split('"')
        user_agent = parts[-2]

        browser_info = user_agent.split('(')[0].strip()

        return browser_info

    def group_by_time(self, log_lines):
        """
        Groups the log lines by time

        :param log_lines: list of log lines
        :return: time grouped data
        """
        time_data = {}

        for line in log_lines:
            timestamp = line.split('[')[1].split()[0]
            time = datetime.strptime(timestamp, '%d/%b/%Y:%H:%M:%S')
            time_str = time.strftime('%H:%M:%S')

            if time_str not in time_data:
                time_data[time_str] = []

            ip_address = self.extract_ip_address(line)
            os_info = self.extract_os_info(line)
            browser_info = self.extract_browser_info(line)

            time_data[time_str].append((ip_address, os_info, browser_info))

        return time_data

    def read_log_file(self):
        """
        Reads the log file and returns the list of lines

        :return: list of lines in the file
        """
        with open(self.log_file, 'r') as file:
            log_lines = file.readlines()
        return log_lines


if __name__ == '__main__':
    log_file_path = '/path/to/your/logfile.log'  # Update with your log file path
    log_parser = LogParserService(log_file=log_file_path)

    log_lines = log_parser.read_log_file()

    grouped_data = log_parser.group_by_time(log_lines)

    for time, data in grouped_data.items():
        print(f"Time: {time}")
        for entry in data:
            print(f"Time: {time}, IP Address: {entry[0]}, Operating System: {entry[1]}, Browser: {entry[2]}")
        print()
