# Corrigir caminhos no index.html e abrir no navegador

$index = "C:\Users\ntiis_oyq7qq1\OneDrive\Área de Trabalho\DanielaPortifolio\index.html"

if (Test-Path $index) {
    (Get-Content $index) `
    -replace 'Curriculo-Daniela-Profissional.pdf', './assets/Curriculo-Daniela-Profissional.pdf' `
    -replace 'fundo.jpg', './assets/fundo.jpg' `
    | Set-Content $index -Encoding UTF8

    Write-Host "✔ Caminhos corrigidos no index.html"

    # Abre no navegador padrão
    Start-Process $index
} else {
    Write-Host "⚠ index.html não encontrado!"
}
