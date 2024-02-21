import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-freedback',
  standalone: true,
  template: `
    <form class="centred form" action="">
      <h2 class="mb">Обратная связь</h2>
      <textarea
        [value]="feedback()"
        class="form-control"
        (input)="handleChange($event)"
      ></textarea>
    </form>
  `,
})
export class FreedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  sendData() {
    this.telegram.sendData({ feedback: this.feedback() });
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Отправить сообщение');
    this.telegram.MainButton.show();
    this.telegram.MainButton.disable();
    this.telegram.MainButton.onClick(this.sendData);
  }

  handleChange(event) {
    this.feedback.set(event.target.value);

    if (this.feedback().trim()) {
      this.telegram.MainButton.enable();
    } else {
      this.telegram.MainButton.disable();
    }
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData);
  }
}
