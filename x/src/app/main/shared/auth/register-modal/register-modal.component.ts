import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../components/modal.component';
import { ModelService } from '../../services/model/model.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'] 
})
export class RegisterModalComponent implements OnInit {
  registerForm!: FormGroup; 

  constructor(public modalService: ModelService, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  getInputClasses(fieldName: string) {
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
      'focus:border-red-500': this.registerForm.get(fieldName)?.invalid && this.registerForm.get(fieldName)?.touched,
      'transition': true,
      'disabled:bg-neutral-400': true,
      'disabled:opacity-70': true,
      'disabled:cursor-not-allowed': true
    };
  }

  login(): void {
    this.modalService.isLoginModelOpen.set(true);
    this.modalService.isRegisterModelOpen.set(false);
  }

  handleSubmit(): void {
    const value = this.registerForm.value;
    console.log(value);
    this.authService.register(value).then(_res => {
      this.modalService.isRegisterModelOpen.set(false)
    })
  }
}
