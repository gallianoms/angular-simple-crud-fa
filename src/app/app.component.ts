import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employees: Employee[] = [
    {
      id: 1, name: 'Salvador J', country: 'USA'
    },
    {
      id: 2, name: 'Test', country: 'USA'
    },
    {
      id: 3, name: 'Test 2', country: 'USA'
    }
  ];

  // Crea instancia de la clase Employee para el doble enlace de datos
  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employees.length + 1;
      this.employees.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee) {
    // console.log(employee);
    this.selectedEmployee = employee;
  }

  deleteEmployee() {
    // La funcion filter lo que hace es guardar en el arreglo todos los empleados que son distintos del que esta seleccionado en los input
    if (confirm('Are you sure to delete it?')) {
      this.employees = this.employees.filter(x => x !== this.selectedEmployee);
    }
    // Limpiar el formulario
    this.selectedEmployee = new Employee();
  }

}
