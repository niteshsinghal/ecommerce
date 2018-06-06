export class employee {
  personID: number;
  employeeName: string;
}
export class employeeCard {
  personID: number;
  employeeID: number;
  ssn: string;
  employeeName: string;
  coCode: string;
  fileNumber: string;
  workedInStateCode: string;
  employeeStatus: string;
  hireDate: string;
  adpEmployeeID: string;
  department: string;
  positionID: string;
}
export class employeePositionCard {
  personID: number;
  positionID: string;
  changeEffectiveOn: string;
  jobTitle: string;
  jobChangeReason: string;
  jobClass: string;
  jobFunction: string;
  shift: string;
  eEOCJobCode: string;
  workerCategory: string;
  fLSACode: string;
  fTE: string;
  scheduledHours: string;
  hoursPeriod: string;
  managementPosition: string;
  nAICSWorkersCompanyCode: string;
  payGrade: string;
  benefitsEligibilityClass: string;
  businessUnit: string;
  homeCostNumber: string;
  homeDepartment: string;
  locationCode: string;
  unionCode: string;
  unionLocal: string;
  corpGroupChangeReason: string;
  reportToPositionID: string;
}
