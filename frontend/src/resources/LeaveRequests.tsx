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
const LeaveRequestsTitle = () => {
  const record = useRecordContext();
  return <span>LeaveRequests {record ? `"${ record.requestID }"` : ""}</span>;
};

export const LeaveRequestsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="requestID" />
<TextField source="employeeID" />
<TextField source="typeOfLeave" />
<DateField source="startDate" />
<DateField source="endDate" />
<TextField source="reason" />
<TextField source="approvalStatus" />
<TextField source="approverUserID" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const LeaveRequestsEdit = () => (
                    <Edit title={<LeaveRequestsTitle />}>
                      <SimpleForm>
                          <TextInput source="requestID"   />
<TextInput source="employeeID"   />
<TextInput source="typeOfLeave"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<TextInput source="reason"   />
<TextInput source="approvalStatus"   />
<TextInput source="approverUserID"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const LeaveRequestsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="requestID"   />
<TextInput source="employeeID"   />
<TextInput source="typeOfLeave"   />
<DateInput source="startDate"   />
<DateInput source="endDate"   />
<TextInput source="reason"   />
<TextInput source="approvalStatus"   />
<TextInput source="approverUserID"   />
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

    ];


