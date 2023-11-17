from fastapi import FastAPI, HTTPException

from cep_provider import BRAZIL_API_PROVIDER, VIA_CEP_PROVIDER

app = FastAPI()

# Define the external APIs to fetch CEP from
providers = [BRAZIL_API_PROVIDER(), VIA_CEP_PROVIDER()]

# Fetches CEP from the given API
async def fetch_cep(api, cep: str):
    try:
        cep_res = api.get_cep(cep)
        return cep_res
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to fetch CEP
@app.get("/cep/{cep}")
async def get_cep(cep: str):
    for provider in providers:
        try:
            cep_res = await fetch_cep(provider, cep)
            return cep_res.to_dict()
        except Exception as e:
            print(str(e))
            continue
    raise HTTPException(status_code=500, detail="No provider available")

# Health check endpoint
@app.get("/health")
async def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
