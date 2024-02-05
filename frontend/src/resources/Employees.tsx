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
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
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
  return <span>Employees {record ? `"${ record.employeeID }"` : ""}</span>;
};

export const EmployeesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="employeeID" />
<TextField source="firstName" />
<TextField source="lastName" />
<TextField source="middleName" />
<DateField source="dateOfBirth" />
<TextField source="gender" />
<TextField source="nationality" />
<TextField source="maritalStatus" />
<TextField source="contactInformation" />
<TextField source="address" />
<TextField source="departmentTeam" />
<TextField source="positionRole" />
<TextField source="managerSupervisor" />
<TextField source="employmentType" />
<DateField source="startDate" />
<DateField source="endDate" />
<TextField source="salaryInformation" />
<TextField source="profilePicture" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const EmployeesEdit = () => (
                    <Edit title={<EmployeesTitle />}>
                      <SimpleForm>
                          <TextInput source="employeeID"   />
<TextInput source="firstName"   />
<TextInput source="lastName"   />
<TextInput source="middleName"   />
<DateInput source="dateOfBirth"   />
<TextInput source="gender"   />
<TextInput source="nationality"   />
<TextInput source="maritalStatus"   />
<TextInput source="contactInformation"   />
<TextInput source="address"   />
<TextInput source="departmentTeam"   />
<TextInput source="positionRole"   />
<TextInput source="managerSupervisor"   />
<TextInput source="employmentType"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<TextInput source="salaryInformation"   />
<TextInput source="profilePicture"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const EmployeesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="employeeID"   />
<TextInput source="firstName"   />
<TextInput source="lastName"   />
<TextInput source="middleName"   />
<DateInput source="dateOfBirth"   />
<TextInput source="gender"   />
<TextInput source="nationality"   />
<TextInput source="maritalStatus"   />
<TextInput source="contactInformation"   />
<TextInput source="address"   />
<TextInput source="departmentTeam"   />
<TextInput source="positionRole"   />
<TextInput source="managerSupervisor"   />
<TextInput source="employmentType"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<TextInput source="salaryInformation"   />
<TextInput source="profilePicture"   />
<NumberInput source="id"   disabled/>
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

    ];


