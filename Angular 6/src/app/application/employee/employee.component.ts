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
  selectedEmployee: number;
  employeeCard: employeeCard;
  currentIndex: number = 0;
  previousIndex: number = 0;
  nextIndex: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.dataService.getEmployees().subscribe(res => {
      this.employees = res;
      if (this.employees.length > 0) {
        this.selectedEmployee = _.first(this.employees).personID;
        this.setRoloDex();
        this.loadEmployeeCard();
      }
    });
  }
  loadEmployeeCard() {
    this.dataService.getEmployeeCard(this.selectedEmployee).subscribe(res => {
      this.employeeCard = res;
    });
  }
  setRoloDex() {
    this.currentIndex = _.findIndex(this.employees, { personID: this.selectedEmployee });
    let isFirst: boolean = this.currentIndex == 0 ? true : false;
    let isLast: boolean = this.currentIndex == this.employees.length - 1 ? true : false;
    if (isFirst) {
      this.previousIndex = 0;
    } else {
      this.previousIndex = _.nth(this.employees, this.currentIndex - 1).personID;
    }
    if (isLast) {
      this.nextIndex = 0;
    } else {
      this.nextIndex = _.nth(this.employees, this.currentIndex + 1).personID;
    }
  }
  onChange(selectedValue: string) {
    this.selectedEmployee = parseInt(selectedValue);
    this.setRoloDex();
    this.loadEmployeeCard();
  }
}
