import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { employee, employeeCard } from "../../shared/entity/employee";
import * as _ from "lodash";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styles: []
})
export class EmployeeComponent implements OnInit {
  employees: employee[];
  selectedEmployee: employee;
  employeeCard: employeeCard;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.dataService.getEmployees().subscribe(res => {
      this.employees = res;
      if (this.employees.length > 0) {
        this.selectedEmployee = _.first(this.employees);
        this.loadEmployeeCard();
      }
    });
  }
  loadEmployeeCard() {
    this.dataService.getEmployeeCard(this.selectedEmployee.personID).subscribe(res => {
      this.employeeCard = res;
    });
  }

  onChange() {
    this.loadEmployeeCard();
    // this.selectedCountry = null;
    // for (var i = 0; i < this.countries.length; i++)
    // {
    //   if (this.countries[i].id == countryId) {
    //     this.selectedCountry = this.countries[i];
    //   }
    // }
  }
}
