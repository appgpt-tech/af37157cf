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
  PasswordInput,
} from "react-admin"
import { useRecordContext } from "react-admin"
import { Grid } from "@mui/material"
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = "********"

  return <span>{maskedPassword}</span>
}
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
)
const SetsTitle = () => {
  const record = useRecordContext()
  return <span>Sets {record ? `"${record.setName}"` : ""}</span>
}

export const SetsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="setName" />
      <DateField source="releaseDate" />
      <NumberField source="totalCards" />
      <EditButton />
    </DatagridConfigurable>
  </List>
)

export const SetsEdit = () => (
  <Edit title={<SetsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="setName" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="releaseDate" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="totalCards" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
)

export const SetsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="setName" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="releaseDate" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="totalCards" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
)

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
]
