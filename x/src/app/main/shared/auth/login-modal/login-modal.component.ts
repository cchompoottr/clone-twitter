import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ModalComponent } from '../../components/modal.component';
import { ModelService } from '../../services/model/model.service';


@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public modalService: ModelService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  getInputClasses(fiedName: string) {
    return {
      'w-full': true,
      'p-4': true,
      'text-lg': true,
      'bg-white': true,
      'border-2': true,
      'border-neutral-200': true,
      'rounded-md': true,
      'outline-none': true,
      'text-black': true,
      'focus:border-twitter-blue': true,
      'focus:border-red-500': this.loginForm.get(fiedName)?.invalid && this.loginForm.get(fiedName)?.touched,
      'transition': true,
      'disabled:bg-neutral-400': true,
      'disabled:opacity-70': true,
      'disabled:cursor-not-allowed': true
    }
  }

  signUp(): void {
    this.modalService.isLoginModelOpen.set(false);
    this.modalService.isRegisterModelOpen.set(true);
  }

  handleSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
    }
  }
}
