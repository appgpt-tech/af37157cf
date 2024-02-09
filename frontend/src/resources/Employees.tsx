import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const EmployeesTitle = () => {
  const record = useRecordContext();
  return <span>Employees {record ? `"${ record.employeeId }"` : ""}</span>;
};

export const EmployeesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="employeeId" />
<TextField source="firstName" />
<TextField source="lastName" />
<TextField source="middleName" />
<DateField source="dateOfBirth" />
<TextField source="gender" />
<TextField source="nationality" />
<TextField source="maritalStatus" />
<EmailField source="email" />
<TextField source="phoneNumber" />
<TextField source="street" />
<TextField source="city" />
<TextField source="state" />
<TextField source="zipCode" />
<TextField source="country" />
<TextField source="departmentTeam" />
<TextField source="positionRole" />
<TextField source="managerSupervisor" />
<TextField source="employmentType" />
<DateField source="startDate" />
<DateField source="endDate" />
<NumberField source="salaryInformation" />
<ImageField source="profilePicture" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const EmployeesEdit = () => (
                    <Edit title={<EmployeesTitle />}>
                      <SimpleForm>
                          <TextInput source="employeeId"   />
<TextInput source="firstName"   />
<TextInput source="lastName"   />
<TextInput source="middleName"   />
<DateInput source="dateOfBirth"   />
<TextInput source="gender"   />
<TextInput source="nationality"   />
<TextInput source="maritalStatus"   />
<TextInput source="email"   />
<TextInput source="phoneNumber"   />
<TextInput source="street"   />
<TextInput source="city"   />
<TextInput source="state"   />
<TextInput source="zipCode"   />
<TextInput source="country"   />
<TextInput source="departmentTeam"   />
<TextInput source="positionRole"   />
<TextInput source="managerSupervisor"   />
<TextInput source="employmentType"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<NumberInput source="salaryInformation"   />
<ImageInput source="profilePicture"   />
                      </SimpleForm>
                    </Edit>
                  );

export const EmployeesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="employeeId"   />
<TextInput source="firstName"   />
<TextInput source="lastName"   />
<TextInput source="middleName"   />
<DateInput source="dateOfBirth"   />
<TextInput source="gender"   />
<TextInput source="nationality"   />
<TextInput source="maritalStatus"   />
<TextInput source="email"   />
<TextInput source="phoneNumber"   />
<TextInput source="street"   />
<TextInput source="city"   />
<TextInput source="state"   />
<TextInput source="zipCode"   />
<TextInput source="country"   />
<TextInput source="departmentTeam"   />
<TextInput source="positionRole"   />
<TextInput source="managerSupervisor"   />
<TextInput source="employmentType"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<NumberInput source="salaryInformation"   />
<ImageInput source="profilePicture"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,

    ];


