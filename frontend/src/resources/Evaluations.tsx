// Source code generated by AppGPT (www.appgpt.tech)

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
import { Grid } from '@mui/material';
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
const EvaluationsTitle = () => {
  const record = useRecordContext();
  return <span>Evaluations {record ? `"${ record.reviewId }"` : ""}</span>;
};

export const EvaluationsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="reviewId" />
<ReferenceField source="employeeId" reference="employees"  />
<DateField source="periodStart" />
<DateField source="periodEnd" />




<NumberField source="overallRating" />
<EditButton />

        </DatagridConfigurable>
      </List>
      );

export const EvaluationsEdit = () => (
                    <Edit title={<EvaluationsTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<NumberInput source="reviewId"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="employeeId"  reference="employees"   /></Grid>
<Grid item xs={4}>
<DateInput source="periodStart"   /></Grid>
<Grid item xs={4}>
<DateInput source="periodEnd"   /></Grid>
<Grid item xs={4}>
<TextInput source="goalsObjectives"   /></Grid>
<Grid item xs={4}>
<TextInput source="achievements"   /></Grid>
<Grid item xs={4}>
<TextInput source="improvementAreas"   /></Grid>
<Grid item xs={4}>
<TextInput source="feedbackFromSupervisor"   /></Grid>
<Grid item xs={4}>
<NumberInput source="overallRating"   /></Grid>
<Grid item xs={4}>
<TextInput source="recommendations"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const EvaluationsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<NumberInput source="reviewId"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="employeeId"  reference="employees"   /></Grid>
<Grid item xs={4}>
<DateInput source="periodStart"   /></Grid>
<Grid item xs={4}>
<DateInput source="periodEnd"   /></Grid>
<Grid item xs={4}>
<TextInput source="goalsObjectives"   /></Grid>
<Grid item xs={4}>
<TextInput source="achievements"   /></Grid>
<Grid item xs={4}>
<TextInput source="improvementAreas"   /></Grid>
<Grid item xs={4}>
<TextInput source="feedbackFromSupervisor"   /></Grid>
<Grid item xs={4}>
<NumberInput source="overallRating"   /></Grid>
<Grid item xs={4}>
<TextInput source="recommendations"   /></Grid>
                                      </Grid>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="employeeId" label="employeeId" reference="employees"   alwaysOn/>,
,
,
,
,
,
,
,
,

    ];


