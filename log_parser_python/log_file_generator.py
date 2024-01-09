"""
Created By: ishwor subedi
Date: 2024-01-09
"""
import time
import random
from faker import Faker

fake = Faker()

def str_time_prop(start, end, prop):
    stime = time.mktime(time.strptime(start, '%d/%b/%Y:%H:%M:%S %z'))
    etime = time.mktime(time.strptime(end, '%d/%b/%Y:%H:%M:%S %z'))
    ptime = stime + prop * (etime - stime)
    return time.strftime('%d/%b/%Y:%H:%M:%S %z', time.localtime(ptime))

def random_date(start, end, prop):
    return str_time_prop(start, end, prop)

dictionary = {
    'request': ['GET', 'POST', 'PUT', 'DELETE'],
    'endpoint': ['/usr', '/usr/admin', '/usr/admin/developer', '/usr/login', '/usr/register'],
    'statuscode': ['303', '404', '500', '403', '502', '304', '200'],
    'username': ['james', 'adam', 'eve', 'alex', 'smith', 'isabella', 'david', 'angela', 'donald', 'hilary'],
    'ua': [
        'Chrome/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
        'Brave/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/94.0.4606.71 Safari/537.36',
        'Brave/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Brave Edg/94.0.992.38 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edg/94.0.992.38',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edg/94.0.992.38 Chrome/94.0.992.38 Safari/537.36',
        'Brave/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/94.0.4606.71 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/94.0.4606.71 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Edg/94.0.992.38 Safari/537.36',
        'Mozilla/5.0 (Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
        'Brave/5.0 (Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/94.0.4606.71 Safari/537.36',
        'Chrome/5.0 (Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Edg/94.0.992.38 Safari/537.36',
        'Mozilla/5.0 (Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/94.0.4606.71 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Edg/94.0.992.38 Safari/537.36',
    ],
    'referrer': ['-', fake.uri()]
}

with open("log-analyzer/logfiles.log", "w") as f:
    for _ in range(1, 10000):
        f.write('%s - - [%s] "%s %s HTTP/1.0" %s %s "%s" "%s" %s\n' %
                (fake.country(),
                 random_date("01/Jan/2018:12:00:00 +0530", "01/Jan/2024:12:00:00 +0530", random.random()),
                 random.choice(dictionary['request']),
                 random.choice(dictionary['endpoint']),
                 random.choice(dictionary['statuscode']),
                 str(int(random.gauss(5000, 50))),  # fix typo: random.gues -> random.gauss
                 random.choice(dictionary['referrer']),
                 random.choice(dictionary['ua']),
                 random.randint(1, 5000)))