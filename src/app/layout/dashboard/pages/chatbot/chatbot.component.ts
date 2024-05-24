import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent{
  messages: any[] = [];
  userMessage: string = '';
  typingMessage: string = '';
  options: string[] = [];

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.messages.push({ text: this.userMessage, type: 'user' });
      this.userMessage = '';
      this.simulateTyping('Hola Mi nombre es india mi trabajo es enviar tu error de cualquiera de los servicios.\n¿Cual de ellos te esta fallando? ⬇clickealo⬇')
      setTimeout(()=>{
        this.provideOptions(['Profesores', 'Alumnos', 'Tecnologias', 'Aulas']);
      },13200);
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
        this.messages.push({ text: this.typingMessage, type: 'bot' });
        this.typingMessage = '';
      }
    }, 100); // Ajusta el intervalo para cambiar la velocidad de escritura
  }

  provideOptions(options: string[]) {
    this.options = options;
  }

  selectOption(option: string) {
    this.messages.push({ text: option, type: 'user' });
    this.options = [];
    this.simulateTyping(`Has seleccionado ${option}.En estos momentos mande la orden para que analizen donde se encuenta el error en breve te mandare cuando lo solucionemos \ngracias por avisarnos...`);
    // Aquí puedes agregar lógica para cambiar las preguntas basadas en la opción seleccionada
  }
}
