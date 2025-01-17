// src/Cards.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Cards: React.FC = () => {
  const cardsData: CardData[] = [
    { id: 1, title: 'Card 1', description: 'This is card 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Card 2', description: 'This is card 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Card 3', description: 'This is card 3', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <Grid container spacing={3} sx={{ marginTop: 4 }}>
      {cardsData.map((card) => (
        <Grid item xs={12} sm={4} key={card.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={card.imageUrl}
              alt="card image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;