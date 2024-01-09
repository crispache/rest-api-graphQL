import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent, SelectComponent } from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  genders: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, genders, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <img src={character.image} height={150} width={150} alt='Foto del personaje' />
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="species" label="Specie" />
          <SelectComponent name="gender" label="Gender" items={genders} />
          <TextFieldComponent
            name="bestSentences"
            label="Best sentences"
            multiline
            minRows={3}
            maxRows={6}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
