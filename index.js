import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llama3',
  messages: [{ 
    role: 'user', 
    content: 'hola que tal?'
    }]
})

console.log(response.message.content)