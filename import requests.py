import requests
import pandas as pd
import matplotlib.pyplot as plt

# CONFIGURAÇÕES
TOKEN = "SEU_TOKEN_AQUI"  # Cole aqui o token criado
OWNER = "seu-usuario"     # Ex: danielaleao83
REPO = "seu-repositorio"  # Ex: DanielaPortifolio

# Cabeçalhos da API
headers = {"Authorization": f"token {TOKEN}"}

# Função para pegar visualizações
def get_views():
    url = f"https://api.github.com/repos/{OWNER}/{REPO}/traffic/views"
    r = requests.get(url, headers=headers)
    return r.json()["views"]

# Função para pegar clones
def get_clones():
    url = f"https://api.github.com/repos/{OWNER}/{REPO}/traffic/clones"
    r = requests.get(url, headers=headers)
    return r.json()["clones"]

# Pegar dados
views = get_views()
clones = get_clones()

# Criar DataFrame
df_views = pd.DataFrame(views)
df_clones = pd.DataFrame(clones)

# Gráfico de Views
plt.figure(figsize=(10,5))
plt.plot(df_views["timestamp"], df_views["count"], marker="o", label="Views")
plt.plot(df_views["timestamp"], df_views["uniques"], marker="s", label="Visitantes únicos")
plt.title("Acessos ao repositório")
plt.xlabel("Data")
plt.ylabel("Quantidade")
plt.legend()
plt.grid()
plt.savefig("views.png")
plt.close()

# Gráfico de Clones
plt.figure(figsize=(10,5))
plt.plot(df_clones["timestamp"], df_clones["count"], marker="o", label="Clones")
plt.plot(df_clones["timestamp"], df_clones["uniques"], marker="s", label="Clonadores únicos")
plt.title("Clones do repositório")
plt.xlabel("Data")
plt.ylabel("Quantidade")
plt.legend()
plt.grid()
plt.savefig("clones.png")
plt.close()

print("✅ Gráficos gerados: views.png e clones.png")
