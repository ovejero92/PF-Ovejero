import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent{
  messages: string[] = [];
  userMessage: string = '';
  typingMessage: string = '';

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.messages.push(this.userMessage);
      this.userMessage = '';
      this.simulateTyping('This is a simulated typing response from the chatbot.');
    }
  }

  simulateTyping(message: string) {
    this.typingMessage = '';
    let index = 0;

    const typingInterval = setInterval(() => {
      this.typingMessage += message[index];
      index++;

      if (index >= message.length) {
        clearInterval(typingInterval);
        this.messages.push(this.typingMessage);
        this.typingMessage = '';
      }
    }, 100); // Ajusta el intervalo para cambiar la velocidad de escritura
  }
}
