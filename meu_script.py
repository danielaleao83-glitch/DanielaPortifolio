import http.server
import socketserver
import webbrowser
import threading

PORT = 8000

# Função para iniciar o servidor
def start_server():
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Servidor rodando em http://localhost:{PORT}/index.html")
        httpd.serve_forever()

# Executa o servidor em thread separada
threading.Thread(target=start_server, daemon=True).start()

# Abre o navegador automaticamente
webbrowser.open(f"http://localhost:{PORT}/index.html")

# Mantém o script rodando
input("Pressione Enter para parar o servidor...\n")
