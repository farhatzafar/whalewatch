import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box'; // Import Box to wrap ImageList
import Typography from '@mui/material/Typography'; // Import Typography for the title

// Import local images
import whale1 from '../assets/gallery/gall1.jpg';
import whale2 from '../assets/gallery/gall2.jpg';
import whale3 from '../assets/gallery/gall3.jpg';
import whale4 from '../assets/gallery/gall4.jpg';
import whale5 from '../assets/gallery/gall5.jpg';
import whale6 from '../assets/gallery/gall6.jpg';
import whale7 from '../assets/gallery/gall7.jpg';
import whale8 from '../assets/gallery/gall8.jpg';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',    // Stack items vertically
        justifyContent: 'flex-start', // Start from the top
        alignItems: 'center',
        minHeight: '90vh',           // Full screen height
        overflow: 'hidden',
        textAlign: 'center',         // Center the text
        marginTop: '64px',           // Push content down to account for AppBar height (64px is default height for AppBar in MUI)
        
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"               // Use a large heading
        sx={{
          marginBottom: 3,         // Space between title and gallery
          fontWeight: 'bold',      // Bold text for emphasis
          letterSpacing: 1,        // Space out letters for style
        }}
      >
        Gallery
      </Typography>

      {/* ImageList */}
      <ImageList
        sx={{
          width: '80%',            // Adjust width as needed
          height: 'auto',
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
const itemData = [
  {
    img: whale1,
    title: 'Breach1',
    rows: 2,
    cols: 2,
  },
  {
    img: whale2,
    title: 'Tail1',
  },
  {
    img: whale3,
    title: 'Flip1',
  },
  {
    img: whale4,
    title: 'Orca1',
    cols: 2,
  },
  {
    img: whale5,
    title: 'Flip2',
    cols: 2,
  },
  {
    img: whale6,
    title: 'Orca2',
    rows: 2,
    cols: 2,
  },
  {
    img: whale7,
    title: 'Tail2',
  },
  {
    img: whale8,
    title: 'Breach2',
  },
];
