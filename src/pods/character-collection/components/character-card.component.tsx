import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { CardActionArea } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
  onDetails: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetails } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 350,
        height: 390,
        cursor: 'pointer',
        borderRadius: 2,
        '&:hover': { backgroundColor: '#03AEC7' },
      }}
    >
      <CardActionArea
        sx={{ height: '100%', padding: 2 }}
        onClick={() => onDetails(character.id)}
      >
        <CardHeader
          title={character.name}
          titleTypographyProps={{ fontSize: '22px'}}
          subheader={`${character.species} (${character.gender})`}
        />
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              component="img"
              sx={{
                height: 220,
                width: '100%',
                objectFit: 'cover',
              }}
              image={character.picture}
              alt="Foto del personaje"
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
