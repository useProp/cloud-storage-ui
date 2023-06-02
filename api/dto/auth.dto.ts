export interface LoginFormDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  token: string;
}

export type RegistrationFormDto = LoginFormDto & { fullName: string };
export type RegistrationResponseDto = LoginResponseDto;

export interface User {
  id: number;
  email: string;
  fullName: string;
}