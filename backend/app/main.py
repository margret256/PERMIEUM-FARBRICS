from fastapi import FastAPI

app = FastAPI(
    title="My Project API",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "API is running successfully"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }