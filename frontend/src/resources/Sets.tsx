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
const SetsTitle = () => {
  const record = useRecordContext();
  return <span>Sets {record ? `"${ record.setId }"` : ""}</span>;
};

export const SetsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="setId" />
<TextField source="setName" />
<DateField source="releaseDate" />
<NumberField source="totalCards" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const SetsEdit = () => (
                    <Edit title={<SetsTitle />}>
                      <SimpleForm>
                          <NumberInput source="setId"   />
<TextInput source="setName"   />
<DateInput source="releaseDate"   />
<NumberInput source="totalCards"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const SetsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="setId"   />
<TextInput source="setName"   />
<DateInput source="releaseDate"   />
<NumberInput source="totalCards"   />
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

    ];


