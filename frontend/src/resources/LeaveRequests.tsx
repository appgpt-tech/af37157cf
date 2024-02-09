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
const LeaveRequestsTitle = () => {
  const record = useRecordContext();
  return <span>LeaveRequests {record ? `"${ record.requestId }"` : ""}</span>;
};

export const LeaveRequestsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="requestId" />
<ReferenceField source="employeeId" reference="Employees"  />
<TextField source="typeOfLeave" />
<DateField source="startDate" />
<DateField source="endDate" />

<TextField source="approvalStatus" />
<ReferenceField source="approverUserId" reference="Users"  /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const LeaveRequestsEdit = () => (
                    <Edit title={<LeaveRequestsTitle />}>
                      <SimpleForm>
                          <TextInput source="requestId"   />
<ReferenceInput source="employeeId"  reference="Employees"   />
<TextInput source="typeOfLeave"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<TextInput source="reason"   />
<TextInput source="approvalStatus"   />
<ReferenceInput source="approverUserId"  reference="Users"   />
                      </SimpleForm>
                    </Edit>
                  );

export const LeaveRequestsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="requestId"   />
<ReferenceInput source="employeeId"  reference="Employees"   />
<TextInput source="typeOfLeave"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<TextInput source="reason"   />
<TextInput source="approvalStatus"   />
<ReferenceInput source="approverUserId"  reference="Users"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="employeeId" label="employeeId" reference="Employees"   alwaysOn/>,
,
,
,
,
,
<ReferenceInput source="approverUserId" label="approverUserId" reference="Users"   alwaysOn/>,

    ];


