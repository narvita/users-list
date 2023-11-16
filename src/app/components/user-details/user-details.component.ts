import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export interface UserDataInterface {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: {
    title: string;
    key_skill: string;
  };
  address: {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };
  credit_card: { cc_number: string };
  subscription: {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  };
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  elementId: number | undefined;

  form!: FormGroup;

  userData!: UserDataInterface;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.elementId = +params['id'];
    });

    this.form = this.buildForm();

    if (this.elementId) {
      const user = this.userService.getUser(this.elementId);
      this.userData = user;
      this.form.patchValue(user);
    }
  }

  onSubmit(form: FormGroup) {
    console.log('updated', form.value);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      id: [{ value: '', disabled: true }, Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      avatar: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
