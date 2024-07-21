import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  
  messages: { sender: string, text: string }[] = [];
  userInput: string = '';
  isChatOpen: boolean = false;
  isSending: boolean = false;
  

  

  constructor() {}

  ngOnInit(): void {}

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      setTimeout(() => this.scrollToBottom(), 0);
    }
  }

 
  sendMessage(): void {
    if (this.isSending || !this.userInput.trim()) return;

    this.isSending = true;
    const messageText = this.userInput.trim();
    this.messages.push({ sender: 'user', text: messageText });
    this.userInput = '';

    fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender: 'user', message: messageText }),
    })
    .then(response => response.json())
    .then((data: any[]) => {
      if (Array.isArray(data)) {
        data.forEach((message: { text: string }) => {
          this.messages.push({ sender: 'bot', text: message.text });
        });
        this.scrollToBottom();
      } else {
        console.error('La respuesta del servidor no es un array');
      }
      this.isSending = false;
    })
    .catch(error => {
      console.error('Error:', error);
      this.isSending = false;
    });
  }

  scrollToBottom(): void {
    if (this.chatContainer && this.chatContainer.nativeElement) {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }
  }
}