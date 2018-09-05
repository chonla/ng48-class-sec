import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UrlValidator {
  static validate(control: AbstractControl): ValidationErrors | null {
    const url: string = String(control.value);
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return null;
    }
    return { 'url': 'เฮ้ยยยย ไม่ใช่ url นี่นา' };
  }
}
