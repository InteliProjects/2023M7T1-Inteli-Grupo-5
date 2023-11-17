import requests

class CEP:
    def __init__(self, cep: str, state: str, city: str, neighborhood: str, street: str, provider: str):
        self.cep = cep
        self.state = state
        self.city = city
        self.neighborhood = neighborhood
        self.street = street
        self.provider = provider

    def __str__(self):
        return f"CEP: {self.cep}, State: {self.state}, City: {self.city}, Neighborhood: {self.neighborhood}, Street: {self.street}, Provider: {self.provider}"

    def to_dict(self):
        return {
            "cep": self.cep,
            "state": self.state,
            "city": self.city,
            "neighborhood": self.neighborhood,
            "street": self.street,
            "provider": self.provider
        }

class BRAZIL_API_PROVIDER:
    def __init__(self):
        self.api = "https://brasilapi.com.br/api/cep/v1/"
        self.api_name = "BRAZIL_API_PROVIDER"

    def get_cep(self, cep: str) -> str:
        try:
            response = requests.get(self.api + cep)
            response.raise_for_status()
            json_obj = response.json()
            cep = CEP(cep, json_obj["state"], json_obj["city"], json_obj["neighborhood"], json_obj["street"], self.api_name)
            return cep
        except Exception as e:
            raise Exception(str(e))


class VIA_CEP_PROVIDER:
    def __init__(self):
        self.api = "https://viacep.com.br/ws/"
        self.api_name = "VIA_CEP_PROVIDER"

    def get_cep(self, cep: str) -> str:
        try:
            response = requests.get(self.api + cep + "/json/")
            response.raise_for_status()
            json_obj = response.json()
            cep = CEP(cep, json_obj["uf"], json_obj["localidade"], json_obj["bairro"], json_obj["logradouro"], self.api_name)
            return cep
        except Exception as e:
            raise Exception(str(e))