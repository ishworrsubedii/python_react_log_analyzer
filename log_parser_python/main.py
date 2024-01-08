"""
Created By: ishwor subedi
Date: 2024-01-08
"""
import uvicorn

from services.api.main_fastapi import app

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
