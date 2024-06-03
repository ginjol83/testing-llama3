# Ollama Chat Bot

Este repositorio contiene un simple chat bot construido con la biblioteca `ollama`.

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando:

```bash
npm install ollama
```

## Uso
El código en index.js inicia una conversación con el bot, enviando el mensaje "hola que tal?".

```bash
import ollama from 'ollama'

const response = await ollama.chat({
    model: 'llama3',
    messages: [{ 
        role: 'user', 
        content: 'hola que tal?'
        }]
})

console.log(response.message.content)
```

El bot responde al mensaje y la respuesta se imprime en la consola.

## Contribuir
Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias de mejora.

## Licencia
Este proyecto está licenciado bajo los términos de la licencia MIT.